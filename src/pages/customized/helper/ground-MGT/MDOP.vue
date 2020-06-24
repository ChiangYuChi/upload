<template>
  <div class="MGT-mdop">
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
import SolutionBox from "@/components/SolutionBlock/solutionBox";
import SolutionList from "@/components/SolutionBlock/solutionList";
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
          line2: "MGT-System Center"
        }
      ],
      serviceList: [
        {
          routerName: "MDOP MBAM Bitlocker Management服務",
          router: "mdop"
        }
      ],
      serviceData: [
        {
          service: "MDOP MBAM Bitlocker Management 服務",
          en: "MDOP MBAM Bitlocker Management Service",
          skillType: "Client管理",
          servicePropty: "系統規劃暨建置服務",
          duration: "視專案範圍及服務內容決定",
          price: "視服務時數決定",
          demand:
            "企業IT 團隊可透過Microsoft BitLocker 管理和監控 (MBAM) 提供簡化的管理介面, 您可以用來管理 BitLocker 磁碟機加密。 您可以設定 MBAM 群組原則範本, 讓您設定適合您企業的 BitLocker 磁片磁碟機加密原則選項, 然後使用這些範本來監視用戶端是否符合這些原則。 您也可以針對個別電腦和企業整體, 報告其加密狀態。 此外, 您也可以在使用者忘記 PIN 或密碼或其 BIOS 或開機記錄變更時, 存取復原金鑰資訊。",
          strong1:
            "Microsoft BitLocker 針對遺失或被盜電腦的資料竊取或資料暴露提供增強型保護。 BitLocker 會加密儲存在 Windows 作業系統的磁片、磁碟機及已設定的資料磁碟機上的所有資料。MBAM 具有下列功能:",
          strong2: "	可讓系統管理員自動處理整個企業用戶端電腦上的加密量。",
          strong3:
            "	可讓安全性監察官快速判斷個別電腦或甚至企業本身的合規性狀態",
          strong4:
            "	使用 Microsoft System Center Configuration Manager 提供集中式報告及硬體管理。",
          strong5:
            "	減少支援中心的工作負荷, 協助最終使用者使用 BitLocker PIN 和復原金鑰要求。",
          strong6: "	讓使用者能夠使用自助入口網站, 獨立地復原加密的裝置。",
          strong7: "	讓安全官員能夠輕鬆地審核存取權, 以復原金鑰資訊。",
          strong8:
            "	讓 Windows 企業使用者能在任何地方繼續運作, 保證公司資料受到保護。。",
          content1:
            "透過Microsoft技術團隊完整的規劃及建置，客戶可以在最短時間內導入「MDOP MBAM Bitlocker Management服務 」，解決管理儲存空間的自動化備援問題。 本服務之服務內容包括：",
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
.MGT-mdop {
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
  .MGT-mdop {
    .main {
      padding: 0;
      width: 100%;
      .solution-content {
        width: 90%;
        margin: 20px auto 0 auto;
      }
      .solution-list {
        display: none;
      }
    }
  }
}

@media (max-width: 414px) {
  .MGT-mdop {
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