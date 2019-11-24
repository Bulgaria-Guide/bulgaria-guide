package main

import (
	"log"
	"net/http"
	"net/http/httputil"
	"net/url"
)

func handler(w http.ResponseWriter, r *http.Request) {
	targetUrl, err := url.Parse("http://localhost:3000")
	if err != nil{
		panic(err)
	}
	proxy := httputil.NewSingleHostReverseProxy(targetUrl)
	proxy.ServeHTTP(w, r)
}

func main() {
	http.HandleFunc("/", handler)
	log.Fatal(http.ListenAndServe(":8080", nil))
}