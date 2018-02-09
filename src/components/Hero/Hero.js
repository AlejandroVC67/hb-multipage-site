import './_Hero.scss'
import template from './Hero.pug'
import data from '../../Data/heroData.json'
export class Hero {
  constructor (node) {
    this.node = node
    this.generateHTML()
    console.log(data)
  }

  generateHTML () {
    this.node.innerHTML = template(data)
  }
}
