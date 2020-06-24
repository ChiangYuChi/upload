<template>
  <div>
    <div class="banner">
      <Banner v-for="item in bannerData" v-bind="item" :key="item"></Banner>
    </div>
    <div class="cost-text">
      <div class="text-body">
        <h1 class="heading">製作網站與App前你必須了解的攻略</h1>
        <p
          class="text-inner"
        >常常聽到原生App、混合式App或者響應式網站、行動版網站嗎？到底這些是什麼？而我又該怎麼選擇？TryHacker將為您簡單介紹這些不同技術的特性與適合的需求以及製作成本上的高低</p>
        <div class="pic">
          <img src="@/assets/img/app-4.jpg" alt />
        </div>
        <p
          class="text-inner"
        >網站分成響應式網站、手機版網站；Mobile App部分也有分原生App(Native App)與混合式App(Hybrid App)，這些技術的出現其實也是為了滿足各種不同的需求，</p>
        <h4 class="subheading">製作手機版網站與APP的四種技術</h4>
        <section>
          <h5 class="tinyheading">響應式網站(Responsive Web Design)</h5>
          <p
            class="text-inner"
          >簡稱為RWD，中文也有人稱為『自適應網站』，其最主要的特色就是能將相同的網頁版型因應桌機、平板、手機等不同裝置自動縮放成適合瀏覽的樣式，也是這幾年網頁設計的流行趨勢，因應現代人的瀏覽行為已逐漸從PC改為手機，所以在目前主流的搜尋引擎(Google、Bing)上已要求網站必須符合手機的瀏覽樣式，否則對於網站的搜尋排名是會有相對影響的，而目前響應式網站會成為主流的原因絕大多數也是與製作成本較低有關，因為只需要設計一種版型即可滿足不同裝置的瀏覽方式，但也因此設計較為制式化，不易彰顯品牌特色與不適合製作複雜的功能。</p>
          <h5 class="tinyheading">手機版網站(Mobile Web Design)</h5>
          <p
            class="text-inner"
          >相較於響應式網站(RWD)其製作成本較高，因為需要因應不同裝置設計不同的版型以符合使用者習慣，若是需要符合SEO規範，其困難度也相較響應式網站還要複雜一些，適合這種網站製作方式的大多是論壇網站、大型商城、功能較多與複雜的網站，例如蘋果日報、Yahoo、momo購物網等…，其原因是能透過客制化版型縮減過多的功能與選單(menu)，也能因應不同消費者習慣去設計不同的頁面增加購物欲望與增加消費者在網站停留的時間</p>
          <h5 class="tinyheading">原生App(Native App)</h5>
          <p
            class="text-inner"
          >只要使用系統廠商如Google、Apple、Microsoft…等指定的語言撰寫出來的App(Android、iOS、Windows)即稱為原生App(Native App)，其優點相較於混合式App非常多，例如操作的流暢度較好、硬體支援度較高(相機、GPS、指紋辨識…)、可取得手機資源(電話簿、圖片、文件…)，原則上只要系統商(Google、Apple)開放的功能皆可使用，其最大的缺點就是製作成本較高，只要系統廠商不同即需要使用完全不同的技術開發，對於開發、維護成本相較起來都較高，所以若是要使用原生App技術開發的廠商，其開發與維護費用通常會是主要的考量原因。</p>
          <h5 class="tinyheading">混合式App(Hybrid App)</h5>
          <p
            class="text-inner"
          >​​​​​​​​​​​​​​使用的技術是以Web開發技術為主，也因此其最大的優點在於製作成本較低且能同時製作出符合Android、iOS版本的App，但是對於硬體的支援度、操作的流程度、手機資源的存取都有較多限制，且高度仰賴網路速度，如果沒有網路絕大多數功能都會受到影響，雖然說製作成本較低，但在維護的轉移成本是較高的，因為能開發出混合式App的Web技術有非常多種，且這些技術彼此之間是無法相容的，所以若是使用這種開發技術，通常要置換其他開發廠商或者自己請工程師都相對來說是較麻煩與困難的。</p>
        </section>

        <p
          class="text-inner"
        >到底該製作網站還是製作Mobile App是現在很多企業的煩惱，若您還不清楚到底該製作App或Web，還是不清楚這兩種之間的差異，歡迎與我們聯絡。</p>
      </div>
    </div>
  </div>
</template>
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