import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
import InstaData from "../assets/data/instaData";
import TabData from "@/assets/data/tabData";
import maintainStore from "./module/maintainStore";
import axios from "axios";

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
      axiosData: "",
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

    axiosSave(state, Data) {
      state.axiosData = Data;
      console.log("저장된 거:::", state.axiosData);
      let asd = [];
      state.axiosData.data.forEach((a) => {
        return asd.push(a.title);
      });
      console.log("저장된 데이타:::", asd);
    },

    /* 엑시오스 데이터 받아와서 저장하는 함수 */

    inputData(state, inputText) {
      state.searchData = inputText;
      console.log("텍스트:::", state.searchData);
      /* searchData가 테이블 데이타 타이틀값에 포함되는 것이 있고 옆에 버튼을 누르면 재랜더링 */

      if (inputText.includes("검색")) {
        console.log("검색 테스트");
      }
    },
  },
  actions: {
    getData(actionsData) {
      axios
        .get("https://jsonplaceholder.typicode.com/todos")
        .then((response) => {
          actionsData.commit("axiosSave", response);
        })
        .catch((error) => {
          console.log("엑시오스 에러", error);
        })
        .then(() => {
          /* 항상 실행되는 지역 */
        });
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
