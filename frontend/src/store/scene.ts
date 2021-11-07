import { IObject } from '@/types/Types';
import { ActionContext } from 'vuex';
import { MainTree } from '.';

export type SceneStore = {
  scene: any;
  selectedObject: IObject;
  objects: IObject[];
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
  mutations: {},
  actions: {},
};
