package pkg

import "net/http"

type LoadBalancer interface {
	Route(Cluster) http.HandlerFunc
}

type Node interface {
	GetServiceAddress() string
}

type Cluster interface {
	GetNode() Node
}

type AffinityPolicy interface {
	Apply() int
}
