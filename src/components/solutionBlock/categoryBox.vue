<template>
  <div class="item">
    <div class="category">{{info.category}}</div>
    <div class="product">
      <router-link :to="info.router" >{{info.routerName}}</router-link>
      <router-link :to="info.router2">{{info.routerName2}}</router-link>
      <router-link :to="info.router3">{{info.routerName3}}</router-link>
      <router-link :to="info.router4">{{info.routerName4}}</router-link>
      <router-link :to="info.router5">{{info.routerName5}}</router-link>
      <router-link :to="info.router6">{{info.routerName6}}</router-link>
      <router-link :to="info.router7">{{info.routerName7}}</router-link>
      <router-link :to="info.router8">{{info.routerName8}}</router-link>
      <router-link :to="info.router9">{{info.routerName9}}</router-link>
      <router-link :to="info.router10">{{info.routerName10}}</router-link>
      <router-link :to="info.router11">{{info.routerName11}}</router-link>
      <router-link :to="info.router12">{{info.routerName12}}</router-link>
      <router-link :to="info.router13">{{info.routerName13}}</router-link>
      <router-link :to="info.router14">{{info.routerName14}}</router-link>
      <router-link :to="info.router15">{{info.routerName15}}</router-link>
      <router-link :to="info.router16">{{info.routerName16}}</router-link>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: {
    info: {
      type: Object
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/setting.scss";
.item {
  width: 49%;
  height: 200px;
  display: flex;
  margin: 10px 5px;

  .category,
  .product {
    width: 50%;
  }

  .category {
    background: linear-gradient(to right, $color_blue, $color_lightblue2);
    font-family: "Montserrat", sans-serif;
    font-size: 40px;
    font-weight: 300;
    color: white;
    padding: 20px;
    box-sizing: border-box;
  }
  .product {
    background-color: $color_darkblue;
    display: flex;
    flex-direction: column;
    padding-bottom: 55px;
    a {
      font-family: "Montserrat", sans-serif;
      font-size: 15px;
      color: white;
      padding: 5px 0 0 23px;
      font-weight: 300;
    }
  }
}
@media (max-width: 1280px) {
}
@media (max-width: 1024px) {
}
@media (max-width: 768px) {
}
@media (max-width: 767px) {
}
@media (max-width: 414px) {
}
@media (max-width: 375px) {
}
</style>
