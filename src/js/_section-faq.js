const faqBlockList = document.querySelectorAll('.section-faq__block')
if (faqBlockList.length) {
	faqBlockList.forEach((block) => {
		const titleBox = block.querySelector('.section-faq__block-title-box')
		titleBox.addEventListener('click', () => {
			faqBlockList.forEach((el) => {
				if (el !== block) {
					el.classList.remove('section-faq__block--active')
				}
			})
			block.classList.toggle('section-faq__block--active')
		})
	})
}
