<template>
  <PageTitle
    Title="게시판 타이틀"
    Path1="경로1"
    Path2="경로2"
    PathLast="게시판"
  />
  <div class="content-box">
    <SearchFrom/>
    <Table
      :Caption="`웹접근성 테이블 설명`"
      :Header="header"
      :TableData="TableData"
    />
    <Pagination
      :pageSetting="pageDataSetting(total, limit, block, this.page)"
      @paging="pagingMethod"
    />
  </div>
</template>

<script>
import PageTitle from "@/components/commom/PageTitle/PageTitle";
import Table from "@/components/commom/Table/Table";
import Pagination from "@/components/commom/Pagination/Pagination";
import SearchFrom from "@/components/commom/SearchFrom/SearchFrom";
import axios from "axios";
export default {
  name: "TablePage",
  data() {
    return {
      header: [
        {
          title: "id",
          value: "id",
          width: "5%",
          titleAlign: "cetner",
          /*           align: "ceter", */
        },
        {
          title: "userId",
          value: "userId",
          width: "5%",
          titleAlign: "cetner",
          /*           align: "cetner", */
        },
        {
          title: "title",
          value: "title",
          width: "80%",
          titleAlign: "cetner",
          align: "left",
        },
        {
          title: "completed",
          value: "completed",
          width: "10%",
          titleAlign: "cetner",
          /* align: "cetner", */
        },
      ] /* 여기는 props 받을 예정 */,
      TableData: [],
      listData: [],
      total: "",
      page: 1,
      limit: 10,
      block: 5,
    };
  },
  computed: {
    /* value 순서에 맞게 테이블 데이터를 출력하기 위한 배열 */
    headerKey() {
      return this.header.map((header) => header.value);
    },
  },
  mounted() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((response) => {
        this.TableData = response.data;
        this.listData = [...this.TableData];
        this.total = response.data.length;
        console.log("::토탈", this.total);
        console.log(":::엑시오스 데이터", this.TableData);
      })
      .catch((error) => {
        console.log("엑시오스 에러", error);
      })
      .then(() => {
        /* 항상 실행되는 지역 */
      });

    this.pagingMethod(this.page);
  },
  methods: {
    pagingMethod(page) {
      this.TableData = this.listData.slice(
        (page - 1) * this.limit,
        page * this.limit
      );
      this.page = page;
      this.pageDataSetting(this.total, this.limit, this.block, page);
    },

    pageDataSetting(total, limit, block, page) {
      const totalPage = Math.ceil(total / limit);
      let currentPage = page;
      const first =
        currentPage > 1 ? parseInt(currentPage, 10) - parseInt(1, 10) : null;
      const end =
        totalPage !== currentPage
          ? parseInt(currentPage, 10) + parseInt(1, 10)
          : null;

      let startIndex = (Math.ceil(currentPage / block) - 1) * block + 1;
      let endIndex =
        startIndex + block > totalPage ? totalPage : startIndex + block - 1;
      let list = [];
      for (let index = startIndex; index <= endIndex; index++) {
        list.push(index);
      }
      return { first, end, list, currentPage };
    },
  },
  components: {
    PageTitle,
    Pagination,
    Table,
    SearchFrom,
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
}





</style>