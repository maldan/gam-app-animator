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
	// Get project info
	rr := ProjectApi{}
	project := rr.GetIndex(ArgsId{Id: args.ProjectId})

	// Create new scene
	args.Id = cmhp_crypto.UID(10)
	args.Created = time.Now()
	err := cmhp_file.WriteJSON(project.Path+"/"+project.Name+"/scene/"+args.Id+".json", &args)
	rapi_core.FatalIfError(err)
}
