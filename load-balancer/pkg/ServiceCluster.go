package pkg

type ServiceCluster struct {
	nodes []Node
}

var _ Cluster = &ServiceCluster{}

func (sc *ServiceCluster) AddNode(node Node) error {
	return nil
}

func (sc *ServiceCluster) GetNodes() []Node {
	return nil
}

func (sc *ServiceCluster) SetAffinityPolicy(AffinityPolicy) {

}

type RRPolicy struct{}

var _ AffinityPolicy = RRPolicy{}

func (rrp RRPolicy) Apply([]Node) Node {
	return nil
}
