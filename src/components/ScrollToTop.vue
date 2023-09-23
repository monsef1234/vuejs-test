<template>
  <div
    v-if="isScrolled"
    @click="scrollToTop"
    data-aos="fade-in"
    class="fixed bottom-5 cursor-pointer right-5 text-buttonColorPrimary z-50 rounded-full p-2 border-2 bg-white"
  >
    <ArrowUpThick :size="32" />
  </div>
</template>

<script>
import ArrowUpThick from "vue-material-design-icons/ArrowUpThick.vue";

export default {
  name: "ScrollToTop",

  components: {
    ArrowUpThick
  },

  data() {
    return {
      isScrolled: false
    };
  },

  methods: {
    ifScrolled() {
      window.onscroll = () => {
        if (window.scrollY > 100) {
          this.isScrolled = true;
        } else {
          this.isScrolled = false;
        }
      };
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
      });
    }
  },

  mounted() {
    this.ifScrolled();
  }
};
</script>