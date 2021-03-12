<template>
  <div class="header">
    {{ headerName }}
  </div>
</template>
<script>
export default {
  computed: {
    headerName () {
      return this.$store.state.headerName
    }
  }
}
</script>
<style>
.header {
  line-height: 5vh;
  background: skyblue;
}
</style>
