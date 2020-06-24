<template>
  <div class="customized-wrapper">
    <!-- <div class="customized-banner">
      <div class="banner-container">
        <div class="text">
          <h1>
            麥斯創新技術顧問服務
            <div class="line-1"></div>
          </h1>
        </div>
      </div>
    </div>-->
    <div class="banner">
      <Banner v-for="item in bannerData" v-bind="item" :key="item"></Banner>
    </div>
    <div class="customized-intro">
      <div class="intro-container">
        <h2>
          企業IT諮詢服務：幫助IT在企業流程中提供其功能及服務，以提升企業績效
          <br />
          <span>我們藉著同時列出IT與商業欲實行之事項，來協助IT在商業流程中提供其功能及服務，以提升企業績效。我們通常直接與企業之資訊主管等人共事，以便創建一個更有效的IT組織。這樣的共事模式使IT能有效的驅動整個組織流程，並支援及提供商業轉型的轉變。</span>
        </h2>
        <div class="content">
          <ul>
            <li>IT轉型及精進：我們幫助企業IT從評估（量測環境）、規劃(功能驗證) 、啟動（導入專案）、訓練（技術移轉）和提升IT效率，以增加IT的整體投資報酬率。包括提出需求管理，IT採購和委外評估，應用和基礎建設的優化、整合及解決方案。</li>
            <li>技術支援：我們以長期的實務經驗和專業技術，支援企業套裝軟體的導入，並專於提供供應鏈（SCM）、顧客關係管理（CRM）、人力資源（HR），風險管理和法規遵循方面的了解與分析。</li>
            <li>客戶端程序諮詢：我們也協助大規模的 IT 轉換，包含牽涉到核心 ERP 系統之轉換。我們亦協助客戶管理整體轉換方案，其中也包含了第三方供應商的管理。</li>
            <li>公有雲導入及維護外包管理：麥斯創新的專業顧問技術團隊擁有豐富的跨國性實戰經驗，從協助貴公司IT現有環境評估研擬中長期策略目標、設計規劃精進流程及維運模式、系統設定及開發，至上線後的支援等，提供全方位的完整服務。</li>
            <li>Microsoft系統導入及維護外包管理：麥斯創新的專業顧問技術團隊擁有豐富的跨國性實戰經驗，從協助貴公司IT現有環境評估研擬中長期策略目標、設計規劃精進流程及維運模式、系統設定及開發，至上線後的支援等，提供全方位的完整服務。</li>
            <li>VMWARE 系統導入及維護外包管理：麥斯創新的專業顧問技術團隊擁有豐富的跨國性實戰經驗，從協助貴公司IT現有環境評估研擬中長期策略目標、設計規劃精進流程及維運模式、系統設定及開發，至上線後的支援等，提供全方位的完整服務。</li>
            <li>SAP系統導入及維護外包管理：從SAP ERP導入、升級擴充至導入後的日常維護管理委外服務等，確保客戶對專案的投資能符合公司中長期的發展策略及未來的擴充彈性。</li>
            <li>Oracle系統導入與維護：我們擅長整合Oracle在Database、Middleware、Applications、Cloud的各種方案，提供涵蓋ERP、PLM、CRM、HCM、EPM等各應用領域的整體解決方案。</li>
            <li>人力資源管理：麥斯創新協助客戶從組織與人力資源策略、人力資源服務模式設定著手，改善基礎人事制度、人才培育發展、領導接班與文化變革等流程，並透過HEM資訊系統導入與報表數據分析，協助客戶進行人力資源轉型。</li>
          </ul>
        </div>
        <hr />
        <h2>
          IT風險和審計服務：協助IT管理風險
          <br />
          <span>我們的 IT 風險和審計專員可以幫助您的組織識別 IT 風險管理與其相關商業策略所面臨的挑戰。</span>
        </h2>
        <div class="content">
          <ul>
            <li>IT 控制服務：我們著重於IT控制服務之設計、實施和利用合理化的控制降低您在IT應用程序、IT基礎建設與資料層面中所潛在之風險。</li>
            <li>IT 風險轉化：我們協助您識別最重要的風險並設計架構，以透過科技協助您有效管理 IT 風險並提升其效率。</li>
            <li>IT 審計服務：我們客觀的角度和評判能力可以為客戶提供真實且可靠的 IT 風險評估及 IT 控制實行方法。</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="bar">
      <div class="bar-container">
        <div class="text">
          <h4>麥斯創新雲端技術顧問服務優勢</h4>
          <p>
            技術顧問服務預算
            <span>點數化</span>
          </p>
          <p>
            軟硬體原廠
            <span>7*24</span> 技術支援
          </p>
          <p>
            提供設計、開發以及建置微軟技術解決方案的
            <span>諮詢服務</span>
          </p>
          <p>
            <span>解決方案</span>用以提高系統的管理性、可用度、安全性以及效能
          </p>
          <p>
            系統廠商應用軟體
            <span>整合與架構建議</span>整合與架構建議
          </p>
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
          line1: "麥斯創新技術顧問服務"
        }
      ]
    };
  }
};
</script>
<style lang="scss">
@import "@/assets/css/setting.scss";
.banner {
  background-image: url("./../../assets/img/cloud-advice-bg.jpg");
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
        font-family: "Noto Sans TC", sans-serif;
        border-bottom: 1px solid white;
        padding-bottom: 20px;
        box-sizing: border-box;
        position: relative;
      }

      p {
        font-size: 15px;
        width: 50%;
        margin: 3px auto;
        text-align: center;
        color: white;
        font-family: "Montserrat", sans-serif;
        line-height: 20px;
        padding: 32px;
        box-sizing: border-box;
      }
    }
  }
}
</style>
<style lang="scss" scoped>
@import "@/assets/css/setting.scss";

.customized-intro {
  width: 100%;

  .intro-container {
    width: 90%;

    margin: 0 auto;
    padding: 50px;
    box-sizing: border-box;

    h2 {
      font-size: 20px;
      font-weight: 400;
      text-align: left;
      padding: 20px;
      font-family: "Noto Sans TC", sans-serif;

      span {
        font-size: 18px;
        color: rgb(225, 225, 225);
        font-family: "Noto Sans TC", sans-serif;
        letter-spacing: 3px;
      }
    }

    hr {
      border: 0;
      height: 2px;
      background-color: rgb(225, 225, 225);
    }
    .content {
      ul {
        padding: 30px;
        text-align: justify;

        font-weight: 300;
        font-size: 16px;
        line-height: 30px;
        li {
          font-family: "Montserrat", sans-serif;
          list-style: square;
        }
      }
    }
  }
}

.bar {
  width: 100%;
  background-image: url("./../../assets/img/advice-bar.jpg");
  background-size: cover;
  font-family: "Montserrat", sans-serif;
  background-position-y: 60%;

  .bar-container {
    width: 100%;
    margin: 0 auto;
    height: 350px;
    position: relative;
    background-color: rgba(0, 0, 0, 0.6);
    .text {
      color: white;
      position: absolute;
      top: 20%;
      left: 6%;
      padding: 10px;
      box-sizing: border-box;
      h4 {
        font-size: 25px;
        margin-bottom: 20px;
        font-family: "Noto Sans TC", sans-serif;
      }
      p {
        font-size: 18px;
        font-family: "Montserrat", sans-serif;
        b {
          font-size: 20px;
        }
        span {
          color: $color_yellow;
          font-family: "Montserrat", sans-serif;
        }
      }
    }
  }
}
</style>