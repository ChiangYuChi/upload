<template>
  <div class="MGT-exchange">
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
import SolutionBox from "@/components/SolutionBlock/solutionBox";
import SolutionList from "@/components/SolutionBlock/solutionList";
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
          line2: "MGT-Exchange Server"
        }
      ],
      serviceList: [
        {
          routerName: "Exchange Server服務",
          router: "exchange"
        }
      ],
      serviceData: [
        {
          service: "Exchange Server服務",
          en: "Exchange Server Service",
          skillType: "Server管理",
          servicePropty: "系統規劃暨建置服務",
          duration: "視專案範圍及服務內容決定",
          price: "視服務時數決定",
          demand:
            "企業IT 團隊可透過Exchange Server 帶來一套新技術、功能與服務，該通訊平台提供電子郵件、排程和工具以供自訂共同作業及通訊服務應用程式之用。其目標是為了因應個人和組織不斷增加的共同作業需求與不斷改變的通訊習慣。在此同時，Exchange Server 還可降低您的整體擁有成本，不管是進行 Exchange Server 內部部署或在雲端佈建信箱皆然。",
          strong1:
            "Microsoft Exchange Server 是現如今最受歡迎的通訊、協同作業以及電子郵件傳訊應用程式。Microsoft Exchange 在使用 Active Directory 技術的大部分公司環境中充當所有電子郵件通訊的中心。擁有 Exchange 報告工具變成了必要條件，它讓 Exchange 管理員具備有關 MS Exchange 伺服器所有方面的精確、細微、全方位且可行動的資料Microsoft Exchange Server 是現如今最受歡迎的通訊、協同作業以及電子郵件傳訊應用程式。Microsoft Exchange 在使用 Active Directory 技術的大部分公司環境中充當所有電子郵件通訊的中心。擁有 Exchange 報告工具變成了必要條件，它讓 Exchange 管理員具備有關 MS Exchange 伺服器所有方面的精確、細微、全方位且可行動的資料。他還可以讓使用者:",
          strong2:
            "	電子郵件和行事曆產品可讓您以清楚的整合式介面查看電子郵件、行事曆和連絡人，協助您即時掌握重要訊息。",
          strong3:
            "	即時同步處理您所有裝置上的電子郵件、行事曆和連絡人資訊，所以不論您使用哪一種裝置，都能掌握最新資訊。 您可以隨時隨地輕而易舉地進行排程。",
          content1:
            "透過Microsoft技術團隊完整的規劃及建置，客戶可以在最短時間內導入「Exchange Server 服務」，解決管理儲存空間的自動化備援問題。 本服務之服務內容包括：",
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
.MGT-exchange {
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
  .MGT-exchange {
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
  .MGT-exchange {
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