export class CarouselManager {
    constructor() {
        this.currentSlide = 0;
    }

    initialize() {
        this.swiper = document.querySelector('.carousel');
        this.prevButtons = document.querySelectorAll('#btn-crs-prev');
        this.nextButtons = document.querySelectorAll('#btn-crs-next');
        this.bullets = document.querySelectorAll('.carousel-circle');
        this.CAROUSEL_LENGTH = document.querySelectorAll('.cell').length - 1;

        this.setupEventListeners();
        this.showSlide(0);
        this.startAutoSlide();
    }

    showSlide(slideIndex) {
        this.swiper.style.transform = `translateX(-${slideIndex * 100}%)`;
        this.currentSlide = slideIndex;

        this.bullets.forEach((bullet, index) => {
            if (index === this.currentSlide) {
                bullet.classList.add('active');
            } else {
                bullet.classList.remove('active');
            }
        });
    }

    setupEventListeners() {
        this.prevButtons.forEach((prevButton) => {
            prevButton.addEventListener('click', () => {
                if (this.currentSlide > 0) {
                    this.showSlide(this.currentSlide - 1);
                } else {
                    this.showSlide(this.CAROUSEL_LENGTH);
                }
            });
        });

        this.nextButtons.forEach((nextButton) => {
            nextButton.addEventListener('click', () => {
                if (this.currentSlide < this.CAROUSEL_LENGTH) {
                    this.showSlide(this.currentSlide + 1);
                } else {
                    this.showSlide(0);
                }
            });
        });

        this.bullets.forEach((bullet, index) => {
            bullet.addEventListener('click', () => {
                this.showSlide(index);
            });
        });
    }

    startAutoSlide() {
        setInterval(() => {
            if(this.currentSlide !== this.CAROUSEL_LENGTH) {
                this.showSlide(this.currentSlide + 1);
            } else {
                this.showSlide(0);
            }
        }, 10000);
    }
}

export const carouselManager = new CarouselManager();