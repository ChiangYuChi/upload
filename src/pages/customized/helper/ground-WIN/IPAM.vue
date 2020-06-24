<template>
  <div class="WIN-IPAM">
    <div class="banner">
      <Banner v-for="item in bannerData" v-bind="item" :key="item"></Banner>
    </div>
    <div class="main">
      <div class="solution-list">
        <SolutionList v-for="(item,index) in serviceList" :key="index" :info="item"></SolutionList>
      </div>
      <div class="solution-content">
        <SolutionBox v-for="(item,index) in serviceData" :key="index" :info="item"></SolutionBox>
      </div>
    </div>
  </div>
</template>
<script>
import Banner from "@/components/banner";
import SolutionList from "@/components/SolutionBlock/solutionList";
import SolutionBox from "@/components/SolutionBlock/solutionBox";
export default {
  components: {
    Banner,
    SolutionList,
    SolutionBox
  },
  data() {
    return {
      bannerData: [
        {
          line1: "地端解決方案",
          line2: "WIN-Microsoft IPAM服務"
        }
      ],
      serviceList: [{ routerName: "Microsoft IPAM服務", router: "winIPAM" }, ,],
      serviceData: [
        {
          service: "Microsoft IPAM服務",
          en: "Microsoft IPAM Service",
          skillType: "Server管理",
          servicePropty: "系統規劃暨建置服務",
          duration: "視專案範圍及服務內容決定",
          price: "視服務時數決定",
          demand:
            "在一個預算充足的大型企業，Microsoft  IPAM更為高效且更容易實現。一般而言，那些已經使用DHCP和DNS可靠交付日常服務的組織更可能會選擇IPAM方法。在他們的現有技術，他們通常缺少的是變更管理、新子網配置和IP管理。當然，IT也希望增加自動網路發現、報告、警報和規劃工具。通常以軟體形式出現的IPAM疊加產品會與現有DHCP和DNS組件相連接。",
          strong1:
            "Microsoft IPAM IP 位址管理（IPAM）是一個整合的工具套件，可讓您透過豐富的使用者體驗，進行端對端規劃、部署、管理和監視您的 IP 位址基礎結構。 IPAM 會自動探索您網路上的 IP 位址基礎結構伺服器和網域名稱系統 (DNS) 伺服器，並可讓您從中央介面管理這些伺服器。",
          strong2: "	自動化 IP 位址基礎結構探索",
          strong3: "	自訂 IP 位址空間顯示、報告和管理",
          strong4: "	稽核伺服器設定變更和追蹤 IP 位址使用狀況",
          strong5: "	監控和管理 DHCP 和 DNS 服務",
          content1:
            "透過Microsoft技術團隊完整的規劃及建置，客戶可以在最短時間內導入「Microsoft IPAM 服務」，解決管理儲存空間的自動化備援問題。 本服務之服務內容包括：",
          content2: "	系統架構分析與規劃",
          content3: "	虛擬化基礎架構建置",
          content4: "	封裝與測試",
          content5: "	虛擬應用程式部署",
          content6: "	知識移轉與訓練署"
        }
      ]
    };
  }
};
</script>
<style lang="scss">
.WIN-IPAM {
  .banner {
    background-image: url("../../../../assets/img/ground-bg.jpg");
    background-size: cover;
    background-position-y: 30%;
    background-position-x: 25%;
    background-repeat: no-repeat;

    .banner-container {
      width: 100%;
      height: 520px;
      position: relative;
      background-color: rgba(0, 0, 0, 0.6);
      display: flex;
      justify-content: center;
      align-items: center;

      .text {
        width: 80%;

        h1 {
          position: relative;
          font-size: 40px;
          font-weight: 400;
          width: 90%;
          box-sizing: border-box;
          color: white;
          margin: 5px auto;
          text-align: center;
          border-bottom: 1px solid white;
          padding-bottom: 20px;
          box-sizing: border-box;
        }

        h3 {
          font-size: 40px;
          font-weight: 400;
          width: 90%;
          box-sizing: border-box;
          color: white;
          margin: 5px auto;
          text-align: center;

          box-sizing: border-box;
        }
      }
    }
  }

  .main {
    width: 100%;
    display: flex;
    padding: 40px 60px;
    background-image: url("../../../../assets/img/about-us-bg-2.png");
    background-size: contain;
    background-repeat: no-repeat;
    background-position-x: 100%;

    .solution-list {
      width: 25%;
      margin: 0;
    }
    .solution-content {
      width: 75%;
    }
  }
}

@media (max-width: 1280px) {
  .WIN-IPAM {
    .main {
      padding: 0;
      .solution-content {
        width: 85%;
        margin: 20px auto 0 auto;
      }
      .solution-list {
        display: none;
      }
    }
  }
}

@media (max-width: 414px) {
  .WIN-IPAM {
    .banner {
      .banner-container {
        .text {
          width: 90%;
          h3 {
            font-size: 20px;
          }
        }
      }
    }
  }
}
</style>