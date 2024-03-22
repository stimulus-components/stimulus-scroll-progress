export function throttle(callback: Function, delay: number) {
  let shouldWait = false

  return (...args) => {
    if (shouldWait) return

    callback.apply(this, args)

    shouldWait = true

    setTimeout(() => {
      shouldWait = false
    }, delay)
  }
}
