import Axios from 'axios';
import { IObject } from '@/types/Types';
import { ActionContext } from 'vuex';
import { MainTree } from '.';

export type SceneStore = {
  scene: any;
  selectedObject: IObject;
  objects: IObject[];
  list: any[];
};
export type SceneActionContext = ActionContext<SceneStore, MainTree>;

export default {
  namespaced: true,
  state: {
    width: 1920,
    height: 1080,
    fps: 60,
    selectedObject: null,
    objects: [
      {
        id: '1',
        name: 'sas',
        type: 'sprite',
        data: {
          url: 'zzz.jpeg',
          x: -100,
          y: 0,
          rotationX: 0,
          rotationY: 0,
          rotationZ: 0,
          scaleX: 1,
          scaleY: 1,
          width: 256,
          height: 256,
        },
        keys: [
          { position: 0, x: 10 },
          { position: 2, y: 20 },
        ],
      },
      {
        id: '2',
        name: 'gas',
        type: 'sprite',

        data: {
          url: 'zzz.jpeg',
          x: 300,
          y: 0,
          rotationX: 0,
          rotationY: 0,
          rotationZ: 0,
          scaleX: 1,
          scaleY: 1,
          width: 256,
          height: 256,
        },
        keys: [
          { position: 0, x: 10 },
          { position: 2, y: 20 },
        ],
      },
    ],
  },
  mutations: {
    SET_LIST(state: SceneStore, list: any[]) {
      state.list = list;
    },
  },
  actions: {
    async add(action: SceneActionContext) {
      await Axios.post(`${action.rootState.main.API_URL}/scene`, action.rootState.modal.data);
      action.dispatch('getList');
    },
    async getList(action: SceneActionContext) {
      const list = (await Axios.get(`${action.rootState.main.API_URL}/scene/list`)).data.response;
      action.commit('SET_LIST', list);
    },
  },
};
