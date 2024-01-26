import Swiper from "swiper"
import {Navigation} from "swiper/modules";

// Desktop slider
const section = document.querySelector('.section-process')
if(section) {
	let processSlider = null;
	const initProcessSlider = () => {
		if (window.innerWidth < 1024) {
			if (processSlider) {
				processSlider.destroy(true, true);
				processSlider = null;
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
							console.log(slider.realIndex)
							const btn = section.querySelector(`.section-process__nav-elem[data-slide="${slider.realIndex}"]`)
							const activeBtn = section.querySelector('.section-process__nav-elem--active')
							btn.classList.add('section-process__nav-elem--active')
							activeBtn.classList.remove('section-process__nav-elem--active')
						}
					}
				});
			}
		}
	};
	initProcessSlider();

	window.addEventListener('resize', () => {
		initProcessSlider();
	});

	const navBtnList = section.querySelectorAll('.section-process__nav-elem')
	if(navBtnList.length) {
		navBtnList.forEach((btn) => {
			btn.addEventListener('click', () => {
				if(processSlider && !btn.classList.contains('section-process__nav-elem--active')) {
					processSlider.slideTo(parseInt(btn.dataset.slide))
				}
			})
		})
	}
}

