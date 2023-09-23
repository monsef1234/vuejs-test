<template>
  <infinite-slide-bar duration="4s" :barStyle="{height: '550px'}">
    <div
      class="flex gap-14 min-[1590px]:gap-16 min-[1600px]:gap-[6rem] min-[1660px]:gap-[8rem] min-[1720px]:gap-[9rem] min-[1740px]:gap-[10rem] min-[1780px]:gap-[12rem] min-[1900px]:gap-[14rem] min-[1960px]:gap-[16rem] min-[2025]:gap-[19rem] mt-4"
    >
      <Review />
      <Review />
    </div>
  </infinite-slide-bar>
</template>

<script>
import Review from "@/views/sections/reviews/reviewsWrapper/review/Review.vue";

export default {
  name: "Reviews",

  components: {
    Review
  }
};
</script>