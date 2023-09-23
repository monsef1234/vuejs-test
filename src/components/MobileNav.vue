<template>
  <Fragment>
    <div
      data-aos="fade-left"
      class="fixed flex items-center transition-all flex-col justify-center z-50 right-0 top-0 h-screen max-w-xs bg-white shadow shadow-white/40 w-full"
    >
      <nav class="flex items-center">
        <ul class="flex-1 flex-col flex items-center gap-6">
          <li
            v-on:click="$emit('closeNav')"
            class="buttonNav max-lg:!bg-white max-xl:!text-buttonColorPrimary"
          >
            <a class="py-2 px-4 block w-full" href="#aboutUs">About Us</a>
          </li>
          <li
            v-on:click="$emit('closeNav')"
            class="buttonNav max-lg:!bg-white max-xl:!text-buttonColorPrimary"
          >
            <a class="py-2 px-4 block w-full" href="#article">Article</a>
          </li>
          <li
            v-on:click="$emit('closeNav')"
            class="buttonNav max-lg:!bg-white max-xl:!text-buttonColorPrimary"
          >
            <a class="py-2 px-4 block w-full" href="#property">Property</a>
          </li>
        </ul>
      </nav>
      <button v-on:click="$emit('closeNav')" class="button mt-6">Sign Up!</button>
    </div>
    <div v-on:click="$emit('closeNav')" class="absolute z-40 inset-0 bg-black/50"></div>
  </Fragment>
</template>
<script>
import { Fragment } from "vue-fragment";
export default {
  name: "MobileNav",

  props: ["isOpen"],

  components: {
    Fragment
  }
};
</script>