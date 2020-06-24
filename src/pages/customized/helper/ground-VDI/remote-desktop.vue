<template>
  <div class="MDI-microsoft-remote">
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
          service: "遠端桌面連線建置服務",
          en: "Microsoft Remote Desktop Connection Service",
          skillType: "Client",
          servicePropty: "系統規劃暨建置服務",
          duration: "視專案範圍及服務內容決定",
          price: "視服務時數決定",
          demand:
            "當某台聯網的電腦開啟了遠端桌面連線功能後，就可以在網路的另一端控制這台電腦了，通過遠端桌面功能就可以操作這台電腦，在上面安裝軟體，執行程式，所有的操作就像在自己的電腦上操作一樣。通過該功能，網路管理員可以在家裡輕鬆安全的控制單位的伺服器。由於該組件是Windows系統內建的，所以比其他第三方遠端控制軟體更加方便靈活。",
          strong2: "隨時隨地可進行遠端協助",
          strong3: "不需更改電腦及網路設定，不需更動防火牆或IP分享器",
          strong4: "無需 Public IP，不論透過任何網路皆可快速連結無障礙",
          strong5:
            "支援多種系統遠端遙控機制，包括桌面控制，檔案傳輸，遠端網路管理等",
          strong6: "具備認證機制，可自行建立帳號，非授權者無法連線",
          strong7: "所有傳輸不需經過第三方，資料連結加密，保障傳輸安全",
          content1:
            "透過Microsoft 技術團隊完整的規劃及建置，客戶可順利導入「遠端桌面連線建置服務」，達到企業藉由虛擬化強化IT管理的目標。本服務之服務內容包括：",
          content2: "現行環境確認與評估",
          content3: "建置遠端桌面連線礎架構",
          content4: "知識移轉與訓練"
        }
      ]
    };
  }
};
</script>
<style lang="scss">
@import "@/assets/css/setting.scss";
.MDI-microsoft-remote {
  .item:last-child {
    li:nth-child(4),
    li:nth-child(5) {
      display: none;
    }
  }
}
</style>