<template>
  <div class="gcp-wrapper">
    <div class="banner">
      <Banner v-for="item in bannerData" v-bind="item" :key="item"></Banner>
    </div>
    <div class="gcp-intro">
      <div class="intro-container">
        <h4>Google 雲端平台 (GCP) 領先優勢</h4>
        <p>
          Google雲端平台（Google Cloud
          Platform）是一項使用了Google核心基礎架構、資料分析和機器學習技術的雲計算服務。提供用於Google搜尋和YouTube等終端用戶產品的相同支援基礎設施託管和開發人員產品，用於構建從簡單網站到複雜應用程式的一系列程式，並提供一系列模塊化的基於雲的服務和大量開發工具，例如託管和計算、雲存儲、資料存儲、翻譯API、預測API。
        </p>
        <div class="text">
          <div class="item">
            <i class="fas fa-database"></i>
            <h2>台灣彰濱機房</h2>
            <p>
              資料傳輸與主機的距離，是用戶連線品質的直覺體驗。Google
              數據中心位於台灣彰濱工業區，提供台灣本地高速連線，相較於各大公有雲，更免除因海底纜線故障所造成的網路中斷情形。
            </p>
          </div>
          <div class="item">
            <i class="fas fa-history"></i>
            <h2>網路速度快&nbsp;低延遲</h2>
            <p>Google持續在全球布建自有的光纖海底電纜，提供高速跨國網路，只要使用Google雲端主機就可享有全球快速網路；主機本身網路速度為CPU核心數*2Gb/s，最大可達16Gb/s。</p>
          </div>

          <div class="item">
            <i class="fas fa-shield-alt"></i>
            <h2>領先全球的創新技術</h2>
            <p>
              Google
              精心打造的雲端服務範圍遍及全球，安全、效能優異、成本效益高，原生於
              Google
              領先全球的專業技術團隊持續優化創新，不僅耐用度度極高，更是您拓展事業部署全球的絕佳首選。
            </p>
          </div>
          <div class="item">
            <i class="fas fa-bolt"></i>
            <h2>超級運算能力</h2>
            <p>
              Google 擁有 Google Search Chrome、Youtube
              等功能強大的資料與分析服務，能夠善用巨量資料的優勢，您就能在更短的時間內找到解決方案，並以最有效的資源應用打造出更優質的產品服務。
            </p>
          </div>
          <div class="item">
            <i class="fas fa-hand-holding-usd"></i>
            <h2>無須預付&nbsp;費用更便宜</h2>
            <p>Google雲端主機相較於其他雲端供應商便宜19%，透過自訂機型續用折扣可再省下約26%，系統會自動依照主機使用量建議調整機型，可再省14%。故相較於一般雲端主機，可省下約59%的費用。</p>
          </div>
          <div class="item">
            <i class="fas fa-dove"></i>
            <h2>永續能源科技</h2>
            <p>
              Google Cloud
              是在考量能源效率下打造的。大多數資料中心在非運算資源或日常營運
              (如冷卻和電壓轉換)
              上所消耗的能源，幾乎與供應至伺服器的電力一樣多。不過 Google
              卻採取不同做法，目前已將日常營運所需的能源減少至僅僅 11%。
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="gcp-service">
      <h2>Google 雲端平台應用服務</h2>
      <div class="tabbox">
        <input checked id="tab1" name="tabs" type="radio" />
        <label class="tp" for="tab1">BigQuery</label>

        <input id="tab2" name="tabs" type="radio" />
        <label class="tp" for="tab2">Google APIs</label>

        <input id="tab3" name="tabs" type="radio" />
        <label class="tp" for="tab3">Cloud AutoML</label>
        <input id="tab4" name="tabs" type="radio" />
        <label class="tp" for="tab4">Kubernetes Engine</label>
        <br />
        <div class="content" style="background-color: white;">
          <div id="content1">
            <p>
              具備高擴充性與成本效益的無伺服器雲端資料倉儲系統，可讓您快速制定明智的決策來輕鬆推動企業轉型
              有了這個可輕鬆設定及管理的全代管無伺服器雲端資料倉儲系統，您不必指派資料庫管理員，也能縮短創造價值的時間。您可以透過符合成本效益的方式快速開始分析資料，並取得具有參考價值的深入分析資料來維持競爭力
            </p>
          </div>
          <div id="content2">
            <p>
              Google
              雲端服務的重點特色之一是具備彈性、開源、混和雲的特性。在API程式庫中有超過兩百種API來滿足各式各樣的需求選用，同時GCP上也有跨雲端的
              API 管理平台讓使用者無論身在何處，都可開發、保護、部署及監控您的
              API。
            </p>
          </div>
          <div id="content3">
            <p>
              Cloud AutoML
              是一套機器學習產品，即使是機器學習專業知識有限的開發人員，也能訓練出符合自身業務需求的高品質模型。本產品採用
              Google 最先進的遷移學習和神經元架構搜尋技術。Cloud AutoML
              運用開發至今超過 10 年的 Google Research
              獨家技術，幫助您的機器學習模型達到更高的效能及做出更準確的預測。
              透過 Cloud AutoML
              的簡單圖形使用者介面，您可以依據自己的資料來訓練、評估、改良和部署模型。只需要花幾分鐘的時間，就能建立專屬於您的自訂機器學習模型。
            </p>
          </div>
          <div id="content4">
            <p>
              GKE 是適用於容器化應用程式的企業級平台，無論是有狀態和無狀態、AI
              和機器學習、Linux 和 Windows、複雜和簡單的網頁應用程式、API
              以及後端服務，全都涵蓋在內。這項服務提供多種業界首創的功能，例如四向自動調整資源配置和方便的管理機制。您可以最佳化
              GPU 和 TPU 佈建作業、使用整合式開發人員工具，並取得 SRE
              團隊提供的多叢集支援。
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="gcp-maxlabs-request">
      <img src="../../assets/img/gcp-bar.jpg" alt />
      <div class="txt">
        <h3>需要 Google 雲端平台服務 &nbsp;就找麥斯創新</h3>
        <p>
          我們致力給您最好的雲端服務體驗，無論是雲端搬遷、帳務服務、技術支援等，只要是
          GCP 或雲端相關需求，都歡迎立即與我們聯繫!
        </p>

        <router-link to="contact" class="router-link">詢問我們</router-link>
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
          line1: "Google Cloud Plateform"
        }
      ]
    };
  }
};
</script>
<style lang="scss">
@import "@/assets/css/setting.scss";

.banner {
  background-image: url("./../../assets/img/gcp-banner.jpg");
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
        width: 50%;
        box-sizing: border-box;
        color: white;
        margin: 5px auto;
        text-align: center;
        font-weight: 400;
        border-bottom: 1px solid white;
        padding-bottom: 20px;
        box-sizing: border-box;
        position: relative;
      }

      p {
        font-size: 15px;
        width: 50%;
        margin: 3px auto;
        text-align: left;
        color: white;
        font-family: "Montserrat", sans-serif;
        line-height: 20px;
        padding: 2px;
        box-sizing: border-box;
      }
    }
  }
}
</style>
<style lang="scss" scoped>
@import "@/assets/css/setting.scss";

.gcp-intro {
  width: 100%;
  background-image: url("./../../assets/img/gcp-bg.jpg");
  background-size: cover;
  background-attachment: fixed;

  .intro-container {
    width: 100%;
    background-color: rgba(255, 255, 255, 0.9);
    margin: 0px auto;
    padding: 95px;
    box-sizing: border-box;

    h4 {
      font-size: 30px;
      color: $color_blue;
      box-sizing: border-box;
      text-align: center;
      font-weight: bold;
    }

    p {
      width: 70%;
      margin: 30px auto;
      text-align: center;
      line-height: 30px;
       font-family: "Montserrat", sans-serif;
    }

    .text {
      display: flex;
      width: 90%;
      margin: 0 auto;
      flex-wrap: wrap;

      display: flex;

      flex-wrap: wrap;
      flex-direction: row;

      .item {
        width: 30%;

        margin: 2px;
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        align-items: center;

        .fas {
          font-size: 80px;
          width: 80px;
          height: 80px;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 30px;
          color: white;
          border-radius: 50%;
        }

        .fa-database {
          background-color: rgb(239, 62, 55);
        }

        .fa-history {
          background-color: rgb(253, 206, 62);
        }

        .fa-shield-alt {
          background-color: rgb(20, 176, 84);
        }

        .fa-bolt {
          background-color: rgb(59, 142, 231);
        }

        .fa-hand-holding-usd {
          background-color: rgb(236, 67, 55);
        }

        .fa-dove {
          background-color: rgb(250, 220, 69);
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
          text-align: justify;
          font-family: "Montserrat", sans-serif;
          font-weight: 400;
        }
      }
    }
  }
}

.gcp-service {
  padding: 60px;
  box-sizing: border-box;
  h2 {
    font-size: 30px;
    color: $color_blue;
    text-align: center;
    position: relative;
  }
  h2:after {
    content: "...";
    position: absolute;
    left: 50%;
    bottom: -30px;
  }
  .tabbox {
    margin: 0 auto;
    min-width: 320px;
    max-width: 1000px;
    text-align: center;
    padding: 60px 0 60px;

    .content > div {
      display: none;
      padding: 20px 25px 5px;
    }

    input {
      display: none;
    }

    .tp {
      display: inline-block;
      padding: 5px 10px;
      font-weight: 600;
      text-align: center;
    }

    .tp:hover {
      color: $color_blue;
      cursor: pointer;
    }

    input:checked + .tp {
      background: #ffa500;
      color: #fff;
    }

    #tab1:checked ~ .content #content1,
    #tab2:checked ~ .content #content2,
    #tab3:checked ~ .content #content3,
    #tab4:checked ~ .content #content4,
    #tab5:checked ~ .content #content5 {
      display: block;
      text-align: left;
    }

    #content1,
    #content2,
    #content3 {
      margin: 0 0 20px;
      height: auto;
      border: 1px solid #ffa500;
      border-radius: 3px;
    }

    p {
      line-height: 25px;
      text-align: justify;
       font-family: "Montserrat", sans-serif;
    }
  }
}

.gcp-maxlabs-request {
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
    box-sizing: border-box;

    h3 {
      font-size: 40px;
      font-weight: 900;
      text-transform: uppercase;
      color: white;
      text-align: center;
      font-family: 'Noto Sans TC', sans-serif;
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
}

@media (max-width: 1024px) {
  .gcp-banner {
    .banner-container {
      .text {
        h1 {
          width: 100%;
        }
      }
    }
  }
  .gcp-intro {
    .intro-container {
      width: 100%;
      .text {
        .item {
          .fas {
            width: 150px;
            height: 150px;
          }
        }
      }
    }
  }
}
@media (max-width: 768px) {
  .gcp-intro {
    width: 100%;

    .intro-container {
      p {
        width: 90%;

        text-align: justify;
      }

      .text {
        .item {
          width: 50%;
          border: 1px solid $color_gray1;
          padding: 10px;
        }
      }
    }
  }

  .gcp-maxlabs-request {
    .txt {
      h3 {
        font-size: 30px;
      }
    }
  }
}
@media (max-width: 414px) {
  .gcp-banner {
    .banner-container {
      .text {
        h1 {
          font-size: 25px;
          width: 100%;
        }
      }
    }
  }

  .gcp-intro {
    .intro-container {
      padding: 25px 15px 15px 15px;

      h4 {
        font-size: 22px;
      }
      p {
        width: 100%;
        padding: 20px;
        box-sizing: border-box;
        text-align: justify;
      }
      .text {
        .item {
          width: 90%;
          border: 1px solid $color_gray1;
          padding: 10px;
        }
      }
    }
  }

  .gcp-service {
    width: 100%;
    padding: 10px;
    h2 {
      width: 100%;

      font-size: 24px;
    }
  }

  .gcp-maxlabs-request {
    .txt {
      h3 {
        font-size: 26px;
      }

      p {
        display: none;
      }
    }
  }
}
@media (max-width: 375px) {
  .gcp-banner {
    .banner-container {
      .text {
        h1 {
          font-size: 20px;
        }
      }
    }
  }

  .gcp-service {
    padding: 10px;
  }
  .gcp-maxlabs-request {
    .txt {
      h3 {
        font-size: 24px;
      }
    }
  }
}
</style>
