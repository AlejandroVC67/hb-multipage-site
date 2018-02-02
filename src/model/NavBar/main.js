export class NavBarModel {
  constructor (node) {
    this.node = node
    this.elements = {}
    this.elements.menu = this.node.querySelector('.nav-bar__menu__button')
    this.elements.displayer = this.node.querySelector('.nav-bar__list')
    this.setMenuAction(this.elements.menu, this.elements.displayer)
  }
  static states () {
    return {
      displayerActive: (`nav-bar__list--active`)
    }
  }
  setMenuAction (menuButton, itemsDisplayer) {
    console.log(NavBarModel.states.displayerActive)
    menuButton.addEventListener('click', () => {
      itemsDisplayer.classList.toggle('nav-bar__list--active')
    })
  }

//   displayOptions (itemsDisplayer) {
//     itemsDisplayer.classList.toggle('nav-bar__list--active')
//   }
}
