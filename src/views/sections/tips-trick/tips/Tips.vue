<template>
  <div class="grid grid-cols-2 max-lg:grid-cols-1 gap-6 mt-10">
    <div class="flex flex-col gap-8">
      <Tip :tips="tipsWithNoDesc" />
    </div>
    <div v-for="tip in tipsWithDesc" :key="tip.id" class="flex flex-col gap-4 max-lg:hidden">
      <img :src="tip.imgHouse" alt />
      <div class="flex items-center gap-4">
        <img class="h-8 object-cover rounded-full" width="32" :src="tip.img" alt />
        <span class="text-[#3C4563] text-smallText font-normal">{{ tip.author }}</span>
      </div>
      <h4 class="text-largeText text-textColorPrimary font-medium">{{ tip.title }}</h4>
      <p class="text-textColorQuaternary text-smallText opacity-75 leading-6">{{tip.desc}}</p>
      <div class="text-textColorQuaternary flex items-center gap-3">
        <clock-icon :size="20" />
        <span class="font-normal text-smallText">{{tip.time}} read | {{tip.date}}</span>
      </div>
    </div>
    <div class="hidden max-lg:flex max-sm:justify-center">
      <Tip :tips="tipsWithDesc" />
    </div>
  </div>
</template>

<script>
import Tip from "@/views/sections/tips-trick/tips/tip/Tip.vue";

import ClockIcon from "vue-material-design-icons/ClockTimeFive.vue";

export default {
  name: "Tips",

  components: {
    Tip,
    ClockIcon
  },

  data() {
    return {
      tipsData: [
        {
          id: 1,
          title: "The things we need to check when we want to buy a house",
          author: "Dianne Russell",
          img: require("@/assets/photo-1500648767791-00dcc994a43e.avif"),
          imgHouse: require("@/assets/house9.png"),
          time: "4 min",
          date: "25 Apr 2021"
        },
        {
          id: 2,
          title:
            "7 Ways to distinguish the quality of the house we want to buy",
          author: "Courtney Henry",
          img: require("@/assets/photo-1500648767791-00dcc994a43e.avif"),
          imgHouse: require("@/assets/house8.png"),
          time: "6 min",
          date: "24 Apr 2021"
        },
        {
          id: 3,
          title: "The best way to know the quality of the house we want to buy",
          author: "Darlene Robertson",
          img: require("@/assets/photo-1500648767791-00dcc994a43e.avif"),
          imgHouse: require("@/assets/house7.png"),

          time: "2 min",
          date: "24 Apr 2021"
        },
        {
          id: 4,
          title: "12 Things to know before buying a house",
          author: "Cameron Williamson",
          img: require("@/assets/photo-1500648767791-00dcc994a43e.avif"),
          time: "8 min",
          date: "25 Apr 2021",
          imgHouse: require("@/assets/house6.png"),
          desc:
            "Want to buy a house but are unsure about what we should know, here I will try to explain what we should know and check when we want to buy a house"
        }
      ],
      tipsWithNoDesc: [],
      tipsWithDesc: []
    };
  },

  created() {
    this.tipsWithDesc = this.tipsData.filter(tip => tip.desc);
    this.tipsWithNoDesc = this.tipsData.filter(tip => !tip.desc);
  }
};
</script>