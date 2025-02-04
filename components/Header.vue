<template>
    <nav>
      <nav class="p-4" :style="{ backgroundColor: '#000000' }"></nav>
      <nav class="py-3 px-5">
        <div class="d-flex flex-row align-items-end justify-content-between">
        
          <div class="fs-5 fw-medium">DEVELOPER TEST</div>
  
          <div class="d-none d-lg-flex flex-row fs-6 fw-medium">
            <div class="me-4">ELECTRONICS</div>
            <div class="me-4">JEWELRY</div>
            <div class="me-4">MEN CLOTHING</div>
            <div>WOMEN CLOTHING</div>
          </div>
  
          <div class="d-none d-lg-flex flex-column">
            <div class="d-flex flex-row align-items-center fs-6">
              <NuxtLink to="/" class="me-3 text-decoration-none text-reset" style="font-size: 13px">Home</NuxtLink>
              <NuxtLink to="/" class="me-3 text-decoration-none text-reset" style="font-size: 13px">About Us</NuxtLink>
              <NuxtLink to="/" class="me-3 text-decoration-none text-reset" style="font-size: 13px">Media Center</NuxtLink>
              <NuxtLink to="/" class="me-3 text-decoration-none text-reset" style="font-size: 13px">Contact Us</NuxtLink>
              <div class="fw-medium" style="font-size: 13px">AR</div>
            </div>

            <div class="d-none d-lg-flex flex-row align-items-center mt-4">
              <div class="position-relative w-75 py-1" style="background-color: #eeeee4; font-size: 13px;">
                <input class="w-100 px-2" type="text" placeholder="Search" style="background-color: #eeeee4; border: none;" />
                <div class="position-absolute top-0 end-0 me-3 my-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                  </svg>
                </div>
              </div>
              <div class="d-flex flex-row align-items-center">
                <div class="ms-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                  </svg>
                </div>
                <div class="mx-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                  </svg>
                </div>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-bag-dash" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M5.5 10a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5" />
                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
  
        <div class="d-lg-none">
          <button class="btn text-reset p-0" @click="toggleMenu">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-list"
              viewBox="0 0 16 16">
              <path fill-rule="evenodd"
                d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8M2 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5" />
            </svg>
          </button>
        </div>
      </div>

      <div v-if="menuOpen" class="mt-3 d-lg-none">
        <div class="d-flex flex-column align-items-start">
          <div class="py-2">ELECTRONICS</div>
          <div class="py-2">JEWELRY</div>
          <div class="py-2">MEN CLOTHING</div>
          <div class="py-2">WOMEN CLOTHING</div>
          <NuxtLink to="/" class="py-2 text-decoration-none text-reset">Home</NuxtLink>
          <NuxtLink to="/" class="py-2 text-decoration-none text-reset">About Us</NuxtLink>
          <NuxtLink to="/" class="py-2 text-decoration-none text-reset">Media Center</NuxtLink>
          <NuxtLink to="/" class="py-2 text-decoration-none text-reset">Contact Us</NuxtLink>
          <div class="fw-medium py-2">AR</div>
        </div>
      </div>
      </nav>
    </nav>
  </template>
  
  <script setup>
  import { ref } from "vue";
  
  const menuOpen = ref(false);
  const toggleMenu = () => {
    menuOpen.value = !menuOpen.value;
  };
  </script>
  
