<template>
  <div class="MDI-microsoft-appV">
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
          service: "應用程式虛擬化建置服務",
          en: "Application Virtualization Implementation Service",
          skillType: "Client",
          servicePropty: "系統規劃暨建置服務",
          duration: "120小時或以上視專案範圍及服務內容決定",
          price: "視服務時數決定",
          demand:
            "在實體電腦環境中，每一個應用程式都必須透過 OS 才能提供各種服務，包括記憶體配置、裝置驅動程式及其他服務。應用程式及其作業系統之間的不相容問題，可由伺服器虛擬化或展示層虛擬化來解決，但安裝於同一個 OS 中的兩個應用程式，若產生不相容的情形，則必須藉由應用程式虛擬化才能解決。Microsoft Application Virtualization (App-V) 可將應用程式轉換為集中管理的虛擬服務，無需安裝應用程式，而且也不會與其他應用程式發生衝突。 ",
          stromg1:
            "「應用程式虛擬化建置服務」採用Microsoft Application Virtualization(App-V)技術將應用程式轉換為集中管理的虛擬服務，無需安裝應用程式，解決應用程式衝突問題。",
          strong2:
            "根據需求透過網際網路或企業網路，將應用程式串流處理至桌面、終端伺服器及筆記型電腦。",
          strong3: "減少影像佔用的空間，進而加快 OS 與應用程式的部署速度。",
          strong4:
            "減少因應用程式升級 / 更新或操作中斷對使用者造成的影響。不需要重新開機、不需要等待應用程式安裝、汰換應用程式時亦無需解除安裝。",
          strong5:
            "在使用者斷線時，允許控制應用程式。建立一個具延展性與安全可靠的基礎架構",
          content1:
            "透過Microsoft 技術團隊完整的規劃及建置，客戶可以在最短時間內導入「應用程式虛擬化建置服務」，解決應用程式衝突的問題。 本服務之服務內容包括：",
          content2: "系統架構分析與規劃",
          content3: "應用程式虛擬化基礎架構建置",
          content4: "程式封裝與測試",
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
.MDI-microsoft-appV {
  .item:nth-child(2){
    li:nth-child(5),
    li:nth-child(6) {
      display: none;
    }
  }
}
</style>