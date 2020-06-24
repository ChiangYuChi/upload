<template>
  <div class="promotion-wrapper">
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
    <nav aria-label="...">
      <ul class="pagination">
        <li class="page-item disabled">
          <a class="page-link" href="#" tabindex="-1">Prev</a>
        </li>
        <li class="page-item active">
          <a class="page-link" href="#">1</a>
        </li>

        <li class="page-item">
          <a class="page-link" href="#">Next</a>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
export default {
  data() {
    return {
      arrayData: [
        {
          month: "Oct",
          day: "12",
          year: "2019",
          images: require("../../../assets/img/maxlabs_logo_28060.png"),
          title:
            "麥斯創新在 Lenovo 2019 Transform 3.0 推出 ALTO 自動化部屬平台",
          path: "/maxlabs/20191012"
        },
        {
          month: "Dec",
          day: "07",
          year: "2019",
          images: require("../../../assets/img/maxlabs_logo_28060.png"),
          title: "DevFest Kaohsiung 2019",
          path: "/maxlabs/20191207"
        },
        {
          month: "May",
          day: "16",
          year: "2020",
          images: require("../../../assets/img/maxlabs_logo_28060.png"),
          title: "麥斯創新成立一周年，官方網站終於上線了，歡迎參觀並給予指教",
          path: "/maxlabs/20200516"
        },
        {
          month: "May",
          day: "19",
          year: "2020",
          images: require("../../../assets/img/maxlabs_logo_28060.png"),
          title: "輕鬆防疫超前部署 雲端辦公新潮流 線上直播",
          path: "/maxlabs/20200519"
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
      width: 90%;
      text-align: left;
      letter-spacing: 2px;
      font-family: "Montserrat", sans-serif;
      padding-top: 13px;
    }

    a {
      text-decoration: none;
      font-family: "Montserrat", sans-serif;
    }
    .fas {
      font-size: 50px;
      color: $color_gray1;
      margin-left: 26px;
    }
  }
}

nav {
  margin: 0 auto;

  display:flex;
  justify-content: center;
  align-items: center;
  padding-top: 15px;
}

@media (max-width: 768px) {
  .box {
    flex-direction: column;

    .date {
      width: 100%;

      display: flex;
      flex-direction: row;
      padding-left: 20px;
      .month {
        font-size: 20px;
        padding: 3px;
      }
      .day {
        font-size: 20px;
        padding: 3px;
      }
      .year {
        font-size: 20px;
        padding: 3px;
        letter-spacing: 0px;
      }
    }
    .pic {
      display: none;
    }
    .title {
      width: 100%;
      font-size: 20px;

      p {
        width: 100%;
        padding-left: 10px;
        letter-spacing: 0;
      }
      a {
        text-decoration: none;
      }
    }
  }
}

@media (max-width: 414px) {
  .box {
    .date {
      width: 100%;

      display: flex;
      flex-direction: row;
      padding-left: 20px;
      .month {
        font-size: 20px;
        padding: 3px;
      }
      .day {
        font-size: 20px;
        padding: 3px;
      }
      .year {
        font-size: 20px;
        padding: 3px;
        letter-spacing: 0px;
      }
    }
    .pic {
      display: none;
    }
    .title {
      width: 100%;
      font-size: 20px;

      p {
        width: 100%;
        padding-left: 10px;
        letter-spacing: 0;
      }
    }
  }
}

@media (max-width: 375px) {
  .box {
    .date {
      width: 100%;

      display: flex;
      flex-direction: row;
      padding-left: 20px;
      .month {
        font-size: 20px;
        padding: 3px;
      }
      .day {
        font-size: 20px;
        padding: 3px;
      }
      .year {
        font-size: 20px;
        padding: 3px;
        letter-spacing: 0px;
      }
    }
    .pic {
      display: none;
    }
    .title {
      width: 100%;
      font-size: 15px;

      p {
        width: 100%;
        padding-left: 10px;
        letter-spacing: 0;
      }
    }
  }
}
</style>