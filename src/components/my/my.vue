<template>
  <div class="my">
    <div class="header">
      <img :src="imgUrl" alt="头像">
      <span>用户名</span>
    </div>
    <ul>
      <li v-for="(item, index) in wj" :key="index">
        <witem :title="item.title" :intro="item.intro" :mode="mode"></witem>
    </li>
    </ul>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
import witem from '../../base/item/item'
export default {
  data () {
    return {
      page: 'my',
      mode: 'my',
      imgUrl: '../../assets/imgs/avator.jpeg',
      wj: [
        { id: 1, title: 'plaza', intro: '简介' },
        { id: 1, title: 'plaza', intro: '简介' },
        { id: 1, title: 'plaza', intro: '简介' },
        { id: 1, title: 'plaza', intro: '简介' },
        { id: 1, title: 'plaza', intro: '简介' },
        { id: 1, title: 'plaza', intro: '简介' },
        { id: 1, title: 'plaza', intro: '简介' },
        { id: 1, title: 'plaza', intro: '简介' },
        { id: 1, title: 'plaza', intro: '简介' },
        { id: 1, title: 'plaza', intro: '简介' },
        { id: 1, title: 'plaza', intro: '简介' },
        { id: 1, title: 'plaza', intro: '简介' },
        { id: 1, title: 'plaza', intro: '简介' },
        { id: 1, title: 'plaza', intro: '简介' },
        { id: 1, title: 'plaza', intro: '简介' },
        { id: 1, title: 'plaza', intro: '简介' },
        { id: 1, title: 'plaza', intro: '简介' },
        { id: 1, title: 'plaza', intro: '简介' },
        { id: 1, title: 'plaza', intro: '简介' },
        { id: 1, title: 'plaza', intro: '简介' },
        { id: 1, title: 'plaza', intro: '简介' },
        { id: 1, title: 'plaza', intro: '简介' },
        { id: 1, title: 'plaza', intro: '简介' },
        { id: 1, title: 'plaza', intro: '简介' },
        { id: 1, title: 'plaza', intro: '简介' },
        { id: 1, title: 'plaza', intro: '简介' },
        { id: 1, title: 'plaza', intro: '简介' },
        { id: 1, title: 'plaza', intro: '简介' },
        { id: 1, title: 'plaza', intro: '简介' },
        { id: 1, title: 'plaza', intro: '简介' },
        { id: 1, title: 'plaza', intro: '简介' },
        { id: 1, title: 'plaza', intro: '简介' },
        { id: 1, title: 'plaza', intro: '简介' },
        { id: 1, title: 'plaza', intro: '简介' },
        { id: 1, title: 'plaza', intro: '简介' },
        { id: 1, title: 'plaza', intro: '简介' },
        { id: 1, title: 'plaza', intro: '简介' },
        { id: 1, title: 'plaza', intro: '简介' },
        { id: 1, title: 'plaza', intro: '简介' },
        { id: 1, title: 'plaza', intro: '简介' },
        { id: 1, title: 'plaza', intro: '简介' },
        { id: 1, title: 'plaza', intro: '简介' },
        { id: 1, title: 'plaza', intro: '简介' },
        { id: 1, title: 'plaza', intro: '简介' },
        { id: 1, title: 'plaza', intro: '简介' },
        { id: 1, title: 'plaza', intro: '简介' },
        { id: 1, title: 'plaza', intro: '简介' },
        { id: 1, title: 'plaza', intro: '简介' }
      ]
    }
  },
  mounted: function () {
    console.log('update')
    this.setName(this.page)
  },
  components: {
    witem
  },
  methods: {
    ...mapActions('store', ['setName'])
  }
}
</script>
<style lang="less" scoped>
.my {
  text-align: left;
}
.header{
  height: 50px;
  border: 1px solid #000;
  img{
    height: 50px;
    width: 50px;
    border-radius: 50%;
  }
}
</style>
