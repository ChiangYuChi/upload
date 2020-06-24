<template>
  <div class="azure-wrapper">
    <div class="slider-wrap">
      <Slider v-bind="sliderData"></Slider>
    </div>
    <div class="azure-intro">
      <div class="intro-container">
        <h4>極大化您的 Microsoft Azure 資源</h4>
        <div class="text">
          <!--  -->
          <div class="item">
            <i class="far fa-user"></i>
            <h2>以企業應用為核心</h2>
            <p>讓關鍵 IT 服務能夠藉由雲端運算達成快速部署</p>
            <p>客戶端採用時間縮短。</p>
            <p>降低應用程序生命周期成本。</p>
          </div>
          <!--  -->
          <div class="item">
            <i class="fab fa-cloudsmith"></i>
            <h2>跨平臺</h2>
            <p>管理多重虛擬平臺化(Microsoft, VMware及 Citrix)</p>
            <p>允許執行多種作業系統，並提供管理監控能力</p>
          </div>
          <!--  -->
          <div class="item">
            <i class="fas fa-server"></i>
            <h2>未來長期的運算基礎</h2>
            <p>為您採用微軟解決方案的關鍵應用，獲致最佳的效能</p>
            <p>開發資源庫非常豐富。</p>
            <p>增加VM或記憶體擴充時，不需擔心額外的軟體授權支出</p>
          </div>
        </div>
        <div class="pic">
          <img src="./../../assets/img/azure-intro.jpg" alt />
        </div>
      </div>
    </div>
    <div class="azure-plan">
      <div class="plan-container">
        <h2>Azure 重點解決方案</h2>
        <div class="text">
          <!--  -->
          <div class="item">
            <h3>Azure Cloud Infrastructure</h3>
            <p>
              <i class="fas fa-cloud"></i>
            </p>
            <ul>
              <li>顧問諮詢服務</li>
              <li>依企業環境與微軟全系列產品量身打造</li>
              <li>協助企業更有方向轉型上雲</li>
              <li>應用於運算.容器. 儲存.資料庫. 網路等</li>
            </ul>
          </div>
          <!--  -->
          <div class="item">
            <h3>Azure App Service</h3>
            <p>
              <i class="fas fa-cogs"></i>
            </p>
            <ul>
              <li>透過Azure app service,協助企業快速部署網站</li>
              <li>打造高擴充性及簡便管理後台</li>
            </ul>
          </div>
          <!--  -->
          <div class="item">
            <h3>Azure Media Service</h3>
            <p>
              <i class="fas fa-tablet-alt"></i>
            </p>
            <ul>
              <li>雲端式媒體工作流程平台，可大規模進行影片的索引編制、封裝、保護及串流</li>
            </ul>
          </div>
          <!--  -->
        </div>
      </div>
    </div>
    <div class="azure-maxlabs-request">
      <img src="../../assets/img/gcp-bar.jpg" alt />
      <div class="txt">
        <h3>需要 Azure 服務 &nbsp;就找麥斯創新</h3>
        <p>我們致力給您最好的服務體驗，只要是 Azure 相關需求，都歡迎立即與我們聯繫!</p>
        <router-link to="contact" class="router-link">詢問我們</router-link>
      </div>
    </div>
  </div>
</template>
<script>
import Slider from "../../components/slider";
export default {
  components: {
    Slider
  },
  data() {
    return {
      sliderData: [
        {
          line1: "Microsoft Azure",
          line2: "藉由雲端運算達成快速部署關鍵 IT 服務",
          line3: "降低應用程序生命周期成本",
          line4: "客戶端採用時間縮短",
          line5: "以企業應用為核心",
          line6: "Microsoft Azure",
          line7: "未來長期的運算基礎",
          line8: "採用微軟解決方案的關鍵應用，獲致最佳的效能"
        }
      ]
    };
  }
};
</script>
<style lang="scss" >
@import "@/assets/css/setting.scss";
.azure-wrapper {
  .slider-wrap {
    position: relative;
    width: 100%;
    height: 440px;
    .slide {
      display: flex;
      width: 100%;
      height: 100%;
      position: relative;
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
    }
    $number_count: ("one" "1", "two" "2");
    @each $en_number, $number in $number_count {
      $url: "./../../assets/img/azure-slider-#{$number}.jpg";
      .slide_#{$en_number} {
        background-image: url($url);
        background-size: cover;
        width: 100%;
        height: 440px;
        background-repeat: no-repeat;
        background-position: 76% 24%;
      }
    }

    .slide_three {
      display: none;
    }

    #carousel {
      &:nth-child(3) {
        display: none;
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
        font-size: 50px;
        font-weight: 900;
        width: 70%;
        margin: 0 auto;
        padding: 10px 0;
      }

      p {
        font-size: 25px;
        font-weight: bold;
        font-family: "Montserrat", sans-serif;
        width: 70%;
        margin: 0 auto;
        padding: 10px 0;
      }

      span {
        color: $color_yellow;
        padding: 10px;
        width: 50%;

        margin: 0 auto;
        font-family: "Noto Sans TC", sans-serif;
      }
    }
  }
}
</style>
<style lang="scss" scoped>
@import "@/assets/css/setting.scss";
.azure-intro {
  width: 100%;
  padding: 60px;
  box-sizing: border-box;
  .intro-container {
    width: 95%;
    margin: 0px auto;
    padding: 15px;
    margin-top: 25px;
    box-sizing: border-box;
    h4 {
      font-size: 30px;
      color: $color_blue;
      box-sizing: border-box;
      text-align: center;
      font-weight: bold;
      padding: 20px;
      margin-bottom: 15px;
    }
    .text {
      display: flex;
      .item {
        flex-grow: 1;
        width: 25%;
        margin: 5px;
        display: flex;
        flex-direction: column;
        align-items: center;
        .fas,
        .far,
        .fab {
          font-size: 46px;
          color: $color_blue;
          padding: 10px;
        }
        h2 {
          font-size: 20px;
          font-weight: bold;
          color: $color_blue;
          padding: 10px;
        }

        p {
          font-size: 16px;
          box-sizing: border-box;
          text-align: left;
          font-weight: 400;
          font-family: "Montserrat", sans-serif;
        }
      }
    }

    .pic {
      margin: 25px;
      width: 100%;

      margin: 0 auto;

      img {
        width: 100%;
      }
    }
  }
}

.azure-plan {
  width: 100%;

  .plan-container {
    width: 80%;
    margin: 40px auto;
    padding: 40px;
    box-sizing: border-box;
    h2 {
      color: $color_blue;
      font-size: 30px;
      height: 80px;
      text-align: center;
      font-weight: bold;
      position: relative;
      &::after {
        content: "...";
        position: absolute;
        left: 50%;
        bottom: -20px;
      }
    }

    .text {
      display: flex;
      justify-content: space-between;

      padding: 40px;
      margin-top: 50px;
      box-sizing: border-box;

      .item {
        border: 1px solid rgb(235, 235, 235);
        width: 33%;
        position: relative;
        margin: 5px;

        h3 {
          font-size: 28px;
          padding: 40px 10px 0px 20px;
          font-family: "Noto Sans TC", sans-serif;
        }

        .fas {
          position: absolute;
          top: -20px;
          left: 10px;
          padding: 10px;
          font-size: 30px;
          background-color: rgb(255, 234, 220);
          color: $color_orange;
        }

        p {
          font-size: 15px;
          padding: 5px 0px 5px 20px;
          box-sizing: border-box;
          font-family: "Montserrat", sans-serif;
          font-weight: 400;
        }

        .discount {
          margin-top: 30px;

          p {
            span {
              color: $color_orange;
              padding: 10px;
              font-size: 30px;
              font-weight: 700;
              font-family: "Montserrat", sans-serif;
            }
          }
        }

        ul {
          padding: 0px 0px 5px 35px;

          li {
            list-style: disc;
            line-height: 25px;
            color: $color_gray1;
            font-family: "Montserrat", sans-serif;
          }
        }
      }
    }
  }
}

.azure-maxlabs-request {
  width: 100%;
  height: 350px;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    vertical-align: middle;
  }

  .txt {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    padding: 20px;
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    flex-direction: column;
    transition: opacity 0.5s;

    h3 {
      font-size: 40px;
      font-weight: 900;
      text-transform: uppercase;
      color: white;
      text-align: center;
      font-family: "Noto Sans TC", sans-serif;
    }

    p {
      color: white;
      text-align: center;
      font-family: "Montserrat", sans-serif;
    }

    .router-link {
      font-size: 25px;
      padding: 15px 25px;
      box-sizing: border-box;
      text-decoration: none;
      color: white;
      width: 200px;
      margin: 20px auto;
      border: 1px solid white;
      text-align: center;
      border-radius: 4px;
      font-family: "Montserrat", sans-serif;
      &:hover {
        font-size: 26px;
        color: $color_yellow;
      }
    }
  }
}
@media (max-width: 1280px) {
  .slider-wrap {
    .slide-content {
      padding: 50px;

      h3 {
        width: 90%;
      }

      p {
        width: 90%;
        padding: 0;
      }

      span {
        width: 90%;
        margin: 0 auto;
      }
    }
  }

  .azure-intro {
    padding: 20px;

    .intro-container {
      width: 100%;

      h4 {
        padding: 30px;
      }

      .text {
        display: flex;

        .item {
          align-items: flex-start;

          .fas,
          .far,
          .fab {
            padding: 0px;
          }

          h2 {
            padding: 10px 0 10px 0px;
          }
        }
      }

      .pic {
        margin: 25px;
        width: 100%;

        margin: 0 auto;

        img {
          width: 100%;
        }
      }
    }
  }

  .azure-plan {
    .plan-container {
      width: 100%;
      margin: 10px auto;

      padding: 10px;

      .text {
        margin-top: 20px;

        .item {
          h3 {
            padding: 40px 10px 10px 20px;
          }
        }
      }
    }
  }
}

@media (max-width: 1024px) {
  .azure-plan {
    .plan-container {
      .text {
        .item {
          h3 {
            font-size: 22px;
          }
        }
      }
    }
  }
}

@media (max-width: 768px) {
  .slider-wrap {
    .slide-content {
      h3 {
        font-size: 50px;

        width: 80%;
        text-align: center;
      }

      p {
        width: 80%;
        text-align: center;
        font-size: 35px;
        line-height: 50px;
        &:nth-child(3) {
          display: none;
        }
      }
    }
  }

  .azure-intro {
    .intro-container {
      h4 {
        font-size: 35px;
      }

      .text {
        display: flex;
        flex-direction: column;
        .item {
          width: 90%;
          border: 1px solid $color_blue;
          display: flex;
          flex-direction: column;
          margin: 10px auto;
          align-items: flex-start;
          padding: 10px;

          .fas,
          .far,
          .fab {
            padding: 10px;
          }

          h2 {
            padding-top: 20px;
          }

          p {
            font-size: 16px;
            text-align: left;
          }
        }
      }
    }
  }

  .azure-plan {
    width: 100%;

    .plan-container {
      width: 100%;

      .text {
        flex-direction: column;
        width: 100%;
        .item {
          border: 1px solid rgb(235, 235, 235);
          width: 90%;
          position: relative;
          margin: 25px;

          h3 {
            font-size: 38px;
          }

          p {
            font-size: 30px;
            color: red;
            padding: 5px 0px 5px 20px;
            box-sizing: border-box;
            font-family: "Montserrat", sans-serif;
            font-weight: 400;
          }
          ul {
            li {
              font-size: 24px;
              line-height: 34px;
            }
          }
        }
      }
    }
  }
}

@media (max-width: 414px) {
  .slider-wrap {
    .slide-content {
      width: 80%;
      padding: 28px;
      box-sizing: border-box;
      h3 {
        font-size: 30px;

        width: 100%;
        text-align: center;
      }

      p {
        width: 99%;
        text-align: center;
        font-size: 22px;
        line-height: 35px;
      }
    }
  }
  .azure-intro {
    .intro-container {
      width: 95%;

      h4 {
        font-size: 21px;
        padding: 0px;
      }
    }
  }
  .azure-plan {
    .plan-container {
      .text {
        .item {
          width: 100%;

          margin: 15px auto;

          h3 {
            font-size: 20px;
          }

          ul {
            li {
              font-size: 18px;
            }
          }
        }
      }
    }
  }
}

@media (max-width: 375px) {
  .slider-wrap {
    .slide-content {
      width: 90%;
      padding: 28px;
      box-sizing: border-box;
      h3 {
        font-size: 26px;
        width: 100%;
        text-align: center;
      }

      p {
        width: 99%;
        text-align: center;
        font-size: 20px;
        line-height: 35px;
      }
    }
  }
  .azure-intro {
    .intro-container {
      h4 {
        font-size: 19px;
        padding: 0px;
      }
    }
  }

  .azure-plan {
    .plan-container {
      .text {
        width: 100%;
        .item {
          width: 100%;

          margin: 15px auto;
          padding: 5px;
          h3 {
            font-size: 18px;
          }

          ul {
            li {
              font-size: 16px;
              line-height: 34px;
            }
          }
        }
      }
    }
  }
}
</style>