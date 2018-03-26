<template>
  <div id="app">
    <Header></Header>

    <!-- それぞれのページを読み込み -->
    <div class="container">
      <router-view/>
    </div>

    <div class="footer">
      <div class="footer-logo">Hello WORLD!</div>
      <ul>
        <li><a href="" target="_blank">TOP</a></li>
        <li><a href="" target="_blank">Document</a></li>
        <li><a href="" target="_blank">GitHub</a></li>
      </ul>
    </div>

  </div>
</template>

<script>
import Header from './components/header'

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
  //background-color: #DDD;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}

.footer {
  position: absolute;
  height: 120px;
  width: 100vw;
  bottom: 0;
  background-color: #EEE;
  border-top: 8px solid #CCC;
  .footer-logo {
    position: absolute;
    left: 0;
    display: inline-block;
    font-size: 1.8rem;
    padding: 20px 40px;
    color: #43b983;
    text-shadow: 1px 1px 3px #000;
  }
  ul {
    float: right;
    display: inline-block;
    list-style-type: none;
  }
  li {
    padding: 5px 10px;
  }
  a {
    color: #43b983;
  }
}
</style>
