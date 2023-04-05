<template>
  <div class="inner-box">
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

.inner-box .detail-title {
  display: flex;
  height: 100px;
  padding: 0 20px;
  border-bottom: 1px solid #ddd;
  align-items: center;
  justify-content: space-between;
}

.inner-box .detail-title h3 {
  font-size: 28px;
}

.inner-box .detail-content {
  padding: 20px;
  min-height: 630px;
}
</style>