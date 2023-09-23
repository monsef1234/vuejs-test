<template>
  <div class="flex items-center">
    <swiper
      :observer="true"
      :slides-per-view="2"
      :loop="true"
      class="!overflow-hidden"
      :space-between="0"
    >
      <swiper-slide>
        <img :src="require('@/assets/infinite1.png')" alt />
      </swiper-slide>
      <swiper-slide>
        <img :src="require('@/assets/infinit2.png')" alt />
      </swiper-slide>
    </swiper>
  </div>
</template>

  <script>
import { Swiper, SwiperSlide } from "swiper-vue2";

import "swiper/swiper-bundle.css";

export default {
  name: "SwiperAchievements",

  components: {
    Swiper,
    SwiperSlide
  }
};
</script>