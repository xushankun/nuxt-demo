<template>
    <div>
      <h2>nav/two的内容</h2>
      <div>花开花落</div>
<!--      <div>host:{{ host }}</div>-->
    </div>
</template>

<script>
    export default {
        name: "two.vue",
        async asyncData (content) {
          return {
            baseUrl: process.env.npm_package_baseUrl || 'localhost:xxx'
          }
          // console.log(content.req)
          // if (process.server) {
          //   return { host: content.req.headers.host || '没有。。' }
          // }
        },
    }
</script>

<style scoped>

</style>
