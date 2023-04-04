<template>
  <div class="detail-box">
    <div class="detail-title">
      <h3>
        {{
          TabData[$store.state.tabDataKey].tabItemData[$route.params.id - 1]
            .title
        }}
      </h3>

      <button type="button" @click="$router.go(-1)">뒤로가기</button>
    </div>
    <div class="detail-content">
      <p>
        {{
          TabData[$store.state.tabDataKey].tabItemData[$route.params.id - 1]
            .itemInfo1
        }}
      </p>
      <p>
        {{
          TabData[$store.state.tabDataKey].tabItemData[$route.params.id - 1]
            .itemInfo2
        }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainDetail",
  props: {
    TabData: Object,
  },
};
</script>

<style>
.detail-box {
  width: 100%;
  height: 100%;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #fff;
}

.detail-box .detail-title {
  display: flex;
  height: 100px;
  padding: 0 20px;
  border-bottom: 1px solid #ddd;
  align-items: center;
  justify-content: space-between;
}

.detail-box .detail-title h3 {
  font-size: 28px;
}

.detail-box .detail-content {
  padding: 20px;
  min-height: 630px;
}
</style>