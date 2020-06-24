<template>
  <div class="ali-wrapper">
    <div class="slider-wrap">
      <Slider v-for="item in sliderData" v-bind="item" :key="item"></Slider>
    </div>
    <div class="alibaba-intro">
      <div class="intro-container">
        <div class="intro-top">
          <p>隨著跨域商務量的增長，您的企業由全球各地區連線入中國，是否時常遇到下列問題呢?</p>
          <p>
            <i class="fas fa-check"></i>&nbsp;公用網路壅塞&nbsp;
            <i class="fas fa-check"></i>&nbsp;資料傳輸速度慢且常傳輸失敗&nbsp;
            <i class="fas fa-check"></i>&nbsp;在公眾網路裡不安全的問題​
          </p>
        </div>
        <div class="intro-belt" >
          <p>
            CEN 雲企業網將為您把 VPC 與VPC，或 VPC 與自有資料中心 (IDC)
            間，
            <br />搭建企業內網通訊平台，以此來實現自動路由分發及學習，提高網路的快速收斂，和跨網路通訊的品質和安全性，實現全網資源的互通，為您打造安全通暢互連網路與通訊力。
          </p>
        </div>
        <div class="intro-cen">
          <h2>雲企業網_CEN 優點</h2>
          <div class="intro-cen-container">
            <div class="items">
              <div class="item">
                <div class="icon">
                  <img src="./../../assets/img/ali-icon1.png" alt />
                </div>
                <div class="text">
                  <p>全網互聯</p>
                  <p>雲企業網中的任意兩個實例彼此互聯，輕鬆實現一網通天下</p>
                  <p>低時延</p>
                  <p>任意兩點網路實例之間以最短路徑私網互通，高速率，低時延</p>
                  <p>高冗餘</p>
                  <p>任意兩點之間至少存在4組硬地冗餘鏈路，即使部份鏈路中斷，客戶商務仍正常執行</p>
                </div>
              </div>
              <div class="item">
                <div class="icon">
                  <img src="./../../assets/img/ali-icon2.png" alt />
                </div>
                <div class="text">
                  <p>網路管理</p>
                  <p>全網路由自動轉寄與學習，路由秒級收斂</p>
                  <p>用戶設定</p>
                  <p>用戶不需要進行繁重的路由設定及管理工作</p>
                </div>
              </div>
              <div class="item">
                <div class="icon">
                  <img src="./../../assets/img/ali-icon3.png" alt />
                </div>
                <div class="text">
                  <p>自主管理</p>
                  <p>區域間 Region 互通頻寬可按需配置</p>
                  <p>頻寬共用</p>
                  <p>按區域購買頻寬包，區域間 Region 互通共用該頻寬包</p>
                </div>
              </div>
              <div class="item">
                <div class="icon">
                  <img src="./../../assets/img/ali-icon4.png" alt />
                </div>
                <div class="text">
                  <p>安全可靠</p>
                  <p>通訊資料不經公網，多級鏈路冗餘許諾通訊品質</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="ali-maxlabs-request">
      <img src="../../assets/img/gcp-bar.jpg" alt />
      <div class="txt">
        <h3>需要阿里雲服務 &nbsp;就找麥斯創新</h3>
        <p>我們致力給您最好的雲端服務體驗，只要是阿里雲相關需求，都歡迎立即與我們聯繫!</p>

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
          line1: "導入阿里雲 CEN 企業網",
          line2: "企業連線中國不卡關 輕鬆實現一網通天下",
          line6: "Alibaba Cloud 雲企業網",
          line7: "麥斯創新一站式解決方案",
          line8: "助您連線中國不卡關"
        }
      ]
    };
  }
};
</script>
<style lang="scss">
@import "@/assets/css/setting.scss";
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
    $url: "./../../assets/img/ali-slider-bg-#{$number}.jpg";
    .slide_#{$en_number} {
      background-image: url($url);
      background-size: cover;
      width: 100%;
      height: 440px;
      background-repeat: no-repeat;

      @if $number==1 {
        background-position-y: 66%;
      }
      @if $number==2 {
        background-position: 76% 24%;
      }
    }
  }

  // .slide_one {
  //   background-image: url("./../../assets/img/ali-slider-bg-1.jpg");
  //   background-size: cover;
  //   width: 100%;
  //   height: 440px;
  //   background-repeat: no-repeat;
  // }
  // .slide_two {
  //   background-image: url("./../../assets/img/ali-slider-bg-2.jpg");
  //   background-size: cover;
  //   width: 100%;
  //   height: 440px;
  //   background-repeat: no-repeat;
  //   background-position: 76% 24%;
  // }

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
      width: 50%;

      margin: 0 auto;
    }

    p {
      font-size: 30px;
      font-weight: bold;
      width: 50%;
      margin: 0 auto;
    }

    span {
      color: $color_yellow;
      padding: 10px;
      font-family: "Noto Sans TC", sans-serif;
    }
  }
  .fas {
    display: none;
  }
}
</style>

<style lang="scss" scoped>
@import "@/assets/css/setting.scss";

.alibaba-intro {
  width: 100%;
  position: relative;
  .intro-container {
    width: 100%;
    padding-top: 30px;
    box-sizing: border-box;

    .intro-top {
      width: 40%;
      margin: 0 auto;
      padding: 10px;
      box-sizing: border-box;
      p {
        font-size: 20px;
        text-align: center;
        font-family: "Montserrat", sans-serif;
        padding: 20px;
        &:nth-child(2) {
          color: $color_blue;
        }
      }
    }

    .intro-belt {
      background-color: black;
      color: white;

      box-sizing: border-box;
      padding: 50px;

      h2 {
        font-size: 30px;
        text-align: center;
        padding: 10px;
        box-sizing: border-box;
        font-family: "Noto Sans TC", sans-serif;
      }

      p {
        font-size: 18px;
        text-align: center;
        line-height: 35px;
        color: $color_gray1;
        font-family: "Montserrat", sans-serif;
      }
    }

    .intro-cen {
      position: relative;
      width: 100%;

      h2 {
        position: absolute;
        top: -43px;
        background-color: #fff;
        left: 45%;
        padding: 5px 20px;
        border-top: 5px solid $color_skyblue;
        box-sizing: border-box;
        font-family: "Noto Sans TC", sans-serif;
      }

      .intro-cen-container {
        width: 90%;
        padding: 50px;
        margin: 0 auto;
        box-sizing: border-box;
        .items {
          width: 80%;

          margin: 0 auto;
          display: flex;
          flex-wrap: wrap;

          justify-content: space-between;

          .item {
            width: 45%;
            margin: 20px;
            display: flex;

            .icon {
              width: 30%;

              img {
                width: 60%;
              }
            }

            .text {
              width: 70%;
              padding: 10px 0px;

              p {
                margin: 0;
                line-height: 25px;
                font-size: 18px;
                font-family: "Montserrat", sans-serif;
                &:nth-child(even) {
                  font-size: 15px;
                  color: $color_gray1;
                }
              }
            }
          }
        }
      }
    }
  }
}

.ali-maxlabs-request {
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
      font-family: "Noto Sans TC", sans-serif;
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
      font-family: "Noto Sans TC", sans-serif;
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
      h3 {
        width: 60%;
        padding-left: 15px;
      }

      p {
        width: 60%;
      }
    }
  }

  .alibaba-intro {
    .intro-container {
      .intro-top {
        width: 99%;

        padding: 15px;
      }

      .intro-cen {
        h2 {
          left: 35%;
        }
        .intro-cen-container {
          width: 90%;

          .items {
            width: 90%;
          }
        }
      }
    }
  }

  .ali-demo-request {
    .contact-container {
      .field {
        width: 70%;
      }
    }
  }
}
@media (max-width: 1024px) {
  .slider-wrap {
    .slide-content {
      h3,
      p {
        width: 70%;
      }
    }
  }

  .alibaba-intro {
    .intro-container {
      .intro-top {
        width: 99%;

        padding: 15px;
      }

      .intro-cen {
        h2 {
          left: 30%;
        }

        .intro-cen-container {
          width: 90%;

          .items {
            width: 90%;

            flex-direction: row;

            .item {
              width: 40%;
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
      h3 {
        width: 75%;
        font-size: 50px;
      }

      p {
        width: 75%;
        font-size: 23px;
      }
    }
  }
}

@media (max-width: 414px) {
  .slider-wrap {
    .slide-content {
      h3 {
        font-size: 30px;
        padding: 5px;
        width: 90%;
        text-align: center;
      }
      p {
        font-size: 16px;
        width: 100%;
        text-align: center;
      }
    }
  }

  .alibaba-intro {
    .intro-container {
      .intro-cen {
        h2 {
          left: 30%;
          top: -30px;
          left: 25%;
          font-size: 20px;
        }

        .intro-cen-container {
          width: 100%;

          .items {
            width: 100%;
            .item {
              width: 100%;
              border: 1px solid $color_lightblue2;

              flex-direction: column;
              padding: 15px;
              .icon {
                width: 100%;

                display: flex;
                justify-content: center;
                align-items: center;

                img {
                  width: 59%;
                }
              }

              .text {
                width: 100%;
                padding: 20px 10px;

                p {
                  text-align: center;
                  margin: 5px;
                  color: blue;
                  &:nth-child(even) {
                    font-size: 15px;
                    color: $color_gray1;
                  }
                }
              }
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
      h3 {
        font-size: 25px;
        padding: 5px;
        width: 100%;
        text-align: center;
      }
      p {
        font-size: 16px;
        width: 95%;
        text-align: center;
      }
    }
  }
}
</style>