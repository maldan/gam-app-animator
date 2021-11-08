import Axios from 'axios';
import { ActionContext } from 'vuex';
import { MainTree } from '.';

export type ProjectStore = {
  list: any[];
};
export type ProjectActionContext = ActionContext<ProjectStore, MainTree>;

export default {
  namespaced: true,
  state: {
    list: [],
  },
  mutations: {
    SET_LIST(state: ProjectStore, list: any[]) {
      state.list = list;
    },
  },
  actions: {
    async add(action: ProjectActionContext) {
      await Axios.post(`${action.rootState.main.API_URL}/project`, action.rootState.modal.data);
      action.dispatch('getList');
    },
    async getList(action: ProjectActionContext) {
      const list = (await Axios.get(`${action.rootState.main.API_URL}/project/list`)).data.response;
      action.commit('SET_LIST', list);
    },
  },
};
