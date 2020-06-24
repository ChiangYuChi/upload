<template>
  <div class="MDI-microsoft-hyperV">
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
          service: "IBM OpenStack服務",
          en: "Microsoft Hyper-V Replica Service",
          skillType: "Client管理",
          servicePropty: "系統規劃暨建置服務",
          duration: "視專案範圍及服務內容決定",
          price: "視服務時數決定",
          demand:
            "企業IT 團隊可透過IBM Cloud OpenStack Services (ICOS)，讓企業客戶與開發人員能透過公有雲打造應用程式，而這些應用程式無論就安全性或擴充性而言，都能滿足起伏不定的業務需求，包括用量暴增與海量資料相關需求。再結合IBM既有產品，企業客戶與開發人員就能取得範圍最廣的OpenStack套裝服務。",
          strong1:
            "企業IT 團隊可透過IBM Cloud OpenStack Services (ICOS)，讓企業客戶與開發人員能透過公有雲打造應用程式，而這些應用程式無論就安全性或擴充性而言，都能滿足起伏不定的業務需求，包括用量暴增與海量資料相關需求。再結合IBM既有產品，企業客戶與開發人員就能取得範圍最廣的OpenStack套裝服務。優勢：",
          strong2:
            "	IBM Cloud OpenStack Services將提供混合雲基礎架構，讓客戶更有效率地使用OpenStack API執行雲端應用程式。",
          strong3: "	客戶可以更快配置雲端基礎架構，將現有的工作負載移到IBM Cloud雲端平台使用軟體與基礎架構。",
          strong4:
            "	企業可以擴大其業務與擴充力，利用雲端技術，先在本地端建置，再擴充至全球據點，並且更輕鬆地達到資料存放與其他法規要求。。",
          content1:
            "透過IBM 技術團隊完整的規劃及建置，客戶可以在最短時間內導入「IBM Cloud OpenStack 服務」，解決管理儲存空間的自動化備援問題。 本服務之服務內容包括：",
          content2: "	系統架構分析與規劃",
          content3: "	虛擬化基礎架構建置",
          content4: "	封裝與測試",
          content5: "	虛擬應用程式部署",
          content6: "	知識移轉與訓練"
        }
      ]
    };
  }
};
</script>
