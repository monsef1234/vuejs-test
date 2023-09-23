<template>
  <div
    data-aos="fade-left"
    data-aos-delay="400"
    class="max-xl:hidden absolute p-16 flex w-[720px] bg-no-repeat h-[720px] top-0 -right-4 bg-[url(@/assets/hero.png)]"
  >
    <img
      :src="require('@/assets/heroExtra.png')"
      alt="shapes"
      class="absolute top-[43%] left-[48%] -translate-x-1/2 -translate-y-1/2"
    />
    <div class="self-end text-white absolute top-[530px] left-0">
      <SwiperAchievements />
    </div>
  </div>
</template>

  <script>
import SwiperAchievements from "@/views/sections/hero/rightBox/swiperAchievements/SwiperAchievements.vue";

export default {
  name: "Right",

  components: {
    SwiperAchievements
  }
};
</script>