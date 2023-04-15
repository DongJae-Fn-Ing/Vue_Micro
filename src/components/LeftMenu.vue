<template>
  <nav class="side-menu" :class="{ close: MenuOnF === false }">
    <div class="side-menu-sub">
      <h1 class="logo">
        <router-link
          to="/"
          @click="
            $store.commit('maintainStore/menuOn', 0),
              $store.commit('reTabDataKey')
          "
          >마이크로 로고</router-link
        >
      </h1>
      <div class="user-info">
        <div class="user-title">
          <p class="user-name">
            {{ UserData[0].name }}(<span :title="UserData[0].id">{{
              UserData[0].id
            }}</span
            >)
          </p>
          <button type="button" class="login-btn">로그아웃</button>
        </div>
        <ul class="user-contact">
          <li>
            <span>M.</span>
            <p class="user-tel" :title="UserData[0].tel">
              {{ UserData[0].tel }}
            </p>
          </li>
          <li>
            <span>E.</span>
            <p class="user-mail" :title="UserData[0].email">
              {{ UserData[0].email }}
            </p>
          </li>
        </ul>
        <ul class="user-login">
          <li>
            <span class="title login">최종로그인</span>
            <span class="date login-date" title=""
              >{{ new Date().toLocaleString("ko-kr") }}
            </span>
          </li>
          <li>
            <span class="title logout">최종로그아웃</span>
            <span class="date logout-date" :title="UserData[0].logout">
              {{ UserData[0].logout }}
            </span>
          </li>
        </ul>
      </div>
      <ul class="gnb-menu scroll-active">
        <li
          v-for="(menu, clickItem) in MenuData"
          :key="clickItem"
          :class="
            $store.state.maintainStore.menuNun === clickItem
              ? `menu-item on`
              : `menu-item`
          "
        >
          <router-link
            :to="menu.link"
            @click="
              $store.commit('maintainStore/menuOn', clickItem),
                $store.commit('reTabDataKey')
            "
            :class="`menu-item-btn ${menu.title}`"
          >
            {{ menu.name }}
          </router-link>
          <!--           <ul class="menu-2dep">
            <li
              :class="
                subMenuOnOFF === false ? `menu-2dep-item` : `menu-2dep-item on`
              "
              v-for="(subMenu, subMenuKey) in menu.content"
              :key="subMenuKey"
            >
              <button type="button" class="menu-2dep-item-btn">
                {{ subMenu }}
              </button>
            </li>
          </ul> -->
        </li>
      </ul>
    </div>
  </nav>
  <nav class="side-menu mobile" :class="{ close: MenuOnF === false }">

  </nav>
</template>

<script>
export default {
  name: "LeftMenu",
  data() {
    return {
      menuNun: 0,
      toggle: "",
      null: "",
      save: "",
      subMenuOnOFF: false,
    };
  },
  methods: {},
  props: {
    MenuData: Object,
    UserData: Object,
    MenuOnF: Boolean,
  },
};
</script>

<style>
.side-menu {
  position: fixed;
  width: 242px;
  height: 100vh;
  background-color: #1a242e;
  transition: all 0.3s ease-in-out;
  top: 0;
  left: 0;
}

.side-menu.close {
  left: -242px;
}

.side-menu .side-menu-sub {
  width: 100%;
  height: 100%;
}
/* side-menu */

.side-menu .side-menu-sub .logo {
  width: 100%;
  height: 60px;
  padding: 16px 58px 12px 44px;
  border-bottom: 1px solid #313a43;
}

.side-menu-sub .logo a {
  display: block;
  width: 100%;
  height: 100%;
  text-indent: -9999px;
  background: url("../assets/img/logo.png") no-repeat center / cover;
}

/* side-menu logo */

.side-menu .user-info {
  width: 100%;
  height: 180px;
  padding: 22px 10px;
}

.user-info .user-title {
  display: flex;
  height: 20px;
  justify-content: space-between;
  align-items: center;
}

.user-info .user-title .user-name,
.user-info .user-title .login-btn {
  color: #fff;
}

.user-info .user-title .user-name {
  overflow: hidden;
  font-weight: 500;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.user-info .user-title .login-btn {
  padding: 0 7px;
  border: 1px solid #fff;
  border-radius: 4px;
  font-size: 12px;
}

.user-info .user-contact {
  margin: 10px 0 13px;
}

.user-info .user-contact li {
  display: flex;
  font-size: 14px;
  line-height: 14px;
}

.user-info .user-contact li:not(:last-child) {
  margin-bottom: 9px;
}

.user-contact li span {
  width: 14px;
  color: #00c8aa;
}

.user-contact li p {
  width: 190px;
  padding: 0 5px;
  margin-left: 9px;
  color: #fff;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.user-info .user-login {
  padding: 10px 0 10px 19px;
  border-radius: 4px;
  background-color: #12181f;
  font-size: 12px;
  color: #fff;
}

.user-login li {
  display: flex;
  position: relative;
}

.user-login li:not(:last-child) {
  margin-bottom: 10px;
}

.user-login li::before {
  content: "";
  display: block;
  position: absolute;
  width: 2px;
  height: 2px;
  border-radius: 2px;
  background-color: #fff;
  top: 50%;
  left: -5px;
  transform: translateY(-50%);
}

.user-login li span {
  height: 13px;
  line-height: 13px;
}

.user-login li .title {
  width: 75px;
}

.user-login li .date {
  overflow: hidden;
  position: relative;
  width: 115px;
  padding-left: 10px;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.user-login li .date::before {
  content: "";
  display: block;
  position: absolute;
  width: 1px;
  height: 10px;
  background-color: #5a5e63;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
}

/* side-menu user info */

.gnb-menu {
  overflow-y: auto;
  max-height: 670px;
}

.gnb-menu .menu-item {
  height: auto;
}

.gnb-menu .menu-item .menu-item-btn {
  display: flex;
  position: relative;
  height: 44px;
  padding: 0 10px 0 45px;
  color: #fff;
  text-align: left;
  align-items: center;
}

.gnb-menu .menu-item .menu-item-btn::before {
  content: "";
  display: block;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.gnb-menu .menu-item .menu-item-btn.user::before {
  width: 16px;
  height: 16px;
  background: url("../assets/img/ico_u.png") no-repeat center/ cover;
  left: 20px;
}

.gnb-menu .menu-item .menu-item-btn.user:hover::before,
.gnb-menu .menu-item.on .menu-item-btn.user::before {
  background: url("../assets/img/ico_u_w.png") no-repeat center/ cover;
}

.gnb-menu .menu-item .menu-item-btn.stats::before {
  width: 20px;
  height: 18px;
  background: url("../assets/img/ico_a.png") no-repeat center/ cover;
  left: 18px;
}

.gnb-menu .menu-item .menu-item-btn.stats:hover::before,
.gnb-menu .menu-item.on .menu-item-btn.stats::before {
  background: url("../assets/img/ico_a_w.png") no-repeat center/ cover;
}

.gnb-menu .menu-item .menu-item-btn.board::before {
  width: 16px;
  height: 20px;
  background: url("../assets/img/ico_b.png") no-repeat center/ cover;
  left: 21px;
}

.gnb-menu .menu-item .menu-item-btn.board:hover::before,
.gnb-menu .menu-item.on .menu-item-btn.board::before {
  background: url("../assets/img/ico_b_w.png") no-repeat center/ cover;
}

.gnb-menu .menu-item .menu-item-btn.setting::before {
  width: 20px;
  height: 20px;
  background: url("../assets/img/ico_s.png") no-repeat center/ cover;
  left: 20px;
}

.gnb-menu .menu-item .menu-item-btn.setting:hover::before,
.gnb-menu .menu-item.on .menu-item-btn.setting::before {
  background: url("../assets/img/ico_s_w.png") no-repeat center/ cover;
}

.gnb-menu .menu-item .menu-item-btn.crud::before {
  width: 20px;
  height: 20px;
  background: url("../assets/img/ico_crud.png") no-repeat center/ cover;
  left: 20px;
}

.gnb-menu .menu-item .menu-item-btn.crud:hover::before,
.gnb-menu .menu-item.on .menu-item-btn.crud::before {
  background: url("../assets/img/ico_crud_w.png") no-repeat center/ cover;
}

/* .gnb-menu .menu-item .menu-item-btn::after {
  content: "";
  display: block;
  position: absolute;
  width: 12px;
  height: 7px;
  background: url("../assets/img/chevron_down.png") no-repeat center / cover;
  top: 50%;
  right: 8px;
  transform: translateY(-50%);
} */

/* .gnb-menu .menu-item .menu-item-btn:hover::after {
  background: url("../assets/img/chevron_down_w.png") no-repeat center / cover;
} */

.gnb-menu .menu-item.on .menu-item-btn,
.gnb-menu .menu-item .menu-item-btn:hover {
  background-color: #00c8aa;
}

.gnb-menu .menu-item.on .menu-item-btn::after {
  background: url("../assets/img/chevron_up.png") no-repeat center / cover;
}

/* .gnb-menu .menu-item .menu-2dep {
  display: none;
  padding: 19px 0 19px 47px;
  background-color: #0f151b;
}

.gnb-menu .menu-item.on .menu-2dep {
  display: block;
}

.menu-2dep .menu-2dep-item .menu-2dep-item-btn {
  position: relative;
  width: 100%;
  height: 100%;
  padding-left: 10px;
  font-size: 12px;
  text-align: left;
  color: #fff;
}

.menu-2dep .menu-2dep-item .menu-2dep-item-btn:hover,
.menu-2dep .menu-2dep-item.on .menu-2dep-item-btn {
  color: #00c8aa;
}

.menu-2dep .menu-2dep-item .menu-2dep-item-btn::before {
  content: "";
  display: block;
  position: absolute;
  width: 5px;
  height: 1px;
  background-color: #fff;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
}
.menu-2dep .menu-2dep-item .menu-2dep-item-btn:hover::before,
.menu-2dep .menu-2dep-item.on .menu-2dep-item-btn::before {
  background-color: #00c8aa;
} */

@media (max-width: 768px){
  .side-menu{
    display: none;
  }
}
</style>