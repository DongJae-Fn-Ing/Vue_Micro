<template>
  <div class="table-box">
    <table class="table">
      <caption class="hidden">
        {{
          Caption
        }}
      </caption>
      <thead>
        <tr>
          <th
            v-for="(Header, i) in Header"
            :style="{ width: Header.width, textAlign: Header.titleAlign }"
            :key="i"
          >
            {{ Header.title }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(Data, i) in TableData" :key="i">
          <td
            v-for="(Key, a) in headerKey"
            :key="Key + i"
            :title="Data[Key]"
            :style="{ textAlign: alignKey[a] }"
          >
            <!--          <a href="" v-if="Data[Key] === title">{{ Data[Key] }}</a> -->
            <p>{{ Data[Key] }}</p>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "TableCom",
  computed: {
    /* value 순서에 맞게 테이블 데이터를 출력하기 위한 배열 */
    headerKey() {
      return this.Header.map((Header) => Header.value);
    },
    alignKey() {
      return this.Header.map((Header) => Header.align);
    },
  },
  methods: {},
  mounted() {
    console.log(":::테스트", Object.keys(this.alignKey));
  },
  props: {
    Caption: String,
    Header: Array,
    TableData: Array,
  },
};
</script>

<style>
.table-box {
  overflow: hidden;
  max-height: 552px;
}

.table-box .table {
  width: 100%;
  height: 100%;
  border-top: 2px solid #000;
}

tr th,
tr td {
  height: 50px;
  padding: 5px 10px;
  vertical-align: middle;
  line-height: 1;
}

thead tr th {
  background-color: rgb(248, 248, 248);
}

thead tr th:not(:last-child),
tbody tr td:not(:last-child) {
  border-right: 1px solid rgb(221, 221, 221);
}

tbody tr:hover td {
  background-color: rgb(237, 248, 245);
}

tbody tr td {
  overflow: hidden;
  border-bottom: 1px solid rgb(221, 221, 221);
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: center;
}
</style>