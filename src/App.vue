<template>
  <div id='app'>
    <Header></Header>
    <Scroll class='body' :pulldown='pulldown' @pulldown='loadData' ref='body'>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
      <button class='add' :style="{ display: headerName!=='login'?'block':'none'}">＋</button>
    </Scroll>
    <Footer></Footer>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Header from './components/header/header'
import Scroll from './components/scroll/scroll'
import Footer from './components/footer/footer'
export default {
  name: 'App',
  data () {
    return {
      isaddshow: true,
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
  computed: {
  // 使用对象展开运算符将 getter 混入 computed 对象中
    ...mapGetters('store', ['headerName'])
  },
  methods: {
    loadData () {
      console.log('加载')
    }
  },
  components: {
    Header,
    Scroll,
    Footer
  }
}
</script>
<style>
</style>
