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
	"about": {
		"type":            "bottom_footer",
		"active":          true,
		"title":           "About Page Layout Title",
		"desc":            "About Page layout data",
		"backgroundColor": "green",
		"navigation": map[string]interface{}{
			"type":      "topNavResponsive",
			"logoTitle": "Logo Title",
			"logoColor": "white",
			"active":    true,
			"location":  "right",
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
		"footerData": []map[string]interface{}{
			{
				"style": map[string]string{
					"fontColor":       "green",
					"backgroundColor": "yellow",
				},
				"title": "Find Us",
				"icon":  "locationOnIcon",
			},
			{
				"style": map[string]string{
					"fontColor":       "orange",
					"backgroundColor": "purple",
				},
				"title": "Sign In",
				"icon":  "restoreIcon",
			},
			{
				"style": map[string]string{
					"fontColor":       "green",
					"backgroundColor": "yellow",
				},
				"title": "Favourite",
				"icon":  "favouriteIcon",
			},
		},
	},
}

/*
GET req with param as page identifier
Based on param, query for the page configurations from MongoDB
*/
