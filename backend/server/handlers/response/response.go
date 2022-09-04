package response

// TODO: USE protobuff
type Resp struct {
	Payload   interface{}
	Component interface{}
	Status    int
	Message   string
}
