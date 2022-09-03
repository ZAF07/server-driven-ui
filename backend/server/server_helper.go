package server

import (
	"encoding/json"
	"log"

	"github.com/ZAF07/server-driven-ui/backend/config"
	"github.com/ZAF07/server-driven-ui/backend/server/handlers"
)

//  NOTE: Not used ...
func unmarshalToHanlder(c config.Path, h *handlers.Handler) {
	b, err := json.Marshal(c)
	if err != nil {
		log.Fatalf("ERROR MARSHALING PATH: %+v", err)
	}
	uErr := json.Unmarshal(b, &h)
	if uErr != nil {
		log.Fatalf("Error unmarshaling into handler: %+v", uErr)
	}
}
