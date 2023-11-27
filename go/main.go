package main

import (
	"encoding/json"
	"net/http"
)

type Word struct {
	English  string `json:"english"`
	Japanese string `json:"japanese"`
}

var words []Word

func getWords(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(words)
}

func main() {
	words = []Word{
		{"dog", "犬"},
		{"cat", "猫"},
		{"bird", "鳥"},
		{"horse", "馬"},
	}

	http.HandleFunc("/words", getWords)
	http.ListenAndServe(":8080", nil)
}
