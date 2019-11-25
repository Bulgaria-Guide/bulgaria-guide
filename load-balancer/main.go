package main

import (
	"fmt"
	"net/http"

	"github.com/bulgaria-guide/load-balancer/pkg"
	log "github.com/sirupsen/logrus"
	"github.com/spf13/viper"
)

var (
	defaultEntry *log.Entry
	env          Env
)

func init() {
	viper.SetConfigFile("load-balancer/application.yml")
	if err := viper.ReadInConfig(); err != nil {
		panic(fmt.Errorf("could not read configuration: %s", err))
	}

	if err := viper.Unmarshal(&env); err != nil {
		panic(fmt.Errorf("could not unmarshal configuration: %s", err))
	}

	defaultEntry = initializeLoggerFromEnv(env)
}

func main() {
	cluster := pkg.NewServiceCluster(env.ClusterSettings, defaultEntry)
	lb := pkg.LoadBalancerRR{}
	http.HandleFunc("/", lb.Route(cluster))
	log.Fatal(http.ListenAndServe(fmt.Sprintf(":%s", env.LoadBalancerSettings.Port), nil))
}

func initializeLoggerFromEnv(env Env) *log.Entry {
	entry := log.NewEntry(log.StandardLogger())
	logLevel, err := log.ParseLevel(env.LoggerSettings.Level)
	if err != nil {
		panic(fmt.Errorf("could not parse log level: %s", err))
	}
	entry.Level = logLevel

	switch env.LoggerSettings.Format {
	case "text":
		entry.Logger.Formatter = &log.TextFormatter{}
	case "json":
		entry.Logger.Formatter = &log.JSONFormatter{}
	default:
		panic(fmt.Errorf("unknown logger formatter: %s", env.LoggerSettings.Format))
	}
	if err != nil {
		panic(fmt.Errorf("could not parse log level: %s", err))
	}
	entry.Level = logLevel
	return entry
}
