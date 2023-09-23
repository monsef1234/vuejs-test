<template>
  <div class="relative max-xl:flex-1 max-xl:text-center" data-aos="fade-right" data-aos-delay="400">
    <h1
      class="max-sm:text-[35px] leading-[50px] text-bigText tracking-normal capitalize font-bold mb-4 text-textColorPrimary"
    >
      find the place to
      <br class="max-xl:hidden" />live
      <span class="text-stroke text-transparent">your dreams</span>
      {{ " " }}
      <br class="max-xl:hidden" />easily here
    </h1>
    <p class="text-textColorQuaternary leading-7 opacity-75">
      Everything you need about finding your place to live will be here,
      <br class="max-xl:hidden" />where it will be easier for you
    </p>
    <div
      class="w-[496px] max-sm:w-[300px] max-w-full flex gap-4 items-center justify-between h-14 border pr-1 pl-4 border-[#E0E3EB] rounded-full mt-5 max-xl:mx-auto"
    >
      <map-marker-icon :fill-color="'#F59E0B'" />
      <input
        type="text"
        class="rounded-full w-full p-1 outline-none placeholder:text-smallText border-none"
        placeholder="Search for the location you want!"
      />
      <button
        class="button max-sm:px-3 !text-white gap-2 !bg-buttonColorPrimary flex items-center justify-between"
      >
        Search
        <chevron-right-icon :size="25" />
      </button>
    </div>
    <div class="mt-5 flex flex-col gap-2">
      <span class="text-normal text-textColorQuaternary">Our Partnership</span>
      <div class="flex items-center gap-8 flex-wrap max-xl:justify-center max-sm:gap-4">
        <img :src="require('@/assets/traveloka_logo 2.png')" alt />
        <img :src="require('@/assets/traveloka_logo 3.png')" alt />
        <img :src="require('@/assets/traveloka_logo 4.png')" alt />
        <img :src="require('@/assets/traveloka_logo 5.png')" class="max-[460px]:-mt-6" alt />
      </div>
    </div>
  </div>
</template>

<script>
import MapMarkerIcon from "vue-material-design-icons/MapMarker.vue";

import ChevronRightIcon from "vue-material-design-icons/ChevronRight.vue";

export default {
  name: "Left",

  components: {
    MapMarkerIcon,
    ChevronRightIcon
  }
};
</script>