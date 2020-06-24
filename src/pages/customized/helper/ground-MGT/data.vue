<template>
  <div class="MGT-data">
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
          service: "System Center Data Protection Manager服務",
          en: "System Center Data Protection Manager Service",
          skillType: "Server管理",
          servicePropty: "系統規劃暨建置服務",
          duration: "視專案範圍及服務內容決定",
          price: "視服務時數決定",
          demand:
            "每個組織都需要商務持續性與災害復原 (BCDR) 策略，以確保可在計劃性和非計劃性中斷期間使用資源，讓您在發生狀況時，能夠復原到正常運作情況。 您的 BCDR 策略需要讓資料保持安全且可復原，以及讓您的業務工作負載、應用程式及服務持續維持可用狀態。System Center Data Protection Manager Consulting Services是Windows備份和恢復的新標準，提供Microsoft應用程式和文件伺服器持續而無縫整合的資料保護，通過先進的技術為各種規模的組織能夠快速和可靠的完成資料的保護與回復。（SCDPM）針對 SQL Server、Exchange、SharePoint、虛擬化和檔案伺服器等Windows 伺服器，以及 Windows 桌上型電腦和膝上型電腦，提供了整合的資料保護。",
          strong1:
            "SCDPM 是一個強固的企業備份和復原系統，可藉由加速備份和修復企業資料來提供 BCDR 策略。您可以使用 SDPM 從來源位置備份 (複製) 資料到目標次要位置。若因為規劃或非預期問題，導致無法使用原始資料，則您可以從次要位置還原資料。您可以使用 SDPM 從 Microsoft 伺服器和工作負載備份應用程式資料，以及從伺服器和用戶端電腦備份檔案資料。您可以建立完整備份、增量備份、差異備份及裸機備份，來完整還原系統。SCDPM可備份",
          strong2: "	檔案備份",
          strong3: "	系統備份",
          strong4: "	VM 和應用程式的集中式備份",
          strong5: "	VM 的項目層級復原",
          strong6: "	將備份資料封存至 Azure",
          content1:
            "透過Microsoft技術團隊完整的規劃及建置，客戶可以在最短時間內導入「System Center Data Protection Manager 服務」，解決管理儲存空間的自動化備援問題。",
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
