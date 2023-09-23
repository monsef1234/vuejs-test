<template>
  <div id="app" class="relative">
    <ScrollToTopVue />
    <Header />
    <Hero />
    <Recommendation />
    <Sell />
    <Reviews />
    <TipsAndTrick />
    <Subscribe />
    <Footer />
  </div>
</template> 

<script>
import Header from "@/components/Header.vue";
import Hero from "@/views/sections/hero/Index.vue";
import Recommendation from "@/views/sections/recommendation/Index.vue";
import Sell from "@/views/sections/sell/Index.vue";
import Reviews from "@/views/sections/reviews/Index.vue";
import TipsAndTrick from "@/views/sections/tips-trick/Index.vue";
import Subscribe from "@/views/sections/subscribe/Index.vue";
import Footer from "@/components/Footer.vue";
import ScrollToTopVue from "./components/ScrollToTop.vue";
export default {
  name: "App",

  components: {
    Hero,
    Header,
    Recommendation,
    Sell,
    Reviews,
    TipsAndTrick,
    Subscribe,
    Footer,
    ScrollToTopVue
  }
};
</script>
