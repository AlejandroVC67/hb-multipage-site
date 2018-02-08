// import { Test } from './components/test.js'
import './components/common/main.scss'

import { NavBar } from './components/NavBar/NavBar.js'
import { Hero } from './components/Hero/Hero.js'
/* eslint-disable */
new NavBar(document.querySelector('.nav-bar'))
new Hero(document.querySelector('.hero'))
/* eslint-enable */
