package main

import "github.com/bulgaria-guide/load-balancer/pkg"

type Env struct {
	LoadBalancerSettings *LoadBalancerSettings       `mapstructure:"server"`
	LoggerSettings       *LoggerSettings             `mapstructure:"log"`
	ClusterSettings      *pkg.ServiceClusterSettings `mapstructure:"cluster"`
}

type LoadBalancerSettings struct {
	Port string `mapstructure:"port"`
}

type LoggerSettings struct {
	Level  string `mapstructure:"level"`
	Format string `mapstructure:"format"`
}
