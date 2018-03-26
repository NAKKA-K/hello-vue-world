<template>
  <div class="header">
    <img class="img" src="../assets/logo.png">
    <p class="title">Hello <span>Vue</span> WORLD!</p>
  </div>
</template>

<script>
</script>

<style lang="scss" scoped>
.header {
  height: 120px;
  background-color: #EEE;
  border-bottom: 8px solid #CCC;
  .img {
    float: left;
    width: 6%;
    padding: 10px 30px;
  }
  .title {
    float: left;
    font-size: 1.8rem;
    padding: 5px;
    margin-top: 20px;
    font-family: serif;
    span {
      font-size: 2.5rem;
      text-shadow: 1px 1px 3px #000;
    }
  }
}
</style>
