<template>
  <div class="WIN-active-directory">
    <div class="banner">
      <Banner v-for="item in bannerData" v-bind="item" :key="item"></Banner>
    </div>
    <div class="main">
      <div class="solution-list">
        <SolutionList v-for="(item,index) in serviceList" :key="index" :info="item"></SolutionList>
      </div>
      <div class="solution-content">
        <SolutionBox v-for="(item,index) in serviceData" :key="index" :info="item"></SolutionBox>
      </div>
    </div>
  </div>
</template>
<script>
import Banner from "@/components/banner";
import SolutionList from "@/components/SolutionBlock/solutionList";
import SolutionBox from "@/components/SolutionBlock/solutionBox";
export default {
  components: {
    Banner,
    SolutionList,
    SolutionBox
  },
  data() {
    return {
      bannerData: [
        {
          line1: "地端解決方案",
          line2: "WIN-Active Directory Rights Management Service服務"
        }
      ],
      serviceList: [
        {
          routerName: "Active Directory Rights Management Service服務",
          router: "winActive"
        },
        ,
      ],
      serviceData: [
        {
          service: "Active Directory Rights Management Service服務",
          en: "Active Directory Rights Management Service",
          skillType: "Server管理",
          servicePropty: "系統規劃暨建置服務",
          duration: "視專案範圍及服務內容決定",
          price: "視服務時數決定",
          demand:
            "在企業辦公室中，最敏感的資訊不是存放在資料庫就是在文件內，而敏感資訊外洩的途徑，常見的除了USB隨身碟和雲端硬碟之外，E-mail肯定是另一個嚴重的資安漏洞。企業IT部門除了防火牆之外，開始有了部署「防水牆」的危機意識，前者主要防範非法入侵，後者則是防範有所謂內鬼將機密外流的風險。防範敏感資訊外流的解決方案很多，其中最基本的防範措施，就是針對文件與E-mail的保護機制。關於防水牆概念的解決方案相當多，但若是針對Office文件以及整合Exchange Server 2019的使用，仍推薦使用由Windows Server 2019所內建的AD RMS（Active Directory Rights Management Service）伺服器角色，主要原因是除了它無縫結合於Office應用程式的操作介面外，對於IT人員而言，無論在部署還是維運管理上也是相對容易許多。",
          strong1:
            "	使用者可以在Office軟體「資訊」頁面中針對「保護文件」下拉選單中點選「限制存取」",
          strong2:
            "	集中管理文件的組織，可以讓不同的共享資料夾能夠根據預先的定義自動以AD RMS加密其中的文件",
          strong3:
            "	無論是選擇權限原則範本，還是在伺服器上的自動加密保護，一旦文件受到AD RMS加密處理之後，一旦系統發現無法成功連接AD RMS服務來取得相關憑證時，就會出現權限方面的錯誤訊息。",
          strong4:
            "	搭配Exchange Server的傳輸規則，來判定與執行所有要經過AD RMS加密的E-mail",
          strong5:
            "	由Outlook或OWA的用戶，自行決定郵件寄送時所套用的AD RMS權限範本",
          strong6:
            "	無論是選擇權限範本，還是在伺服器上的傳輸規則，一旦寄送的E-mail套用了，收件者所收到的E-mail將是一封經由AD RMS所加密的郵件內容，因此無法對這一封郵件進行轉寄、複製、列印或是螢幕的截圖",
          content1:
            "透過Microsoft技術團隊完整的規劃及建置，客戶可以在最短時間內導入「Active Directory Rights Management Service 服務」，解決管理儲存空間的自動化備援問題。 本服務之服務內容包括：",
          content2: "	系統架構分析與規劃",
          content3: "	虛擬化基礎架構建置",
          content4: "	封裝與測試",
          content5: "	虛擬應用程式部署",
          content6: "	知識移轉與訓練署"
        }
      ]
    };
  }
};
</script>
<style lang="scss">
.WIN-active-directory {
  .banner {
    background-image: url("../../../../assets/img/ground-bg.jpg");
    background-size: cover;
    background-position-y: 30%;
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
          position: relative;
          font-size: 40px;
          font-weight: 400;
          width: 90%;
          box-sizing: border-box;
          color: white;
          margin: 5px auto;
          text-align: center;
          border-bottom: 1px solid white;
          padding-bottom: 20px;
          box-sizing: border-box;
        }

        h3 {
          font-size: 40px;
          font-weight: 400;
          width: 90%;
          box-sizing: border-box;
          color: white;
          margin: 5px auto;
          text-align: center;

          box-sizing: border-box;
        }
      }
    }
  }

  .main {
    width: 100%;
    display: flex;
    padding: 40px 60px;
    background-image: url("../../../../assets/img/about-us-bg-2.png");
    background-size: contain;
    background-repeat: no-repeat;
    background-position-x: 100%;

    .solution-list {
      width: 25%;
      margin: 0;
    }
    .solution-content {
      width: 75%;
    }
  }
}

@media (max-width: 1280px) {
  .WIN-active-directory {
    .main {
      padding: 0;
      width: 100%;
      .solution-content {
        width: 90%;
        margin: 20px auto 0 auto;
      }
      .solution-list {
        display: none;
      }
    }
  }
}

@media (max-width: 414px) {
  .WIN-active-directory {
    .banner {
      .banner-container {
        .text {
          width: 90%;
          h3 {
            font-size: 20px;
          }
        }
      }
    }
  }
}
</style>