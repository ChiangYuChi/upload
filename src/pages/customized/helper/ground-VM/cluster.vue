<template>
  <div class="VM-cluster">
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
          service: "Windows 容錯轉移叢集服務",
          en: "Microsoft Hyper-V Cluster Service",
          skillType: "Client管理",
          servicePropty: "系統規劃暨建置服務",
          duration: "視專案範圍及服務內容決定",
          price: "視服務時數決定",
          demand:
            "企業的IT管理人員將硬碟的備援層級拉高至伺服器層級，形成伺服器的自動化備援機制，一般通常為HA（High Availability）解決方案，而它背後的技術十有八九都是採用叢集（Cluster）架構的基礎。在Hyper-V的熱備援架構中，就是以Windows Server的容錯移轉叢集功能為基礎的Quick Migration，它能夠自動化解決叢集中任一節點伺服器故障的問題。",
          strong1:
            "在Microsoft Hyper-V  Cluster中除了更加簡化叢集的建置與管理外，更添加了許多與Hyper-V整合以及運行最佳化方面的新功能，這包括共用虛擬硬碟、主機停機時的線上虛擬機器自動移轉、虛擬機器網路健康偵測、部署已中斷連結Active Directory的叢集、建立動態見證、強制仲裁恢復功能、衝突的50%節點分割功能、設定全域更新管理員模式、關閉叢集節點間通訊的IPsec加密以及提供叢集儀表板。",
          strong2: "	雲端見證（Cloud Witness)",
          strong3: "	儲存複寫（Storage Replica",
          strong4: "	強化虛擬機器恢復機制（Virtual Machine Resiliency）",
          strong5: "	站台感知的容錯移轉機制（Site-aware Failover Clusters）",
          content1:
            "透過Microsoft技術團隊完整的規劃及建置，客戶可以在最短時間內導入「Microsoft Hyper-V Cluster 服務」，解決管理儲存空間的自動化備援問題。 本服務之服務內容包括：",
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
