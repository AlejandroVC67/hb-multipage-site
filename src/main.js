// import { Test } from './components/test.js'
import './components/common/main.scss'

import { NavBar } from './components/NavBar/NavBar.js'
// import { Hero } from './components/Hero/Hero.js'
import { DecorativeHero } from './components/DecorativeHero/DecorativeHero.js'
/* eslint-disable */
new NavBar(document.querySelector('.nav-bar'))
new DecorativeHero(document.querySelector('.decorative-hero'))
// new Hero(document.querySelector('.hero'))
/* eslint-enable */
