<template>
  <div class="page-title-area">
    <h2 class="page-title" :title="Title">{{ Title }}</h2>
    <ul class="page-router">
      <li>{{ Path1 }}</li>
      <li>{{ Path2 }}</li>
      <li>{{ PathLast }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "PageTitle",
  props: {
    Title: String,
    Path1: String,
    Path2: String,
    PathLast: String,
  },
};
</script>

<style>
.page-title-area {
  display: flex;
  width: 100%;
  height: 38px;
  margin-bottom: 20px;
  justify-content: space-between;
  align-items: center;
}

.page-title-area .page-title {
  font-size: 26px;
  white-space: nowrap;
}

.page-title-area .page-router {
  display: flex;
}

.page-router li {
  position: relative;
  color: #666;
  font-weight: 500;
  letter-spacing: -0.5px;
}

.page-router li:last-child {
  color: #009894;
  font-weight: bold;
}

.page-router li:not(:last-child) {
  margin-right: 20px;
}

.page-router li:not(:last-child)::after {
  content: "";
  display: block;
  position: absolute;
  width: 5px;
  height: 7px;
  background: url("./img/small_arrow.png") no-repeat center;
  top: 55%;
  right: -13px;
  transform: translateY(-50%);
}
</style>