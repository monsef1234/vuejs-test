<template>
  <section class="mb-[2rem]" data-aos="fade-in">
    <title-two title="See Our Reviews" />
    <h1
      class="text-[32px] text-textColorPrimary max-lg:text-largeText font-[500] text-center"
    >What Our User Say About Us</h1>
    <reviews />
  </section>
</template>

<script>
import TitleTwo from "@/components/TitleTwo.vue";

import Reviews from "@/views/sections/reviews/reviews/Reviews.vue";

export default {
  name: "ReviewsSection",

  components: {
    TitleTwo,
    Reviews
  }
};
</script>