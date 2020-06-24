<template>
  <div class="index-wrapper">
    <div class="slider-wrap">
      <swiper :options="swiperOption">
        <swiper-slide>
          <div class="slide slide_one">
            <div class="slide-content">
              <h3>遠端辦公與學習解決方案</h3>
              <p>無論您是要在家辦公或是遠端學習</p>
              <p>麥斯創新都為您準備妥善方案</p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="slide slide_two">
            <div class="slide-content">
              <h3>專業的企業技術服務</h3>
              <p>麥斯以豐富多元的專業經驗</p>
              <p>提供企業完整解決方案</p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="slide slide_three">
            <div class="slide-content">
              <h3>服務範圍最廣的諮詢服務</h3>
              <p>整合技術諮詢、災難救助、教育訓練、技術移轉等企業支援服務</p>
              <p>服務最多樣化</p>
            </div>
          </div>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    <div class="main-maxlabs-intro">
      <div class="intro-container">
        <div class="left">
          <h3>最新消息</h3>
          <IntroLeftBox v-for="(item, index) in leftInfo" :key="index" :info="item" />
        </div>
        <div class="right">
          <IntroRightBox v-for="(item, index) in rightInfo" :key="index" :info="item" />
        </div>
      </div>
    </div>
    <div class="main-maxlabs-biscuit">
      <div class="biscuit-container">
        <div class="box1 box">
          <div class="text">
            <router-link to="/20200521" class="router">
              <span>雲端辦公新潮流</span> 資安問題免煩惱
            </router-link>
          </div>
        </div>
        <div class="box2 box">
          <div class="text">
            <router-link to="/20200516" class="router">微軟 OFFICE 365 促銷方案活動開跑</router-link>
          </div>
        </div>
        <div class="box3 box">
          <div class="text">
            <router-link to class="router">新冠肺炎驅動下網路威脅態勢的有限轉變</router-link>
          </div>
        </div>
        <div class="box4 box">
          <div class="text">
            <router-link to class="router">VMware 2020五大展望</router-link>
          </div>
        </div>
        <div class="box5 box">
          <div class="text">
            <router-link to class="router">資訊安全是遠距工作與教學不可或缺的根基</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
import IntroLeftBox from "../components/IndexBlock/IntroLeftBox";
import IntroRightBox from "../components/IndexBlock/IntroRightBox";

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  directives: {
    swiper: directive
  },
  data() {
    return {
      swiperOption: {
        //swiper3
        autoplay: 3000,
        speed: 1000,
        sildesPerView: 1,
        spaceBetween: 0,
        loop: true,
        autoplay: {
          delay: 3500
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      },
      leftInfo: [
        {
          month: "May",
          day: "19",
          year: "2020",
          router: "/maxlabs/20200519",
          routerName: "輕鬆防疫超前部署 雲端辦公新潮流 線上直播"
        },
        {
          month: "May",
          day: "28",
          year: "2020",
          router: "/maxlabs/20200516",
          routerName: "雲端辦公資安直播 ..."
        },
        {
          month: "May",
          day: "16",
          year: "2020",
          router: "/maxlabs/20200519",
          routerName: "麥斯創新官網初版上線 ..."
        },
        {
          month: "Oct",
          day: "02",
          year: "2019",
          router: "maxlabs/20191207",
          routerName: "Lenovo 2019 Transform 3.0..."
        }
      ],
      rightInfo: [
        {
          title: "隨需應變",
          img: require("../assets/img/main-icon-1.jpg"),
          post:
            "依照不同產業的需求，提供硬體、軟體與 IT 服務整合性解決方案，可以依照行業所需或是業務需求製定，以創造產業立即可用的解決方案，協助企業客戶面對商業市場的變化與挑戰"
        },
        {
          title: "系統整合服務",
          img: require("../assets/img/main-icon-2.jpg"),
          post:
            "提供客戶資訊技術的完整生命週期服務，包括ICT諮詢與評估、規劃、建置、服務、營運管理與IT委外服務。"
        },
        {
          title: "產業解決方案",
          img: require("../assets/img/main-icon-3.jpg"),
          post:
            "提供金融服務業、製造業、零售業及通訊、運輸及房地產業與政府公營事業單位等不同產業產業客戶之IT基礎建設、資訊安全、儲存系統、網路管理、資通訊之整合、專案管理以及不同手持裝置等相關之規劃、建置、系統導入與服務。"
        }
      ]
    };
  },
  components: {
    IntroLeftBox,
    IntroRightBox
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/setting.scss";
@function file_type($biscuit_count) {
  @if ($biscuit_count ==2) {
    @return "png";
  } @else {
    @return "jpg";
  }
}
.slider-wrap {
  position: relative;
  width: 100%;
  height: 540px;
  .slide {
    display: flex;
    width: 100%;
    height: 100%;
    position: relative;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
  }
  $number_count: ("one" "1", "two" "2", "three" "3", "four" "4", "five" "5");

  @each $en_number, $number in $number_count {
    $url: "../assets/img/main-slider-#{$number}.jpg";
    .slide_#{$en_number} {
      background-image: url($url);
      background-size: cover;
      width: 100%;
      height: 540px;
      background-repeat: no-repeat;
      background-position: 76% 24%;
    }
    .slide_three {
      background-position-y: 100%;
    }
  }

  .slide-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.5);
    color: #fff;
    text-align: left;
    letter-spacing: 2px;

    h3 {
      font-size: 60px;
      font-weight: bold;
      width: 70%;
      margin: 0 auto;
      font-family: "Noto Sans TC", sans-serif;
    }

    p {
      font-size: 30px;
      width: 70%;
      padding-left: 5px;
      margin: 0 auto;
      font-family: "Noto Sans TC", sans-serif;
    }
  }
}
.main-maxlabs-intro {
  width: 100%;
  padding: 50px 0;
  .intro-container {
    display: flex;
    width: 90%;
    margin: 0 auto;

    box-sizing: border-box;

    .left {
      width: 35%;
      box-sizing: border-box;

      h3 {
        font-size: 22px;
        font-weight: 300;
        padding: 0 0 14px 2px;
        font-family: "Noto Sans TC", sans-serif;
      }
    }
    .right {
      width: 70%;
      box-sizing: border-box;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin-left: 30px;
      
    }
  }
}

.main-maxlabs-biscuit {
  
  max-width: 100%;

  box-sizing: border-box;

  height: 450px;

  .biscuit-container {
    width: 90%;

    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 200px;

    @for $biscuit_count from 1 through 5 {
      $biscuit_img: $biscuit_count + 5;
      $url: "./../assets/img/main-biscuit-#{$biscuit_img}.#{file_type($biscuit_count)}";

      .box#{$biscuit_count} {
        background-image: url($url);
        background-size: cover;
        height: 195px;
        @if $biscuit_count==1 {
          grid-column-start: 1;
          grid-column-end: 2;
          grid-row-start: 1;
          grid-row-end: 3;
          height: 395px;
        }
        @if $biscuit_count==3 {
          background-position-y: 30%;
        }
        @if $biscuit_count==5 {
          background-size: contain;
        }
      }
    }

    .box {
      margin: 5px;
      position: relative;

      .text {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        padding: 50px;
        box-sizing: border-box;
        text-align: left;
        color: #fff;
        box-sizing: border-box;
        background-color: rgba(0, 0, 0, 0.2);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: relative;

        .router {
          position: absolute;
          background-color: transparent;
          width: 90%;

          font-size: 25px;
          left: 3%;

          color: white;
        }

        a {
          text-decoration: none;
          font-family: "Montserrat", sans-serif;
        }
      }
    }
  }
}

@media (max-width: 1280px) {
  .slider-wrap {
    .slide-content {
      line-height: 60px;
      h3 {
        width: 70%;
      }
      p {
        width: 70%;
        padding-left: 3px;
      }
    }
  }

  .main-maxlabs-intro {
    width: 100%;
    background-color: white;
    box-sizing: border-box;

    .intro-container {
      width: 90%;
      flex-direction: column-reverse;
      .left {
        width: 80%;
        margin: 0 auto;
        padding: 30px 0px;
        box-sizing: border-box;
        h3 {
          font-size: 20px;
          padding: 10px 25px;
          letter-spacing: 3px;
        }
      }
      .right {
        width: 80%;
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin: 0 auto;

        .item {
          width: 33%;
          display: flex;
          margin: 0px;
          display: flex;
          flex-direction: column;
          .pic {
            display: flex;
            flex-direction: column;
            width: 70%;
            margin: 0 auto;
            border: 1px solid $color_gray2;
            box-shadow: 0px 2px 3px -2px rgba(128, 128, 128, 1);
            justify-content: center;
            align-items: center;
            img {
              width: 40%;

              border-radius: 50%;
            }
            h3 {
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
            text-align: center;
            margin: 0;
            text-align: left;
            padding: 20px;
          }

          &:last-child {
            border: none;
          }
        }
      }
    }
  }
  .main-maxlabs-biscuit {
    width: 100%;

    height: auto;
    .biscuit-container {
      width: 90%;

      display: flex;
      flex-direction: column;

      .box {
        height: 200px;

        .text {
          width: 100%;

          h3 {
            bottom: 70%;
            left: 0%;
            font-size: 30px;
            width: 100%;
            text-align: center;

            .router {
              color: white;
            }
          }
        }
      }
    }
  }
}

@media (max-width: 768px) {
  .slider-wrap {
    .slide-content {
      line-height: 50px;
      h3 {
        max-width: 100%;
        font-size: 45px;
      }

      p {
        width: 80%;
        padding-left: 40px;
        font-size: 25px;
        font-weight: 300;
      }
    }
  }

  .main-maxlabs-intro {
    .intro-container {
      flex-direction: column;

      .left {
        width: 90%;
        padding: 10px;
        margin: 0 auto;

        h3 {
          text-align: center;
        }
      }

      .right {
        width: 90%;
        display: flex;
        flex-direction: column;
        .item {
          width: 90%;
          margin: 0 auto;
          p {
            padding-left: 0;
            font-size: 16px;
          }
        }
      }
    }
  }

  .main-maxlabs-biscuit {
    max-width: 100%;

    height: auto;
    .biscuit-container {
      max-width: 90%;

      .box {
        .text {
          padding: 50px;

          .router {
            width: 100%;
          }
        }
      }
    }
  }
}

@media (max-width: 767px) {
  .main-maxlabs-intro {
    .intro-container {
      flex-direction: column;
      .left {
        width: 90%;
        padding: 10px;
        margin: 0 auto;

        h3 {
          text-align: center;
        }

        p {
          text-align: left;
        }
      }

      .right {
        display: none;
      }
    }
  }
  .main-maxlabs-biscuit {
    max-width: 100%;

    height: auto;
    .biscuit-container {
      max-width: 90%;

      .box {
        .text {
          max-width: 100%;

          .router {
            width: 100%;
          }
        }
      }
    }
  }
}

@media (max-width: 414px) {
  .slider-wrap {
    .slide-content {
      width: 100%;
      h3 {
        font-size: 30px;
        width: 90%;
        text-align: left;
        line-height: 50px;
      }

      p {
        font-size: 20px;
        width: 100%;
        text-align: left;
        line-height: 40px;
        padding-left: 20px;

        box-sizing: border-box;
      }
    }
  }

  .main-maxlabs-biscuit {
    .biscuit-container {
      .box {
        position: relative;
        .text {
          .router {
            font-size: 20px;
            padding: 10px;
            text-align: center;
            width: 70%;
            height: 30%;

            position: absolute;
            bottom: 25%;
            left: 10%;
          }
        }
      }
    }
  }
}

@media (max-width: 375px) {
  .slider-wrap {
    .slide-content {
      line-height: 60px;

      h3 {
        font-size: 24px;
        width: 80%;
        text-align: left;
      }

      p {
        font-size: 18px;
        width: 90%;
        text-align: left;
      }
    }
  }

  .main-maxlabs-intro {
    .intro-container {
      .left {
        width: 100%;
        padding: 10px;
        margin: 0 auto;

        h3 {
          text-align: center;
        }

        p {
          text-align: left;
          font-size: 14px;
          span {
            text-align: left;
            display: block;
          }
        }
      }

      .right {
        display: none;
      }
    }
  }
}
</style>
