<template>
  <div class="MDI-citrix-virtual">
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
          service: "企業虛擬化服務",
          en: "Hypervisor(XenServer)Service",
          skillType: "Client管理",
          servicePropty: "系統規劃暨建置服務",
          duration: "視專案範圍及服務內容決定",
          price: "視服務時數決定",
          demand:
            "Citrix Hypervisor 是目前虛擬化市場上首屈一指經雲端驗證的企業級虛擬化平台，可協助企業實現即時遷移和集中管理多台伺服器 (Servers) 等重要功能。Server Virtualization 伺服器虛擬化技術讓一台實體伺服器 (physical server) 可支援多台同時運作的虛擬機。通過虛擬機這種方式，IT 部門可將作業系統 (OS)、應用程式 (applications) 和使用者設定檔 (user config.) 等工作負載從實體計算平台中分離出來。這樣就可實現一些重要的任務，如：隔離和在不同實體平台之間轉移工作負載。",
          strong1:
            "Citrix Systems 的 Hypervisor(XenServer)伺服器虛擬化是一種經過實踐驗證的技術，它允許多台虛擬機器在單一物理伺服器上運行。每台虛擬機器與其它虛擬機器完全隔離開來，並通過系統管理程式（hypervisor）的軟體層與基礎主機分離開，每台虛擬機器就能夠運行不同的作業系統和應用。由於這些虛擬機器與基礎主機相分離，所以虛擬機器也可以從一台物理伺服器移動到另一台而不中斷運行，即時遷移。Hypervisor 作為一種開放的、功能強大的伺服器虛擬化解決方案，可將靜態的、複雜的資料中心環境轉變成更為動態的、更易於管理的 IT 服務供應中心，從而大大降低企業的資料中心成本。XenMotion 在不停機狀態移動虛擬機，當伺服器出狀況時，Citrix Hypervisor 具有自動 High Availability (HA) 機制，可根據設定啟用虛擬機支援中斷的服務，確保服務能在適當的機器上重新啟動。搭配遠端架構的控制中心，讓企業 IT 人員能掌握所有的資源與伺服器狀態。另外 Hypervisor 能異地備援至不同地點、不同城市、甚至不同國家，即時回復受損的系統，做到零時差的災難回復。",

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
.MDI-citrix-virtual {
  .item:nth-child(2) {
    li {
      display: none;
    }
  }
  .item:nth-child(3) {
    li:last-child {
      display: none;
    }
  }
}
</style>