<template>
  <div class="MDI-citrix-app">
    <SolutionBox v-for="(item,index) in serviceData" :key="index" :info="item"></SolutionBox>
  </div>
</template>
<script>
import Banner from "@/components/banner";
import SolutionBox from "@/components/SolutionBlock/solutionBox";
export default {
  components: {
    Banner,
    SolutionBox
  },
  data() {
    return {
      bannerData: [
        {
          line1: "地端解決方案",
          line2: "VDI-Microsoft"
        }
      ],
      serviceData: [
        {
          service: "虛擬桌面基礎架構建置服務",
          en: "Microsoft Virtual Desktop Infrastructure Implementation Service",
          skillType: "Client",
          servicePropty: "系統規劃暨建置服務",
          duration: "200小時或以上視專案範圍及服務內容決定",
          price: "視服務時數決定",
          demand:
            "虛擬桌面基礎架構 (Virtual Desktop Infrastructure，VDI)技術為 IT 帶來更新且強大的新機會，讓企業能以彈性地方式提供及管理企業桌面，並且滿足各種不同使用者的需求。這項符合成本效益的方案可讓IT集中管理桌面、應用程式以及資料，並允許企業以整合方式管理實體、虛擬和工作階段式的桌面、集中管理使用者資料，並且同時提升應用程式傳遞效率與業務的連續性。",
          strong1:
            "虛擬桌面基礎架構 (VDI )則是一種桌面服務提供模式，可將用戶端桌面工作負荷 (作業系統、應用程式、使用者資料等)，在資料中心的伺服器上管理及執行。使用者透過支援遠端桌面通訊協定 (如 RDP) 的用戶端裝置，就能和他們的虛擬桌面通訊。此方案結合了最先進的虛擬化技術與創新的彈性授權方式，同時兼具效能與價格的優勢。",
          strong2: "更高的彈性與不受地點的限制的桌面，能增強支援工作應用情境。",
          strong3: "透過資料集中管理以改善業務的連續性功能。",
          strong4: "提供對於實體、虛擬化和工作階段式桌面的整合式管理。",
          content1:
            "透過Microsoft 技術團隊完整的規劃及建置，客戶可順利導入「虛擬桌面基礎架構建置服務」，達到企業藉由虛擬化強化IT管理的目標。本服務之服務內容包括：",
          content2: "現行環境確認與評估",
          content3: "定義虛擬化策略與效能基準",
          content4: "建置虛擬桌面基礎架構",
          content5: "知識移轉與訓練"
        }
      ]
    };
  }
};
</script>
<style lang="scss" >

.MDI-citrix-app {
  ul {
    li:nth-child(4),
    li:nth-child(5),
    li:nth-child(6) {
      display: none;
    }
  }
 
}
</style>