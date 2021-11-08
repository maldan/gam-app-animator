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
	project := core.Project{}
	err := cmhp_file.ReadJSON(core.DataDir+"/project/"+args.Id+".json", &project)
	rapi_core.FatalIfError(err)
	return project
}

func (r ProjectApi) PostIndex(args core.Project) {
	args.Id = cmhp_crypto.UID(10)
	args.Created = time.Now()
	err := cmhp_file.WriteJSON(core.DataDir+"/project/"+args.Id+".json", &args)
	rapi_core.FatalIfError(err)
}

func (r ProjectApi) GetList(args ArgsEmpty) []core.Project {
	out := make([]core.Project, 0)
	list, err := cmhp_file.List(core.DataDir + "/project")
	rapi_core.FatalIfError(err)
	for _, file := range list {
		project := core.Project{}
		err := cmhp_file.ReadJSON(core.DataDir+"/project/"+file.Name(), &project)
		if err == nil {
			out = append(out, project)
		}
	}
	return out
}
