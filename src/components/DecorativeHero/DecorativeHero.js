import './_DecorativeHero.scss'
import template from './DecorativeHero.pug'
import data from '../../Data/data.json'
import { WindowListener } from '../common/windowListener.js'

function doSomething (breakpoint) {
  console.log(breakpoint)
}

export class DecorativeHero {
  constructor (node) {
    this.node = node
    /* eslint-disable */    
    new WindowListener(doSomething)
    /* eslint-enable */
    this.generateHTML()
  }

  generateHTML () {
    this.node.innerHTML = template(data.decorativehero)
  }
}
