<template>
  <scroll class="body" :pulldown="pulldown" @pulldown="loadData" ref="body">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <button class="add">＋</button>
  </scroll>
</template>
<script>
import scroll from '../scroll/scroll'

export default {
  data () {
    return {
      data: [],
      pulldown: true
    }
  },
  created () {
    this.loadData()
  },
  updated () {
    this.$refs.body.refresh()
  },
  methods: {
    loadData () {
      console.log('加载')
    }
  },
  components: {
    scroll
  }
}
</script>
<style>
.body {
  overflow: hidden;
  height: 87vh;
  background: snow;
  position: relative;
}
a{
  text-decoration: none;
}
.add {
  font-size: 2em;
  background: skyblue;
  color: #000;
  position: absolute;
  border: 0;
  text-align: center;
  line-height: 100%;
  bottom: 5%;
  right: 2%;
  height: 50px;
  width: 50px;
  border-radius: 50%;
}
</style>
