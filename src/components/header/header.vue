<template>
  <div class="header">
    <button class="back" @click="back()">Back</button>{{headerName}}
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  methods: {
    back () {
      this.$router.go(-1)
    }
  },
  computed: {
  // 使用对象展开运算符将 getter 混入 computed 对象中
    ...mapGetters('store', ['headerName'])
  }
}
</script>
<style>
.header {
  line-height: 5vh;
  background: skyblue;
}
</style>
