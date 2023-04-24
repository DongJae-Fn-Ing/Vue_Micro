<template>
  <button :type="type" :class="className"><slot></slot></button>
</template>

<script>
export default {
  name: "buttonComponent",
  props: {
    className: String,
    type: String,
  },
};
</script>

<style>

.btn{
  height: 40px;
  padding: 0 15px;
  color: #fff;
  font-weight: bold;
  background-color: #009894;
  border: 1px solid #009894;
  border-radius: 4px;
}

.btn.small{
  height: 35px;
  padding: 0 10px;
  font-weight: normal;
  font-size: 14px;
}

.ico {
  width: 24px;
  height: 24px;
  text-indent: -9999px;
}

.ico.m-open {
  width: 24px;
  height: 16px;
  background: url("../../assets/img/ico_menu_open.png") no-repeat center / cover;
}

.ico.m-close {
  overflow: hidden;
  width: 24px;
  height: 16px;
  background: url("../../assets/img/ico_menu_open.png") no-repeat center / cover;
  transform: rotateY(180deg);
}

.ico.info {
  width: 25px;
  height: 27px;
  background: url("../../assets/img/ico_info.png") no-repeat center / cover;
}
.ico.setting {
  background: url("../../assets/img/ico_setting.png") no-repeat center / cover;
}
.ico.user {
  background: url("../../assets/img/ico_user.png") no-repeat center / cover;
}

@media (max-width: 768px) {
  .ico.m-open{
    transform: rotateZ(90deg);
  }

  .ico.m-close {
  transform: rotateZ(-90deg);
}
}
</style>