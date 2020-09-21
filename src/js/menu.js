import "../sass/menu.scss"
import menu from '../templates/menu.hbs'
import menuJson from './menu.json'

const menuList = document.querySelector('.js-menu')

const marcup = menu(menuJson);

menuList.insertAdjacentHTML("beforeend", marcup)
