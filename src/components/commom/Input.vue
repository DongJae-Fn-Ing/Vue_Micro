<template>
 <input :type="type" class="input" :class="className" :style="style" :name="name" :placeholder="placeholder"  v-model="inputText" @change="$store.commit('inputData', inputText)">
</template>

<script>
export default {
  name: "inputComponent",
  props: {
    className: String,
    type: String,
    style: String,
    name: String,
    placeholder: String,
  },
  data(){
   return{
    inputText : "",
   }
  },
};
</script>

<style>
.input{
  height: 35px;
  padding-left: 10px;
  background-color: #fff;
  border: 1px solid darkgray;
  border-radius: 4px;
}

input::-webkit-search-decoration,
input::-webkit-search-cancel-button,
input::-webkit-search-results-button,
input::-webkit-search-results-decoration{
    display:none;
}

@media (max-width: 768px) {

}
</style>