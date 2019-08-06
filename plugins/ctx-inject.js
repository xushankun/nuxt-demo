// 注入content
export default ({ app }, inject) => {
  // Set the function directly on the context.app object
  app.printHost = (string) => console.log('Okay, Current host:', string)
}
