package request

//  TODO: USE protobuff

type ItemsPayload struct {
	Data []Item `mapstructure:"data" json:"data"`
}

// TODO: USE protobuff
type UsersPayload struct {
	Data []User `mapstructure:"data" json:"user"`
}

type Item struct {
	Name string `mapstructure:"name " json:"name"`
}

type User struct {
	Name string `mapstructure:"name " json:"name"`
	Age  int    `mapstructure:"age" json:"age"`
}
