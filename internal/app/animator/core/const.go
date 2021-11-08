package core

import "time"

type Project struct {
	Id      string    `json:"id"`
	Name    string    `json:"name"`
	Path    string    `json:"path"`
	Width   int       `json:"width"`
	Height  int       `json:"height"`
	Fps     int       `json:"fps"`
	Created time.Time `json:"created"`
}

type Scene struct {
	Id        string    `json:"id"`
	ProjectId string    `json:"projectId"`
	Name      string    `json:"name"`
	Created   time.Time `json:"created"`
}

var DataDir = "db"
