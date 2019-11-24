package pkg

type ServiceNode struct {
	hostname string
}

var _ Node = &ServiceNode{}

func (sn *ServiceNode) GetServiceAddress() string {
	return sn.hostname
}
