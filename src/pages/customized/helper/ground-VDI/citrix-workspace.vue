<template>
  <div class="MDI-citrix-workspace">
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
          service: "企業虛擬化完整行動化解決方案服務",
          en: "Citrix Workspace Service",
          skillType: "Client管理",
          servicePropty: "系統規劃暨建置服務",
          duration: "視專案範圍及服務內容決定",
          price: "視服務時數決定",
          demand:
            "虛Citrix Workspace Suite的完整行動化解決方案，結合虛擬化、行動管理與雲端等技術，打造不限裝置且安全的統一入口平臺，存取各種企業應用，且結合行動裝置管控、安全遠端存取與檔案分享，強調提供以行動化、跨平臺應用程式部署管理，讓使用者能快速應用企業傳遞的應用程式、桌面環境與資料。在Citrix Workspace Suite應用環境之下，使用者可從受管控的行動裝置上，登入Citrix Secure Hub，從企業應用程式目錄App Catalog服務，即可下載工作所需App，或由企業直接指定群組使用，並自動安裝到使用者端裝置上。不只是XenMobile發布的應用程式，使用者在該App上，也能看到企業提供的虛擬應用程式與虛擬桌面 擬桌面基礎架構 (Virtual Desktop Infrastructure，VDI)技術為 IT 帶來更新且強大的新機會，讓企業能以彈性地方式提供及管理企業桌面，並且滿足各種不同使用者的需求。這項符合成本效益的方案可讓IT集中管理桌面、應用程式以及資料，並允許企業以整合方式管理實體、虛擬和工作階段式的桌面、集中管理使用者資料，並且同時提升應用程式傳遞效率與業務的連續性。",
          strong1:
            "虛擬桌面基礎架構 (VDI )則是一種桌面服務提供模式，可將用戶端桌面工作負荷 (作業系統、應用程式、使用者資料等)，在資料中心的伺服器上管理及執行。使用者透過支援遠端桌面通訊協定 (如 RDP) 的用戶端裝置，就能和他們的虛擬桌面通訊。此方案結合了最先進的虛擬化技術與創新的彈性授權方式，同時兼具效能與價格的優勢。",
          strong2: "提供多款專屬App，可輔助員工的行動辦公效率",
          strong3:"跨裝置的虛擬化應用操作很簡便，還能選搭專屬滑鼠操作透過資料集中管理以改善業務的連續性功能。",
          strong4:"與自家虛擬化技術結合，可不限裝置存取各式應用",
          strong5:"搭配安全遠端存取的NetScaler，以及檔案分享ShareFile",
          strong6:"統一管理方式，可將不同系統後臺入口發布於StoreFront平臺",
          content1:
            "透過Microsoft 技術團隊完整的規劃及建置，客戶可順利導入「虛擬桌面基礎架構建置服務」，達到企業藉由虛擬化強化IT管理的目標。本服務之服務內容包括：",
          content2: "現行環境確認與評估",
          content3: "定義虛擬化策略與效能基準",
          content4: "建置虛擬桌面基礎架構",
          content5: "知識移轉與訓練"
        }
      ]
    };
  }
};
</script>
