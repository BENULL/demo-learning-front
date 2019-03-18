<template>
  <div id="home">
    <router-link to="/prices"><h1>价格波动图</h1></router-link>
    <router-link to="/sales"><h1>销量折线图</h1></router-link>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style lang="stylus" scoped>
#home
  width: 200px
  height: 100px
  margin: 0 auto
  h1
    font-size :24px
</style>
