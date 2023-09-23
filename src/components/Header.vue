<template>
  <fragment>
    <header data-aos="fade-down" class="my-5 absolute w-screen z-30">
      <div class="flex justify-between items-center container">
        <div class="flex items-center gap-3">
          <img :src="require('@/assets/logo.png')" alt="logo" />
          <h3 class="text-normalText text-textColorPrimary font-bold">Hounter</h3>
        </div>
        <div class="flex gap-14 items-center max-md:hidden">
          <nav class="flex items-center">
            <ul class="flex-1 flex items-center gap-6">
              <li class="buttonNav max-lg:!bg-white max-xl:!text-buttonColorPrimary">
                <a class="py-2 px-4 block w-full" href="#aboutUs">About Us</a>
              </li>
              <li class="buttonNav max-lg:!bg-white max-xl:!text-buttonColorPrimary">
                <a class="py-2 px-4 block w-full" href="#article">Article</a>
              </li>
              <li class="buttonNav max-lg:!bg-white max-xl:!text-buttonColorPrimary">
                <a class="py-2 px-4 block w-full" href="#property">Property</a>
              </li>
            </ul>
          </nav>
          <button class="button">Sign Up!</button>
        </div>
        <div class="cursor-pointer md:hidden" v-on:click="isOpen = true">
          <menu-icon :fill-color="'#10B981'" :size="32" />
        </div>
      </div>
    </header>
    <mobile-nav v-if="isOpen" @closeNav="isOpen = false" :isOpen="isOpen" />
  </fragment>
</template> 
<script>
import MobileNav from "./MobileNav.vue";
import { Fragment } from "vue-fragment";
import MenuIcon from "vue-material-design-icons/Menu.vue";
export default {
  name: "Header",

  components: {
    Fragment,
    MobileNav,
    MenuIcon
  },

  data() {
    return {
      isOpen: false
    };
  }
};
</script>
<style