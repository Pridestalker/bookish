import {A11y, Autoplay, Lazy, Swiper} from "swiper";

export default {
    init() {
        Swiper.use([Autoplay, A11y, Lazy]);
        document.body.querySelectorAll('[data-component="hero-banner"]').forEach(component => {
            const swiper = component.querySelector('.swiper-container');
            swiper.swiper = new Swiper(swiper, {
                a11y: true,
                autoplay: {
                    pauseOnMouseEnter: true,
                },
                slidesPerView: 1,
                lazy: true,
                loop: true,

            })
        })
    },
    load() {
    },
}
