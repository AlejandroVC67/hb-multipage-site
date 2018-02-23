import './_DecorativeHero.scss'
import template from './DecorativeHero.pug'
import data from '../../Data/data.json'
import { WindowListener } from '../common/windowListener.js'

export class DecorativeHero {
  constructor (node) {
    this.node = node
    this.generateHTML()
    /* eslint-disable */    
    new WindowListener(this.addHeroStyles)
    /* eslint-enable */
  }
  generateHTML () {
    this.node.innerHTML = template(data.decorativehero)
  }

  addHeroStyles (breakpoint) {
    this.images = {}
    this.images.small = data.decorativehero.images.small.url
    this.images.medium = data.decorativehero.images.medium.url
    this.images.large = data.decorativehero.images.large.url
    this.decorativeHero = document.querySelector('.decorative-hero__picture')
    console.log(breakpoint)
    console.log(this.decorativeHero)
    console.log(this.images)

    if (breakpoint === 'small') {
      this.decorativeHero.setAttribute('style', `background-image: url(${this.images.small})`)
    } else if (breakpoint === 'medium') {
      this.decorativeHero.setAttribute('style', `background-image: url(${this.images.medium})`)
    } else if (breakpoint === 'large') {
      this.decorativeHero.setAttribute('style', `background-image: url(${this.images.large})`)
    }
  }
}
