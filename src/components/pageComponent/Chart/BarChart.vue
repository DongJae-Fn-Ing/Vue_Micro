<template>
  <Bar id="my-chart-id" :options="chartOptions" :data="chartData" />
  <button @click="asd">asd</button>
</template>

<script>
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);
export default {
  name: "ChartCom",
  computed: {
    pdata() {
      return this.PropsData.map((PropsData) => PropsData.id);
    },
  },
  components: { Bar },

  data() {
    return {
      chartData: {
        labels: ["January", "February", "March"],
        datasets: [{ data: [40, 20, 12] }],
        backgroundColor: "red",
      },
      chartOptions: {
        responsive: true,
      },
    };
  },
  methods: {
    asd() {
      console.log(this.pdata);
    },
  },
  props: {
    PropsData: Array,
  },
};
</script>

<style>
</style>