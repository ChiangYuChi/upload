<template>
  <div class="MGT-orchestrator">
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
          service: "System Center-Orchestrator服務",
          en: "System Center-Orchestrator Service",
          skillType: "Server管理",
          servicePropty: "系統規劃暨建置服務",
          duration: "視專案範圍及服務內容決定",
          price: "視服務時數決定",
          demand:"System Center-Orchestrator 的強大在於提供 runbook 和組成 runbook 的個別活動。 Runbook 包含自動化工作或程序的指示。Runbook 中的個別步驟稱為活動。 Runbook 內還有其他控制項，這些控制項提供如何控制 Runbook 中活動順序的資訊和指示。 Runbook、活動和每個 Runbook 控制項都有可設定的內容。 您可以修改這些內容來設定 Runbook 要求的行為。透過 System Center-Orchestrator，您可以使用圖形化使用者介面，將不同的工作和程式結合在一起，Runbook Designer 在 IT 環境中建立可靠、彈性且有效率的端對端解決方案。",
          strong1:"System Center-Orchestrator的 runbook 必須只有一個起點。 起始點是啟動 runbook 時自動執行的活動。 Runbook 中的每個活動會在工作流程中的上一個活動完成後執行。Orchestrator 是資料中心的工作流程管理解決方案。Orchestrator 可讓您將環境中的資源建立、監控及部署加以自動化。透過建立行程的安排，為IT流程提供規劃、整合以及自動化的功能，幫助您定義最佳實務，並使其標準化，最終改善營運的效率。",
          strong2: "	不受硬體或平台的限制，將資料中心內的程序自動化。",
          strong3: "	標準化最佳做法以提升營運效率。",
          strong4: "	從不同的廠商連接系統，而不需要知道如何使用腳本和程式設計語言。",
          strong5: "	工作流程自動化",
          strong6: "	視覺化 Runbook 製作",
          strong7: "	跨平台工作流程整合",

          content1:
            "透過Microsoft技術團隊完整的規劃及建置，客戶可以在最短時間內導入「System Center-Orchestrator 服務」，解決管理儲存空間的自動化備援問題。 本服務之服務內容包括：",
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
