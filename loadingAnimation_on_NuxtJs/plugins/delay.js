export default (context, inject) => {
  const delay = ms => new Promise(resolve => setTimeout(resolve, ms))
  inject('delay', delay)
}