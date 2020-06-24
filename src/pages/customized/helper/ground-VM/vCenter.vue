<template>
  <div class="VM-vcenter">
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
          service: "VMware vCenter Server Appliance服務",
          en: "VMware vCenter Server Appliance Service",
          skillType: "Client管理",
          servicePropty: "系統規劃暨建置服務",
          duration: "視專案範圍及服務內容決定",
          price: "視服務時數決定",
          demand:
            "企業IT 團隊可透過單一主控台，享有集中化能見度、簡化且高效率的大規模管理功能，以及涵蓋整個混合雲的擴充性。VMware vCenter Server Appliance是一款先進的伺服器管理軟體，提供集中化平台以協助管理 VMware vSphere 環境，讓您信心十足地在整個混合雲內自動化與提供虛擬基礎架構。",
          strong1:
            "使用 vCenter Server Appliance 產品來推動最高層級的效率、自動化與安全性，並減少營運成本。此產品擁有豐富的 API，能讓您輕鬆與協力廠商管理工具整合，獲得完美無瑕的端對端資料中心管理能力。",
          strong2: "	簡單的部署，即可透過範本來輕鬆重複部署",
          strong3:
            "	在混合雲上享有擴充性與延展性，能將內部部署環境順暢延伸到採用 vSphere 架構的公有雲 Hyper-v 虛擬化的「伺服器」工作負載都可以複寫。",
          strong4: "	集中控管與能見度，可在單一位置管理整個 vSphere 基礎架構",
          strong5: "	改良的管理功能，可使用強大的工具簡化管理並延伸控制",
          strong6:
            "	主動式最佳化，使用伺服器管理軟體來配置與最佳化資源，即可獲得最佳效率",
          strong7:
            "	原生項目，vSphere 提供經過 vCenter Server Appliance 認證的原生主動-被動 HA 功能",
          strong8:
            "	外掛程式擴充性，VMware 於推出 vSphere Client 外掛程式認證計畫，確保客戶能擁有更優質的使用者經驗。",
          content1:"透過VMware 技術團隊完整的規劃及建置，客戶可以在最短時間內導入「VMwarevCenter Server Appliance 服務」，解決管理儲存空間的自動化備援問題。 本服務之服務內容包括：",
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
