import './_DecorativeHero.scss'
import template from './DecorativeHero.pug'
import data from '../../Data/data.json'
import { WindowListener } from '../common/windowListener.js'

export class DecorativeHero {
  constructor (node) {
    this.node = node
    this.generateHTML()
    this.images = {}
    this.images.small = data.decorativehero.images.small.url
    this.images.medium = data.decorativehero.images.medium.url
    this.images.large = data.decorativehero.images.large.url
    this.decorativeHero = document.querySelector('.decorative-hero__picture')
    this.windowListener = new WindowListener(this.addHeroStyles.bind(this))
  }
  generateHTML () {
    this.node.innerHTML = template(data.decorativehero)
  }

  addHeroStyles (breakpoint) {
    if (breakpoint === 'small') {
      this.decorativeHero.style.backgroundImage = `url(${this.images.small})`
    } else if (breakpoint === 'medium') {
      this.decorativeHero.style.backgroundImage = `url(${this.images.medium})`
    } else if (breakpoint === 'large') {
      this.decorativeHero.style.backgroundImage = `url(${this.images.large})`
    }
  }
}
