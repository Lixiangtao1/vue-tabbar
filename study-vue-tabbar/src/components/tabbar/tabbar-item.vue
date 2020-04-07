<template>
  <div class="tabbar-item" @click="btnClick" :class="{'isActive': colorChange}">
    <!-- <slot name="class-icon"></slot>  底部tabbar文字上方的图标 -->
    <slot name="class-name"></slot>
  </div>
</template>
<script>
export default {
  data() {
    return {
      
    }
  },
  props: {
    path: String
  },
  created(){
    // console.log(this.$route.path);
    // console.log(this.path === this.$route.path);
  },
  computed: {
    colorChange() {
      // 判断当前路由this.path 是否能在活跃路由中找到, 找到(不等于-1)即为当前路由 返回值为true显示isActive类
      return this.$route.path.indexOf(this.path) !== -1;
    }
  },
  methods: {
    btnClick() {
      this.$router.push(this.path);
      console.log(this.path)
    }
  },
}
</script>
<style>
  /* @import './../assets/css/base.css'; */
  .tabbar-item {
    flex: 1;
    height: 49px;
    text-align: center;
  }
  .isActive {
    color: red;
  }
</style>