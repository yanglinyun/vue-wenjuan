<template>
  <ul class="my">
    <li v-for="(item, index) in wj" :key="index">
      {{ item.title }}
    </li>
  </ul>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      page: 'my',
      wj: [
        { id: 1, title: 'my', intro: '简介' },
        { id: 1, title: 'my', intro: '简介' },
        { id: 1, title: 'my', intro: '简介' },
        { id: 1, title: 'my', intro: '简介' },
        { id: 1, title: 'my', intro: '简介' },
        { id: 1, title: 'my', intro: '简介' },
        { id: 1, title: 'my', intro: '简介' },
        { id: 1, title: 'my', intro: '简介' },
        { id: 1, title: 'my', intro: '简介' },
        { id: 1, title: 'my', intro: '简介' },
        { id: 1, title: 'my', intro: '简介' },
        { id: 1, title: 'my', intro: '简介' },
        { id: 1, title: 'my', intro: '简介' },
        { id: 1, title: 'my', intro: '简介' },
        { id: 1, title: 'my', intro: '简介' },
        { id: 1, title: 'my', intro: '简介' },
        { id: 1, title: 'my', intro: '简介' },
        { id: 1, title: 'my', intro: '简介' },
        { id: 1, title: 'my', intro: '简介' },
        { id: 1, title: 'my', intro: '简介' },
        { id: 1, title: 'my', intro: '简介' },
        { id: 1, title: 'my', intro: '简介' },
        { id: 1, title: 'my', intro: '简介' },
        { id: 1, title: 'my', intro: '简介' },
        { id: 1, title: 'my', intro: '简介' },
        { id: 1, title: 'my', intro: '简介' },
        { id: 1, title: 'my', intro: '简介' },
        { id: 1, title: 'my', intro: '简介' },
        { id: 1, title: 'my', intro: '简介' },
        { id: 1, title: 'my', intro: '简介' },
        { id: 1, title: 'my', intro: '简介' },
        { id: 1, title: 'my', intro: '简介' },
        { id: 1, title: 'my', intro: '简介' },
        { id: 1, title: 'my', intro: '简介' },
        { id: 1, title: 'my', intro: '简介' },
        { id: 1, title: 'my', intro: '简介' },
        { id: 1, title: 'my', intro: '简介' },
        { id: 1, title: 'my', intro: '简介' },
        { id: 1, title: 'my', intro: '简介' },
        { id: 1, title: 'my', intro: '简介' },
        { id: 1, title: 'my', intro: '简介' },
        { id: 1, title: 'my', intro: '简介' },
        { id: 1, title: 'my', intro: '简介' },
        { id: 1, title: 'my', intro: '简介' },
        { id: 1, title: 'my', intro: '简介' },
        { id: 1, title: 'my', intro: '简介' },
        { id: 1, title: 'my', intro: '简介' },
        { id: 1, title: 'my', intro: '简介' }
      ]
    }
  },
  mounted: function () {
    console.log('update')
    this.setName(this.page)
  },
  methods: {
    ...mapActions('store', ['setName'])
  }
}
</script>
<style></style>
