<template>
  <div class="MDI-citrix-hyper">
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
          en: "VMware Horizon(VDI) Service",
          skillType: "Client管理",
          servicePropty: "系統規劃暨建置服務",
          duration: "視專案範圍及服務內容決定",
          price: "視服務時數決定",
          demand:
            "透過 Horizon(VDI)，IT 部門可在資料中心執行遠端桌面平台和應用程式，並將這些桌面平台和應用程式作為受管理服務提供給員工。使用者可取得熟悉、個人化的環境，可以在企業內的任何位置或從家裡，透過任意數量的裝置進行存取。管理員則將桌面平台資料放在資料中心，可進行集中控制、並獲得效率與安全性。",
          strong1:
            "利用 Horizon 7 管理企業桌面的優點，包括可靠性、安全性、硬體獨立性和便利性等都能獲得提升。",
          strong2:
            "可靠性與安全性 : 集中放置桌面平台和應用程式。將桌面平台作業系統與應用程式放在資料中心的某一部伺服器上。",
          strong3:
            "便利性 : 將建立統一管理主控台以提供擴充性，因此即使是最大型的 Horizon 部署都能從單一管理介面進行有效管理。精靈和儀表板可增強工作流程，並且有助於更深入檢視詳細資料或變更設定。",
          strong4:
            "管理能力 : 為使用者佈建桌面平台和應用程式是一種快速程序。完全不需要使用人力在每位使用者的實體電腦上逐一安裝應用程式。使用者可以在任何位置，從各種裝置存取其相同的遠端桌面平台或應用程式。",
          content1:
            "透過VMware 技術團隊完整的規劃及建置，客戶可以在最短時間內導入「VMware Horizon(VDI) Service服務」，解決應用程式衝突的問題。 本服務之服務內容包括：",
          content2: "系統架構分析與規劃",
          content3: "虛擬化基礎架構建置",
          content4: "封裝與測試",
          content5: "虛擬應用程式部署知識移轉與訓練",
          content6: "知識移轉與訓練"
        }
      ]
    };
  }
};
</script>
<style lang="scss" >
.MDI-citrix-hyper {
  .item:nth-child(2) {
    li:nth-child(4),
    li:nth-child(5),
    li:nth-child(6) {
      display: none;
    }
  }
}
</style>