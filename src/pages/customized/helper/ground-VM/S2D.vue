<template>
  <div class="VM-S2D">
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
          service: "Windows 管理中心超融合式儲存空間解決方案服務",
          en: "Microsoft Hyper-V S2D(HCI)",
          skillType: "Client管理",
          servicePropty: "系統規劃暨建置服務",
          duration: "200小時或以上視專案範圍及服務內容決定",
          price: "視服務時數決定",
          demand:
            "IT管理人員便可以透過標準的x86硬體伺服器搭配Windows Server 2016內建的S2D（Storage Spaces Direct）機制，手動為企業打造出HCI超融合基礎架構，而無須購買相對昂貴且又有硬體綁定問題的HCI超融合基礎架構解決方案。 ",
          strong1:
            "在Windows Server 2019雲端作業系統中，第二世代的S2D軟體定義儲存解決方案，除了新增多項亮眼功能外，原有的特色功能及運作規模和相關支援度也都再度提升。舉例來說，在Windows Server 2016版本所建構的S2D超融合基礎架構，最大儲存空間支援至「1PB」，現在透過Windows Server 2019所打造的S2D超融合基礎架構，最大儲存空間可支援高達至「4PB」",
          strong2: "	支援更大的運作規模",
          strong3: "	最適用於邊緣運算環境的仲裁機制",
          strong4: "	儲存裝置延遲異常檢測機制",
          content1:
            "透過Microsoft技術團隊完整的規劃及建置，客戶可以在最短時間內導入「Microsoft Hyper-V S2D(HCI) 服務」，解決管理超融合式儲存空間的問題。 本服務之服務內容包括：",
          content2: "	系統架構分析與規劃",
          content3: "	系統架構分析與規劃",
          content4: "	封裝與測試",
          content5: "	虛擬應用程式部署",
          content6: "	知識移轉與訓練"
        }
      ]
    };
  }
};




</script>
