import IMask from 'imask'
import {showModal} from "./_modal";

// Input masks
const phoneMask = IMask(
	document.querySelector('#phone'),
	{
		mask: '+{7}(000) 000-00-00'
	}
)

// Form submit
const form = document.querySelector('.section-order__form')

if (form) {
	form.addEventListener('submit', (evt) => {
		evt.preventDefault()
		showModal();
		const data = new URLSearchParams(new FormData(form));
		fetch("https://ovcharov2v.github.io/franchise/index.html", {
			method: 'post',
			body: data,
		})
			.then((response) => {
				//response.json()
				// ----do something----
				showModal();
			})
		formReset()
	})
}

const formReset = () => {
	phoneMask.updateValue()
	form.reset()
}
