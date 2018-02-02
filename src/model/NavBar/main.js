export class NavBarModel {
  constructor (node) {
    this.node = node
    this.elements = {}
    this.elements.menu = this.node.querySelector('.nav-bar__menu__button')
    this.elements.displayer = this.node.querySelector('.nav-bar__list')
    this.elements.dropDownButton = this.node.querySelectorAll('.nav-bar__list-item-container-button')
    this.elements.dropDownList = this.node.querySelectorAll('.nav-bar__dropdown-list')
    this.setMenuAction(this.elements.menu, this.elements.displayer)
    this.setDropDownAction(this.elements.dropDownButton, this.elements.dropDownList)
    this.currentDropdown = undefined
  }
  static states () {
    return {
      displayerActive: (`nav-bar__list--active`)
    }
  }

  setMenuAction (menuButton, itemsDisplayer) {
    menuButton.addEventListener('click', () => {
      itemsDisplayer.classList.toggle('nav-bar__list--active')
    })
  }

  setDropDownAction (dropDownButton) {
    dropDownButton.forEach(element => {
      element.addEventListener('click', () => {
        const index = Array.from(dropDownButton).indexOf(element)
        this.changeArrows(element, index)
        if (this.currentDropdown === undefined) {
          this.currentDropdown = index
          console.log('debí pasar acá al inicio')
        }
        if (index === this.currentDropdown) {
          console.log('debí pasar acá al repetir')
          this.elements.dropDownList[this.currentDropdown].classList.toggle('nav-bar__dropdown-list--active')
          console.log(this.currentDropdown)
        } else {
          console.log(this.currentDropdown, index)
          console.log('debí pasar acá al escoger una diferente')
          this.elements.dropDownList[this.currentDropdown].classList.remove('nav-bar__dropdown-list--active')
          this.elements.dropDownList[index].classList.add('nav-bar__dropdown-list--active')
          this.currentDropdown = index
        }
      })
    })
  }

  changeArrows (element, index) {
    element.children[1].children[0].classList.toggle('leftArrow--active')
    element.children[1].children[1].classList.toggle('rightArrow--active')
  }
}
