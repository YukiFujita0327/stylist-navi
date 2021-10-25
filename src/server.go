package main

import (
	"io"
	"log"
	"net/http"
)

func httphandler (w http.ResponseWriter, _ *http.Request) {
	io.WriteString(w, "hello ! \n")
}

func main() {
	http.HandleFunc("/", httphandler)

	log.Fatal(http.ListenAndServe("localhost:8080", nil))
}