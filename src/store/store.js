import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
import InstaData from "../assets/data/instaData";
import maintainStore from "./module/maintainStore";

const store = createStore({
  state() {
    return {
      instaAllData: InstaData,
      instaAllDataCopy: [...InstaData],
      more: {},
      tabDataKey: 0,
    };
  },

  modules: {
    maintainStore,
  },
  mutations: {
    likeAdd(state, postList) {
      state.instaAllDataCopy[postList].liked =
        !state.instaAllDataCopy[postList].liked;
      console.log(state.instaAllDataCopy[postList].liked);
      if (state.instaAllDataCopy[postList].liked === true) {
        state.instaAllDataCopy[postList].likes++;
      } else {
        state.instaAllDataCopy[postList].likes--;
      }
      state.instaAllData = state.instaAllDataCopy;
    },
    setMore(state, data) {
      state.more = data;
    },
    changeTabDataKey(state, titleKey) {
      state.tabDataKey = titleKey;
    },
    reTabDataKey(state) {
      state.tabDataKey = 0;
    },
  },
  plugins: [
    createPersistedState({
      key: "vueStore",
      paths: ["maintainStore"],
      storage: window.sessionStorage,
    }),
  ],
});

export default store;
