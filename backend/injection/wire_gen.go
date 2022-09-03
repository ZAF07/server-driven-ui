// Code generated by Wire. DO NOT EDIT.

//go:generate go run github.com/google/wire/cmd/wire
//go:build !wireinject
// +build !wireinject

package injection

import (
	"github.com/ZAF07/server-driven-ui/backend/config"
	"github.com/ZAF07/server-driven-ui/backend/injection/file"
)

// Injectors from wire.go:

// Initialises the applications's configuration from config file ...
func InitGeneralConfig() *config.AppConfig {
	appConfig := file.ApplicationConfigProvider()
	return appConfig
}

// GetApplicationBasePath returns the app's base URL ...
func GetApplicationBasePath() *string {
	string2 := file.BaseURLProvider()
	return string2
}

func GetApplicationPort() *string {
	string2 := file.ApplicationPortProvider()
	return string2
}

func GetApplicationPaths() *[]config.Path {
	v := file.ApplicationPathsProvider()
	return v
}

func GetReadTimeoutValue() *int {
	int2 := file.ReadTimeoutValueProvider()
	return int2
}

func GetWriteTimeoutValue() *int {
	int2 := file.WriteTimeoutValueProvider()
	return int2
}
