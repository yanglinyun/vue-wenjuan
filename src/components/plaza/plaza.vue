<template>
<div>
  <!-- <router-view class="name" name="scorll"></router-view> -->
  <!-- <router-view class="name" name="scorll2"></router-view> -->
  <ul class="plaza">
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
      page: 'plaza',
      mode: 'my',
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
    console.log(this.com.jsName())
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
<style></style>
