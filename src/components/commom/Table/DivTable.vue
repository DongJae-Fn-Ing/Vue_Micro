<template>
  <div class="div-table">
    <div class="row" v-for="(Data, i) in TableData" :key="i">
      <div class="row-title">{{ Data.id }}</div>
      <div class="row-content" :title="Data.title">{{ Data.title }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DivTable",
  props: {
    TableData: String,
  },
};
</script>

<style>
.div-table {
  width: 100%;
  border-top: 2px solid #000;
}

.div-table .row {
  display: flex;
  width: 100%;
}
.div-table .row > div {
  padding: 13px 20px;
}

.div-table .row .row-title {
  width: 200px;
  background-color: #f3f5f0;
  border-bottom: 1px solid #ddd;
  font-weight: bold;
}

.div-table .row .row-content {
  overflow: hidden;
  width: calc(100% - 200px);
  background-color: #fff;
  border-bottom: 1px solid #ddd;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>