import Swiper from "swiper";

const section = document.querySelector('.section-conditions')

if(section) {
	let conditionsSlider = null;
	const initConditionsSlider = () => {
		if (window.innerWidth > 767) {
			if (conditionsSlider) {
				conditionsSlider.destroy(true, true);
				conditionsSlider = null;
			}
		} else {
			if (!conditionsSlider) {
				conditionsSlider = new Swiper('.section-conditions__slider', {
					slidesPerView: 1.3,
					spaceBetween: 8,
				});
			}
		}
	};
	initConditionsSlider();

	window.addEventListener('resize', () => {
		initConditionsSlider();
	});
}
