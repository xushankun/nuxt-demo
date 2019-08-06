<template>
    <div>
      <h1>嵌套路由</h1>
      <nuxt-link to="/nav/one">
        <el-button type="primary">nav one</el-button>
      </nuxt-link>
      <nuxt-link to="/nav/two">
        <el-button type="primary">nav two</el-button>
      </nuxt-link>
      <nuxt-child/>
    </div>
</template>

<script>
    export default {
        name: "nav.vue"
    }
</script>

<style scoped>

</style>
