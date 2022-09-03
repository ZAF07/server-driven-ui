package config

import (
	"flag"
	"log"
	"sync"

	"github.com/fsnotify/fsnotify"
	"github.com/spf13/viper"
)

//  loadConfig parses the configuration file, unmarshals it into the configuration struct, and returns the application config ...
func loadConfig() (config *AppConfig) {
	config = appConfigLoader()
	return
}

var appConfigLoader = applicationConfigLoader()

func applicationConfigLoader() func() *AppConfig {
	config := &AppConfig{}

	var once sync.Once

	return func() *AppConfig {
		once.Do(func() {
			var configFilePath string

			flag.StringVar(&configFilePath, "config", "config.yml", "Path to config file")
			flag.Parse()
			config = parseAndWatchConfigFile(configFilePath)

		})
		return config
	}
}

func parseAndWatchConfigFile(filepath string) *AppConfig {

	config := &AppConfig{}

	v := viper.New()
	v.SetConfigFile(filepath)
	v.ReadInConfig()
	unmarshalConfig(config, v)

	v.WatchConfig()
	v.OnConfigChange(func(e fsnotify.Event) {
		log.Printf("~~~ Config file '%+v' has been modified ~~~", e.Name)
		unmarshalConfig(config, v)
	})
	return config
}

func unmarshalConfig(config *AppConfig, v *viper.Viper) {
	if err := v.Unmarshal(&config); err != nil {
		log.Fatalf("[CONFIG] Error unmarshaling app config on change : %+v\n", err)
	}
}
