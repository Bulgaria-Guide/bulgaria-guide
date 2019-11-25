package pkg

import (
	"net/http"
	"net/http/httputil"
	"net/url"
)

type LoadBalancerRR struct{}

var _ LoadBalancer = LoadBalancerRR{}

func (rr LoadBalancerRR) Route(cluster Cluster) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		targetUrl, err := url.Parse(cluster.GetNode().GetServiceAddress())
		if err != nil {
			w.WriteHeader(http.StatusInternalServerError)
			return
		}
		proxy := httputil.NewSingleHostReverseProxy(targetUrl)
		proxy.ServeHTTP(w, r)
	}
}
