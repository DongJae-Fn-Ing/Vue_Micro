<template>
  <PageTitle
    Title="페이지 타이틀"
    Path1="경로1"
    Path2="경로2"
    PathLast="마지막"
  />
  <div class="chart-box big">
    <div class="chart-box-title">
      <h3>박스타이틀</h3>
    </div>
    <div class="chart-box-content">
      <BarChart :PropsData="TableData" />
      <DivTable :TableData="TableData" />
    </div>
  </div>
  <!--     <div class="chart-box middle">
    
  </div>
    <div class="chart-box small">
    
  </div> -->
</template>

<script>
import PageTitle from "@/components/commom/PageTitle/PageTitle";
import DivTable from "@/components/commom/Table/DivTable";
import BarChart from "@/components/pageComponent/Chart/BarChart";
import axios from "axios";
export default {
  name: "ChartPage",
  data() {
    return {
      TableData: "",
    };
  },
  mounted() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        this.TableData = response.data.slice(0, 5);
        console.log(":::엑시오스 데이터", this.TableData);
      })
      .catch((error) => {
        console.log("엑시오스 에러", error);
      })
      .then(() => {
        /* 항상 실행되는 지역 */
      });
  },
  components: {
    PageTitle,
    DivTable,
    BarChart,
  },
};
</script>

<style>
.chart-box {
  width: 100%;
  height: 350px;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 4px;
}
.chart-box .chart-box-title {
  display: flex;
  height: 50px;
  padding: 17px 21px;
  border-radius: 4px 4px 0 0;
  border-bottom: 1px solid #ddd;
  background-color: #fff;
  justify-content: space-between;
  align-items: center;
}
.chart-box .chart-box-title h3 {
  color: #000;
  font-size: 18px;
  font-weight: 500;
  line-height: 1;
}

.chart-box .chart-box-content {
  display: flex;
  padding: 20px;
  height: calc(100% - 50px);
  background-color: #fff;
  border-radius: 0 0 4px 4px;
  justify-content: space-between;
  align-items: center;
}

.chart-box-content > div {
  width: calc(50% - 15px);
  height: 100%;
}
</style>