<template>
  <infinite-slide-bar duration="20s" :barStyle="{height: '550px'}">
    <div class="flex gap-14 mt-4">
      <Review />
      <Review />
    </div>
  </infinite-slide-bar>
</template>

<script>
import Review from "@/views/sections/reviews/reviews/review/Review.vue";

export default {
  name: "Reviews",

  components: {
    Review
  }
};
</script>