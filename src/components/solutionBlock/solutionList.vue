<template>
  <div class="solution-list">
    <div class="item">
      <p class="box">
        <router-link :to="info.router">{{info.routerName}}</router-link>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  dtata() {
    return {};
  },
  props: {
    info: {
      type: Object
    }
  }
};
</script>

<style scoped lang="scss" >
@import "@/assets/css/setting.scss";
.solution-list {
  width: 100%;
  margin: 10px auto;
  text-align: center;

  .item {
    width: 100%;
    margin-bottom: $gutter_half;

    .box {
      display: block;
      width: 370px;
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
      position: relative;
      padding: $gutter_half;
      background-color: white;
      color: #353535;
      margin: 0;
      cursor: pointer;
      text-align: left;

      font-family: "Montserrat", sans-serif;
      &:after {
        content: "+";
        font-weight: bold;
        position: absolute;
        right: $gutter;
        color: #353535;
      }
      &:hover {
        background-color: $color_skyblue;
        color: white;
        @include transition(background-color, 100ms, linear);
        &:after {
          color: white;
        }
      }
    }
  }
}
</style>