package pkg

import "github.com/sirupsen/logrus"

type AffinityPolicyFactory struct {
	log *logrus.Entry
}

func NewAffinityPolicyFactory(log *logrus.Entry) AffinityPolicyFactory {
	return AffinityPolicyFactory{
		log: log,
	}
}

func (f AffinityPolicyFactory) NewPolicy(t string, clusterSize int) AffinityPolicy {
	switch t {
	case "rr":
		return &RRPolicy{index: 0, clusterSize: clusterSize}
	default:
		f.log.Panic("unknown policy type: %s", t)
		return nil
	}
}

type RRPolicy struct {
	index       int
	clusterSize int
}

var _ AffinityPolicy = &RRPolicy{}

func (rrp *RRPolicy) Apply() int {
	defer func() {
		rrp.index++
		rrp.index = rrp.index % rrp.clusterSize
	}()
	return rrp.index
}
