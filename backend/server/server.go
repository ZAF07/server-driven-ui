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
	paths := injection.GetApplicationPaths()

	addr := fmt.Sprintf("%s:%s", *basePath, *port)

	r := mux.NewRouter()

	// Loop the paths retrieved from the config struct and register a new route ...
	for _, path := range *paths {
		h := handlers.NewHandler(path.Method, path.Path)
		r.HandleFunc(h.Path, h.ServeHTTP)
		r.Use(mux.CORSMethodMiddleware(r))
	}

	srv := &http.Server{
		Handler:      r,
		Addr:         addr,
		WriteTimeout: time.Duration(*injection.GetWriteTimeoutValue()) * time.Second,
		ReadTimeout:  time.Duration(*injection.GetReadTimeoutValue()) * time.Second,
	}

	log.Fatal(srv.ListenAndServe())
}
