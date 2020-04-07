<template>
  <div class="tabbar" >
    <tabbar-item :path="'/home'">
      <!-- <img src="" alt=""> -->
      <div slot="class-name">首页</div>
    </tabbar-item>
    <tabbar-item :path="'/about'">
      <div slot="class-name">关于</div>
    </tabbar-item>
    <tabbar-item :path="'/profile'">
      <div slot="class-name">档案</div>
    </tabbar-item>
    <tabbar-item :path="'/myself'">
      <div slot="class-name">我的</div>
    </tabbar-item>
  </div>
</template>
<script>
import tabbarItem from './tabbar-item.vue'
export default {
  data() {
    return {
      flag: false
    }
  },
  components: {
    tabbarItem
  }
  
}
</script>
<style>
  .tabbar {
    display: flex;
    background-color: #f2f2f2;
    /* 定位到底部 */
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0 -1px 1px rgba(100, 100, 100, .2);
  }
  
  
</style>