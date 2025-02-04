<template>
    <section class="py-5 position-relative mb-5">
        <div class="mx-5">
            <h1 class="fw-bolder mb-4">NEW ARRIVALS</h1>
            <div id="newCarousel" ref="refCarousel" class="carousel slide" data-bs-ride="carousel">
                <!-- Slides -->
                <div class="carousel-inner">
                    <div v-for="(group, index) in groupeItems" :key="index" class="carousel-item"
                        :class="{ active: index === 0 }">
                        <div class="row g-4">
                            <div v-for="(item, itemIndex) in group" :key="itemIndex" class="col-12 col-md-6 col-lg-3">
                                <div class="card h-100 border-0 shadow-sm">
                                    <img :src="item.image" class="card-img-top" style="height: 390px; object-fit: cover"
                                        :alt="item.title">
                                    <div class="d-flex flex-column px-5">
                                        <p class="card-text text-muted fs-5 ls-1">Lorem ipsum dolor</p>
                                        <div class="card-title fw-medium" :style="{ fontSize: '17px' }">
                                            <span class="me-1">AED</span>
                                            <span class="">800.00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Indicators -->
                <div class="carousel-indicators">
                    <button v-for="(_, index) in groupeItems" :key="index" type="button" data-bs-target="#newCarousel"
                        :data-bs-slide-to="index" :class="{ active: index === 0 }"></button>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { onMounted, ref, computed } from 'vue';

const items = [
    { image: "/images/F.png" },
    { image: "/images/D.png" },
    { image: "/images/G.png" },
    { image: "/images/H.png" },
    { image: "/images/1.jpg" },
    { image: "/images/2.jpg" },
    { image: "/images/3.jpg" },
    { image: "/images/4.jpg" },
];

const groupeItems = computed(() => {
    const group = [];
    const screenWidth = window.innerWidth;

    let itemsPerGroup;
    if (screenWidth < 768) {
        itemsPerGroup = 1; 
    } else if (screenWidth >= 768 && screenWidth < 992) {
        itemsPerGroup = 2; 
    } else if(screenWidth > 993)  {
        itemsPerGroup = 4; 
    }

    for (let i = 0; i < items.length; i += itemsPerGroup) {
        group.push(items.slice(i, i + itemsPerGroup));
    }
    
    return group;
});

const refCarousel = ref(null);

onMounted(async () => {
    if (import.meta.client) {
        const { Carousel } = await import('bootstrap');
        if (refCarousel.value) {
            new Carousel(refCarousel.value, {
                interval: 3000,
                ride: true,
                wrap: false
            });
        }
    }
});
</script>

<style scoped>
.card {
    transition: transform 0.3s ease;
}

.card:hover {
    transform: translateY(-5px);
}

.carousel-indicators {
    position: absolute;
    bottom: -50px;
    margin-bottom: 0;
}

.carousel-indicators [data-bs-target] {
    width: 25px;
    height: 2px;
    background-color: rgb(6 6 6);
    border: 1px solid rgb(6 6 6);
    margin: 0 5px;
}

.carousel-indicators .active {
    background-color: #000;
    border-color: #000;
}
</style>
