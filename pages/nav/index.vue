<template>
    <div>
      <div>host:{{ host }}</div>
      <h2>新闻列表</h2>
      <ul>
        <li v-for="(item,index) in list" :key="index">
          <a :href="item.href" target="_blank">{{item.title}}</a>
        </li>
      </ul>
    </div>
</template>

<script>
  import axios from 'axios'
    export default {
        name: "one.vue",
        async asyncData (context) {
          console.log('asyncData--------------------------我只在server端')
          // process.server  为true 时表示当前服务端
          console.log(process.server)
          let _host = process.server ? context.req.headers.host : ''
          context.app.printHost(_host)
          context.app.$ctxVueInjected('asyncData:$ctxVueInjected')
          let res = await axios.get(`https://xu.shankun.top/otherApi/news`)
          return {
            list: res.data.data,
            host: _host
          }
        },
      created() {
          console.log('created------------------------------我在server端和client端')
        this.$myInjectedFunction('test')

      },
      mounted() {
        console.log('mounted------------------------------我只在client端')
        this.$ctxVueInjected('mounted:$ctxVueInjected')
      }
    }
</script>

<style scoped>

</style>
