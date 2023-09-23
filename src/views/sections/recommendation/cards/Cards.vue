<template>
  <div class="pl-[40px] max-sm:pl-0 mt-6">
    <swiper
      class="!overflow-visible"
      :slidesPerView="1"
      :spaceBetween="20"
      :centeredSlides="true"
      :loop="false"
      @swiper="getRef"
      @slideChange="onSlideChange"
      :grab-cursor="true"
      :observer="true"
      :breakpoints="{
        640: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        780 : {
          slidesPerView: 3,
          spaceBetween: 40
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 50
        }
      }"
    >
      <swiper-slide v-for="card in filterRecommendation" :key="card.id">
        <Card :card="card" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import Card from "./card/Card.vue";

import { Swiper, SwiperSlide } from "swiper-vue2";

import "swiper/swiper-bundle.css";

export default {
  name: "Cards",

  components: {
    Card,
    Swiper,
    SwiperSlide
  },

  props: ["isActive"],

  data() {
    return {
      cards: [
        {
          title: "Roselands House",
          price: "35.000.000",
          image: require("@/assets/house10.png"),
          id: 1,
          recommend: "house"
        },
        {
          title: "Roselands House",
          price: "35.000.000",
          image: require("@/assets/house11.png"),
          id: 2,
          recommend: "house"
        },
        {
          title: "Roselands House",
          price: "35.000.000",
          image: require("@/assets/house12.png"),
          id: 3,
          recommend: "house"
        },
        {
          title: "Roselands House",
          price: "35.000.000",
          image: require("@/assets/house11.png"),
          id: 4,
          recommend: "house"
        },
        {
          title: "Roselands House",
          price: "35.000.000",
          image: require("@/assets/house12.png"),
          id: 5,
          recommend: "house"
        },
        {
          title: "Roselands villa",
          price: "35.000.000",
          image: require("@/assets/house11.png"),
          id: 6,
          recommend: "villa"
        },
        {
          title: "Roselands villa",
          price: "35.000.000",
          image: require("@/assets/house12.png"),
          id: 7,
          recommend: "villa"
        },
        {
          title: "Roselands apartment",
          price: "35.000.000",
          image: require("@/assets/house11.png"),
          id: 8,
          recommend: "apartment"
        },
        {
          title: "Roselands apartment",
          price: "35.000.000",
          image: require("@/assets/house12.png"),
          id: 9,
          recommend: "apartment"
        }
      ],
      filterRecommendation: []
    };
  },

  methods: {
    getRef(swiperInstance) {
      this.$emit("swiper", swiperInstance);
    },
    onSlideChange(swiper) {
      this.$emit("slideChange", swiper);
    }
  },

  watch: {
    isActive: function() {
      this.filterRecommendation = this.cards.filter(
        card => card.recommend == this.isActive
      );
    }
  },

  created() {
    this.filterRecommendation = this.cards.filter(
      card => card.recommend == this.isActive
    );
  }
};
</script>