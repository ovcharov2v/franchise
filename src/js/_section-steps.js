import Swiper from "swiper"
import {Grid, Navigation} from "swiper/modules";

const section = document.querySelector('.section-steps')
if(section) {
	let stepsSliderDesktop = null;
	let stepsSliderMobile = null;

	const initStepsSlider = () => {
		if (window.innerWidth < 1024) {
			if (stepsSliderDesktop) {
				stepsSliderDesktop.destroy(true, true);
				stepsSliderDesktop = null;
			}
			if (!stepsSliderMobile) {
				stepsSliderMobile = new Swiper('.section-steps__slider', {
					slidesPerView: 'auto',
					spaceBetween: 8,
				})
			}
		} else {
			if (stepsSliderMobile) {
				stepsSliderMobile.destroy(true, true);
				stepsSliderMobile = null;
			}
			if (!stepsSliderDesktop) {
				stepsSliderDesktop = new Swiper('.section-steps__slider', {
					modules: [Navigation, Grid],
					slidesPerGroup: 3,
					slidesPerView: 3,
					spaceBetween: 16,
					grid: {
						rows: 2,
						fill: 'row',
					},
					navigation: {
						prevEl: '.section-steps .slider-btn--prev',
						nextEl: '.section-steps .slider-btn--next',
					},
				})
			}
		}
	};
	initStepsSlider();

	window.addEventListener('resize', () => {
		initStepsSlider();
	});
}

