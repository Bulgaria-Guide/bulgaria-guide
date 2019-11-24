package pkg

import "net/http"

type LoadBalancerRR struct{}

var _ LoadBalancer = LoadBalancerRR{}

func (rr LoadBalancerRR) Route(cluster Cluster) http.Handler {
	return nil
}
