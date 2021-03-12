<template>
  <ul class="my">
      my
    <li v-for="(item, index) in wj" :key="index">
      {{ item.title }}
    </li>
  </ul>
</template>
<script>
export default {
  data () {
    return {
      page: 'plaza',
      wj: [
        { id: 1, title: '标题', intro: '简介' },
        { id: 1, title: '标题', intro: '简介' },
        { id: 1, title: '标题', intro: '简介' },
        { id: 1, title: '标题', intro: '简介' },
        { id: 1, title: '标题', intro: '简介' },
        { id: 1, title: '标题', intro: '简介' },
        { id: 1, title: '标题', intro: '简介' },
        { id: 1, title: '标题', intro: '简介' },
        { id: 1, title: '标题', intro: '简介' },
        { id: 1, title: '标题', intro: '简介' },
        { id: 1, title: '标题', intro: '简介' },
        { id: 1, title: '标题', intro: '简介' },
        { id: 1, title: '标题', intro: '简介' },
        { id: 1, title: '标题', intro: '简介' },
        { id: 1, title: '标题', intro: '简介' },
        { id: 1, title: '标题', intro: '简介' },
        { id: 1, title: '标题', intro: '简介' },
        { id: 1, title: '标题', intro: '简介' },
        { id: 1, title: '标题', intro: '简介' },
        { id: 1, title: '标题', intro: '简介' },
        { id: 1, title: '标题', intro: '简介' },
        { id: 1, title: '标题', intro: '简介' },
        { id: 1, title: '标题', intro: '简介' },
        { id: 1, title: '标题', intro: '简介' },
        { id: 1, title: '标题', intro: '简介' },
        { id: 1, title: '标题', intro: '简介' },
        { id: 1, title: '标题', intro: '简介' },
        { id: 1, title: '标题', intro: '简介' },
        { id: 1, title: '标题', intro: '简介' },
        { id: 1, title: '标题', intro: '简介' },
        { id: 1, title: '标题', intro: '简介' },
        { id: 1, title: '标题', intro: '简介' },
        { id: 1, title: '标题', intro: '简介' },
        { id: 1, title: '标题', intro: '简介' },
        { id: 1, title: '标题', intro: '简介' },
        { id: 1, title: '标题', intro: '简介' },
        { id: 1, title: '标题', intro: '简介' },
        { id: 1, title: '标题', intro: '简介' },
        { id: 1, title: '标题', intro: '简介' },
        { id: 1, title: '标题', intro: '简介' },
        { id: 1, title: '标题', intro: '简介' },
        { id: 1, title: '标题', intro: '简介' },
        { id: 1, title: '标题', intro: '简介' },
        { id: 1, title: '标题', intro: '简介' },
        { id: 1, title: '标题', intro: '简介' },
        { id: 1, title: '标题', intro: '简介' },
        { id: 1, title: '标题', intro: '简介' },
        { id: 1, title: '标题', intro: '简介' }
      ]
    }
  },
  updated () {
    this.$store.commit('changePage'.this.data.page)
  }
}
</script>
<style></style>
