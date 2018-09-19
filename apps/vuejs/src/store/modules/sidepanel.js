export default {
  state: {
    isOpened: (() => {
      const storageValue = localStorage.getItem('vue-isOpened');
      switch (storageValue) {
        case 'true':
          return true;
        case 'false':
        default:
          return false;
      }
    })(),
  },
  getters: {
    isOpened: state => state.isOpened
  },
  mutations: {
    togglePanel(state) {
      state.isOpened = !state.isOpened;
      localStorage.setItem('vue-isOpened', String(state.isOpened));
    },
  },
  actions: {},
};