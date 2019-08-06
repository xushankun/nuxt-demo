// context 和 vue 同时注入
export default ({ app }, inject) => {
  inject('ctxVueInjected', (string) => console.log('That was easy!', string))
}
