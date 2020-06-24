<template>
  <div class="app-wrapper">
    <div class="banner">
      <Banner v-for="item in bannerData" v-bind="item" :key="item"></Banner>
    </div>
    <div class="app-articles">
      <div class="article-container">
        <section class="n-1">
          <div class="text">
            <h1 class="section-heading">一篇文章讓你了解APP與網站製作費用差異</h1>
            <p
              class="section-subheading"
            >現今Web 3.0的時代網站製作已非常普遍且多元，網路上各種App製作、網站製作公司林立，其中衍生的製作成本也落差非常大，這篇文章將跟大家說明為何費用上會有這麼大的落差</p>
            <router-link to="app-cost" target="_blank">了解內容</router-link>
          </div>
          <div class="pic">
            <img src="@/assets/img/app-1.jpg" alt />
          </div>
        </section>
        <div class="icon">
          <i class="fas fa-sort-down"></i>
          <i class="fas fa-sort-down"></i>
        </div>
        <section class="n-2">
          <div class="pic">
            <img src="@/assets/img/app-2.jpg" alt />
          </div>
          <div class="text">
            <h1 class="section-heading">你的網站需要做SEO嗎?</h1>
            <p
              class="section-subheading"
            >SEO目前已經是網頁設計必須考量進去的一門技術與概念，但是不是每個網站都需要製作SEO呢? 我們可以簡單地從網站類型來思考是否需要投入資源在這上面。</p>
            <router-link to="app-SEO">了解內容</router-link>
          </div>
        </section>
        <div class="icon">
          <i class="fas fa-sort-down"></i>
          <i class="fas fa-sort-down"></i>
        </div>
        <section class="n-3">
          <div class="text">
            <h1 class="section-heading">到底該做手機版網站還是MOBILE APP呢</h1>
            <p
              class="section-subheading"
            >在現在技術與科技發展迅速的情況下，企業到底該怎麼選擇才是最適合的呢? 科技始終來自於人性，而人性的需求決定你需要什麼樣的技術，麥斯從需求面來討論到底我們需要的是Web還是App</p>
            <router-link to="app-chioce">了解內容</router-link>
          </div>
          <div class="pic">
            <img src="@/assets/img/app-3.jpg" alt />
          </div>
        </section>
        <div class="icon">
          <i class="fas fa-sort-down"></i>
          <i class="fas fa-sort-down"></i>
        </div>
        <section class="n-4">
          <div class="pic">
            <img src="@/assets/img/app-4.jpg" alt />
          </div>
          <div class="text">
            <h1 class="section-heading">製作網站與APP前你必須了解的四種知識</h1>
            <p
              class="section-subheading"
            >常常聽到原生App、混合式App或者響應式網站、行動版網站嗎？到底這些是什麼？而我又該怎麼選擇？麥斯為您簡單介紹這些不同技術的特性與適合的需求以及製作成本上的高低</p>
            <router-link to="app-knowledge">了解內容</router-link>
          </div>
        </section>
        <div class="icon">
          <i class="fas fa-sort-down"></i>
          <i class="fas fa-sort-down"></i>
        </div>
        <section class="n-5">
          <div class="text">
            <h1 class="section-heading">五個原因告訴你為什麼需要客製化網站或APP?</h1>
            <p
              class="section-subheading"
            >為什麼一個月幾百幾千元就可以租到的網站或App我還需要客製化呢?這個問題其實還是得回到需求層面來探討到底市面上的模組化網站或App是否已經滿足你的需求了呢?</p>
            <router-link to="app-reason">了解內容</router-link>
          </div>
          <div class="pic">
            <img src="@/assets/img/app-5.jpg" alt />
          </div>
        </section>
      </div>
    </div>
  </div>
</template>
<script>
import Banner from "../../components/banner";
export default {
  components: {
    Banner
  },
  data() {
    return {
      bannerData: [
        {
          line1: "APP客製化服務",
          line2: "提案、藍圖、設計、App、響應式網站"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
@import "@/assets/css/setting.scss";
.banner {
  background-image: url("./../../assets/img/customized-slider-bg-2.jpg");
  background-size: cover;
  background-position-y: 10%;
  background-position-x: 25%;
  background-repeat: no-repeat;

  .banner-container {
    width: 100%;
    height: 520px;
    position: relative;
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;

    .text {
      width: 80%;

      h1 {
        font-size: 40px;
        width: 90%;

        box-sizing: border-box;
        color: white;
        margin: 5px auto;
        text-align: center;
        font-weight: 400;
        border-bottom: 1px solid white;
        padding-bottom: 20px;
        box-sizing: border-box;
        position: relative;
        font-family: "Noto Sans TC", sans-serif;
      }

      h3 {
        color: white;
        text-align: center;
      }
    }
  }
}

@media (max-width: 414px) {
  .banner {
    .banner-container {
      .text {
        h1 {
          font-size: 30px;
          width: 100%;
        }

        h3 {
          font-size: 25px;
        }
      }
    }
  }
}
</style>

<style lang="scss" scoped>
@import "@/assets/css/setting.scss";

.app-wrapper {
  .app-articles {
    width: 100%;
    background-color: $color_greenblue;
    .article-container {
      width: 90%;
      margin: 0 auto;
      background-color: $color_greenblue2;
      section {
        width: 70%;
        display: flex;
        flex-direction: row;
        margin: 0 auto;
        padding: 20px 0;
        .text {
          background-color: white;
          width: 50%;
          padding: 70px 40px;
          box-sizing: border-box;
          text-align: justify;
          position: relative;
          .section-heading {
            font-size: 25px;
            font-family: "Noto Sans TC", sans-serif;
            font-weight: bold;
          }
          .section-subheading {
            font-size: 18px;
            font-family: "Montserrat", sans-serif;
            font-weight: 300;
          }
          a {
            text-decoration: none;
            position: absolute;
            right: 10%;
          }
        }

        .pic {
          width: 50%;

          vertical-align: middle;
          img {
            width: 100%;
          }
        }
      }
      .icon {
        width: 20%;
        margin: 0 auto;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .fas {
          background-color: $color_greenblue2;
          font-size: 18px;
          color: white;
        }
      }
    }
  }
}

@media (max-width: 1280px) {
  .app-wrapper {
    .app-articles {
      .article-container {
        section {
          .text {
            padding: 20px 40px;
            .section-heading {
              font-size: 18px;
            }
            .section-subheading {
              font-size: 16px;
            }
          }
        }
      }
    }
  }
}

@media (max-width: 1024px) {
  .app-wrapper {
    .app-articles {
      .article-container {
        section {
          .text {
            padding: 0px 40px;
          }

          a {
            bottom: 5%;
          }
        }
      }
    }
  }
}
@media (max-width: 768px) {
  .app-wrapper {
    .app-articles {
      .article-container {
        section {
          .text {
            width: 100%;
          }
          .pic {
            display: none;
          }
        }
      }
    }
  }
}

@media (max-width: 414px) {
  .app-wrapper {
    .app-articles {
      .article-container {
        section {
          width: 90%;
          .text {
            padding: 10px;
            .section-heading {
              font-size: 18px;
            }
          }
        }
      }
    }
  }
}
</style>