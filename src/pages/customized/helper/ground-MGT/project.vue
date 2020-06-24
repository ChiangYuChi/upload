<template>
  <div class="MGT-project">
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
          line2: "MGT-Project Server"
        }
      ],
      serviceList: [
        {
          routerName: "Project Server服務",
          router: "project"
        }
      ],
      serviceData: [
        {
          service: "Project Server服務",
          en: "Project Server Service",
          skillType: "Server管理",
          servicePropty: "系統規劃暨建置服務",
          duration: "視專案範圍及服務內容決定",
          price: "視服務時數決定",
          demand:
            "企業透過Microsoft Project Server，不僅可以有效的掌握所有公司正在運作的專案狀況，還可以清楚的分析每個員工或資源在各專案的工作負載情形，不僅如此，結合數位儀表板與燈號控管，高階主管還可以很快的分析與掌握每個專案的運作現況，此外，結合專案組合管理，還可以有效的分析每個專案的投資報酬率ROI，並在有限的成本、資源或是其他條件下篩選出最佳的專案組合。 ",
          strong1:
            "Microsoft Project Server 是一套適用於專案組合管理和每日專案管理的彈性內部部署解決方案。",
          strong2:
            "	使用更具智慧的解決方案，快速開始使用熟悉的操作體驗有助於小組人員投入專案和提高生產力。",
          strong3:
            "	彈性的專案組合管理，在比以往更多的位置和裝置上採取行動，並保持最新狀態。",
          strong4:
            "	有效管理資源，簡化資源管理，即使人員正在 SharePoint Server 中管理專案(個別授權)，您也能查看小組的工作情況。",
          strong5:
            "	簡化系統管理:與AD整合管理使用者認證及權限、使用 PowerShell 建立自訂指令碼並自動化程序、控管無需撰寫程式碼 。",
          strong6:
            "	管理所有任務:工作管理、需求管理、時間與任務管理、資源管理、排程管理、計畫管理。",
          content1:
            "透過Microsoft技術團隊完整的規劃及建置，客戶可以在最短時間內導入「Project Server 服務」，解決管理儲存空間的自動化備援問題。 本服務之服務內容包括：",
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
.MGT-project {
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
  .MGT-project {
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
  .MGT-project {
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