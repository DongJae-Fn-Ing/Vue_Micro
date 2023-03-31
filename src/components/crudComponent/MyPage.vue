<template>
  <div style="padding: 10px">
    <h4>팔로워</h4>
    <input
      @input="(e) => search(e)"
      type="text"
      class="f-input"
      placeholder="돋보기"
    />
    <div class="post-header" v-for="(a, i) in follower" :key="i">
      <div
        class="profile"
        :style="{ background: `url(${a.image}) no-repeat center / cover` }"
      ></div>
      <span class="profile-name">{{ a.name }}</span>
    </div>
  </div>
</template>

<script>
import {
  /* computed, */ onMounted,
  /* reactive, */ ref,
  toRefs /*  watch  */,
} from "vue";
import { useStore } from "vuex";
import axios from "axios";
export default {
  name: "MyPage",
  props: {
    one: Number,
  },
  setup(props) {

    let follower = ref([]);
    let { one } = toRefs(props);
    console.log(one.value);

    onMounted(() => {

      axios.get("/follower.json").then((a) => {
        follower.value = a.data;
      });
    });

    let store = useStore();
    console.log(store.state.names);

    function search(e) {
      let searchText = e.target.value;
      console.log(searchText);

      if (searchText.includes("s")) {
        let test = follower.value.filter((a) => {
          return a.name.includes("s");
        });
        follower.value = test;
      }
    }


    return { follower, search };

  },
};
</script>

<style>
.f-input {
  border: 1px solid #ddd;
}

.profile {
  width: 30px;
  height: 30px;
  border-radius: 30px;
  border: 1px solid #ddd;
  background: #ddd;
}
</style>