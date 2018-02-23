export class WindowListener {
  constructor (callback) {
    this.callback = callback
    this.elements = {}
    this.smallStart = 320
    this.smallEnd = 639
    this.mediumStart = 640
    this.mediumEnd = 1023
    this.largeStart = 1024
    this.initVariables()
    this.setEvents(this.callback)
  }

  initVariables () {
    this.elements.small = window.matchMedia(`screen and (min-width: ${this.smallStart}px) and (max-width: ${this.smallEnd}px) `)
    this.elements.medium = window.matchMedia(`screen and (min-width: ${this.mediumStart}px) and (max-width: ${this.mediumEnd}px)`)
    this.elements.large = window.matchMedia(`screen and (min-width: ${this.largeStart}px)`)
  }

  setEvents (cb) {
    this.elements.small.addListener(this.getCurrentWidth.bind(this))
    this.elements.medium.addListener(this.getCurrentWidth.bind(this))
    this.elements.large.addListener(this.getCurrentWidth.bind(this))
  }

  getCurrentWidth () {
    if (this.elements.small.matches && window.innerWidth >= this.smallStart && window.innerWidth < this.mediumStart) {
      this.callback('small')
    } else if (this.elements.medium.matches && window.innerWidth >= this.mediumStart && window.innerWidth < this.largeStart) {
      this.callback('medium')
    } else if (this.elements.large.matches && window.innerWidth >= this.largeStart) {
      this.callback('large')
    }
  }
}
