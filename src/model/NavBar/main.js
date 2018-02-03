export class NavBarModel {
  constructor (node) {
    this.node = node
    this.elements = {}
    this.elements.menu = this.node.querySelector('.nav-bar__menu__button')
    this.elements.displayer = this.node.querySelector('.nav-bar__list')
    this.elements.dropDown = this.node.querySelectorAll('.nav-bar__list-container')
    console.log(this.elements.dropDown)
    this.elements.dropDownList = this.node.querySelectorAll('.nav-bar__dropdown-list')
    this.setMenuAction(this.elements.menu, this.elements.displayer)
    this.setDropDownAction(this.elements.dropDown, this.elements.dropDownList)
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

  setDropDownAction (dropDownTrigger) {
    dropDownTrigger.forEach(element => {
      element.addEventListener('click', () => {
        const index = Array.from(dropDownTrigger).indexOf(element)
        this.changeArrows(element, index)
        if (this.currentDropdown === undefined) {
          this.currentDropdown = index
        }
        if (index === this.currentDropdown) {
          this.elements.dropDownList[this.currentDropdown].classList.toggle('nav-bar__dropdown-list--active')
        } else {
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
