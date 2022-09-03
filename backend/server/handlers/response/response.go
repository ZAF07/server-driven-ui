package response

// TODO: USE protobuff
type Resp struct {
	Payload interface{}
	Status  int
	Message string
}
