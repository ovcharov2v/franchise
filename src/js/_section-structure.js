import Swiper from "swiper";

const section = document.querySelector('.section-structure')

if(section) {
	let structureSlider = null;
	const initStructureSlider = () => {
		if (window.innerWidth > 767) {
			if (structureSlider) {
				structureSlider.destroy(true, true);
				structureSlider = null;
			}
		} else {
			if (!structureSlider) {
				structureSlider = new Swiper('.section-structure__slider', {
					slidesPerView: 1.3,
					spaceBetween: 8,
				});
			}
		}
	};
	initStructureSlider();

	window.addEventListener('resize', () => {
		initStructureSlider();
	});
}
