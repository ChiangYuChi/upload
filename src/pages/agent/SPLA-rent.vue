<template>
  <div class="spla-wrapper">
    <div class="spla-banner">
      <Banner v-for="item in bannerData" v-bind="item" :key="item"></Banner>
    </div>
    <div class="spla-intro">
      <div class="intro-container">
        <div class="nav">
          <ul>
            <li>
              <a href="#spla-1">概觀</a>
            </li>
            <li>
              <a href="#spla-2">特點</a>
            </li>
            <li>
              <a href="#spla-3">適合對象</a>
            </li>
            <li>
              <a href="#spla-4">FAQ</a>
            </li>
          </ul>
        </div>
        <div id="spla-1">
          <h3>微軟 SPLA 概觀</h3>
          <div class="text">
            <p>
              SPLA是一個按月授權的方案，可使服務供應商得以提供代管、委外及其他軟體服務予貴公司的客戶，免於一開始的資本費用及產生的風險。透過 SPLA，服務提供者與 ISV 能在三年期的合約期間內，以月為基礎提供 Microsoft 產品的授權，以便為其客戶代管軟體服務與應用程式。SPLA 支援各種代管案例，可協助您將高度自訂化且完善的解決方案提供給各種客戶。
              大量授權的客戶現在能在其公司內使用授權的伺服器應用程式，也可以將此工作雲端化，亦即交由授權的服務提供者在其適用於特定應用程式的共用式硬體環境中代管。取得藉軟體保證而實現的授權行動性詳細資訊。
            </p>
            <p>若貴公司使用Microsoft軟體透過網路提供軟體服務予第三人或出租、租賃、出借Microsoft軟體予第三人，則貴公司應簽署SPLA合約以保障其軟體正確授權之權益。</p>
          </div>
        </div>
        <div id="spla-2">
          <h3>微軟 SPLA 的特點</h3>
          <div class="text">
            <ul>
              <li>彈性成本，陪伴成長</li>
              <li>提供客製化服務更大的彈性空間</li>
              <li>全球的客戶皆可使用此服務，且無軟體授權問題</li>
              <li>使客戶容易將資料中心委外托管</li>
              <li>多樣性的產品選擇</li>
              <li>合法規範下可對客戶做服務示範</li>
              <li>可提供客戶最多60天免費測試期</li>
              <li>最多90天的封閉測試</li>
              <li>提供硬體租賃廠商軟體租賃權</li>
              <li>可將提供服務之軟硬體放在客戶端</li>
            </ul>
          </div>
        </div>
        <div id="spla-3">
          <h3>適合對象</h3>
          <div class="text">
            <h4>網路服務提供者(ISP)及平台租賃提供者(Infra Hoster)</h4>
            <ul>
              <li>- 提供虛擬主機租賃服務者</li>
              <li>- 提供微軟平台給內容服務商透過網路轉播內容給最終使用者</li>
              <li>- 提供基礎平台給所有Windows Based產品透過網路提供其服務者</li>
            </ul>
          </div>

          <div class="text">
            <h4>各式應用程式之網路服務提供者(App Hoster)</h4>
            <ul>
              <li>- 架設一般應用軟體於微軟平台並透過網路提供服務給最終使用者</li>
              <li>- 架設遊戲軟體於微軟平台並透過網路提供服務給最終使用者</li>
            </ul>
          </div>
          <div class="text">
            <h4>連鎖加盟商店(Franchisee)</h4>
            <ul>
              <li>- 架設微軟平台於連鎖加盟商店電腦主機並提供其服務者</li>
            </ul>
          </div>
          <div class="text">
            <h4>客戶端主機租賃提供商(Desktop Services)</h4>
            <ul>
              <li>- 提供XP/Vista給其第三消費者使用之網路咖啡店</li>
              <li>- 提供電腦主機含微軟XP/Vista/Office給第三消費者使用之PC租賃公司</li>
            </ul>
          </div>
        </div>
        <div id="spla-4">
          <h3>FAQ</h3>
          <div class="text">
            <h4>我如何簽署SPLA ?</h4>
            <ul>
              <li></li>
              <p>目前SPLA於台灣設有在地經銷商，請聯絡經銷商來簽署SPLA合約。</p>
              <p>經銷商將會提供SPLA合約給您，除替您解釋所有條文以外，經銷商有責任每月提供SPLA最新價格給您，這些價格由微軟監控，每年除Jan 1st 由微軟宣布是否調漲以外，經銷商不得任意對客戶調漲產品價格。</p>
              <p>經銷商有責任替客戶回報使用量透過系統回報給微軟新加坡總部，並替客戶將美金付到新加坡美國銀行。</p>
              <p>經銷商有責任提供客戶後續之所有問題回報並尋求微軟總公司協助。</p>
            </ul>
          </div>
          <div class="text">
            <h4>SPLA合約有沒有任何購買承諾與罰則 ?</h4>
            <ul>
              <p>SPLA合約一簽三年，完全沒有任何購買承諾及相關罰則，SPLA合約主要是建立服務提供者與Microsoft之間之信任條款，並讓服務提供者能夠合法且正確的購買Microsoft產品來提供對外網路服務給第三消費者。</p>
              <p>SPLA合約可隨時因為合理理由由 Microsoft或 服務提供者提出終止合約。</p>
            </ul>
          </div>
          <div class="text">
            <h4>SPLA合約之軟體授權模式?</h4>
            <ul>
              <p>Subscriber Access License (SAL) : 當某一產品選擇使用SAL模式計費，則無需再負擔伺服器費用</p>
              <p>Per Processor License (PL):無需再購買 Internet Connector licenses 對於大多數的企業營運方式來說PL是比較經濟划算的計費模式</p>
            </ul>
          </div>
        </div>
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
          line1: "Microsoft 服務提供者授權選項",
          line2:
            "Microsoft 服務提供者授權合約 (SPLA) 適用於服務提供者與獨立軟體供應商 (ISV)，可讓其取得最新 Microsoft 軟體授權，為其客戶提供軟體服務與託管的應用程式。"
        }
      ]
    };
  }
};
</script>
<style lang="scss">
@import "@/assets/css/setting.scss";

.spla-banner {
  background-image: url("./../../assets/img/spla-banner.jpg");
  background-size: cover;
  background-position-y: 100%;
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
      width: 90%;

      h1 {
        font-size: 40px;
        width: 90%;
        box-sizing: border-box;
        color: white;
        margin: 5px auto;
        text-align: center;

        font-weight: 400;
        font-family: "Noto Sans TC", sans-serif;
        border-bottom: 1px solid white;
        padding-bottom: 20px;
        box-sizing: border-box;
        position: relative;
      }

      h3 {
        font-size: 25px;
        width: 90%;
        margin: 3px auto;
        text-align: center;
        color: white;
        font-family: "Noto Sans TC", sans-serif;
        line-height: 30px;
        padding: 2px;
        box-sizing: border-box;
      }
    }
  }
}

@media (max-width: 767px) {
  .spla-banner {
    .banner-container {
      .text {
        h1 {
          font-size: 27px;
          width: 100%;
        }

        h3 {
          display: none;
        }
      }
    }
  }
}

@media (max-width: 375px) {
  .spla-banner {
    .banner-container {
      .text {
        h1 {
          font-size: 24px;
        }
      }
    }
  }
}
</style>
<style lang="scss" scoped>
@import "@/assets/css/setting.scss";

.spla-intro {
  width: 100%;
  .intro-container {
    width: 90%;
    margin: 0 auto;

    .nav {
      margin-top: 20px;
      ul {
        display: flex;
        li {
          width: 150px;
          font-family: "Montserrat", sans-serif;
          a {
            text-decoration: none;
          }
        }
      }
    }

    h3 {
      width: 100%;
      background-color: $color_skyblue;
      color: white;
      font-family: "Noto Sans TC", sans-serif;
    }

    h4 {
      color: $color_darkblue;
      font-size: 17px;
      font-weight: bold;
      font-family: "Noto Sans TC", sans-serif;
    }

    #spla-2 {
      ul {
        padding-left: 20px;
        li {
          list-style: square;
          font-family: "Montserrat", sans-serif;
        }
      }
    }

    #spla-1,
    #spla-2,
    #spla-3,
    #spla-4 {
      margin-top: 20px;
      .text {
        p {
          font-family: "Montserrat", sans-serif;
          text-align: justify;
        }
      }
    }
  }
}



@media (max-width: 768px) {
  .spla-intro {
    .intro-container {
      padding: 20px 0 20px 0;
      .nav {
        ul {
          width: 100%;
          display: flex;
          margin: 0 auto;
          justify-content: space-between;
          li {
            width: 80px;
            text-align: center;
            line-height: 40px;
          }
        }
      }
    }
  }
}

@media (max-width: 414px) {
  .spla-banner {
    .banner-container {
      .text {
        width: 100%;

        h1 {
          font-size: 25px;
          width: 95%;
        }
      }
    }
  }
}
</style>