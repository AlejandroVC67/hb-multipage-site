import testStyle from './test.scss'
export class Test {
  constructor (node) {
    this.node = node
    this.generateHTML(this.node)
  }

  generateHTML (node) {
    node.innerText = 'Random header here (:'
  }
}
