<template>
  <div class="tabbar-item" @click="btnClick">
    <!-- <slot name="class-icon"></slot> -->
    <slot name="class-name"></slot>
  </div>
</template>
<script>
export default {
  data() {
    return {
      props: {
        path: String
      }
    }
  },
  methods: {
    btnClick() {
      // this.$router.push(this.path);
      console.log(this.props.path)
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
</style>