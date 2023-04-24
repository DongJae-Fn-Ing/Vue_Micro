<template>
    <div class="search-form">
        <form action="">
        <div class="search-form-sub">
          <label for="search">검색</label>
          <Input type="search" name="search" id="search" class="input" style="width: 100%;" placeholder="검색어를 입력하세요."
          />
          <Button className="btn small" type="button">검색</Button>
        </div>
      </form>
    </div>
</template>

<script>
import Input from '../Input';
import Button from '../Button';
export default {
  name: "SearchFrom",
  data(){
   return{
   }
  },
  components: {
    Input,
    Button
  },

};
</script>

<style>

.search-form{
  width: 100%;
  height: 80px;
  background-color: #d9d8d8;
  margin-bottom: 20px;
}

.search-form form{
  width: 100%;
  height: 100%;
}

.search-form form .search-form-sub {
  display: flex;
  width: 100%;
  height: 100%;
  max-width: 800px;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
}
 .search-form-sub label{
  margin-right: 10px;
  color: #000;
  font-weight: bold;
 }

 .search-form-sub .input{
  border-right: none;
  border-radius: 4px 0 0 4px;
 }

 .search-form-sub .btn{
  border-radius: 0 4px 4px 0;
  border-left: none;
 }

@media (max-width: 768px) {

}
</style>