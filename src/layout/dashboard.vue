<template>
  <div class="dashboard-wrapper">
    <navbar></navbar>
    <router-view></router-view>
    <bottom></bottom>
  </div>
</template>

<script>
import navbar from "../components/navbar";
import bottom from "../components/bottom";
export default {
  components: {
    navbar,
    bottom
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.dashboard-wrapper {
  width: 100%;
}
</style>
