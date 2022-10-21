package datastore

var Dashboard = map[string]map[string]interface{}{
	"header": {
		"active":          true,
		"title":           "Header Title",
		"desc":            "Header Description",
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
	"about": { // 💡 The pathname should be used to query mongodb for a document with the identifier name the same as the pathname
		"active":          true,
		"title":           "About Page Layout Title",
		"desc":            "About Page layout data",
		"backgroundColor": "green",
	},
}

/*
GET req with param as page identifier
Based on param, query for the page configurations from MongoDB
*/
