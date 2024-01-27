import './_header.js'
import './_section-photo.js'
import './_section-process.js'
import './_section-steps.js'
import './_section-conditions.js'
import './_section-structure.js'
import './_section-cities.js'
import './_section-order.js'
import './_section-faq.js'
import './_modal.js'

export function setBodyOverflow(setOverflow, addPaddingToElems = []) {
	const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
	if (setOverflow) {
		document.body.style.overflow = 'hidden'
		document.body.style.paddingRight = `${scrollbarWidth}px`
	} else {
		document.body.style.overflow = ''
		document.body.style.paddingRight = ''
	}

	if (addPaddingToElems.length) {
		addPaddingToElems.forEach((elem) => {
			if (setOverflow) {
				elem.style.paddingRight = `${scrollbarWidth}px`
			} else {
				elem.style.paddingRight = ''
			}
		})
	}
}

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
