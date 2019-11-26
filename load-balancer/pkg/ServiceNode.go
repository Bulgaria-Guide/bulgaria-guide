package pkg

type ServiceNode struct {
	Address string `mapstructure:"address"`
}

var _ Node = &ServiceNode{}

func (sn ServiceNode) GetServiceAddress() string {
	return sn.Address
}
