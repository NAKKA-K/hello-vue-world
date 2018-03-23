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
  margin-top: 10px;
}

.header {
  height: 180px;
  margin-bottom: 20px;
  background-color: white;
  border-bottom: 1px solid #555;
  .img {
    float: left;
    width: 10%;
    padding: 20px 40px;
  }
  .title {
    float: left;
    background-color: #DDD;
    font-size: 2rem;
    padding: 5px;
    margin-top: 50px;
    font-family: serif;
    span {
      font-size: 2.5rem;
      text-shadow: 1px 1px 3px #000;
    }
  }
}

.footer {
  position: absolute;
  height: 120px;
  width: 100vw;
  bottom: 0;
  background-color: white;
  border-top: 1px solid #555;
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
