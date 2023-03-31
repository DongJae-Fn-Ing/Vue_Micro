<template>
  <div class="headers">
    <ul class="header-button-left">
      <li><button type="button">Cancel</button></li>
    </ul>
    <ul class="header-button-right">
      <li v-if="step == 1">
        <button @click="nextPage" type="button">Next</button>
      </li>
      <li v-if="step == 2">
        <button @click="publish" type="button">발행</button>
      </li>
    </ul>
    <img src="../assets/img/logo2.png" class="logos" />
  </div>

  <Container
    @inputData="myWrite = $event"
    :instaData="instaData"
    :step="step"
    :uploadFile="uploadFile"
    :filterName="filterName"
  />
  <button @click="more" type="button" class="more-btn">더보기 버튼</button>
  <div class="footer">
    <ul class="footer-button-plus">
      <input
        @change="upload"
        accept="image/*"
        type="file"
        id="file"
        class="inputfile"
      />
      <label for="file" class="input-plus">+ 이미지 업로드</label>
    </ul>
  </div>
</template>

<script>
import Container from "../components/crudComponent/Container.vue";
import InstaDummyData from "../assets/data/instaData";
import axios from "axios";
import { mapMutations, mapState } from "vuex";

export default {
  name: "CrudPage",

  data() {
    return {
      instaData: InstaDummyData,
      step: 0,
      count: 0,
      uploadFile: ``,
      myWrite: "",
      filterName: "",
    };
  },
  components: {
    Container,
  },
  methods: {
    more() {
      axios
        .get("https://codingapple1.github.io/vue/more" + this.count + ".json")
        .then((dummy) => {
          console.log(dummy);
          this.instaData.push(dummy.data);
          this.count++;
        });
    },

    upload(e) {
      let file = e.target.files;
      console.log(URL.createObjectURL(file[0]));
      this.uploadFile = URL.createObjectURL(file[0]);
      this.step = 1;
    },
    nextPage() {
      this.step++;
    },
    publish() {
      let myData = {
        name: "Kim Hyun",
        userImage: "https://placeimg.com/100/100/arch",
        postImage: this.uploadFile,
        likes: 36,
        date: "May 15",
        liked: false,
        content: this.myWrite,
        filter: this.filterName,
      };
      this.instaData.unshift(myData);
      this.step = 0;
    },
    now() {
      return new Date();
    },

    ...mapMutations(["함수명", "test"]),
  },
  computed: {
    now2() {
      return new Date();
    },

    name() {
      return this.$store.state.name;
    },
    ...mapState(["names", "age", "likes"]),
    ...mapState({ 작명: "names" }),
  },

  mounted() {
    this.emitter.on("filterClassData", (a) => {
      console.log(a);
      this.filterName = a;
    });
  },
};
</script>

<style>
.logos {
  display: block;
  position: absolute;
  width: 22px;
  margin: auto;
  left: 0;
  right: 0;
  top: 13px;
}
.headers {
  position: sticky;
  width: 500px;
  height: 40px;
  margin: 0 auto;
  padding-bottom: 8px;
  background-color: darkgray;
  top: 0;
}
.header-button-left {
  color: skyblue;
  float: left;
  width: 50px;
  padding-left: 20px;
  cursor: pointer;
  margin-top: 10px;
}
.header-button-right {
  float: right;
  width: 50px;
  margin-top: 10px;
  color: skyblue;
  cursor: pointer;
}
.footer {
  position: sticky;
  width: 100%;
  padding-bottom: 10px;
  bottom: 0;
  background-color: white;
}
.footer-button-plus {
  width: 80px;
  margin: auto;
  padding-top: 12px;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
}
.sample-box {
  width: 100%;
  height: 600px;
  background-color: bisque;
}
.inputfile {
  display: none;
}
.input-plus {
  font-size: 12px;
  cursor: pointer;
}

.more-btn {
  display: block;
  width: 500px;
  height: 40px;
  margin: 10px auto;
  background-color: #dfdfdf;
}
</style>
