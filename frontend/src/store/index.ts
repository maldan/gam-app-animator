import { createStore } from 'vuex';

import modal, { ModalStore } from '../gam_sdk_ui/vue/store/modal';
import main, { MainStore } from './main';
import workspace, { WorkspaceStore } from './workspace';

export type MainTree = {
  main: MainStore;
  modal: ModalStore;
  workspace: WorkspaceStore;
};

export default createStore({
  modules: { main, modal, workspace },
});
