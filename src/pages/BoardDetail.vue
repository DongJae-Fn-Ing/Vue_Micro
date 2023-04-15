<template>
  <div class="inner-box">
    <div class="detail-title">
      <h3>게시판 타이틀{{ $route.params.id }}</h3>
      <button type="button" @click="$router.go(-1)">뒤로가기</button>
    </div>
    <div class="detail-content">
      <p>게시판 콘텐츠{{ $route.params.id }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "BoardDetail",
};
</script>

<style>
</style>