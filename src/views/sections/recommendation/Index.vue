<template>
  <section
    class="container xl:mt-64 mt-[3rem] mb-[7rem] scroll-my-30"
    id="property"
    data-aos="fade-up"
  >
    <Title title="Our Recommendation" />
    <div
      class="pl-[40px] max-sm:pl-0 flex items-center max-lg:gap-3 max-lg:flex-col justify-between"
    >
      <h1 class="text-[32px] text-textColorPrimary font-[500]">Featured House</h1>
      <div class="flex items-center justify-center gap-8 mr-4 flex-wrap">
        <button class="recommend" :class="{ 'active': isActive == 'house' }" @click="houseHandler">
          <home-icon />House
        </button>
        <button class="recommend" :class="{ 'active': isActive == 'villa' }" @click="villaHandler">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 20.9999H4C3.45 20.9999 3 20.5499 3 19.9999V8.68994C3 8.26994 3.25 7.89994 3.64 7.74994L14.64 3.51994C14.7921 3.46126 14.9561 3.44064 15.118 3.45986C15.2798 3.47909 15.4345 3.53758 15.5686 3.63025C15.7027 3.72292 15.8121 3.84696 15.8873 3.99156C15.9624 4.13617 16.0012 4.29696 16 4.45994V9.99994H8C7.45 9.99994 7 10.4499 7 10.9999V20.9999ZM17 11.9999H10C9.45 11.9999 9 12.4499 9 12.9999V19.9999C9 20.5499 9.45 20.9999 10 20.9999H14V16.9999C14 16.4499 14.45 15.9999 15 15.9999C15.55 15.9999 16 16.4499 16 16.9999V20.9999H20C20.55 20.9999 21 20.5499 21 19.9999V11.9999C21 10.8999 20.1 9.99994 19 9.99994C17.9 9.99994 17 10.8999 17 11.9999Z"
              :fill="isActive == 'villa' ? '#10B981' : '#888B97'"
            />
          </svg>
          Villa
        </button>
        <button
          class="recommend"
          :class="{ 'active': isActive == 'apartment' }"
          @click="apartmentHandler"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14 8V2C14 0.9 13.1 0 12 0H6C4.9 0 4 0.9 4 2V4H2C0.9 4 0 4.9 0 6V16C0 17.1 0.9 18 2 18H8V14H10V18H16C17.1 18 18 17.1 18 16V10C18 8.9 17.1 8 16 8H14ZM4 16H2V14H4V16ZM4 12H2V10H4V12ZM4 8H2V6H4V8ZM8 12H6V10H8V12ZM8 8H6V6H8V8ZM8 4H6V2H8V4ZM12 12H10V10H12V12ZM12 8H10V6H12V8ZM12 4H10V2H12V4ZM16 16H14V14H16V16ZM16 12H14V10H16V12Z"
              :fill="isActive == 'apartment' ? '#10B981' : '#888B97'"
            />
          </svg>
          Apartment
        </button>
      </div>
      <div class="flex items-center gap-2">
        <button
          class="button"
          :class="isBeginning ? '!bg-transparent border ' : '!bg-buttonColorPrimary !text-white'"
          @click="handlePrev"
        >
          <ChevronLeft :size="32" />
        </button>
        <button
          class="button"
          :class="isEnd ? '!bg-transparent border' : '!bg-buttonColorPrimary !text-white'"
          @click="handleNext"
        >
          <ChevronRight :size="32" />
        </button>
      </div>
    </div>
    <Cards :isActive="isActive" @swiper="swiper" @slideChange="swiperChange" />
  </section>
</template>

<script>
import Title from "@/components/Title.vue";

import Cards from "@/views/sections/recommendation/cards/Cards.vue";

import HomeIcon from "vue-material-design-icons/Home.vue";

import ChevronRight from "vue-material-design-icons/ChevronRight.vue";

import ChevronLeft from "vue-material-design-icons/ChevronLeft.vue";

import { ref } from "vue";

const swiperRef = ref();

export default {
  name: "Recommendation",

  components: {
    Title,
    Cards,
    HomeIcon,
    ChevronRight,
    ChevronLeft
  },

  data() {
    return {
      isActive: "house",
      isBeginning: true,
      isEnd: false
    };
  },

  methods: {
    swiper(swiper) {
      this.swiperRef = swiper;
    },

    houseHandler() {
      this.isActive = "house";
      swiperRef.value.slideTo(0);
    },

    villaHandler() {
      this.isActive = "villa";
      swiperRef.value.slideTo(0);
    },

    apartmentHandler() {
      this.isActive = "apartment";
      swiperRef.value.slideTo(0);
    },

    swiperChange(swiper) {
      this.isBeginning = swiper.isBeginning;
      this.isEnd = swiper.isEnd;
    },

    handleNext() {
      swiperRef.value.slideNext();
    },

    handlePrev() {
      swiperRef.value.slidePrev();
    }
  },

  setup() {
    return {
      swiperRef
    };
  }
};
</script>