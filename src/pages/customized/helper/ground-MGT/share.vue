<template>
  <div class="MGT-share">
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
          line2: "MGT-SharePoint Service"
        }
      ],
      serviceList: [
        {
          routerName: "SharePoint 服務",
          router: "SharePoint Service"
        }
      ],
      serviceData: [
        {
          service: "SharePoint Service 服務",
          en: "SharePoint Service",
          skillType: "Server管理",
          servicePropty: "系統規劃暨建置服務",
          duration: "視專案範圍及服務內容決定",
          price: "視服務時數決定",
          demand:
            "企業內的用戶可以在單個統一平台上管理其內容，可用於資訊分享、協作及內容管理的伺服器平台，所提供的服務可限定內部授權的使用者存取。SharePoint Server 為專為協助IT人員，大幅提升可靠性與效能而設計，可提供簡化系統管理程序的功能、保護通訊與資訊，並賦予使用者跨各種裝置和螢幕工作的能力。",
          strong1:
            "SharePoint 會為每個專案小組和部門提供動態的生產力小組網站，促進團隊合作。小組成員可以共用檔案、資料、新訊和資源。您可以自訂網站來簡化小組的工作。可透過 PC、Mac 和行動裝置與貴組織內外的小組成員輕鬆且安全地共同作業。透過內部網路培養團隊精神和通知員工。在主網站和入口網站共用常見的資源和應用程式，藉此提升組織的工作效率。使用美觀的通訊網站分享您的想法。此外，運用 Web 和 SharePoint 行動裝置應用程式提供的個人化目標式新聞，隨時掌握最新消息。可以利用強大的搜尋功能及聰明的方式來輕鬆探索相關資訊、專業知識以及深入解析，以便告知相關決策並引導人員採取行動。SharePoint 提供豐富的內容管理功能，以及 Yammer 中極富價值的客戶關係和交談功能，讓貴組織能充分運用知識。可轉換的程序包括通知及核准這類簡單工作，以及複雜的營運工作流程。SharePoint 清單與文件庫、Microsoft Flow 和 PowerApps 可讓您使用表單、工作流程和自訂應用程式，建立適用於任何裝置的豐富數位體驗。",
          content1:
            "透過Microsoft技術團隊完整的規劃及建置，客戶可以在最短時間內導入「SharePoint  服務」，解決管理儲存空間的自動化備援問題。 本服務之服務內容包括：",
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
.MGT-share {
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
  .MGT-share {
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
  .MGT-share {
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