<template>
  <div class="left-box">
    <div class="date">
      <span class="month">{{info.month}}</span>
      <span class="day">{{info.day}}</span>
      <span class="year">{{info.year}}</span>
    </div>
    <div class="title">
      <p>
        <router-link :to="info.router">{{info.routerName}}</router-link>
      </p>
      <i class="fas fa-angle-right" />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {

    };
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
.left-box {
  height: 66px;
  width: 100%;
  border: 3px solid rgb(249, 249, 249);
  transition: all 1s;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  &:hover {
    border: 3px solid $color_skyblue;
  }
  .date {
    width: 30%;
    color: gray;
    padding-left: 15px;
    display: flex;
    flex-direction: row;
    .day,
    .month,
    .year {
      font-size: 12px;
      padding-left: 3px;
       font-family: "Montserrat", sans-serif;
    }
  }
  .title {
    width: 90%;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;

    p {
      width: 90%;
      text-align: left;
      letter-spacing: 2px;
       font-family: "Montserrat", sans-serif;
    }
    a {
      text-decoration: none;
       font-family: "Montserrat", sans-serif;
    }
    .fas {
      font-size: 20px;
      color: $color_gray1;
    }
  }
}
</style>