import Swiper from "swiper"
import {Navigation} from "swiper/modules";

// Desktop slider
const section = document.querySelector('.section-process')
if (section) {
	let processSlider = null;
	let processSubSliderList = [];
	const initProcessSlider = () => {
		if (window.innerWidth < 1024) {
			if (processSlider) {
				processSlider.destroy(true, true);
				processSlider = null;
			}
			if (!processSubSliderList.length) {
				const list = section.querySelectorAll('.section-process__subslider')
				list.forEach((el) => {
					const slider = new Swiper(el, {
						slidesPerView: 1.3,
						spaceBetween: 8,
						breakpoints: {
							768: {
								slidesPerView: 2.7,}
						}
					});
					processSubSliderList.push(slider)
				})
			}
		} else {
			if (!processSlider) {
				processSlider = new Swiper('.section-process__slider', {
					modules: [Navigation],
					slidesPerView: 1,
					spaceBetween: 0,
					navigation: {
						prevEl: '.section-process .slider-btn--prev',
						nextEl: '.section-process .slider-btn--next',
					},
					on: {
						transitionStart: (slider) => {
							const btn = section.querySelector(`.section-process__nav-elem[data-slide="${slider.realIndex}"]`)
							const activeBtn = section.querySelector('.section-process__nav-elem--active')
							btn.classList.add('section-process__nav-elem--active')
							activeBtn.classList.remove('section-process__nav-elem--active')
						}
					}
				});
			}

			if (processSubSliderList) {
				processSubSliderList.forEach((subslider) => {
					subslider.destroy(true, true);
				})
				processSubSliderList = [];
			}
		}
	};
	initProcessSlider();

	window.addEventListener('resize', () => {
		initProcessSlider();
	});

	const navBtnList = section.querySelectorAll('.section-process__nav-elem')
	if (navBtnList.length) {
		navBtnList.forEach((btn) => {
			btn.addEventListener('click', () => {
				if (processSlider && !btn.classList.contains('section-process__nav-elem--active')) {
					processSlider.slideTo(parseInt(btn.dataset.slide))
				}
			})
		})
	}
}

