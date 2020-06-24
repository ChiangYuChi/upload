<template>
  <div class="MGT-operation">
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
          service: "System Center Operations Manager服務",
          en: "System Center Operations Manager Service",
          skillType: "Server管理",
          servicePropty: "系統規劃暨建置服務",
          duration: "視專案範圍及服務內容決定",
          price: "視服務時數決定",
          demand:
            "不論小型企業或大型企業，一般都需要仰賴運算環境提供的服務和應用程式。 IT 部門負責確保這些重要服務和應用程式的效能和可用性。 這表示當問題發生時，IT 部門必須知道、必須識別發生問題的項目，以及必須找出導致問題發生的原因，最好是在應用程式的使用者遭遇問題之前。 企業中的電腦和裝置越多，這項工作就變得越困難。企業IT在環境中使用 Operations Manager 能簡化眾多電腦、裝置、服務和應用程式的監視作業。 Operations 主控台能讓您查看環境中所有受監視物件的健全狀況、效能和可用性，協助您找出問題並加以解決。",
          strong1:
            "Operations Manager 能告知您哪個受監視的物件處於不良狀態、在識別問題時傳送警示，以及提供資訊來協助您找出問題的原因和可能的解決方案。 如果您是系統管理員，可以藉由選取要監視的電腦和裝置，以及匯入為特定功能和應用程式提供監視功能的管理組件來設定要監視的項目。 監控管理系統,可提升SCOM更視覺化的單一監控介面。重要功能如下：",
          strong2: "	整合System Center Operations Manager",
          strong3: "	健康模型元件彈性自訂",
          strong4:
            "	顯示架構關係強化虛擬機器恢復機制（Virtual Machine Resiliency）",
          strong5: "	一目瞭然的系統健康狀況",
          content1:
            "透過Microsoft技術團隊完整的規劃及建置，客戶可以在最短時間內導入「System Center Operations Manager 服務」，解決管理儲存空間的自動化備援問題。 本服務之服務內容包括：",
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
