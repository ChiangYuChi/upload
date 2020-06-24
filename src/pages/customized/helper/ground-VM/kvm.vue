<template>
  <div class="VM-KVM">
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
          service: "Red Hat KVM服務",
          en: "Red Hat KVM Service",
          skillType: "Client管理",
          servicePropty: "系統規劃暨建置服務",
          duration: "視專案範圍及服務內容決定",
          price: "視服務時數決定",
          demand:
            "KVM是Kernel Virtual Machine的簡寫，Red Hat 企業虛擬化建立在強大的核心虛擬機 (KVM) 管理程式和 oVirt 開放式虛擬管理平台上。Red Hat 企業虛擬化相較於專有虛擬化供應商而言，是虛擬 Linux 工作負載的首選平台，為尋求更佳總體擁有成本、更快投資回報率和避免供應商鎖定的企業組織提供了真正的策略性虛擬化替代。",
          strong1: "降低成本並大幅提昇利用率和靈活性",
          strong2:
            " 將工作負載從物理伺服器轉換至虛擬機器，資料中心整合大幅提昇電腦資源的利用率和靈活性，且更能有效地利用能源和空間，同時降低操作成本。",
          strong3:
            "	在伺服器硬體上節約的資金成本是您最大的收益，可將成本降低 40% 至 75%。另外，減少對空間和能源的需求也使營運更有利，且能改善伺服器持續管理。",
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
