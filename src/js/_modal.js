import {setBodyOverflow} from "./main";

const modal = document.querySelector('.modal')
const header = document.querySelector('.header')

const modalCloseBtnList = modal.querySelectorAll('.modal__close')
if (modalCloseBtnList.length) {
	modalCloseBtnList.forEach((btn) => {
		btn.addEventListener('click', () => closeModal())
	})
}

modal.addEventListener('click', (evt) => {
	if (!evt.target.closest('.modal__window')) {
		closeModal()
	}
})

export const showModal = () => {
	setBodyOverflow(true)
	modal.style.display = 'flex'
	setTimeout(() => {
		modal.classList.add('modal--show')
	}, 50)
}

export const closeModal = () => {
	modal.classList.remove('modal--show')
	setTimeout(() => {
		setBodyOverflow(false)
		modal.style.display = ''
	}, 300)
}


