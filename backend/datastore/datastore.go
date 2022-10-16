package datastore

var Dashboard = map[string]map[string]interface{}{
	"header": {
		"active":          true,
		"title":           "Header Title",
		"desc":            "Description",
		"backgroundColor": "yellow",
	},
	"navigation": {
		"type":     "drawer",
		"active":   true,
		"location": "right",
		"mainNavItems": []string{
			"Inbox",
			"Profile",
			"Items",
			"Browse",
			"Cart",
		},
		"subNavItems": []string{
			"Trash",
			"Help",
			"Contact",
		},
	},
}

/*
GET req with param as page identifier
Based on param, query for the page configurations from MongoDB
*/
