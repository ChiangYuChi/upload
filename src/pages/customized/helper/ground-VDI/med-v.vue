<template>
  <div class="MDI-microsoft-medV">
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
          service: "企業桌面虛擬化服務",
          en: "Microsoft Enterprise Desktop Virtualization Service",
          skillType: "Client",
          servicePropty: "系統規劃暨建置服務",
          duration: "視專案範圍及服務內容決定",
          price: "視服務時數決定",
          demand:
            "Microsoft Enterprise Desktop Virtualization 企業桌面虛擬化（MED-V)可在整個企業中部署和管理 Windows 虛擬電腦映射。 透過提供執行 Windows 7 （由 Windows Virtual PC 託管）的大型部署桌上型電腦，MED-V 可讓企業升級至 Windows 10，即使他們的部分應用程式可能還沒有完整的功能或受支援。",
          strong1:
            "icrosoft Enterprise Desktop Virtualization 企業桌面虛擬化 (MED-V)提供桌面虛擬化的企業解決方案。 透過使用 MED-V, 您可以在任何執行 Windows 7 或 Windows 10的 Windows 桌上型電腦上, 輕鬆地建立、傳送及管理企業 Windows 虛擬電腦影像。",
          content1:
            "透過Microsoft 技術團隊完整的規劃及建置，客戶可以在最短時間內導入「Microsoft Enterprise Desktop Virtualization服務」，解決應用程式衝突的問題。 本服務之服務內容包括：",
          content2: "系統架構分析與規劃",
          content3: "虛擬化基礎架構建置",
          content4: "封裝與測試",
          content5: "虛擬應用程式部署",
          content6: "知識移轉與訓練"
        }
      ]
    };
  }
};
</script>
<style lang="scss">
@import "@/assets/css/setting.scss";
.MDI-microsoft-medV {
  .item:nth-child(2){
    li{
      display:none;
    } 
  }
}

</style>