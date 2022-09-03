//go:build wireinject
// +build wireinject

package injection

import (
	"github.com/ZAF07/server-driven-ui/backend/config"
	"github.com/ZAF07/server-driven-ui/backend/injection/file"
	"github.com/google/wire"
)

// Initialises the applications's configuration from config file ...
func InitGeneralConfig() *config.AppConfig {
	wire.Build(file.ApplicationConfigProvider)
	return &config.AppConfig{}
}

// GetApplicationBasePath returns the app's base URL ...
func GetApplicationBasePath() *string {
	wire.Build(file.BaseURLProvider)
	return InitGeneralConfig().GetBaseURL()
}

func GetApplicationPort() *string {
	wire.Build(file.ApplicationPortProvider)
	return InitGeneralConfig().GetApplicationPort()
}

func GetApplicationPaths() *[]config.Paths {
	wire.Build(file.ApplicationPathsProvider)
	return InitGeneralConfig().GetApplicationPaths()
}

func GetReadTimeoutValue() *int {
	wire.Build(file.ReadTimeoutValueProvider)
	return InitGeneralConfig().GetReadTimeoutValue()
}

func GetWriteTimeoutValue() *int {
	wire.Build(file.WriteTimeoutValueProvider)
	return InitGeneralConfig().GetWriteTimeoutValue()
}
