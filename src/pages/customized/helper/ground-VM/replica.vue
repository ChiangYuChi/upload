<template>
  <div class="VM-replica">
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
          service: "Hyper-V 複本服務",
          en: "Microsoft Hyper-V Replica Service",
          skillType: "Client管理",
          servicePropty: "系統規劃暨建置服務",
          duration: "視專案範圍及服務內容決定",
          price: "視服務時數決定",
          demand:
            "Hyper-V「複本」( Hyper-V Replica ) 是 「Hyper-v 3.0」 的一項新功能，可以將「虛擬機」上的「所有變更」，複寫到由不同伺服器控管相對應的「虛擬機器」，適用於「獨立伺服器」、「容錯轉移叢集」，伺服器可以「實體共置」，或是放在「相隔」遙遠「兩地」。 ",
          strong1:
            "	它會藉由將虛擬機器從一部 Hyper-v 主機伺服器複寫至另一部，以確保您的工作負載可供使用，藉此提供嚴重損壞修復策略。虛擬桌面基礎架構 (VDI )則是一種桌面服務提供模式，可將用戶端桌面工作負荷 (作業系統、應用程式、使用者資料等)，在資料中心的伺服器上管理及執行。使用者透過支援遠端桌面通訊協定 (如 RDP) 的用戶端裝置，就能和他們的虛擬桌面通訊。此方案結合了最先進的虛擬化技術與創新的彈性授權方式，同時兼具效能與價格的優勢。",
          strong2:
            "	Hyper-V  複本可在兩個「主控」伺服器之間「非同步」複寫 Hyper-V虛擬機器，不需要「共用存放區」( Cluster Shared Volume ) 或 任何特定的存放硬體。",
          strong3: "	任何可以在 Hyper-v 虛擬化的「伺服器」工作負載都可以複寫。",
          strong4:
            "	萬一Primary有問題，可以用複本來進行Recovery，大大降低Downtime時間。",
          content1:
            "透過Microsoft 技術團隊完整的規劃及建置，客戶可順利導入「Microsoft Hyper-V Replica 服務」，解決管理儲存空間的自動化備援問題。本服務之服務內容包括：",
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
