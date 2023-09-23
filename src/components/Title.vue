<template>
  <div class="flex items-center gap-2 mb-2">
    <span class="h-[1.5px] block w-8 bg-miniTitleColor"></span>
    <h5 class="text-smallText text-miniTitleColor">{{title}}</h5>
  </div>
</template>
<script>
export default {
  name: "Title",
  props: ["title"]
};
</script>