<template>
  <div class="paging">
    <ul class="page-list">
      <li class="page-item-prev">
        <button
          type="button"
          @click="pageSetting.first !== null ? sendPage(pageSetting.first) : ''"
          title="테이블 이전 버튼"
        >
          prevs
        </button>
      </li>
      <li
        class="page-item"
        :class="{ on: page === pageSetting.currentPage }"
        v-for="page in pageSetting.list"
        :key="page"
        @click="sendPage(page)"
      >
        <button type="button" :title="page">{{ page }}</button>
      </li>
      <li class="page-item-next">
        <button
          type="button"
          @click="pageSetting.end !== null ? sendPage(pageSetting.end) : ''"
          title="테이블 다음 버튼"
        >
          next
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "PaginationCom",
  props: ["pageSetting"],
  methods: {
    sendPage(page) {
      this.$emit("paging", page);
    },
  },
};
</script>

<style>
.paging {
  width: 100%;
  margin-top: 20px;
}

.paging .page-list {
  display: flex;
  justify-content: center;
}

.paging .page-list li {
  width: 30px;
  height: 30px;
  border: 1px solid #ddd;
  font-size: 12px;
}

.paging .page-list li:not(:last-child) {
  margin-right: 5px;
}

.page-list li button {
  width: 100%;
  height: 100%;
}

.page-list .page-item.on,
.page-list .page-item:hover {
  border-color: #009894;
}

.page-list .page-item.on button,
.page-list .page-item:hover button {
  color: #009894;
  font-weight: bold;
  text-decoration: underline;
}

.page-item-prev button,
.page-item-next button {
  overflow: hidden;
  text-indent: -9999px;
}
.page-item-prev button,
.page-item-next button {
  background: url("./img/ico_arrow.png") no-repeat center;
}
.page-item-next button {
  transform: rotateZ(180deg);
}
</style>