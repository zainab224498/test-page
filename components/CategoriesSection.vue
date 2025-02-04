<template>
    <section>
        <div class="position-relative">
            <img class="w-100 h-50" src="/Images/Jewelry.jpg" alt="Jewelry">
            <div class="position-absolute bottom-0 start-0 ms-5 mb-5">
                <div class="position-relative">
                    <div class="border" :style="{ padding: '1.1rem 4.6rem', borderColor: '#eeeee4 !important' }"></div>
                    <div class="position-absolute d-flex flex-row align-items-center py-2 px-2 text-dark" :style="{ backgroundColor: '#eeeee4', top:'-9px', left: '-6px'}">
                        <div class="ms-4 me-3 fw-semibold ls-1" :style="{ fontSize: '13px' }">SEE MORE</div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="dark" class="bi bi-arrow-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>