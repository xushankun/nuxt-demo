// 用于nuxt.js应用的个性化设置，以便覆盖默认配置
// 别名
// ~ 或 @	     src目录
// ~~ 或 @@    根目录
export default {
  // mode: 'universal',
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || 'nuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {name: 'keywords', content: '最强王者,今晚吃鸡'},
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: 'red' },
  /*
  ** Global CSS
  * 该配置项用于定义应用的全局（所有页面均需引用的）样式文件、模块或第三方库。
  */
  css: [
    'element-ui/lib/theme-chalk/index.css'
  ],
  /*
  ** Plugins to load before mounting the App
  * 该配置项用于配置那些需要在 根vue.js应用 实例化之前需要运行的 Javascript 插件。【类似spa   main.js 开头的import】
  */
  plugins: [
    // { src: '~/plugins/vue-notifications', ssr: false },    // 只在客户端使用的插件
    '@/plugins/element-ui',
    '@/plugins/ctx-inject.js',    // 注入context
    '@/plugins/vue-inject.js',    // 注入vue 实例
    '@/plugins/combined-inject.js'  // context 和 vue 实例同时注入
  ],
  /*
  ** Nuxt.js dev-modules
  */
  devModules: [
  ],
  /*
  ** Nuxt.js modules
  * 该配置项允许您将Nuxt模块添加到项目中。
  */
  modules: [
  ],
  /*
  ** Build configuration
  * *Nuxt.js 允许你在自动生成的 vendor.bundle.js 文件中添加一些模块，以减少应用 bundle 的体积。
  * 如果你的应用依赖第三方模块，这个配置项是十分实用的。
  */
  build: {
    transpile: [/^element-ui/],
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  generate: {
    routes: [
      '/nav/',
      '/nav/two',
      '/nav/xxx'
    ]
  }
}
