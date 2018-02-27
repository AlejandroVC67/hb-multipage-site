export class WindowListener {
  constructor (callback) {
    this.callback = callback
    this.breakpoints = {}
    this.smallStart = 320
    this.smallEnd = 639
    this.mediumStart = 640
    this.mediumEnd = 1023
    this.largeStart = 1024
    this.initVariables()
    this.setEvents(this.callback)
  }

  initVariables () {
    this.breakpoints.small = window.matchMedia(`screen and (min-width: ${this.smallStart}px) and (max-width: ${this.smallEnd}px) `)
    this.breakpoints.medium = window.matchMedia(`screen and (min-width: ${this.mediumStart}px) and (max-width: ${this.mediumEnd}px)`)
    this.breakpoints.large = window.matchMedia(`screen and (min-width: ${this.largeStart}px)`)
  }

  setEvents (cb) {
    this.breakpoints.small.addListener(this.getCurrentWidth.bind(this))
    this.breakpoints.medium.addListener(this.getCurrentWidth.bind(this))
    this.breakpoints.large.addListener(this.getCurrentWidth.bind(this))
  }

  getCurrentWidth () {
    if (this.breakpoints.small.matches && window.innerWidth >= this.smallStart && window.innerWidth < this.mediumStart) {
      this.callback('small')
    } else if (this.breakpoints.medium.matches && window.innerWidth >= this.mediumStart && window.innerWidth < this.largeStart) {
      this.callback('medium')
    } else if (this.breakpoints.large.matches && window.innerWidth >= this.largeStart) {
      this.callback('large')
    }
  }
}
