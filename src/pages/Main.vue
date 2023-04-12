<template>
  <TabBox TabTitle="탭박스 타이틀" :TabData="TabData" @TabKey="TabKey = $event">
    <TabItem
      v-for="(item, i) in TabData[$store.state.tabDataKey].tabItemData"
      :key="i"
      :keyNumber="i"
      :ItemData="item"
    />
  </TabBox>
  <Box v-for="(data, i) in BoxData" :key="i" :BoxData="data" />
  <!-- 단일로 사용할 경우 -->
  <!-- :BoxTitle :BoxType -->
</template>

<script>
import TabBox from "@/components/pageComponent/TabBox";
import TabItem from "@/components/pageComponent/TabItem";
import Box from "@/components/pageComponent/Box/Box";
import tabData from "../assets/data/tabData";
import boxData from "../assets/data/boxData";

export default {
  name: "MainPage",
  data() {
    return {
      TabData: tabData,
      BoxData: boxData,
      TabKey: 0,
    };
  },
  methods: {},
  components: {
    TabBox,
    TabItem,
    Box,
  },
};
</script>

<style>
</style>