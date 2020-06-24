<template>
  <div class="MDI-microsoft-multi">
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
      serviceData: [
        {
          service: "MultiPoint Server Preminm服務",
          en: "MultiPoint Server Preminm Service",
          skillType: "Client管理",
          servicePropty: "系統規劃暨建置服務",
          duration: "視專案範圍及服務內容決定",
          price: "視服務時數決定",
          demand:
            "Microsoft MultiPoint Server Preminm 提供MultiPoint Services功能，這一個功能是允許多個使用者同時使用一台電腦的解決方案。它提供了一個低成本的替代方案來取代傳統電腦，其中每個使用者都擁有自己的電腦與獨立的Windows作業系統來體驗使用。",
          strong2:
            "可讓多個用戶通過遠端桌面協定（RDP）技術同時共享使用一台Windows Server作業系統",
          strong3: "使用該作業系統，一台計算機上可以有多個用戶同時登錄和使用",
          strong4: "每個用戶均可使用各自的鍵盤、滑鼠、顯示器。",
          content1:
            "透過Microsoft 技術團隊完整的規劃及建置，客戶可以在最短時間內導入「MultiPoint Server Preminm服務」，解決應用程式衝突的問題。本服務之服務內容包括：",
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
.MDI-microsoft-multi {
  .item:nth-child(2) {
    li:nth-child(4),
    li:nth-child(5),
    li:nth-child(6) {
      display: none;
    }
  }
}
</style>