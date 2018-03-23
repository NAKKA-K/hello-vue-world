<template>
  <div class="hello">
    <h1 class="page-title">{{ page }}</h1>
    <h1>{{ msg }}</h1>

    <ul class="router">
      <li>
        <router-link to="/">Go to Scene1!</router-link>
      </li>
      <li>
        <router-link to="/scene3">Go to Scene3!</router-link>
      </li>
    </ul>

    <!-- vue links -->
    <div class="vue-links">
        <h2>Essential Links</h2>
        <ul>
          <li>
            <a
              href="https://vuejs.org"
              target="_blank"
            >
              Core Docs
            </a>
          </li>
          <li>
            <a
              href="https://forum.vuejs.org"
              target="_blank"
            >
              Forum
            </a>
          </li>
          <li>
            <a
              href="https://chat.vuejs.org"
              target="_blank"
            >
              Community Chat
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/vuejs"
              target="_blank"
            >
              Twitter
            </a>
          </li>
          <br>
          <li>
            <a
              href="http://vuejs-templates.github.io/webpack/"
              target="_blank"
            >
              Docs for This Template
            </a>
          </li>
        </ul>

        <h2>Ecosystem</h2>
        <ul>
          <li>
            <a
              href="http://router.vuejs.org/"
              target="_blank"
            >
              vue-router
            </a>
          </li>
          <li>
            <a
              href="http://vuex.vuejs.org/"
              target="_blank"
            >
              vuex
            </a>
          </li>
          <li>
            <a
              href="http://vue-loader.vuejs.org/"
              target="_blank"
            >
              vue-loader
            </a>
          </li>
          <li>
            <a
              href="https://github.com/vuejs/awesome-vue"
              target="_blank"
            >
              awesome-vue
            </a>
          </li>
        </ul>
    </div>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      page: 'Vue Scene 2',
      msg: 'Hello, Vue world!!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
h1, h2 {
  font-weight: normal;
}

.page-title {
  font-size: 3rem;
  font-family: serif;
  text-shadow: 5px 1px 3px #CCC;
  margin: 0;
}

.vue-links {
  margin: 40px;
  padding: 10px;

  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
}

.router {
  list-style-type: none;
  li {
    display: inline-block;
    margin: 0 20px;
    font-size: 2rem;
    background-color: #EEE;
    a {  // router-link
      color: #42b983;
    }
  }
}
</style>
