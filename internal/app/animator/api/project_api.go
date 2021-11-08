package api

import (
	"time"

	"github.com/maldan/gam-app-animator/internal/app/animator/core"
	"github.com/maldan/go-cmhp/cmhp_crypto"
	"github.com/maldan/go-cmhp/cmhp_file"
	"github.com/maldan/go-rapi/rapi_core"
)

type ProjectApi struct {
}

func (r ProjectApi) GetIndex(args ArgsId) core.Project {
	// Open project list
	projectList := make(map[string]string)
	err := cmhp_file.ReadJSON(core.DataDir+"/projectList.json", &projectList)
	rapi_core.FatalIfError(err)

	// Read project config
	project := core.Project{}
	err = cmhp_file.ReadJSON(projectList[args.Id]+"/project.json", &project)
	rapi_core.FatalIfError(err)

	return project
}

func (r ProjectApi) PostIndex(args core.Project) {
	// Open project list
	projectList := make(map[string]string)
	cmhp_file.ReadJSON(core.DataDir+"/projectList.json", &projectList)

	// Create project
	args.Id = cmhp_crypto.UID(10)
	args.Created = time.Now()

	// Write
	err := cmhp_file.WriteJSON(args.Path+"/"+args.Name+"/project.json", &args)
	rapi_core.FatalIfError(err)

	// Save to list
	projectList[args.Id] = args.Path + "/" + args.Name
	cmhp_file.WriteJSON(core.DataDir+"/projectList.json", &projectList)
}

func (r ProjectApi) GetList(args ArgsEmpty) []core.Project {
	// Open project list
	projectList := make(map[string]string)
	cmhp_file.ReadJSON(core.DataDir+"/projectList.json", &projectList)

	// Read projects
	out := make([]core.Project, 0)
	for _, p := range projectList {
		project := core.Project{}
		err := cmhp_file.ReadJSON(p+"/project.json", &project)
		if err == nil {
			out = append(out, project)
		}
	}

	return out
}

func (r ProjectApi) GetSceneList(args ArgsId) []core.Scene {
	// Get project info
	project := r.GetIndex(args)

	out := make([]core.Scene, 0)
	list, err := cmhp_file.List(project.Path + "/" + project.Name + "/scene")
	rapi_core.FatalIfError(err)
	for _, file := range list {
		scene := core.Scene{}
		err := cmhp_file.ReadJSON(project.Path+"/"+project.Name+"/scene/"+file.Name(), &scene)
		if err == nil {
			out = append(out, scene)
		}
	}
	return out
}
