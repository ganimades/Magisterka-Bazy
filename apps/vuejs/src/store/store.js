import Vue from 'vue';
import Vuex from 'vuex';
import listType from './modules/listType';
import sidepanel from './modules/sidepanel';
import task from './modules/task';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    listType,
    sidepanel,
    task
  },
});
