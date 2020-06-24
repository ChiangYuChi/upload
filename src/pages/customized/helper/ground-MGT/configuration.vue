<template>
  <div class="MGT-configuration">
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
          service: "System Center Configuration Manager服務",
          en: "System Center Configuration Manager Service",
          skillType: "Server管理",
          servicePropty: "系統規劃暨建置服務",
          duration: "視專案範圍及服務內容決定",
          price: "視服務時數決定",
          demand:
            "System Center Configuration Manager（SCCM），可以讓您達到作業系統部署、軟體散發、軟體更新管理、軟體資產智慧及目標建構管理 。組織已越來越重視為其技術投資建立標準。不論是企業及法規的需求，都必須定義法務遵循，並證明提供正確報告的重要性。SCCM透過關鍵任務功能集，以豐富而正確的用戶端狀態報告證明了這樣的需求。SCCM 可協助 IT 人員管理 PC 和伺服器，不但能夠將軟體保持在最新狀態、設定組態和安全性原則，以及監控系統狀態，同時還讓員工在自己選擇的裝置上存取公司的應用程式。Configuration Manager 的新功能，如 Windows 10 就地升級的支援、與 Microsoft Intune、Windows 10 和 Office 365 ProPlus Servicing Dashboard 共同管理、與 Windows Update for Business 整合和更多，讓部署和管理 Windows 比以往任何時候都更輕鬆。",
          strong1:
            "System Center Endpoint Protection 可保護用戶端及伺服器作業系統抵抗新興惡意的程式碼威脅。它是以 System Center Configuration Manager 為基礎建置而成，針對用戶端安全及規範管理為客戶提供統一的基礎結構。Configuration Manager 可協助您提供更具效益的 IT 服務: ",
          strong2: "	透過減少手動工作，並讓您專注於高價值專案，來提高 IT 生產力與效率。",
          strong3: "	最大化硬體和軟體投資",
          strong4: "	適時提供正確的軟體，來加強使用者產能。",
          content1:"透過Microsoft技術團隊完整的規劃及建置，客戶可以在最短時間內導入「System Center Configuration Manager 服務」，解決管理儲存空間的自動化備援問題。 本服務之服務內容包括：",
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
