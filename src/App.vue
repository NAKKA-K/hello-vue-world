<template>
  <div id="app">
    <div class="header">
      <img class="img" src="./assets/logo.png">
      <p class="title">Hello <span>Vue</span> WORLD!</p>
    </div>

    <!-- それぞれのページを読み込み -->
    <div class="container">
      <router-view/>
    </div>

    <div class="footer">
      <h2>Hello WORLD!</h2>
      <ul>
        <li><a href="" target="_blank">TOP</a></li>
        <li><a href="" target="_blank">Document</a></li>
        <li><a href="" target="_blank">GitHub</a></li>
      </ul>
    </div>

  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
body {
  margin: 0;
  background-color: #DDD;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.header {
  position: relative;
  .img {
    position: absolute;
    float: left;
    width: 15%;
    left: 20%;
  }
  .title {
    float: left;
    position: absolute;
    font-size: 2rem;
    span {
      for-size: 2.5rem;
      text-shadow: 1px 1px 3px #000;
    }
  }
  float: none;
}

.footer {
  ul {
    list-style-type: none;
    padding: 0;
    margin: 10px;
  }
  li {
    display: inline-block;
  }
  a {
    color: #43b983;
  }
}
</style>
