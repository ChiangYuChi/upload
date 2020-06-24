<template>
  <div>
    <div class="banner">
      <Banner v-for="item in bannerData" v-bind="item" :key="item"></Banner>
    </div>
    <div class="cost-text">
      <div class="text-body">
        <h1 class="heading">我的網站需要做 SEO 嗎？</h1>
        <p class="text-inner">
          SEO 是「Search Engine Optimization」(搜尋引擎最佳化) 或「Search Engine Optimizer」(搜尋引擎最佳化專員) 的縮寫，SEO包含多種的專業與技術在內，目前已經是網頁設計必須考量進去的一門技術與概念，
          然而所有網站都需要製作SEO嗎 ? 這個問題可以從網站類型分析是否需要投入資源在這上面
        </p>
        <div class="pic">
          <img src="@/assets/img/app-2.jpg" alt />
        </div>
        <p
          class="text-inner"
        >所有人都希望自己的網頁在搜尋引擎列表中名列前茅，但是搜尋頁面一頁也才顯示 10 筆資料，要提昇搜尋排名肯定不是容易的事情，回到問題的基礎，必須要回歸到問題的基礎，思考什麼樣的網站比較需要投資成本在製作製作SEO上。</p>
        <p class="text-inner">製作SEO前我們必須先了解會影響的因素有哪些，這裡整理出4項製作 SEO 前，必須先了解會影響搜尋結果的關鍵因素:</p>

        <section>
          <h5 class="tinyheading">影響搜尋排名最佳化的 4 大關鍵</h5>
          <ol>
            <li>
              <span>網站體質 :</span>無論是網站的穩定度、錯誤頁面、網站速度、網站結構、網站是否具備RWD等等…都會影響搜尋結果
            </li>
            <li>
              <span>網站內部連結 :</span>透過錨點文字(Anchor Text)連接網站內其他先前網頁內製作過的相關內容
            </li>
            <li>
              <span>網站外部連結 :</span>因網站製作需求需要的相關介紹或文字說明，可以透過錨點文字連接到外部的網站稱為外部連結
            </li>
            <li>
              <span>主題關鍵字 :</span>關鍵字與關鍵字之間的關係性會大幅影響網站的定位，所以事先瞭解網站製作目的才能預先妥善規劃關鍵字組策略，取得適合網站的關鍵字主題
            </li>
          </ol>
        </section>
        <p
          class="text-inner"
        >以上只是影響 SEO 的大方向，但影響 SEO 最大的關鍵，從上面的分析可以發現需要調整與注意的細節，其實來自「內容」，這也是佔據搜尋網站前列的都是內容網站的原因，雖然網站體質也是一大關鍵，但這只是製作良好 SEO 之前必須先準備好的基礎地基而已</p>
        <div class="pic">
          <img src="@/assets/img/app-6.jpg" alt />
        </div>
        <p class="text-inner">
          了解上述關鍵影響因素後，我們就可以開始思考網站是否需要製作 SEO ?其實我們該注重的是關鍵字的搜尋量，因為
          <span>影響SEO的關鍵在流量</span>，因為搜尋量的多寡關係到操作關鍵字的難易度。新品牌或非內容網站要攻佔熱門關鍵字的難度較高
          所以在規劃關鍵字時要先釐清網站的定位，進而規劃適合的關鍵字組合，才能提昇網站本身的搜尋排名。
        </p>
        <section>
          <h5 class="tinyheading">各類型網站SEO優化注意事項</h5>
          <ul>
            <span>內容網站</span>
            <li>內容網站自身的定位設定非常重要，必須非常重視 SEO 的成效，而網站的定位關係到關鍵字的組合。如果關鍵字本身就是非常熱門的搜尋字組，要改善搜尋排行的機率就比較低，因此在製作內容網站時需特別留意</li>
            <span>官方形象網站</span>
            <li>形象網站必須強調視覺跟公司理念，因此如果要操作 SEO，形象網站的內容並非容易被搜尋到的字眼，建議以操作品牌關鍵字為主，並且利用搭配網站外部連結提昇網站的能見度，對於提昇搜尋排行較有幫助。</li>
            <span>活動網站</span>
            <li>因為時效性的關係，活動網站的 SEO 操作產生效果後，活動也結束了，所以製作活動網站必須關注網站的品質，網站如果連線品質不佳或者無法找到正確的頁面，損失相對也比較大，若要出現在搜尋引擎的前幾頁，建議搭配關鍵字廣告的效果會比較好</li>
            <span>電子商務網站</span>
            <li>垂直型電商適合操作的關鍵字方式會環繞在商品的本質與特色上；而平台型電商會以網站特色搭配各類商品去操作，例如網站強調快速到貨，我們可以在每項商品裡去強調各項商品的到貨速度，進而讓搜尋引擎了解各商品與網站之間的關聯性</li>
          </ul>
        </section>
        <p
          class="text-inner"
        >如果你想製作自己的網站或者App，但卻完全沒有任何頭緒，歡迎填寫下面的表單與我們聯繫，我們提供的服務不止是網頁設計與App設計，更願意分享在這些網站與App營運上的技巧與經驗。</p>
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

      ol {
        padding-left: 20px;
        li {
          list-style: decimal;
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