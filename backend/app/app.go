package app

import (
	"github.com/ZAF07/server-driven-ui/backend/server"
)

// InitApplication starts the application and its dependencies ...
func InitApplication() {
	server.InitServer()
}
