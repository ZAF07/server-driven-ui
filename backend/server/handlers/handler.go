package handlers

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"

	"github.com/ZAF07/server-driven-ui/backend/datastore"
	"github.com/ZAF07/server-driven-ui/backend/server/handlers/response"
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
	w.Header().Set("Access-Control-Allow-Origin", "*")
	// pa := &request.UsersPayload{}

	// err := json.NewDecoder(r.Body).Decode(&pa)
	// if err != nil {
	// 	log.Fatalf("Error decoding body: %+v", err)
	// }
	// fmt.Printf("HERE WE GO : %+v", pa)
	// p := fmt.Sprintf("Payload: %+v", *pa)

	resp := response.Resp{
		// Payload:   p,
		Component: datastore.Dashboard,
		Message:   fmt.Sprintf("GET from : %+v", h.Path),
		Status:    http.StatusOK,
	}
	reqResp, errR := json.Marshal(&resp)
	if errR != nil {
		log.Fatalf("ERROR RESPONSE: %+v", errR)
	}
	w.Write([]byte(reqResp))
}
