import Axios from 'axios';
import { ActionContext } from 'vuex';
import { MainTree } from '.';

export type ProjectStore = {
  sceneList: any[];
};
export type ProjectActionContext = ActionContext<ProjectStore, MainTree>;

export default {
  namespaced: true,
  state: {
    sceneList: [],
  },
  mutations: {
    SET_SCENE_LIST(state: ProjectStore, list: any[]) {
      state.sceneList = list;
    },
  },
  actions: {
    async add(action: ProjectActionContext) {
      await Axios.post(`${action.rootState.main.API_URL}/project`, action.rootState.modal.data);
      action.dispatch('getList');
    },

    async getSceneList(action: ProjectActionContext, projectId: string) {
      const list = (
        await Axios.get(`${action.rootState.main.API_URL}/project/sceneList?id=${projectId}`)
      ).data.response;
      action.commit('SET_SCENE_LIST', list);
    },
  },
};
