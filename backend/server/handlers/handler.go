package handlers

import (
	"fmt"
	"net/http"
)

const (
	postMethod = "POST"
	getMethod  = "GET"
)

type Handler struct {
	Method string `mapstructure:"method" json:"method"`
	Path   string `mapstructure:"name" json:"name"`
}

//  NewHandler returns a new instance of a pointer to Handler{} ...
func NewHandler(m, p string) *Handler {
	return &Handler{
		Method: m,
		Path:   p,
	}
}

//  ServeHTTP is the default handler for each paths registered in the application ...
func (h Handler) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	// time.Sleep(5 * time.Second)
	// TODO: CHECK HOW TO CHECK FOR READ/WRITE TIMEOUTS

	switch r.Method {
	case postMethod:
		h.handlePost(w, r)

	case getMethod:
		h.handleGet(w, r)
	}
}

// handlePost handles default POST requests to the application ...
func (h Handler) handlePost(w http.ResponseWriter, r *http.Request) {
	res := fmt.Sprintf("POST from %+v", h.Path)
	w.Write([]byte(res))
}

// handleGet handles default GET requests to the application ...
func (h Handler) handleGet(w http.ResponseWriter, r *http.Request) {
	p := fmt.Sprintf("GET from : %+v", h.Path)
	w.Write([]byte(p))
}
