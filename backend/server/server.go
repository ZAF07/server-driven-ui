package server

import (
	"fmt"
	"log"
	"net/http"
	"time"

	"github.com/ZAF07/server-driven-ui/backend/injection"
	"github.com/ZAF07/server-driven-ui/backend/server/handlers"
	"github.com/gorilla/mux"
)

//  InitServer gets server configuration from the configuration struct and starts the server ...
func InitServer() {
	basePath := injection.GetApplicationBasePath()
	port := injection.GetApplicationPort()
	addr := fmt.Sprintf("%s:%s", *basePath, *port)

	paths := injection.GetApplicationPaths()

	r := mux.NewRouter()

	// Loop the paths retrieved from the config struct and register a new route ...
	for _, path := range *paths {
		h := handlers.NewHandler(path.Method, path.Name)
		r.HandleFunc(h.Path, h.ServeHTTP)
	}

	srv := &http.Server{
		Handler:      r,
		Addr:         addr,
		WriteTimeout: time.Duration(*injection.GetWriteTimeoutValue()) * time.Second,
		ReadTimeout:  time.Duration(*injection.GetReadTimeoutValue()) * time.Second,
	}

	log.Fatal(srv.ListenAndServe())
}
