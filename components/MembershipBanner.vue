<template>
    <section :style="{ marginBottom:'3px', borderBottom:'1px solid black'}">
        <div class="d-flex flex-row align-items-center justify-content-center" :style="{ backgroundColor:'#efdc2d', padding: '6rem 4rem' }">
            <h1 class="fs-2 fw-bold me-5">BECOME A MEMBER & GET 15% OFF</h1>
            <div class="position-relative" :style="{ width: '260px' }">
                <div class=" border border-dark w-100 d-none d-lg-block" :style="{ padding: '1.5rem' }"></div>
                <div class="position-absolute d-flex flex-row align-items-center w-100 text-white"
                    :style="{ top: '-9px', left: '-4px', padding: '0.9rem 1.5rem', backgroundColor:'#000000' }">
                    <div class="me-3 fs-6 fw-medium ls-2">SIGN UP FOR FREE</div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="white"
                        class="bi bi-arrow-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                    </svg>
                </div>
            </div>
        </div>
    </section>
</template>