import '../common/main.scss'
import data from '../../Data/data.json'
import template from './nav-bar.pug'

export class NavBar {
  constructor (node) {
    this.node = node
    this.generateHTML()
  }

  generateHTML () {
    this.node.innerHTML = template(data)
  }
}
