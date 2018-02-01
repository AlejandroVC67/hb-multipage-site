import '../common/reset.scss'
import '../common/variables.scss'
import '../common/responsive.scss'
import './NavBar.scss'
import data from '../../Data/data.json'
import template from './Navbar.pug'

export class NavBar {
  constructor (node) {
    this.node = node
    this.generateHTML()
  }

  generateHTML () {
    this.node.innerHTML = template(data)
  }
}
