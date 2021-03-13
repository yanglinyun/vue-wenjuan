<template>
  <div class="footer">
    <button><router-link to="/plaza">问卷广场</router-link></button>
    <button><router-link to="/my">我的问卷</router-link></button>
  </div>
</template>
<script>
export default {}
</script>
<style>
.footer{
     height: 8vh;
     background: skyblue;
     display: flex;
     justify-content: space-around;
     align-items: center;
}
.footer button{
    width: 50%;
    border: 0;
    outline: none;
    background: transparent;
    height: 100%;
}
.footer button:nth-child(1){
  border-right: 2px solid #fff;
}
</style>
