<template>
  <div class="profile">
    <!--<mlogin v-show="!iflogin"/>-->
    <mresign/>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: "profile",
    data() {
      return {
        user: '用户名',
        password: '密码'
      }
    },
    computed: {
      ...mapGetters([
        'iflogin'
      ])
    },
    components: {
      mlogin: () => import('./etc/login'),
      mresign: () => import('./etc/resign')
    },
    methods: {
      login(user, password) {
        test.test(user, password).then(res => {
          console.log(res)
        })
      }
    }
  }
</script>

<style scoped>

</style>