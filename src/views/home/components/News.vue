<template>
  <div id="news">
    <a href="#">
      <img :src="view.imgUrl" alt="">
    </a>
  </div>
</template>

<script>
  export default {
    name: "News",
    props: {
      view: Object
    }
  }
</script>

<style scoped>
  #news img {
    width: 100%;
  }
</style>