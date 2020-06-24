<template>
  <div class="VM-stack">
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
          service: "Red Hat_OpenShift服務",
          en: "Red Hat_OpenShift Service",
          skillType: "Client管理",
          servicePropty: "系統規劃暨建置服務",
          duration: "視專案範圍及服務內容決定",
          price: "視服務時數決定",
          demand:
            "Red Hat OpenShift對您的容器堆疊中各個項目，都能提供自動安裝、升級和生命週期管理，包括作業系統，Kubernetes以及叢集服務和應用程式等。Red Hat為您帶來一個更安全，並且隨時保持為最新版本的Kubernetes應用程式平臺，不會產生手動和連續系統升級問題，或是當機的麻煩。且Red Hat OpenShift將是一致性的混合雲基礎，用以建造與執行容器化應用程式，協助企業進行長期創新。您將能推動業務轉型，將IT團隊統合在經濟高效的單一平臺之上，並迅速提供各地客戶所期盼的優越體驗。",
          strong1:
            "Red Hat_OpenShift系統軟體套件的生命週期管理、管理者與開發者使用的中控台，以及貫穿整個軟體生命週期的資訊安全，都會變得至關重要。",
          strong2:
            "	利用您所採用的基礎架構，對各式平臺進行整合，其中包括容器主機、Kubernetes與應用程式生命週期管理等。",
          strong3:
            "	為系統營運與開發團隊，在完整應用程序生命週期中，創造出更高的價值",
          strong4:
            "	與業界生態體系夥伴們廣泛合作，提供更安全，具通過驗證的容器內容與服務。",
          strong5:"	加速應用程式開發週期，並以簡化過的系統安裝和升級功能，提供更高頻率的軟體部署能力",
          strong6:"	降低混合雲和多雲環境的IT營運成本，並提升應用程式的可移植性。",
          content1:
            "透過Red Hat技術團隊完整的規劃及建置，客戶可以在最短時間內導入「Red Hat_OpenShift 服務」，解決管理儲存空間的自動化備援問題。 本服務之服務內容包括：",
          content2: "	系統架構分析與規劃",
          content3: "	虛擬化基礎架構建置",
          content4: "	封裝與測試",
          content5: "	虛擬應用程式部署",
          content6: "	知識移轉與訓練"
        }
      ]
    };
  }
};
</script>
