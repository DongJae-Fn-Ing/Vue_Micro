<template>
  <div class="insta-wrap">
    <div class="insta-content" v-if="step === 0">
      <Post
        v-for="(a, i) in instaData"
        :key="i"
        :instaData="instaData[i]"
        :postList="i"
      />
    </div>
    <div class="insta-content" v-if="step === 1">
      <div
        class="upload-image"
        :class="filterName"
        :style="{ background: `url(${uploadFile}) no-repeat center / cover` }"
      ></div>
      <div class="filters">
        <FilterBox
          v-for="(a, i) in FilterData"
          :key="i"
          :uploadFile="uploadFile"
          :filterClass="a"
        >
          {{ a }}
        </FilterBox>
      </div>
    </div>
    <div class="insta-content" v-if="step === 2">
      <div
        class="upload-image"
        :class="filterName"
        :style="{ background: `url(${uploadFile}) no-repeat center / cover` }"
      ></div>
      <div class="write">
        <textarea
          class="write-box"
          v-model="textArea"
          placeholder="글 작성해주고 제출해"
          @change="$emit('inputData', textArea)"
        >
write!</textarea
        >
      </div>
    </div>
    <div class="insta-content" v-if="step === 3">
      <MyPage :one="1" />
    </div>
  </div>
</template>

<script>
import FilterBox from "./FilterBox";
import Post from "./Post";
import FilterData from "../../assets/data/filterData";
import MyPage from "./MyPage";

export default {
  name: "ContainerCom",
  components: {
    Post,
    FilterBox,
    MyPage,
  },
  data() {
    return {
      textArea: "",
      FilterData: FilterData,
    };
  },
  methods: {},
  props: {
    instaData: Object,
    step: Number,
    uploadFile: String,
    filterName: String,
  },
};
</script>

<style>
.insta-wrap {
  width: 100%;
}

.insta-content {
  width: 500px;
  margin: 10px auto;
}

.upload-image {
  width: 100%;
  height: 450px;
  background: cornflowerblue;
}
.filters {
  overflow-x: scroll;
  white-space: nowrap;
}
.filters::-webkit-scrollbar {
  height: 5px;
}
.filters::-webkit-scrollbar-track {
  background: #f1f1f1;
}
.filters::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 5px;
}
.filters::-webkit-scrollbar-thumb:hover {
  background: #555;
}
.write-box {
  display: block;
  width: 100%;
  height: 100px;
  padding: 15px;
  margin: 10px auto;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  outline: none;
  resize: none;
}
</style>