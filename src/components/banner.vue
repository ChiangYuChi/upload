<template>
  <div class="banner-container">
    <div class="text">
      <h1>{{line1}}</h1>
      <h3 class="banner-line2">{{line2}}</h3>
    </div>
  </div>
</template>
<script>
export default {
  name: "Banner",
  props: {
    line1: [String],
    line2: [String]
  }
};
</script>

