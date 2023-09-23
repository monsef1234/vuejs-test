<template>
  <Fragment>
    <section class="container">
      <img :src="require('@/assets/bubble5.png')" alt="bubble" class="absolute left-0 top-0" />
      <div class="pt-[155px] flex items-center justify-between">
        <Left />
        <Right />
      </div>
    </section>
    <Achievements />
  </Fragment>
</template>
  
<script>
import Left from "@/views/sections/hero/leftBox/Left.vue";

import Right from "@/views/sections/hero/rightBox/Right.vue";

import Achievements from "@/views/sections/hero/achievements/Achievements.vue";

import { Fragment } from "vue-fragment";

export default {
  name: "HeroSection",

  components: {
    Left,
    Right,
    Achievements,
    Fragment
  }
};
</script>
  