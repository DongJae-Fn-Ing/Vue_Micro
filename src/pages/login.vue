<template>
 <div class="login-wrap">
  <div class="img-area"></div>
  <div class="login-area">
    <form action="">
      <ul class="login-sub">
        <li>
          <label for="user-id">아이디</label>
          <input type="id" name="user-id" id="user-id">
        </li>
        <li>
          <label for="user-password">비밀번호</label>
          <input type="password" name="user-password" id="user-password">
        </li>    
      </ul>
    </form>
    <div class="login-btn-area">
      <button type="button">로그인</button>
      <button type="button">비밀번호 확인</button>
    </div>
  </div>
 </div>
</template>

<script>

export default {
  name: "LoginPage",
  data() {
    return {
    };
  },
  methods: {},
};
</script>

<style>
</style>