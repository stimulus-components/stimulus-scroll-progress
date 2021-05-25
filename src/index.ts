import { Controller } from 'stimulus'
import { throttle } from 'lodash'

export default class extends Controller {
  // @ts-ignore
  element: HTMLElement
  throttleDelayValue: number

  static values = {
    throttleDelay: Number
  }

  initialize (): void {
    this.scroll = this.scroll.bind(this)
  }

  connect (): void {
    const delay: number = this.throttleDelayValue || 15

    if (delay > 0) {
      this.scroll = throttle(this.scroll, delay)
    }

    window.addEventListener('scroll', this.scroll, { passive: true })
    this.scroll()
  }

  disconnect (): void {
    window.removeEventListener('scroll', this.scroll)
  }

  scroll (): void {
    const height: number = document.documentElement.scrollHeight - document.documentElement.clientHeight
    const width: number = (window.scrollY / height) * 100

    this.element.style.width = `${width}%`
  }
}
