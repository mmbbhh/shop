<template>
  <div id="tab_control">
    <div v-for="(item,index) in title" class="item" @click="select(index)">
      <span :class="{selected: index == target}">{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "tabcontrol",
    data() {
      return {
        target: 0
      }
    },
    props: {
      title: {
        type: Array,
        default() {
          return ['流行','新款','精选']
        }
      }
    },
    methods: {
      select(index) {
        this.target = index
        this.$emit('tabclick', index)
      }
    }
  }
</script>

<style scoped>
  #tab_control {
    display: flex;
    text-align: center;
    font-size: 15px;
    background: #FFFFFF;
  }

  .item {
    flex: 1;
    height: 40px;
    line-height: 40px;
  }

  .item span {
    padding: 5px;
  }

  .selected {
    color: var(--font-color);
    border-bottom: var(--font-color) 3px solid;
  }
</style>