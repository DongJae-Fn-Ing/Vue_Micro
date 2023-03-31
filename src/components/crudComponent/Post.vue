<template>
  <div class="post">
    <div class="post-header">
      <div
        class="profile"
        :style="{ backgroundImage: `url(${instaData.userImage})` }"
      ></div>
      <span class="profile-name">{{ instaData.name }}</span>
    </div>
    <div
      @click="$store.commit('likeAdd', postList)"
      class="post-body"
      :class="`${instaData.filter}`"
      :style="{ backgroundImage: `url(${instaData.postImage})` }"
    ></div>
    <div class="post-content">
      <p>
        <span
          class="great-icon"
          :class="{ on: $store.state.instaAllData[postList].liked === true }"
          >좋아요를 표시하는 아이콘</span
        >{{ $store.state.instaAllData[postList].likes }} Likes
      </p>
      <p>
        <strong>{{ instaData.filter }}</strong> {{ instaData.content }}
      </p>
      <p class="date">{{ instaData.date }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostCom",
  props: {
    instaData: Object,
    filterName: String,
    postList: Number,
  },
  methods: {},
};
</script>

<style>
.post {
  width: 500px;
  margin: 0 auto;
  cursor: pointer;
}
.profile {
  float: left;
  width: 30px;
  height: 30px;
  background-size: 100%;
  border-radius: 50%;
}
.profile-name {
  display: block;
  float: left;
  padding-left: 10px;
  padding-top: 7px;
  font-size: 14px;
}
.post-header {
  height: 50px;
  padding: 10px;
}
.post-body {
  height: 450px;
  background-position: center;
  background-size: cover;
}
.post-content {
  padding-left: 15px;
  padding-right: 15px;
  font-size: 14px;
}

.post-content p {
  margin: 10px 0;
}

.post-content .great-icon {
  display: inline-block;
  width: 20px;
  height: 20px;
  margin-right: 10px;
  background: url("../../assets/img/ico_heart.png") no-repeat center;
  text-indent: -9999px;
}

@keyframes pulse {
  from {
    transform: scale(0.8);
  }
  to {
    transform: scale(1.5);
  }
}
.post-content .great-icon.on {
  background: url("../../assets/img/ico_red_heart.png") no-repeat center;
  animation: pulse 0.3s ease-in-out alternate;
}

.post-content .date {
  font-size: 11px;
  color: grey;
}
</style>