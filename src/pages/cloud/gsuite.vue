<template>
  <div class="gsuite-wrapper">
    <div class="slider-wrap">
      <swiper :options="swiperOption">
        <swiper-slide>
          <div class="slide slide_one">
            <div class="slide-square"></div>
            <div class="slide-content vertical">
              <h3>數位轉型的最佳助力</h3>
              <p>全球超過 500 萬個組織使用 G Suite</p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="slide slide_two">
            <div class="slide-square"></div>
            <div class="slide-content vertical">
              <h3>G Suite 導入到活用</h3>
              <p>
                麥斯創新一站式服務
                <span>幫助企業輕鬆踏入雲端世界</span>
              </p>
            </div>
          </div>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    <div class="gsuite-intro">
      <div class="intro-container">
        <div class="nav">
          <a href="#solution">解決方案</a>
          <a href="#gsuite-content">套件內容</a>
          <a href="#choose-max">選擇麥斯創新</a>
          <a href>聯絡我們</a>
        </div>
        <div id="solution">
          <div class="item">
            <div class="icon">
              <i class="fas fa-plus"></i>
            </div>
            <h2>新公司</h2>
            <div class="text">取得自訂電子郵件和其他企業必備功能，展現企業形象與專業水準。</div>
          </div>
          <div class="item">
            <div class="icon">
              <i class="fas fa-plus"></i>
            </div>
            <h2>中小型企業</h2>
            <div class="text">使用 G Suite 的企業專屬功能，取得小組協作需要的所有工具，達到事半功倍的效果。</div>
          </div>
          <div class="item">
            <div class="icon">
              <i class="fas fa-plus"></i>
            </div>
            <h2>大型企業</h2>
            <div class="text">對於擁有上百或上千名員工的大型企業，G Suite 可協助提升協作效率，加快創新速度</div>
          </div>
        </div>
        <div id="gsuite-content">
          <div class="pic">
            <img src="./../../assets/img/gsuite-logo.png" alt />
          </div>
          <p>透過電腦、手機和平板電腦順利執行，讓您發揮最佳工作效率</p>

          <div class="content">
            <div class="items">
              <div class="item">
                <h3>交流</h3>
                <div class="text">
                  <p>無論同事身在何處都能輕鬆聯繫。</p>
                  <div class="pic">
                    <img src="./../../assets/img/suiteimg_01.png" alt />
                    <img src="./../../assets/img/suiteimg_02.png" alt />
                    <img src="./../../assets/img/suiteimg_03.png" alt />
                    <img src="./../../assets/img/suiteimg_04.png" alt />
                  </div>
                </div>
              </div>
              <div class="item">
                <h3>建立</h3>
                <div class="text">
                  <p>提供一切所需工具，助您完美實現專案。</p>
                  <div class="pic">
                    <img src="./../../assets/img/suiteimg_05.png" alt />
                    <img src="./../../assets/img/suiteimg_06.png" alt />
                    <img src="./../../assets/img/suiteimg_07.png" alt />
                    <img src="./../../assets/img/suiteimg_08.png" alt />
                    <img src="./../../assets/img/suiteimg_09.png" alt />
                    <img src="./../../assets/img/suiteimg_10.png" alt />
                  </div>
                </div>
              </div>
              <div class="item">
                <h3>存取</h3>
                <div class="text">
                  <p>輕鬆儲存檔案，迅速找出所需資料。</p>
                  <div class="pic">
                    <img src="./../../assets/img/suiteimg_11.png" alt />
                    <img src="./../../assets/img/suiteimg_12.png" alt />
                  </div>
                </div>
              </div>
              <div class="item">
                <h3>控管</h3>
                <div class="text">
                  <p>安全輕鬆管理使用者、裝置和資料。</p>
                  <div class="pic">
                    <img src="./../../assets/img/suiteimg_13.png" alt />
                    <img src="./../../assets/img/suiteimg_14.png" alt />
                    <img src="./../../assets/img/suiteimg_15.png" alt />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="choose-max">
          <div class="banner">
            <p>立即與我們聯絡</p>
          </div>
          <div class="text">
            <h2>選擇 麥斯創新</h2>
            <p>更快速、方便的部署</p>
            <div class="item">
              <div class="icon">
                <img src="./../../assets/img/suiteimg_16.png" alt />
              </div>
              <p>網域申請／驗證</p>
            </div>
            <div class="item">
              <div class="icon">
                <img src="./../../assets/img/suiteimg_17.png" alt />
              </div>
              <p>
                名稱伺服器與後台設定
                72小時內生效
              </p>
            </div>
            <div class="item">
              <div class="icon">
                <img src="./../../assets/img/suiteimg_18.png" alt />
              </div>
              <p>使用者帳號設定</p>
            </div>
            <div class="item">
              <div class="icon"></div>
              <div class="icon">
                <img src="./../../assets/img/suiteimg_19.png" alt />
              </div>
              <p>使用者與郵件資料轉移</p>
            </div>
          </div>
        </div>
        <div class="suite-maxlabs-request">
          <img src="../../assets/img/gcp-bar.jpg" alt />
          <div class="txt">
            <h3>需要 G-Suite 服務 &nbsp;就找麥斯創新</h3>
            <p>我們致力給您最好的雲端服務體驗，只要是 G-Suite 相關需求，都歡迎立即與我們聯繫!</p>

            <router-link to="contact" class="router-link">詢問我們</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

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
      }
    };
  }
};
</script>
<style lang="scss" scoped>
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
    $url: "./../../assets/img/gsuite-slider-#{$number}.jpg";
    .slide_#{$en_number} {
      background-size: cover;
      width: 100%;
      height: 440px;
      background-repeat: no-repeat;
      background-position: 76% 24%;
    }
  }

  // .slide_one {
  //   background-image: url("./../../assets/img/gsuite-slider-1.jpg");
  //   background-size: cover;
  //   width: 100%;
  //   height: 440px;
  //   background-repeat: no-repeat;
  //   background-position: 76% 24%;
  // }
  // .slide_two {
  //   background-image: url("./../../assets/img/gsuite-slider-2.jpg");
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
      font-family: "Montserrat", sans-serif;
      width: 50%;
      margin: 0 auto;
    }
    span {
      color: $color_yellow;
      padding: 10px;
      font-family: "Noto Sans TC", sans-serif;
    }
  }
}

.gsuite-intro {
  width: 100%;

  font-weight: 300;

  .intro-container {
    width: 100%;

    margin: 0 auto;

    box-sizing: border-box;

    .nav {
      width: 100%;
      border-bottom: 1px solid $color_gray2;
      padding: 10px;
      font-size: 15px;
      box-sizing: border-box;
      display: flex;
      justify-content: center;
      align-items: center;
      a {
        text-decoration: none;
        padding: 20px;
        color: $color_gray1;

        font-family: "Montserrat", sans-serif;
      }
    }

    #solution {
      width: 100%;
      display: flex;
      justify-content: center;
      padding: 60px;
      box-sizing: border-box;

      .item {
        width: 15%;
        padding: 20px;
        background-color: $color_gray2;
        margin: 40px 10px 0 10px;
        position: relative;
        text-align: justify;
        line-height: 30px;

        .icon {
          width: 40px;
          height: 40px;
          background-color: $color_blue;
          color: white;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 50%;
          position: absolute;
          top: -20px;
          left: 10px;
        }

        h2 {
          font-family: "Noto Sans TC", sans-serif;
        }

        .text {
          font-family: "Montserrat", sans-serif;
        }
      }
    }

    #gsuite-content {
      width: 100%;
      margin: 0 auto;
      font-family: "Montserrat", sans-serif;
      box-sizing: border-box;
      padding-top: 40px;

      .pic {
        width: 15%;

        margin: 0 auto;

        img {
          width: 100%;
        }
      }

      p {
        font-size: 15px;
        text-align: center;
        padding: 10px;
      }

      .content {
        background-color: $color_gray2;
        padding: 30px;
        position: relative;
        box-sizing: border-box;

        &:after {
          content: "";
          width: 0;
          height: 0;
          border-style: solid;
          border-width: 30px 30px 0 30px;
          border-color: #ffffff transparent transparent transparent;
          line-height: 0px;
          border-color: #ffffff $color_gray2 $color_gray2$color_gray2;
          top: 0;
          left: 50%;
          position: absolute;
        }

        .items {
          width: 50%;
          margin: 0 auto;

          display: flex;
          justify-content: center;
          flex-wrap: wrap;

          .item {
            width: 35%;

            display: flex;
            padding: 40px;
            flex-direction: column;

            h3 {
              text-align: center;
              font-family: "Noto Sans TC", sans-serif;
            }

            .text {
              p {
                margin: 0;
                font-family: "Montserrat", sans-serif;
              }

              .pic {
                width: 100%;
                margin: 0 auto;
                display: flex;
                justify-content: center;

                img {
                  width: 30px;
                  height: 30px;
                  margin: 5px;
                  box-sizing: border-box;
                }

                display: flex;
              }
            }
          }
        }
      }
    }
  }
}

#choose-max {
  width: 100%;

  .banner {
    width: 100%;
    padding: 40px;
    box-sizing: border-box;
    text-align: center;
    font-size: 22px;
    line-height: 27px;
    background-color: $color_blue;
    transition: ease-in 0.3s;
    color: white;
    font-weight: 500;

    &:hover {
      background-color: $color_darkblue;
    }
  }

  .text {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    h2 {
      width: 100%;
      text-align: center;
      padding: 30px;
      font-size: 30px;
      font-family: "Noto Sans TC", sans-serif;
    }

    p {
      width: 100%;
      text-align: center;
      font-size: 20px;
      font-family: "Montserrat", sans-serif;
    }

    .item {
      width: 200px;
      margin: 15px;
      padding: 30px;

      .icon {
        width: 100%;

        img {
          width: 100%;
        }
      }
    }
  }
}

.suite-maxlabs-request {
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
      h3 {
        width: 60%;
      }

      p {
        width: 60%;
      }
    }
  }

  .gsuite-intro {
    .intro-container {
      #gsuite-content {
        .content {
          .items {
            width: 100%;
            .item {
              width: 45%;
              margin: 10px;
              border: 1px solid $color_skyblue;
            }
          }
        }
      }
    }
  }
}
@media (max-width: 1024px) {
  .slider-wrap {
    .slide-content {
      h3 {
        width: 75%;
      }

      p {
        width: 75%;
      }
    }
  }

  .gsuite-intro {
    .intro-container {
      #solution {
        width: 100%;
        display: flex;
        justify-content: center;
        padding: 60px;
        box-sizing: border-box;

        .item {
          width: 30%;
        }
      }

      #gsuite-content {
        .content {
          .items {
            width: 100%;

            .item {
              width: 35%;
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
        width: 80%;
      }
      p {
        width: 80%;
        font-size: 24px;
      }
    }
  }
  .gsuite-intro {
    .intro-container {
      #gsuite-content {
        .content {
          &:after {
            left: 46%;
          }
        }
      }
    }
  }
  #choose-max {
    .text {
      .item {
        width: 100px;
      }
    }
  }
}
@media (max-width: 414px) {
  .slider-wrap {
    .slide-content {
      h3 {
        font-size: 36px;
        width: 90%;
      }

      p {
        width: 90%;
        font-size: 20px;

        span {
          display: none;
        }
      }
    }
  }
  .gsuite-intro {
    .intro-container {
      .nav {
        a {
          padding: 15px;
        }
      }

      #solution {
        width: 100%;
        display: flex;
        flex-direction: column;
        .item {
          width: 90%;
        }
      }

      #gsuite-content {
        p {
          width: 80%;
          margin: 0 auto;
        }
        .content {
          .items {
            width: 100%;

            .item {
              width: 100%;
            }
          }
        }
      }
    }
  }
  #choose-max {
    .text {
      .item {
        width: 100px;

        margin: 0;
      }
    }
  }
}

@media (max-width: 375px) {
  .gsuite-intro {
    .intro-container {
      #gsuite-content {
        p {
          width: 80%;
          margin: 0 auto;
        }

        .content {
          .items {
            width: 100%;

            .item {
              width: 65%;
            }
          }
        }
      }
    }
  }
}
</style>