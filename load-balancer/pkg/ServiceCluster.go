package pkg

import "github.com/sirupsen/logrus"

type ServiceCluster struct {
	nodes          []ServiceNode
	affinityPolicy AffinityPolicy
	log            *logrus.Entry
}

var _ Cluster = &ServiceCluster{}

func NewServiceCluster(settings *ServiceClusterSettings, log *logrus.Entry) *ServiceCluster {
	policy := NewAffinityPolicyFactory(log).NewPolicy(settings.AffinityPolicyType, len(settings.Nodes))
	return &ServiceCluster{
		nodes:          settings.Nodes,
		affinityPolicy: policy,
		log:            log,
	}
}

func (sc *ServiceCluster) GetNode() Node {
	return sc.nodes[sc.affinityPolicy.Apply()]
}

type ServiceClusterSettings struct {
	Nodes              []ServiceNode `mapstructure:"nodes"`
	AffinityPolicyType string        `mapstructure:"policy"`
}
