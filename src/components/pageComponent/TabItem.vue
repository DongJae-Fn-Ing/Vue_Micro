<template>
  <li class="list-item">
    <div class="item-img">
      <img :src="ItemData.img" :alt="ItemData.alt" />
    </div>
    <div class="item-content">
      <h3
        class="item-title"
        :title="ItemData.title"
        @click="$router.push(`/mainDetail/` + ItemData.itemId)"
      >
        {{ ItemData.title }}
      </h3>
      <ul class="item-info">
        <li :title="ItemData.itemInfo1">{{ ItemData.itemInfo1 }}</li>
        <li :title="ItemData.itemInfo2">{{ ItemData.itemInfo2 }}</li>
      </ul>
      <button
        type="button"
        class="btn"
        :class="ItemData.itemState === true ? '' : 'disabled' "
        @click="$store.commit('tabItem', keyNumber)"
      >
        {{ ItemData.itemState === true ? "활성화" : "비활성화" }}
      </button>
    </div>
  </li>
</template>

<script>
export default {
  name: "TabItem",
  data() {
    return {
      stateChange: ""
    };
  },
  props: {
    ItemData: Object,
    keyNumber: Number,
  },
  methods: {
  },
};
</script>

<style>
.list-item {
  display: flex;
  width: calc(33% - 40px);
}

.list-item .item-img {
  position: relative;
  width: 200px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.list-item .item-img img {
  width: 100%;
}

.list-item .item-img:hover::before {
  content: "";
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  border: 2px solid #058380;
  border-radius: 4px;
  top: -2px;
  left: -2px;
}

.list-item .item-img:hover + .item-content .item-title {
  color: #058380;
}

.list-item .item-content {
  width: calc(100% - 220px);
  margin-left: 20px;
}

.item-content .item-title {
  overflow: hidden;
  margin: 10px 0;
  color: #000;
  font-size: 16px;
  font-weight: 500;
  line-height: 1;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: pointer;
}

.item-content .item-title:hover {
  color: #058380;
}

.item-content .item-info {
  width: 100%;
  margin-bottom: 40px;
}

.item-content .item-info li {
  overflow: hidden;
  position: relative;
  width: 100%;
  padding-left: 15px;
  font-size: 14px;
  color: #666;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.item-content .item-info li::before {
  content: "";
  display: block;
  position: absolute;
  width: 4px;
  height: 4px;
  border-radius: 4px;
  background-color: #058380;
  top: 50%;
  left: 4px;
  transform: translateY(-50%);
}

.item-content .btn {
  padding: 0 10px;
  width: 70px;
  height: 28px;
  border-radius: 4px;
  background-color: #058380;
  color: #fff;
  font-size: 14px;
}
.item-content .btn.disabled {
  background-color: #666;
}

@media (max-width: 1593px) {
  .list-item {
    width: calc(50% - 40px);
  }
}

@media (max-width: 1100px) {
  .list-item {
    width: 100%;
  }
}
</style>