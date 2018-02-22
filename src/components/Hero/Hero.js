import './_Hero.scss'
import template from './Hero.pug'
import data from '../../Data/data.json'
export class Hero {
  constructor (node) {
    this.node = node
    this.generateHTML()
  }

  generateHTML () {
    this.node.innerHTML = template(data.Hero)
  }
}
