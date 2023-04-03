<template>
  <div>
    <h3>
      {{
        TabData[$store.state.tabDataKey].tabItemData[$route.params.id - 1].title
      }}
    </h3>
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
</style>