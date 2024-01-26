const modal = document.querySelector('.modal')

const modalCloseBtnList = modal.querySelectorAll('.modal__close')
if (modalCloseBtnList.length) {
	modalCloseBtnList.forEach((btn) => {
		console.log(1)
		btn.addEventListener('click', () => closeModal())
	})
}

modal.addEventListener('click', (evt) => {
	if (!evt.target.closest('.modal__window')) {
		closeModal()
	}
})

export const showModal = () => {
	document.body.style.overflow = 'hidden'
	modal.style.display = 'flex'
	setTimeout(() => {
		modal.classList.add('modal--show')
	}, 50)
}

export const closeModal = () => {
	modal.classList.remove('modal--show')
	setTimeout(() => {
		document.body.style.overflow = ''
		modal.style.display = ''
	}, 300)
}


