import { Controller } from 'stimulus'
import throttle from 'lodash.throttle'

export default class extends Controller {
  initialize () {
    this.scroll = this.scroll.bind(this)
  }

  connect () {
    const delay = this.data.get('throttleDelay') || 15

    if (delay > 0) {
      this.scroll = throttle(this.scroll, delay)
    }

    window.addEventListener('scroll', this.scroll, { passive: true })
    this.scroll()
  }

  disconnect () {
    window.removeEventListener('scroll', this.scroll)
  }

  scroll () {
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
    const width = (window.scrollY / height) * 100

    this.element.style.width = `${width}%`
  }
}
