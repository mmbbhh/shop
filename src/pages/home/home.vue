<template>
  <div>
    <navbar class="home_navbar">
      <div slot="mid">无名小店</div>
    </navbar>
  </div>
</template>

<script>
  export default {
    name: "home",
    components: {
      navbar: () => import('components/reuse/navbar/navbar')
    }
  }
</script>

<style scoped>
  .home_navbar {
    background-image: var(--background-home-navbar);
    color: white;
    font-size: var(--title-size);
  }
</style>