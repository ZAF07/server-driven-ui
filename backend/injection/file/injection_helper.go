package file

import "github.com/ZAF07/server-driven-ui/backend/config"

//  applicationConfigProvider invokes config.LoadConfig, returning the config struct ...
func ApplicationConfigProvider() *config.AppConfig {
	return config.LoadConfig()
}

func BaseURLProvider() *string {
	return config.LoadConfig().GetBaseURL()
}

func ApplicationPortProvider() *string {
	return config.LoadConfig().GetApplicationPort()
}

func ApplicationPathsProvider() *[]config.Path {
	return config.LoadConfig().GetApplicationPaths()
}

func ReadTimeoutValueProvider() *int {
	return config.LoadConfig().GetReadTimeoutValue()
}
func WriteTimeoutValueProvider() *int {
	return config.LoadConfig().GetWriteTimeoutValue()
}
