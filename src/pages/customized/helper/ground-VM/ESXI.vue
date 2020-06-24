<template>
  <div class="VM-ESXI">
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
          service: "VMware ESXi Hypervisor服務",
          en: "Microsoft Hyper-V Replica Service",
          skillType: "Client管理",
          servicePropty: "系統規劃暨建置服務",
          duration: "視專案範圍及服務內容決定",
          price: "視服務時數決定",
          demand:
            "VMware ESXi 能夠直接訪問並控制底層資源，因此可對硬體進行有效分區，從而整合應用並削減成本。它有業界領先的高效體系架構，在可靠性、性能方面能滿足IT 團隊需要應對不斷變動的市場趨勢。同時，針對複雜性不斷提升且不斷擴充的 IT 資源，ESXi 有助於在更出色的業務成效和節約 IT 成本之間做出平衡。  ",
          strong1:
            "EESXi 可將多個服務器整合到較少物理設備中，從而減少對空間、電力和 IT 管理的要求，同時提升性能。佔用空間小:",
          strong2:
            "	儘管 ESXi 佔用空間僅為 150 MB，卻可實現更多功能，同時還能最大限度地降低 hypervisor 的安全風險。可靠的性能:",
          strong3:
            "	適應任何大小的應用，以滿足您的所有應用需求。了解不同解決方案的限制條件，確保不會超出您的環境支持的配置。了解有關配置上限的更多信息。增強安全性:",
          strong4:
            "	利用強大的加密功能保護敏感的虛擬機數據。基於角色的訪問可簡化管理，而廣泛的日誌記錄和審核可以更好地落實責任，還可更加輕鬆地進行取證分析。",
          strong5:
            "	獲取對硬件 OEM 供應商、技術服務合作夥伴、應用和客戶機操作系統的廣泛生態系統的支持。",
          strong6:
            "	使用基於 HTML5 標準的內置現代 UI 進行日常管理操作。對於需要實現運維自動化的客戶，VMware 提供 vSphere 命令行界面和便於開發人員使用、基於 REST 的 API。",
          content1:"透過VMware 技術團隊完整的規劃及建置，客戶可以在最短時間內導入「VMware ESXi Hypervisor 服務」，解決管理儲存空間的自動化備援問題。 本服務之服務內容包括：",
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
