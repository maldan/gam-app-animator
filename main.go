package main

import (
	"embed"

	helloworld "github.com/maldan/gam-app-animator/internal/app/animator"
)

//go:embed frontend/build/*
var frontFs embed.FS

func main() {
	helloworld.Start(frontFs) //
}
