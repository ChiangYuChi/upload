<template>
  <div class="item">
    <div class="pic">
      <img :src="info.img" />
      <h3>{{info.title}}</h3>
    </div>
    <p>{{info.post}}</p>
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
  width: 30%;
  margin: 0px;
  display: flex;
  flex-direction: column;
  .pic {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid $color_gray2;

    box-sizing: border-box;
    img {
      width: 50%;
      border-radius: 50%;
    }

    h3 {
      font-family: "Noto Sans TC", sans-serif;
      font-size: 20px;
      font-weight: 400;
      line-height: 30px;
      margin-top: 20px;
    }
  }
  p {
    font-family: "Montserrat", sans-serif;
    font-size: 17px;
    padding: 5px;
    text-align: justify;
    margin: 0;
  
    padding: 20px;
  }
  &:last-child {
    border: none;
  }
}
</style>