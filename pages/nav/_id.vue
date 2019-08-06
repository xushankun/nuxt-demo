<template>
  <div>
    <h2>nav/three的内容</h2>
    <div>花开花落</div>
    <div>参数id:{{id}}</div>
  </div>
</template>

<script>
  export default {
    name: "two.vue",
    async asyncData ({ params }) {
      return {
        id: params.id
      }
    }
  }
</script>

<style scoped>

</style>
