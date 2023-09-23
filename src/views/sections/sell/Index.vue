<template>
  <section class="container mb-[7rem] relative" data-aos="fade-up">
    <img :src="require('@/assets/bubble4.png')" class="absolute -top-64 -right-44" alt="bubble" />
    <img
      :src="require('@/assets/bubble3.png')"
      class="absolute -top-28 -right-80 max-xl:hidden min-[1800px]:hidden"
      alt="bubble"
    />
    <Title title="Ready to Sell!" />
    <div
      class="pl-[40px] max-sm:pl-0 grid grid-cols-1 lg:grid-cols-2 gap-[5rem] xl:gap-[10rem] relative"
    >
      <left-box />
      <right-box />
    </div>
  </section>
</template>

<script>
import Title from "@/components/Title.vue";
import LeftBox from "@/views/sections/sell/leftBox/LeftBox.vue";
import RightBox from "@/views/sections/sell/rightBox/RightBox.vue";

export default {
  name: "Sell",

  components: {
    Title,
    LeftBox,
    RightBox
  }
};
</script>