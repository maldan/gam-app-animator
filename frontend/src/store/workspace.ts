import { ActionContext } from 'vuex';
import { MainTree } from '.';

export type WorkspaceStore = {
  scene: any;
  objects: any[];
};
export type WorkspaceActionContext = ActionContext<WorkspaceStore, MainTree>;

export default {
  namespaced: true,
  state: {
    scene: {
      width: 1920,
      height: 1080,
      fps: 60,
    },
    objects: [
      { id: '1', name: 'sas', keys: [{ position: 0 }, { position: 2 }] },
      {
        id: '12',
        name: 'xx',
        keys: [{ position: 0 }, { position: 6 }, { position: 4 }, { position: 2 }],
      },
      { id: '3', name: 'xfgfg', keys: [{ position: 0 }, { position: 0.5 }] },
      { id: '3', name: 'xfgfg', keys: [{ position: 0 }, { position: 0.5 }] },
      { id: '3', name: 'xfgfg', keys: [{ position: 0 }, { position: 0.5 }] },
      { id: '3', name: 'xfgfg', keys: [{ position: 0 }, { position: 0.5 }] },
      { id: '3', name: 'xfgfg', keys: [{ position: 0 }, { position: 0.5 }] },
      { id: '3', name: 'xfgfg', keys: [{ position: 0 }, { position: 0.5 }] },
      { id: '3', name: 'xfgfg', keys: [{ position: 0 }, { position: 0.5 }] },
      { id: '3', name: 'xfgfg', keys: [{ position: 0 }, { position: 0.5 }] },
      { id: '3', name: 'xfgfg', keys: [{ position: 0 }, { position: 0.5 }] },
      { id: '3', name: 'xfgfg', keys: [{ position: 0 }, { position: 0.5 }] },
      { id: '3', name: 'xfgfg', keys: [{ position: 0 }, { position: 0.5 }] },
      { id: '3', name: 'xfgfg', keys: [{ position: 0 }, { position: 0.5 }] },
      { id: '3', name: 'xfgfg', keys: [{ position: 0 }, { position: 0.5 }] },
      { id: '3', name: 'xfgfg', keys: [{ position: 0 }, { position: 0.5 }] },
      { id: '3', name: 'xfgfg', keys: [{ position: 0 }, { position: 0.5 }] },
      { id: '3', name: 'xfgfg', keys: [{ position: 0 }, { position: 0.5 }] },
      { id: '3', name: 'xfgfg', keys: [{ position: 0 }, { position: 0.5 }] },
      { id: '3', name: 'xfgfg', keys: [{ position: 0 }, { position: 0.5 }] },
      { id: '3', name: 'xfgfg', keys: [{ position: 0 }, { position: 0.5 }] },
      { id: '3', name: 'xfgfg', keys: [{ position: 0 }, { position: 0.5 }] },
      { id: '3', name: 'xfgfg', keys: [{ position: 0 }, { position: 0.5 }] },
      { id: '3', name: 'xfgfg', keys: [{ position: 0 }, { position: 0.5 }] },
      { id: '3', name: 'xfgfg', keys: [{ position: 0 }, { position: 0.5 }] },
      { id: '3', name: 'xfgfg', keys: [{ position: 0 }, { position: 0.5 }] },
      { id: '3', name: 'xfgfg', keys: [{ position: 0 }, { position: 0.5 }] },
      { id: '3', name: 'xfgfg', keys: [{ position: 0 }, { position: 0.5 }] },
      { id: '3', name: 'xfgfg', keys: [{ position: 0 }, { position: 0.5 }] },
      { id: '3', name: 'xfgfg', keys: [{ position: 0 }, { position: 0.5 }] },
      { id: '3', name: 'xfgfg', keys: [{ position: 0 }, { position: 0.5 }] },
      { id: '3', name: 'xfgfg', keys: [{ position: 0 }, { position: 0.5 }] },
      { id: '3', name: 'xfgfg', keys: [{ position: 0 }, { position: 0.5 }] },
      { id: '3', name: 'xfgfg', keys: [{ position: 0 }, { position: 0.5 }] },
    ],
  },
  mutations: {},
  actions: {},
};
