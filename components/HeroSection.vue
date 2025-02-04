<template>
    <section class="mb-5">
        <div id="headerCarousel" class="carousel slide">
            <div class="carousel-inner">
                <div v-for="(slide, index) in slides" :key="index" class="carousel-item" :class="{ active: index === 0 }">
                    <div class="d-block d-sm-none d-flex flex-column align-items-center justify-content-center text-center py-5">
                        
                        <h1 class="fw-bolder text-dark small-title">{{ slide.title }}</h1>
                        <p class="fw-medium text-dark small-text">{{ slide.description }}</p>
                        <div class="border border-dark w-50 my-3"></div>
                        <button class="btn btn-dark px-4 py-2 small-button">{{ slide.buttonText }}</button>
                    </div>

                    <div class="position-relative d-none d-sm-block">
                        <img class="w-100 header-img" :src="slide.image" alt="Header">
                        <div class="position-absolute text-container">
                            <h1 class="fw-bolder text-dark medium-title">{{ slide.title }}</h1>
                            <p class="fw-medium text-dark medium-text">{{ slide.description }}</p>
                            <div class="position-relative w-75">
                                <div class="border border-dark w-100 d-none d-lg-block" :style="{ padding: '2rem' }"></div>
                                <div class="position-absolute d-flex flex-row align-items-center w-100 py-3 px-2 text-white button-container" :style="{backgroundColor:'#000000', top:'-2px', left:'-4px'}">
                                    <div class="fw-medium px-5">{{ slide.buttonText }}</div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" class="bi bi-arrow-right" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container my-4">
                <div class="carousel-indicators justify-content-center">
                    <button v-for="(_, index) in slides" :key="index" type="button" data-bs-target="#headerCarousel"
                        :data-bs-slide-to="index" :class="{ active: index === 0 }"></button>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { onMounted } from 'vue';

const slides = [
    {
        image: "/Images/Header.jpg",
        title: "SALE",
        description: "ACCESS A LIMITED SELECTION WITH 10 TO 20% OFF",
        buttonText: "SHOP NOW"
    },
    {
        image: "/Images/Header.jpg",
        title: "SALE",
        description: "ACCESS A LIMITED SELECTION WITH 10 TO 20% OFF",
        buttonText: "SHOP NOW"
    },
    {
        image: "/Images/Header.jpg",
        title: "SALE",
        description: "ACCESS A LIMITED SELECTION WITH 10 TO 20% OFF",
        buttonText: "SHOP NOW"
    }
];

onMounted(async () => {
    if (import.meta.client) {
        const { Carousel } = await import('bootstrap');
        new Carousel('#headerCarousel', {
            interval: 3000,
            ride: true
        });
    }
});
</script>

<style scoped>
.header-img {
    height: 600px;
    object-fit: cover;
}

.text-container {
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    margin-left: 5%;
    width: 25%;
}


@media (max-width: 750px) {
    .small-title {
        font-size: 1.5rem; 
    }
    .small-text {
        font-size: 0.9rem; 
    }
    .small-button {
        font-size: 0.9rem; 
        padding: 0.5rem 1rem;
    }
}


@media (min-width: 751px) and (max-width: 999px) {
    .medium-title {
        font-size: 1.75rem; 
    }
    .medium-text {
        font-size: 1rem; 
    }
    .button-container {
        font-size: 0.9rem; 
        padding: 0.7rem 1.2rem;
    }
}
</style>
