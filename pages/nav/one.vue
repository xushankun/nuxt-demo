<template>
    <div>
      <div>host:{{ host }}</div>
      <h2>新闻列表</h2>
      <ul>
        <li v-for="(item,index) in list" :key="one" v-if="one <= 2">
          <a :href="item.href" target="_blank">{{item.title}}</a>
        </li>
      </ul>
    </div>
</template>

<script>
  import axios from 'axios'
    export default {
        name: "one.vue",
        async asyncData (ctx) {
          console.log('asyncData--------------------------我只在server端')
          console.log(process.server)
          // ctx.app // 根实例
          // ctx.route // 路由实例
          // ctx.params  //路由参数
          // ctx.query  // 路由问号后面的参数
          // ctx.error   // 错误处理方法
          // process.server  为true 时表示当前服务端【首次渲染为true】
          let _host = process.server ? ctx.req.headers.host : ''
          ctx.app.printHost(_host)
          ctx.app.$ctxVueInjected('asyncData:$ctxVueInjected')
          let res = await axios.get(`http://localhost:3000/api/news`)
          console.log(res.data.data)
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
        this.$nextTick(() => {
          this.$nuxt.$loading.start()
          setTimeout(() => this.$nuxt.$loading.finish(), 1000)
        })
      }
    }
</script>

<style scoped>

</style>
