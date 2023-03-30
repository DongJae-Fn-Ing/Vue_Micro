<template>
  <div
    class="box path-box"
    v-if="BoxData.type === `path` || BoxType === `path`"
  >
    <div class="box-title">
      <h3 :title="BoxData.title || Title">{{ BoxData.title || BoxTitle }}</h3>
    </div>
    <ul class="list scroll-active">
      <li v-for="(routeText, i) in BoxData.route" :key="i">
        <p class="path">{{ routeText.mainPath }}</p>
        <p class="path">{{ routeText.subPath1 }}</p>
        <p class="path">{{ routeText.subPath2 }}</p>
      </li>
    </ul>
  </div>
  <div
    class="box board"
    v-else-if="BoxData.type === `board` || BoxType === `board`"
  >
    <div class="box-title">
      <h3 :title="BoxData.title || Title">{{ BoxData.title || BoxTitle }}</h3>
      <a href="#none" class="see-more">더보기</a>
    </div>
    <ul class="list scroll-active">
      <li v-for="(BoardData, i) in BoxData.boardData" :key="i">
        <p :title="BoardData.boardTitle">{{ BoardData.boardTitle }}</p>
        <span class="notice-date">{{ BoardData.date }}</span>
      </li>
    </ul>
  </div>
  <div
    class="box no-data"
    v-else-if="BoxData.type === `no-data` || BoxType === `no-data`"
  >
    <div class="box-title">
      <h3 :title="BoxData.title || Title">{{ BoxData.title || BoxTitle }}</h3>
    </div>
    <div class="list">
      <h4>
        <img src="./img/ico_warning.png" alt="주의 아이콘" /><br />데이터가
        없어요
      </h4>
    </div>
  </div>
</template>

<script>
export default {
  name: "BoxCom",
  props: {
    BoxData: Object,
    BoxType: String,
    BoxTitle: String,
  },
};
</script>

<style>
.box {
  width: calc(33% - 15px);
  height: 205px;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 4px;
}

.box .box-title {
  display: flex;
  padding: 17px 21px;
  height: 50px;
  border-radius: 4px 4px 0 0;
  border-bottom: 1px solid #ddd;
  background-color: #fff;
  justify-content: space-between;
  align-items: center;
}

.box .box-title h3 {
  color: #000;
  font-size: 18px;
  font-weight: 500;
  line-height: 1;
}

.box .box-title .see-more {
  width: 40px;
  background: url("./img/small_arrow.png") 36px 6px no-repeat;
  color: #666;
  font-size: 12px;
  letter-spacing: -0.5px;
}

.box .list {
  overflow: auto;
  height: 100%;
  background-color: #fff;
  border-radius: 0 0 4px 4px;
  max-height: 153px;
}

/* 경로 상태 박스*/

.path-box .list li {
  display: flex;
  position: relative;
  height: 51px;
  padding-left: 52px;
  align-items: center;
}

.path-box .list li:not(:last-child) {
  border-bottom: 1px dashed #ddd;
}

.path-box .list li::before {
  content: "";
  display: block;
  position: absolute;
  width: 20px;
  height: 19px;
  background: url("./img/star.png") no-repeat center;
  top: 50%;
  left: 21px;
  transform: translateY(-50%);
}

.path-box .list .path {
  position: relative;
  font-weight: 500;
  color: #666;
  letter-spacing: -1.5px;
}

.path-box .list .path:not(:last-child) {
  margin-right: 16px;
}

.path-box .list .path:not(:last-child)::after {
  content: "";
  display: block;
  position: absolute;
  width: 5px;
  height: 7px;
  background: url("./img/small_arrow.png") no-repeat center;
  top: 50%;
  right: -12.5px;
  transform: translateY(-50%);
}

.path-box .list .path:last-child {
  color: #000;
}

/* 게시판 형태 박스 */

.board .list {
  padding: 18px 20px;
}

.board .list li {
  display: flex;
  position: relative;
  padding-left: 14px;
  letter-spacing: -0.5px;
  line-height: 1;
  justify-content: space-between;
}

.board .list li:not(:last-child) {
  margin-bottom: 17px;
}

.board .list li::before {
  content: "";
  display: block;
  position: absolute;
  width: 4px;
  height: 4px;
  border-radius: 4px;
  background-color: #058380;
  top: 50%;
  left: 4px;
  transform: translateY(-50%);
}

.board .list li p {
  overflow: hidden;
  color: #666;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 80%;
}

.list li .notice-date {
  color: #999;
  font-size: 14px;
  white-space: nowrap;
}

.no-data .list {
  position: relative;
}

.no-data .list h4 {
  position: absolute;
  font-size: 30px;
  color: #058380;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  white-space: nowrap;
}

@media (max-width: 1593px) {
  .box {
    width: calc(50% - 15px);
  }
}
@media (max-width: 1280px) {
  .box {
    width: 100%;
  }
}
</style>