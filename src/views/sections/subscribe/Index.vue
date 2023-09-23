<template>
  <section class="container mb-[7rem]" data-aos="fade-in">
    <div
      class="relative bg-gradient-to-r flex items-center justify-center from-[#95BAF9] via-[#F2FCF7] to-[#E6E5F2] h-[312px] rounded-[32px]"
    >
      <div class="max-xl:hidden">
        <img class="absolute top-[71px] left-[204px]" :src="require('@/assets/Ellipse 6.png')" alt />
        <img class="absolute top-[173px] left-[67px]" :src="require('@/assets/Ellipse 7.png')" alt />
        <img class="absolute top-[143px] left-[910px]" :src="require('@/assets/Ellipse 8.png')" alt />
        <img
          class="absolute top-[107px] left-[1040px]"
          :src="require('@/assets/Ellipse 9.png')"
          alt
        />
        <img
          class="absolute top-[38px] left-[44px]"
          :src="require('@/assets/Rectangle 12.png')"
          alt
        />
        <img
          class="absolute top-[178px] left-[195px]"
          :src="require('@/assets/Rectangle 25.png')"
          alt
        />
        <img
          class="absolute top-[44px] left-[900px]"
          :src="require('@/assets/Rectangle 26.png')"
          alt
        />
        <img
          class="absolute top-[197px] left-[1032px]"
          :src="require('@/assets/Rectangle 27.png')"
          alt
        />
      </div>
      <div class="flex flex-col items-center">
        <h1
          class="text-[32px] leading-[48px] max-sm:leading-normal max-md:text-mediumText max-sm:text-normalText text-textColorPrimary font-semibold text-center"
        >
          Subscribe For More Info
          <br class="max-md:hidden" />and update from Hounter
        </h1>
        <div
          class="w-[496px] bg-white max-sm:w-[400px] max-[492px]:w-[300px] flex gap-3 items-center justify-between h-14 border pr-1 pl-4 border-[#E0E3EB] rounded-full mt-5 max-xl:mx-auto"
        >
          <email-icon :fill-color="'#3B82F6'" />
          <input
            type="text"
            class="rounded-full w-full p-1 outline-none placeholder:text-smallText border-none"
            placeholder="Search for the location you want!"
          />
          <button
            class="button max-sm:px-3 !text-white gap-2 !bg-buttonColorPrimary flex items-center justify-between"
          >Search</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import EmailIcon from "vue-material-design-icons/Email.vue";

export default {
  name: "Subscribe",

  components: {
    EmailIcon
  }
};
</script>