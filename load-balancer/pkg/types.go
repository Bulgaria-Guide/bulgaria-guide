package pkg

import "net/http"

type LoadBalancer interface {
	Route(Cluster) http.Handler
}

type Node interface {
	GetServiceAddress() string
}

type Cluster interface {
	AddNode(Node) error
	GetNodes() []Node
	SetAffinityPolicy(AffinityPolicy)
}

type AffinityPolicy interface {
	Apply([]Node) Node
}
