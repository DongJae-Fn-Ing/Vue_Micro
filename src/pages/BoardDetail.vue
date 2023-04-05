<template>
  <div class="inner-box">
    <h3>게시판 타이틀{{ $route.params.id }}</h3>
    <p>게시판 콘텐츠{{ $route.params.id }}</p>
  </div>
</template>

<script>
export default {
  name: "BoardDetail",
};
</script>

<style>
</style>