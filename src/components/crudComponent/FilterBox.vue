<template>
  <div
    @click="fire"
    :class="filterClass + ` filter-item`"
    :style="{ background: `url(${uploadFile}) no-repeat center / cover` }"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "FilterBox",

  props: {
    uploadFile: String,
    filterClass: String,
  },
  methods: {
    fire() {
      this.emitter.emit("filterClassData", this.filterClass);
    },
  },
};
</script>

<style>
.filter-item {
  display: inline-block;
  width: 100px;
  height: 100px;
  margin: 10px 10px 10px auto;
  padding: 8px;
  color: white;
  cursor: pointer;
  background-size: cover;
  background-position: center;
}
</style>