<template>
  <div class="WIN-serviceUpdate">
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
          line2: "WIN-Windows Server Update Services服務"
        }
      ],
      serviceList: [
        {
          routerName: "Windows Server Update Services服務",
          router: "winServerUpdate"
        },
        ,
      ],
      serviceData: [
        {
          service: "Windows Server Update Services服務",
          en: "Windows Server Update Service",
          skillType: "Server管理",
          servicePropty: "系統規劃暨建置服務",
          duration: "視專案範圍及服務內容決定",
          price: "視服務時數決定",
          demand:
            "Windows Server Update Services，縮寫WSUS ，WSUS伺服器結合群組原則（Group Policy），讓不同屬性的Windows用戶端與伺服器，能夠透過組織單位容器的分類，有效率地配置不同管理需求的補強更新原則。WSUS 它可以在組織內為 Windows 更新提供單一中樞。 WSUS 讓公司不只可以延遲更新，還可以選擇性地核准更新、選擇傳遞更新的時間，以及決定哪些個別裝置或裝置群組可接收更新。 WSUS 提供其他的商務更新控制權，但不會提供 Microsoft 端點設定管理員所提供的所有排程選項和部署靈活性。",
          strong1:
            "WSUS，它允許管理員在更新發布前批准或拒絕，強制在指定日期安裝更新，以及取得各台機器需要哪些更新的廣泛報告。系統管理員也可以組態WSUS為自動批准某類更新（關鍵更新、安全更新、服務包、驅動程式等）。這也可組態為僅「檢測」更新，允許管理員檢視各機器需要的更新並且不安裝它們。",
          strong2:
            "	IT人員可以使用WSUS的群組原則組態客戶端的自動更新，確保終端使用者不能禁用或繞過公司的更新策略。",
          strong3: "	WSUS可以不需要使用Active Directory",
          strong4: "	Client端組態也可以通過修改本機群組原則或Windows登錄檔套用",
          content1:
            "透過Microsoft技術團隊完整的規劃及建置，客戶可以在最短時間內導入「Microsoft Identity Manager 服務」，解決管理儲存空間的自動化備援問題。 本服務之服務內容包括：",
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
.WIN-serviceUpdate {
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
  .WIN-serviceUpdate {
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
  .WIN-serviceUpdate {
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