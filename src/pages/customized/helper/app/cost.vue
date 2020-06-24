<template>
  <div>
    <div class="cost-text">
      <div class="text-body">
        <h1 class="heading">快速掌握 APP 與網站製作費用差異</h1>
        <p
          class="text-inner"
        >現今因媒介增加與多元需求，網站製作已經非常普遍與多元，網路上也可搜尋到各種 APP 與網站製作公司，相應的製作成本費用差異也非常大，往往令有需求者感到困惑，因此這篇文章將嘗試說明為何費用上會有巨大的落差。</p>
        <div class="pic">
          <img src="@/assets/img/app-1.jpg" alt />
        </div>
        <h4 class="subheading">網站或APP的製作方式可劃分為「模組化」與「客製化」</h4>
        <section>
          <h5 class="tinyheading">模組化</h5>
          <p class="text-inner">
            模組化即常聽到的
            <span>套版 (Template)</span>，是一種快速製作網站的方式，意即以預先設計製作好的各種樣式版型及模組化功能提供給消費者選擇，可稱為半成品。這種製作方式的特色與優點是快速且成本低廉，目前市面上過半公司都提供這類型的服務。市面上也有許多免費架站工具提供模組化的功能
            ，其中以 Wordpress 最知名。隨著技術的發展，套版網站的品質與客製化網站的差異已經大幅縮小，因此十分受到市場歡迎。若您架設網站的需求較為單純，或者預算較少，都很適合使用套版的方式製作網站。套版網頁設計在價格上較有競爭力，但相對於客製化網站設計，在設計彈性上較為受限。
          </p>
          <ul>
            優點
            <li>製作快速</li>
            <li>成本較低</li>
            <li>樣式多元</li>
          </ul>
          <ul>
            缺點 :
            <li>不易表現品牌風格</li>
            <li>功能延展性不好</li>
            <li>UI/UX 設計沒有差異化</li>
            <li>難以與其它系統整合</li>
            <li>
              <span>往往無法取得原始碼 (只有使用權沒有所有權)</span>
            </li>
          </ul>
        </section>
        <section>
          <h5 class="tinyheading">客製化</h5>
          <p class="text-inner">
            麥斯提供的客製化製作，會從需求訪談開始，根據客戶提出的需求構想、功能期望，釐清系統目標，確認專案目標、功能範圍，制訂規格書之後才進行設計與系統開發。最後進行 UI 與功能測試以及驗收。
            但是因為客製化需要動員團隊從無到有運作專案，也要考量不同的產業領域、產品類型、呈現形式、消費客群的差異，需要花費較多時間蒐集資料與討論，所以製作成本比套版模組化高，這也是一般人經常對客製化製作費用有疑問的地方。
          </p>
          <ul>
            優點
            <li>依據企業型態與產業類型表現設計風格</li>
            <li>功能延展性與擴充性高</li>
            <li>數據可以跟其他內部系統串接</li>
            <li>與競爭者產生市場差異化</li>
            <li></li>
            <li>
              <span>掌握原始碼所有權</span>
            </li>
          </ul>
          <ul>
            缺點 :
            <li>製作時間較長</li>
            <li>成本比套版製作高</li>
          </ul>
        </section>
        <p class="text-inner">
          以上簡易說明 APP 與網站的製作費用差異，但是詳細的報價還是必須先透過需求訪談才能釐清，但是如果選擇模組化製作，可以先搜尋網路上提供模組化功能的網站，多數都有提供價格，如果預算有限可以直接比較各個模組之間的差異。
          如果想進一步了解網站 SEO 知識，可參考
          <router-link to="app-SEO">我的網站需要做 SEO 嗎？</router-link>；若還在考慮製作 APP 或網站，也可以參考
          <router-link to="app-knowledge">製作網站與App前你必須了解的攻略</router-link>。
        </p>
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
      a {
        text-decoration: none;
      }
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
</style>
