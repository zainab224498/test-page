<!-- pages/index.vue -->
<template>
    <div>
        <HeroSection />
        <CategoriesSection />
        <SpecialOffers />
        <CollectionImage />
        <NewArrivals />
        <MembershipBanner />
    </div>
</template>

<script setup>
import HeroSection from "~/components/HeroSection.vue"
import CategoriesSection from "~/components/CategoriesSection.vue";
import CollectionImage from "~/components/CollectionImage.vue"
import MembershipBanner from "~/components/MembershipBanner.vue"
import NewArrivals from "~/components/NewArrivals.vue"
import SpecialOffers from "~/components/SpecialOffers.vue"
</script>