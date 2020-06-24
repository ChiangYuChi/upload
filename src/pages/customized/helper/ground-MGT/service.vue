<template>
  <div class="MGT-service">
    <SolutionBox v-for="(item,index) in serviceData" :key="index" :info="item"></SolutionBox>
  </div>
</template>
<script>
import SolutionBox from "@/components/SolutionBlock/solutionBox";
export default {
  components: {
    SolutionBox
  },
  data() {
    return {
      serviceData: [
        {
          service: "System Center Service Manage服務",
          en: "System Center Service Manager Service",
          skillType: "Server管理",
          servicePropty: "系統規劃暨建置服務",
          duration: "視專案範圍及服務內容決定",
          price: "視服務時數決定",
          demand:
            "System Center Service Manager 提供整合式平台，供您自動化並調整組織的 IT 服務管理最佳做法，例如那些在 Microsoft Operations Framework (MOF) 和 Information Technology Infrastructure Library (ITIL) 中的最佳做法。它會為意外和問題解決方式，還有為變更控制項及資產生命週期管理提供內建程序。Service Manager可根據組織的需求，自動化採用 IT 服務管理的最佳方式，並且內建流程針對事件和故障的解決、變動控制，及資產的生命週期管理工作。Service Manager也提供彈性的自助服務體驗及標準化的資料中心流程，幫助您將涵蓋整個企業基礎架構與應用的人員、工作流程以及將所有相關服務整合在一起。",
          strong1:
            "IT 部門可以創建一個整合式平台的服務管理方法，以滿足這些需求。 System Center Service Manager 通過其自身集成式平台的強大功能，可對涵蓋整個System Center 套件的知識、流程，以及活動進行編制和統一，最終可改善效率，降低成本，減少解決問題所需的時間，並更好地滿足企業資訊需求。",
          strong2: "	提供準確並相關的知識基礎",
          strong3: "	降低成本並改善響應速度",
          strong4: "	改善業務敏捷度",
          strong5: "	通過內建流程管理包提供直接價值",
          strong6: "	服務類別目錄",
          strong7: "	自助要求入口網站",
          strong8: "	版本和服務等級協定管理",
          strong9: "	資料倉儲和報告",
          strong10: "意外和變更要求",
          strong11: "	跨越 System Center 套件的整合式平台式流程和知識",
          content1:
            "透過Microsoft技術團隊完整的規劃及建置，客戶可以在最短時間內導入「System Center Service Manager 服務」，解決管理儲存空間的自動化備援問題。 本服務之服務內容包括：",
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
