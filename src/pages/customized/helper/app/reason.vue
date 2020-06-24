<template>
  <div>
    <div class="banner">
      <Banner v-for="item in bannerData" v-bind="item" :key="item"></Banner>
    </div>
    <div class="cost-text">
      <div class="text-body">
        <h1 class="heading">五個原因告訴你為什麼需要客製化網站或APP?</h1>
        <p
          class="text-inner"
        >為什麼一個月幾百幾千元就可以租到的網站或App我還需要客製化呢?這個問題其實還是得回到需求層面來探討到底市面上的模組化網站或App是否已經滿足你的需求了呢?</p>
        <div class="pic">
          <img src="@/assets/img/app-5.jpg" alt />
        </div>
        <p
          class="text-inner"
        >我們常問客戶想製作一個網站或者app的目的為何?從這個出發點開始去延伸探討到底該製作app還是網站，往往得到的答案通常都是客戶覺得現在大家都用手機不做app就落伍了，或者是網站已經過時未來大家只會用app，甚至更多數的客戶不知道web mobile與app的差別是什麼，這些問題幾乎每個客戶都會問我們，如果客戶已經很清楚知道這其中的差別，通常他對自己要製作的方向與內容也非常清楚了。</p>
        <section>
          <h5 class="tinyheading">客製化的流程</h5>
          <p
            class="text-inner"
          >初期我們會跟客戶討論期望透過這個app或者網站達到什麼樣的需求?更進一步去了解目前客戶擁有的資源與系統有什麼?然後幫他去評估現階段適不適合製作app或者網站，若是適合之後才會進行功能需求的訪談與設計，之所以要了解這麼多最主要的目的是為了防止製作出來的系統不符合客戶原先的預期，通常會發生這種狀況的前提都是因為客戶想做的功能太多太複雜，以至於偏離當初設計這套系統的初衷，我們通常會建議客戶先達成現階段的目標之後才去往下設計其他系統功能，其目的是為了確保我們所做的每項功能都符合使用者經驗。</p>
        </section>
        <section>
          <h5 class="tinyheading">客製化的目的</h5>
          <p
            class="text-inner"
          >通常想要客製化的客戶都是因為目前市面上的模組化系統或者設計無法滿足他的需求，無法滿足的需求不外乎就是無法相容既有系統、無法擴充新功能或者是無法客製符合企業形象版面、想要製作一個新品牌並串接既有系統(CRM、ERP…)、或者製作活動網站…等等，面對各種不同的需求與條件，我們通常還是會將這些需求切分成不同的階段製作，其目的是為了讓各個功能都能符合使用者經驗與需求，避免客戶花錢製作太多沒被使用到的功能甚至影響整體系統的操作流程設計。</p>
        </section>
        <section>
          <h5 class="tinyheading">客製化的優勢</h5>
          <p class="text-inner">有別於一般的模組化系統，客製化的系統通常具有以下幾種優勢：</p>
          <ol>
            <li>品牌特色:每間企業都有自己的發展理念、文化、風格甚至是個性，要從市面上找到適合的非常困難，透過客製化除了可以統一風格之外，還可以因應目標族群的習性與特徵去設計相對應的介面，讓目標族群產生好的使用者經驗就會對品牌產生好的印象。</li>
            <li>
              持續優化(A/B Test):
              一個好的網站或app不會一次就做到能滿足目標族群，必須透過持續的優化界面或者功能讓目標族群的使用者經驗提升，這是製作一個網站或者app不可忽視的重點之一。
            </li>
            <li>
              彈性功能:
              隨著企業的成長其需求也會越來越多，當需求越多的同時代表系統需要的功能也會越來越多，通常模組化的系統要在客製化是有難度的且成本也比一般原本客製化的系統還高，因為模組化的核心是要滿足絕大多數的消費者，沒辦法因應各個企業去實作專屬對應的功能。
            </li>
            <li>
              系統整合(CRM、ERP、SCM…):
              每當企業需要將旗下其他系統資料彼此之間能流通時，勢必只能做客製化的開發，尤其是在中型以上的企業裡通常系統不會只有一套，若是彼此之間不能流通資料將會大大影響企業的發展與策略，這也是為什麼中型以上的企業幾乎都需要客製化系統的原因
            </li>
          </ol>
        </section>

        <p
          class="text-inner"
        >客製化與模組化除了製作費用上的差異外，我們認為最大的優勢是要能與競爭對手做出差異化，但要做出差異化前必須得先了解客戶的企業發展理念、方向、策略…等等才能規劃出適合的網站或app，這也是我們堅持只做客製化的原因，其原因是我們希望除了提供技術上的經驗外也能提供我們製作專案上的一些經驗，避免客戶花了很多不必要的費用在功能開發上，也能透過與客戶之間的交流相互學習彼此的產業經驗與知識，進而變成合作上的夥伴而不單單只是一間系統製作公司，若是您有相關的網站或者app製作上的需求，不妨與我們聯繫交流看看！</p>
      </div>
    </div>
  </div>
</template>
<script></script>
<style lang="scss">
@import "@/assets/css/setting.scss";
.banner {
  background-image: url("../../../../assets/img/customized-slider-bg-2.jpg");
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
.cost-text {
  width: 100%;
  background-color: $color_greenblue;
  padding: 30px 0;
  .text-body {
    width: 60%;
    margin: 0 auto;
    background-color: white;
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .heading {
      font-size: 40px;
      font-family: "Noto Sans TC", sans-serif;
      font-weight: bold;
    }

    .subheading {
      font-size: 25px;
      font-family: "Noto Sans TC", sans-serif;
      font-weight: bold;
    }

    .text-inner {
      font-size: 20px;
      font-family: "Montserrat", sans-serif;
      font-weight: 300;
      letter-spacing: 1px;
      text-align: justify;
    }

    section {
      .tinyheading {
        font-family: "Noto Sans TC", sans-serif;
        font-weight: bold;
      }
      span {
        font-family: "Montserrat", sans-serif;
        font-weight: bold;
      }

      ul {
        padding-left: 20px;
        li {
          list-style: disc;
        }
      }
    }

    .pic {
      width: 100%;
      img {
        width: 100%;
      }
    }
  }
}
@media (max-width: 1280px) {
}
@media (max-width: 1024px) {
}
@media (max-width: 768px) {
  .cost-text {
    .text-body {
      width: 80%;
    }
  }
}
@media (max-width: 767px) {
}
@media (max-width: 414px) {
  .cost-text {
    .text-body {
      padding: 10px;
      .heading {
        font-size: 25px;
      }
      .subheading {
        font-size: 20px;
      }
      .tinyheading {
        font-size: 18px;
      }

      .text-inner {
        font-size: 16px;
      }
    }
  }
}
@media (max-width: 375px) {
}
@import "@/assets/css/setting.scss";
.banner {
  background-image: url("../../../../assets/img/customized-slider-bg-2.jpg");
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