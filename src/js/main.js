import './_section-process.js'
import './_section-steps.js'
import './_section-order.js'
import './_section-faq.js'
import './_modal.js'

function scrollToTarget(selector) {
	const target = document.querySelector(selector)
	if (target) {
		const headerHeight = 100
		const targetPosition = target.getBoundingClientRect().top
		const offsetPosition = targetPosition + window.scrollY - headerHeight

		window.scrollTo({
			top: offsetPosition,
			behavior: "smooth"
		});
	} else {
		console.warn(`Элемент "${selector}" не найден!`)
	}
}

const linkList = document.querySelectorAll('[data-scroll-to]')
if (linkList.length) {
	linkList.forEach((link) => {
		link.addEventListener('click', (e) => {
			e.preventDefault()
			const target = link.dataset.scrollTo
			if (target) {
				scrollToTarget(`#${target}`)
			}
			return false
		})
	})
}

/*import SlimSelect from 'slim-select'
import noUiSlider from 'nouislider'
import wNumb from 'wnumb'
import IMask from 'imask'
import Swiper from 'swiper'
import { Pagination } from 'swiper/modules'

// Check Webp support
(function checkWebpSupport() {
	const img = new Image()
	img.onload = function () {
		if ((img.width > 0) && (img.height > 0)) {
			document.body.classList.add("webp-support");
		} else {
			document.body.classList.add("no-webp-support");
		}
	}
	img.onerror = function () {
		document.body.classList.add("no-webp-support");
	}
	img.src = "data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA";
})()

// Scroll to
document.addEventListener("DOMContentLoaded", function () {
	const linkList = document.querySelectorAll('*[data-scroll-to]')
	if (!linkList.length) return

	linkList.forEach((link) => {
		link.addEventListener('click', (evt) => {
			evt.preventDefault()
			const target = document.querySelector(`#${link.dataset.scrollTo}`)
			if (target) {
				target.scrollIntoView({
					behavior: 'smooth'
				})
			}
		})
	})
});





// Input masks
const phoneMask = IMask(
	document.querySelector('#phone'),
	{
		mask: '+{7}(000) 000-00-00'
	}
)

const dateMask = IMask(
	document.querySelector('#date'),
	{
		mask: Date
	}
)

// Form submit
const form = document.querySelector('.section-order__form')
if (form) {
	form.addEventListener('submit', (evt) => {
		evt.preventDefault()
		const data = new URLSearchParams(new FormData(form));
		fetch("https://ovcharov2v.github.io/vmeste/index.html", {
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
	ssList.forEach((ss) => {
		const select = ss.select.select
		select.closest('.form-group').classList.remove('form-group--filled')
		const event = new Event('change');
		setTimeout(() => {
			select.dispatchEvent(event)
		})
	})
	phoneMask.updateValue()
	dateMask.updateValue()
	form.reset()
}


const modal = document.querySelector('.modal')
const modalCloseBtn = modal.querySelector('.modal__close')

const showModal = () => {
	document.body.style.overflow = 'hidden'
	modal.style.display = 'flex'
	setTimeout(() => {
		modal.classList.add('modal--show')
	}, 50)
}

const closeModal = () => {
	modal.classList.remove('modal--show')
	setTimeout(() => {
		document.body.style.overflow = ''
		modal.style.display = ''
	}, 300)
}

modalCloseBtn.addEventListener('click', () => closeModal())

modal.addEventListener('click', (evt) => {
	if(!evt.target.closest('.modal__window')) {
		closeModal()
	}
})


// Mobile slider
let atmSlider = null;
const initAtmSlider = () => {
	if (window.innerWidth > 768) {
		if (atmSlider) {
			atmSlider.destroy(true, true);
			atmSlider = null;
		}
	} else {
		if (!atmSlider) {
			atmSlider = new Swiper('.section-atmosphere__slider', {
				slidesPerView: 1.05,
				spaceBetween: 16,
			});
		}
	}
};
initAtmSlider();

window.addEventListener('resize', () => {
	initAtmSlider();
});*/
