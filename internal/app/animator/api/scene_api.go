package api

import (
	"time"

	"github.com/maldan/gam-app-animator/internal/app/animator/core"
	"github.com/maldan/go-cmhp/cmhp_crypto"
	"github.com/maldan/go-cmhp/cmhp_file"
	"github.com/maldan/go-rapi/rapi_core"
)

type SceneApi struct {
}

func (r SceneApi) PostIndex(args core.Scene) {
	rr := ProjectApi{}
	project := rr.GetIndex(ArgsId{Id: args.ProjectId})

	args.Id = cmhp_crypto.UID(10)
	args.Created = time.Now()
	err := cmhp_file.WriteJSON(project.Path+"/scene/"+args.Id+".json", &args)
	rapi_core.FatalIfError(err)
}

func (r SceneApi) GetList(args ArgsId) []core.Scene {
	rr := ProjectApi{}
	project := rr.GetIndex(args)

	out := make([]core.Scene, 0)
	list, err := cmhp_file.List(project.Path + "/scene")
	rapi_core.FatalIfError(err)
	for _, file := range list {
		scene := core.Scene{}
		err := cmhp_file.ReadJSON(project.Path+"/scene/"+file.Name(), &project)
		if err == nil {
			out = append(out, scene)
		}
	}
	return out
}
