<template>
  <div class="WIN-MIM">
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
          line2: "WIN-Microsoft Identity Manager服務"
        }
      ],
      serviceList: [
        { routerName: "Microsoft Identity Manager服務", router: "mim" },
        ,
      ],
      serviceData: [
        {
          service: "Microsoft Identity Manager服務",
          en: "Microsoft Identity Manager Service",
          skillType: "Server管理",
          servicePropty: "系統規劃暨建置服務",
          duration: "視專案範圍及服務內容決定",
          price: "視服務時數決定",
          demand:
            "Microsoft Identity Manager (MIM) 2016 應用了 Forefront Identity Manager 的身分識別與存取管理功能，MIM 可協助您在組織內管理使用者、認證、原則和存取權。MIM新版也新增混合式體驗、特殊權限存取管理功能，並支援新的平台。使用 MIM 時，組織使用自動化工作流程、商務規則與和跨資料中心之異質平台的簡單的整合，來簡化身分識別生命週期管理。 MIM 可讓組織有適用於內部部署應用程式之 Active Directory 的正確使用者與存取權，而且接著可以在適用於 Office 365 與雲端式應用程式的 Azure AD 中提供 Azure AD Connect。",
          strong1:
            "現今企業真正的顧慮是 Active Directory 環境內資源存取的問題，攻擊者要取得網域系統管理員帳戶認證太過容易，並且事後很難探索到這些攻擊。PAM是一項解決方案，可協助組織限制現有的 Active Directory 環境內的特殊權限存取 ，PAM 的目標是減少惡意使用者取得存取權的機會，同時提高您對環境的控制和認知。PAM 是Microsoft Identity Manager 中的新功能，PAM 將特殊權限帳戶從現有的 Active Directory 環境中隔出。 需要使用特殊權限帳戶時，就必須先要求，然後等待核准。 核准之後，特殊權限帳戶會提供透過新防禦樹系 (而不是使用者或應用程式目前的樹系) 中的外部主體群組取得權限。 使用防禦樹系可提供組織更大控制權。PAM 提供下列優點：",
          strong2: "	隔離/約制特殊權限",
          strong3: "	加強並提升效能",
          strong4: "	額外的記錄功能",
          strong5: "	可自訂的工作流程",
          content1:
            "透過Microsoft技術團隊完整的規劃及建置，客戶可以在最短時間內導入「Microsoft Identity Manager 服務」，解決管理儲存空間的自動化備援問題。 本服務之服務內容包括：",
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
.WIN-MIM {
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
  .WIN-MIM {
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
  .WIN-MIM {
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