<template>
  <div class="header">
    {{headerName}}
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
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
