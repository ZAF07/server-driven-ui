package datastore

var Dashboard = map[string]map[string]interface{}{
	"header": {
		"active":          true,
		"title":           "Header Title",
		"desc":            "Description",
		"backgroundColor": "yellow",
	},
}

/*
GET req with param as page identifier
Based on param, query for the page configurations from MongoDB
*/
