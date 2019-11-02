<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    name: "scroll",
    props: {
      probeType: {
        type: Number,
        default: 0
      }
    },
    mounted() {
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true,
        pullUpLoad: true,
        probeType: this.probeType
      })

      this.scroll.on('scroll', (position) => {
        this.$emit('location', position)
      })

      this.scroll.on('pullingUp', () => {
        this.$emit('pullup')
      })

      this.scroll.on('pullingDown', () => {
        this.$emit('pulldown')
      })
    },
    methods: {
      scrollTo(x, y, time=500) {
        this.scroll.scrollTo(x, y, time)
      },
      finishpullup() {
        this.scroll.finishPullUp()
      },
      finishpulldown() {
        this.scroll.finishPullDown()
      },
      refresh() {
        this.scroll.refresh()
      },
      getY() {
        return this.scroll ? this.scroll.y : 0
      }
    }
  }
</script>

<style scoped>

</style>