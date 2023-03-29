<template>
  <div class="tab-box">
    <div class="tab-title">
      <h2>{{ TabTitle }}</h2>
      <ul class="tab-list">
        <li
          v-for="(data, titleKey) in TabData"
          :class="TabList === titleKey ? 'on' : ''"
          :key="titleKey"
        >
          <button
            type="button"
            @click="tabClick(titleKey), $emit(`TabKey`, titleKey)"
            :title="data.title"
          >
            {{ data.title }}
          </button>
        </li>
      </ul>
    </div>
    <div class="tab-content scroll-active">
      <ul class="tab-content-list">
        <slot></slot>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBox",
  data() {
    return {
      TabList: 0,
    };
  },
  methods: {
    tabClick(titleKey) {
      this.TabList = titleKey;
      console.log(this.TabList);
    },
  },
  props: {
    TabTitle: String,
    TabData: Object,
  },
};
</script>

<style>
.tab-box {
  overflow: hidden;
  width: 100%;
  height: 591px;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 4px;
}

.tab-box .tab-title {
  display: flex;
  height: 51px;
  padding: 0 20px;
  border-bottom: 1px solid #ddd;
  border-radius: 4px 4px 0 0;
  background-color: #fff;
  justify-content: space-between;
  align-items: center;
}

.tab-box .tab-title h2 {
  font-size: 18px;
  font-weight: 500;
  color: #000;
}

.tab-box .tab-title .tab-list {
  display: flex;
  height: 100%;
}

.tab-title .tab-list li {
  position: relative;
  width: 160px;
  height: 100%;
}

.tab-list li button {
  width: 100%;
  height: 100%;
  text-align: center;
  font-weight: 500;
  color: #666;
}

.tab-list li.on::after,
.tab-list li:hover::after {
  content: "";
  display: block;
  position: absolute;
  width: 100%;
  height: 1px;
  background-color: #058380;
  left: 0;
  bottom: -1px;
}

.tab-list li.on button,
.tab-list li:hover button {
  color: #058380;
}

.tab-box .tab-content {
  overflow-y: auto;
  padding: 20px;
  height: 538px;
  background-color: #fff;
  border-radius: 0 0 4px 4px;
  max-height: 538px;
}

.tab-box .tab-content .tab-content-list {
  display: flex;
  flex-wrap: wrap;
  gap: 22px 20px;
}
@media (max-width: 1280px) {
  .tab-box .tab-title {
    display: block;
    height: auto;
  }
  .tab-box .tab-title h2 {
    height: 45px;
    line-height: 45px;
  }
  .tab-box .tab-title .tab-list {
    width: 100%;
    height: 45px;
  }
  .tab-title .tab-list li {
    width: 25%;
  }
}
</style>