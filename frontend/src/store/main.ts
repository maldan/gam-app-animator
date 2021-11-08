import Axios from 'axios';
import { ActionContext } from 'vuex';
import { MainTree } from '.';

export type MainStore = {
  API_URL: string;
  projectList: any[];
};
export type MainActionContext = ActionContext<MainStore, MainTree>;

export default {
  namespaced: true,
  state: {
    API_URL: process.env.VUE_APP_API_URL || `${window.location.origin}/api`,
    projectList: [],
  },
  mutations: {
    SET_PROJECT_LIST(state: MainStore, list: any[]) {
      state.projectList = list;
    },
  },
  actions: {
    async getProjectList(action: MainActionContext) {
      const list = (await Axios.get(`${action.rootState.main.API_URL}/project/list`)).data.response;
      action.commit('SET_PROJECT_LIST', list);
    },
  },
};
