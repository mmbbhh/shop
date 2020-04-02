<template>
  <div id="main">
    <div id="desc" v-html="html"></div>
  </div>
</template>

<script>
  export default {
    name: "GoodsDesc",
    props: {
      html: String
    }
  }
</script>

<style scoped>
  #main {
    box-shadow: 0 5px 5px rgba(100, 100, 100, 0.1);
  }

  #desc >>> p {
    margin: 15px;
  }

  #desc >>> img{
    width: 100%;
    margin-bottom: -18px;

  }
</style>