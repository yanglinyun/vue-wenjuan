<template>
  <div id="app">
    <Header></Header>
    <Body></Body>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/header/header'
import Body from './components/body/body'
import Footer from './components/footer/footer'
export default {
  name: 'App',
  components: {
    Header,
    Body,
    Footer
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}
button {
  outline: none;
}
body,
ul,
li,
button{
  margin: 0;
  padding: 0;
}
li{
  list-style: none;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0 auto;
  height: 100vh;
  width: 50%;
  background: rgb(202, 182, 182);
}
@media screen and (max-width: 540px) {
  #app {
    width: 100%;
  }
}
</style>
