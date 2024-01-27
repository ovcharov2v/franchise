import {setBodyOverflow} from "./main";

const header = document.querySelector('.header')

if(header) {
	const menuBtn = document.querySelector('.header__menu-btn')
	const btn = document.querySelector('.header__btn')

	menuBtn.addEventListener('click', () => {
		if(header.classList.contains('header--menu-open')) {
			closeMenu()
		}
		else {
			header.classList.add('header--menu-open')
			setBodyOverflow(true)
		}
	})

	btn.addEventListener('click', () => closeMenu())
}

const closeMenu = () => {
	header.classList.remove('header--menu-open')
	setBodyOverflow(false)
}

document.addEventListener('click', (evt) => {
	if (!evt.target.closest('.header')) {
		closeMenu()
	}
})
