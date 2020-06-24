<template>
  <div class="MGT-virtual">
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
          service: "System Center Virtual Machine Manager服務",
          en: "System Center Virtual Machine Manager Service",
          skillType: "Server管理",
          servicePropty: "系統規劃暨建置服務",
          duration: "視專案範圍及服務內容決定",
          price: "視服務時數決定",
          demand:
            "System Center Virtual Machine Manager 2016（簡稱 SCVMM）是微軟公司針對虛擬化數據中心的一套綜合性管理解決方案，可以對虛擬機基礎結構進行集中管理，並且能夠讓管理員和授權用戶以更快的速度來準備新的虛擬機，同時提供對「私有雲」方面的部署與管理。SCVMM不僅可以管理Hyper-V部署的虛擬機系統，還可以管理運行在ESX上Vmware虛擬機，實現一個平台對多種虛擬系統的管理。",
          strong1:
            "System Center Virtual Machine Manager可用來設定、管理和轉換傳統的資料中心，並協助可讓您快速地部署虛擬機器、集中式地控制虛擬 Datacenter 的「建置組塊」、並由授權的一般使用者委派的自我佈建、服務提供者及雲端提供統一的管理體驗。System Center Virtual Machine Manage的特性如下: ",
          strong2: "	虛擬化基本管理",
          strong3: "	硬體資源池",
          strong4: "	軟體定義網路",
          strong5: "	P2P & V2V",
          strong6: "	基於模板和腳本的自動化部署",
          strong7: "	更強大的虛擬化高可用",
          strong8: "	電源管理",
          content1:
            "透過Microsoft技術團隊完整的規劃及建置，客戶可以在最短時間內導入「System Center Virtual Machine Manager 服務」，解決管理儲存空間的自動化備援問題。 本服務之服務內容包括：",
          content2: "	系統架構分析與規劃",
          content3: "	虛擬化基礎架構建置",
          content4: "	軟體資源池",
          content5: "	虛擬應用程式部署",
          content6: "	知識移轉與訓練署"
        }
      ]
    };
  }
};
</script>
