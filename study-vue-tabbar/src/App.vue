<template>
  <div id="app">
    <tabbar></tabbar>
    <router-view></router-view>
  </div>
</template>
<script>
import tabbar from './components/tabbar/tabbar.vue'
export default {
  data () {
    return {

    }
  },
  components:{
    tabbar
  }
}
</script>
<style>
  @import './assets/css/base.css';
</style>
