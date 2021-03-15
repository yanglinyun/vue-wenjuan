<template>
  <div id='app'>
    <Header></Header>
    <Scroll class='body' :pulldown='pulldown' @pulldown='loadData' ref='body'>
      <keep-alive>
        <router-view @refresh="refresh"></router-view>
      </keep-alive>
      <button class='add' @click="add" :style="{ display: (headerName!=='login' && headerName!=='wenjuan')?'block':'none'}">＋</button>
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
    refresh (height) {
      this.$refs.body.refresh()
      console.log(height)
      // this.$refs.body.scrollTo(0, height, 0)
    },
    add () {
      this.$router.push({name: 'add'})
    },
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
