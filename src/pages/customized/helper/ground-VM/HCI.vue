<template>
  <div class="VM-HCI">
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
          service: "Proxmox HCI服務",
          en: "Proxmox HCI Service",
          skillType: "Client管理",
          servicePropty: "系統規劃暨建置服務",
          duration: "視專案範圍及服務內容決定",
          price: "視服務時數決定",
          demand:
            "企業IT 團隊可透過Proxmox VE HCI這一個虛擬化平台，可以緊密集成計算，存儲和網絡資源，管理高可用性群集，備份/還原以及災難恢復。所有組件都是軟件定義的，並且彼此兼容。因此，可以通過集中式Web管理界面像單個系統一樣對它們進行管理。這些功能使Proxmox VE HCI成為部署和管理開源超融合基礎架構的理想選擇 。Proxmox VE HCI統一了您的計算和存儲系統，即，您可以將群集中的相同物理節點用於計算（處理VM和容器）和復制存儲。傳統的計算和存儲資源孤島可以打包到單個超融合設備中。單獨的存儲網絡（SAN）和通過網絡連接的存儲（NAS）的連接消失了。通過集成開源軟件定義的存儲平台Ceph，Proxmox VE HCI能夠直接在管理程序節點上運行和管理Ceph存儲",
          strong1:
            "帶有Proxmox VE的超融合基礎架構（HCI）的優勢超融合基礎架構對於其中高基礎架構需求滿足低管理預算的部署，遠程和分支機構環境等分佈式設置或虛擬私有云和公共雲特別有用。HCI具有以下優點：",
          strong2:
            "	可擴展性：計算，網絡和存儲設備的無縫擴展（即快速且彼此獨立地擴展服務器和存儲）。",
          strong3:
            "	低成本：Proxmox VE是開源的，並且集成了您需要的所有組件，例如計算，存儲，網絡，備份和管理中心。它可以替代昂貴的計算/存儲基礎架構。",
          strong4: "	數據保護和效率：集成了備份和災難恢復等服務。",
          strong5: "	簡便性：易於配置和集中管理。",
          strong6: "	開源：無供應商鎖定。",
          content1:
            "透過Proxmox 技術團隊完整的規劃及建置，客戶可以在最短時間內導入「Proxmox VE HCI 服務」，解決管理儲存空間的自動化備援問題。 本服務之服務內容包括：",
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
