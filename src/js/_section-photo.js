import Swiper from "swiper";

const section = document.querySelector('.section-photo')

if(section) {
	let photoSlider = null;
	const initPhotoSlider = () => {
		if (window.innerWidth > 1024) {
			if (photoSlider) {
				photoSlider.destroy(true, true);
				photoSlider = null;
			}
		} else {
			if (!photoSlider) {
				photoSlider = new Swiper('.section-photo__slider', {
					slidesPerView: 'auto',
					spaceBetween: 8,
				});
			}
		}
	};
	initPhotoSlider();

	window.addEventListener('resize', () => {
		initPhotoSlider();
	});
}
