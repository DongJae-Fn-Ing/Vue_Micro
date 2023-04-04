const maintainStore = {
  namespaced: true,
  state: {
    /* 메뉴 처리 */
    menuNun: 0,
    toggle: "",
    null: "",
  },
  mutations: {
    menuOn(state, clickItem) {
      state.toggle = state.menuNun;
      state.menuNun = clickItem;
      /*       state.tabDataKey = state.menuNun; */
      /*       if (clickItem === state.toggle) {
        state.menuNun = state.null;
      } */
    },
  },
  actions: {},
};

export default maintainStore;
