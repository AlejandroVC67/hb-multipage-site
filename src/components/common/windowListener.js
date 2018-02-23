/* eslint-disable */
export class WindowListener {
    constructor (callback) {
        this.callback = callback
        this.elements = {}
        this.initVariables()
        this.setEvents(this.callback)
    }

    initVariables () {
        this.elements.small = window.matchMedia('screen and (min-width: 320px) and (max-width: 630px) ')
        this.elements.medium = window.matchMedia('screen and (min-width: 640px) and (max-width: 1023px)')
        this.elements.large = window.matchMedia('screen and (min-width: 1024px)')
    }

    setEvents (cb) {
        this.elements.small.addListener(this.getCurrentWidth.bind(this))
        this.elements.medium.addListener(this.getCurrentWidth.bind(this))
        this.elements.large.addListener(this.getCurrentWidth.bind(this))
    }
    
    getCurrentWidth () {
          if (this.elements.small.matches && window.innerWidth >= 320 && window.innerWidth < 639) {
            this.callback('small')
          } else if (this.elements.medium.matches &&window.innerWidth >= 640 && window.innerWidth < 1024) {
            this.callback('medium')
          } else if ( this.elements.large.matches && window.innerWidth >= 1024) {
            this.callback('large')
          }
      }
}




/* eslint-enable */
