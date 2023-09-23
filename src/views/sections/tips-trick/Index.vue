<template>
  <section class="mb-[7rem] relative" data-aos="fade-in">
    <img :src="require('@/assets/Vector (2).png')" class="absolute -top-20 -z-10" />
    <img :src="require('@/assets/Vector (3).png')" class="absolute top-28 -z-10 max-xl:hidden" />

    <title-two-vue title="See tips and trick from our partnership" />
    <h1 class="text-[32px] text-textColorPrimary max-lg:text-largeText font-[500] text-center">
      Find out more about
      <br />selling and buying homes
    </h1>
    <button class="button block mx-auto mt-6 !px-3 !bg-buttonColorPrimary !text-white">More Atrike!</button>
    <div class="container">
      <tips />
    </div>
  </section>
</template>

<script>
import SvgIcon from "vue-material-design-icons/Svg.vue";

import TitleTwoVue from "@/components/TitleTwo.vue";

import Tips from "@/views/sections/tips-trick/tips/Tips.vue";

export default {
  name: "Tips-Trick",

  components: {
    TitleTwoVue,
    SvgIcon,
    Tips
  }
};
</script>