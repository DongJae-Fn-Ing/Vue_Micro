import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
import InstaData from "../assets/data/instaData";
import TabData from "@/assets/data/tabData";
import maintainStore from "./module/maintainStore";

const store = createStore({
  state() {
    return {
      instaAllData: InstaData,
      instaAllDataCopy: [...InstaData],
      more: {},
      tabData: TabData,
      tabDataCopy: [...TabData],
      tabDataKey: 0,
      searchData: "",
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
    tabItem(state, data) {
      state.tabData[state.tabDataKey].tabItemData[data].itemState =
        !state.tabData[state.tabDataKey].tabItemData[data].itemState;
    },
    inputData(state, inputText){
      state.searchData = inputText;
      console.log("텍스트:::", inputText);
      /* searchData가 테이블 데이타 타이틀값에 포함되는 것이 있고 옆에 버튼을 누르면 재랜더링 */
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
