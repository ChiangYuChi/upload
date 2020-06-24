<template>
  <div>
    <div class="box" v-for="(item,index) in arrayData" :key="index">
      <div class="date">
        <span class="month">{{item.month}}</span>
        <span class="day">{{item.day}}</span>
        <span class="year">{{item.year}}</span>
      </div>
      <div class="pic">
        <img :src="item.images" alt />
      </div>
      <div class="title">
        <p>
          <router-link :to="item.path">{{item.title}}</router-link>
        </p>
        <i class="fas fa-angle-right"></i>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      arrayData: [
        {
          month: "May",
          day: "14",
          year: "2020",
          images: require("../../../assets/img/microsoft-logo.jpg"),
          title: "雲端辦公新潮流 Microsoft雲端辦公方案 資安問題免煩惱",
          path: "/20200521"
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/setting.scss";

.box {
  display: flex;
  height: 116px;
  width: 100%;
  border: 3px solid rgb(249, 249, 249);
  transition: all 1s;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    border: 3px solid $color_skyblue;
  }

  .date {
    width: 10%;
    color: gray;
    padding: 5px;
    font-family: "Montserrat", sans-serif;
    .month {
      font-size: 16px;
      padding: 10px;
    }
    .day {
      font-size: 28px;
    }
    .year {
      font-size: 12px;
      padding: 18px;
      letter-spacing: 10px;
    }
  }
  .title {
    width: 90%;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;

    p {
      text-align: justify;
      padding-top: 13px;
      letter-spacing: 2px;
      font-family: "Montserrat", sans-serif;
    }

    .fas {
      font-size: 50px;
      color: $color_gray1;
      margin-left: 26px;
    }
  }
}

@media (max-width: 1024px) {
  .box {
    .date {
      width: 20%;
    }
    .pic {
      width: 20%;
      img {
        width: 100%;
      }
    }
    .title {
      font-size: 14px;
    }
  }
}
@media (max-width: 768px) {
  .box {
    flex-direction: column;

    .pic {
      display: none;
    }

    .date {
      width: 100%;
    }
    .title {
      width: 100%;
      font-size: 20px;
    }
  }
}
@media (max-width: 414px) {
  .box {
    .date {
      padding-left: 15px;
      .month {
        font-size: 16px;
        padding: 10px;
      }
      .day {
        font-size: 20px;
      }
      .year {
        font-size: 12px;
        padding: 18px;
        letter-spacing: 10px;
      }
    }
    .title {
      width: 90%;
      font-size: 16px;
      display: flex;
      justify-content: center;
      align-items: center;
      p {
        text-align: justify;
        padding: 0px;
        letter-spacing: 2px;
      }

      .fas {
        font-size: 50px;
        color: $color_gray1;
      }
    }
  }
}
</style>
