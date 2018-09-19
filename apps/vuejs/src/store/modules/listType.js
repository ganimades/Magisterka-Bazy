export default {
  state: {
    listType: localStorage.getItem('vue-listType') || 'list',
  },
  getters: {
    listType: state => state.listType,
  },
  mutations: {
    setListType(state, listType) {
      state.listType = listType;
      localStorage.setItem('vue-listType', listType);
    },
  },
  actions: {},
};