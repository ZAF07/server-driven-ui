package config

type AppConfig struct {
	GeneralConfig GeneralConfig `mapstructure:"general_config" json:"general_config"`
	RouteConfig   AppPaths      `mapstructure:"application_paths" json:"application_paths"`
}

type AppPaths struct {
	Base  string  `mapstructure:"base_path" json:"base_path"`
	Paths *[]Path `mapstructure:"app_paths" json:"app_paths"`
}

//  Path Application's paths ...
type Path struct {
	Name   string `mapstructure:"name" json:"name"`
	Method string `mapstructure:"method" json:"method"`
}

// GeneralConfig Application's general configuration ...
type GeneralConfig struct {
	ServerPort   string `mapstructure:"server_port" json:"server_port"`
	ReadTimeout  int    `mapstructure:"read_timeout" json:"read_timeout"`
	WriteTimeout int    `mapstructure:"write_timeout" json:"write_timeout"`
}

//  LoadConfig loads and populates the config struct ...
func LoadConfig() *AppConfig {
	return loadConfig()
}

// GetBaseURL returns the application's base URL from the config struct ...
func (c *AppConfig) GetBaseURL() *string {
	return &c.RouteConfig.Base
}

//  GetApplicationPort returns the application's port from the config struct ...
func (c *AppConfig) GetApplicationPort() *string {
	return &c.GeneralConfig.ServerPort
}

// GetApplicationPaths returns the application's paths from the config struct ...
func (c *AppConfig) GetApplicationPaths() *[]Path {
	return c.RouteConfig.Paths
}

//  GetReadTimeoutValue returns the applications's read timeout value from the config struct ...
func (c *AppConfig) GetReadTimeoutValue() *int {
	return &c.GeneralConfig.ReadTimeout
}

// GetWriteTimeoutValue returns the application's write timeout value from the config struct ...
func (c *AppConfig) GetWriteTimeoutValue() *int {
	return &c.GeneralConfig.WriteTimeout
}
