import './_DecorativeHero.scss'
import template from './DecorativeHero.pug'
import data from '../../Data/data.json'
export class DecorativeHero {
  constructor (node) {
    this.node = node
    this.generateHTML()
  }

  generateHTML () {
    this.node.innerHTML = template(data[2])
  }
}
