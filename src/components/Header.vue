<template>
  <header class="header">
    <Button
      :className="MenuOnF === true ? `ico m-open` : `ico m-close`"
      type="button"
      @click="MenuChange(), $emit(`MenuChange`, MenuData)"
      >사이드 메뉴 제어 아이콘</Button
    >
    <ul class="header-ico-area">
      <li><Button className="ico info" type="button">정보 아이콘</Button></li>
      <li>
        <Button className="ico setting" type="button">셋팅 아이콘</Button>
      </li>
      <li><Button className="ico user" type="button">유저 아이콘</Button></li>
    </ul>
  </header>
</template>

<script>
import Button from "../components/commom/Button";
export default {
  name: "HeaderComponent",
  data() {
    return {
      MenuData: "",
    };
  },
  components: {
    Button,
  },
  props: {
    MenuOnF: Boolean,
  },
  methods: {
    MenuChange() {
      this.MenuData = !this.MenuOnF;
    },
  },
};
</script>

<style>
.header {
  display: flex;
  position: sticky;
  width: 100%;
  height: 60px;
  padding: 0 40px;
  background-color: #fff;
  align-items: center;
  justify-content: space-between;
  top: 0;
  z-index: 1;
}

.header .header-ico-area {
  display: flex;
  align-items: center;
}

.header .header-ico-area li:not(:last-child) {
  margin-right: 33px;
}
</style>