import Swiper from "swiper";

const section = document.querySelector('.section-cities')

if(section) {
	let citySlider = null;
	const initCitySlider = () => {
		if (window.innerWidth > 767) {
			if (citySlider) {
				citySlider.destroy(true, true);
				citySlider = null;
			}
		} else {
			if (!citySlider) {
				citySlider = new Swiper('.section-cities__slider', {
					slidesPerView: 1.1,
					spaceBetween: 8,
				});
			}
		}
	};
	initCitySlider();

	window.addEventListener('resize', () => {
		initCitySlider();
	});
}
