<template>
  <Fragment>
    <div
      class="flex items-center gap-8 max-sm:flex-col max-sm:text-center"
      v-for="tip in tips"
      :key="tip.id"
    >
      <img width="200" class="h-[144px] object-cover rounded-2xl" :src="tip.imgHouse" alt />
      <div class="flex flex-col gap-4 max-sm:items-center">
        <div class="flex items-center gap-4">
          <img class="h-8 object-cover rounded-full" width="32" :src="tip.img" alt />
          <span class="text-[#3C4563] font-normal">{{ tip.author }}</span>
        </div>
        <h4 class="text-textColorPrimary font-medium text-mediumText !leading-8">{{ tip.title }}</h4>
        <div class="text-textColorQuaternary flex items-center gap-3">
          <ClockIcon :size="20" />
          <span class="font-normal text-smallText">{{tip.time}} read | {{tip.date}}</span>
        </div>
      </div>
    </div>
  </Fragment>
</template>

<script>
import ClockIcon from "vue-material-design-icons/ClockTimeFive.vue";
import { Fragment } from "vue-fragment";

export default {
  name: "Tip",

  props: ["tips"],

  components: {
    Fragment,
    ClockIcon
  }
};
</script>