<template>
  <div class="WIN-DHCP">
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
          line2: "WIN-DHCP/DHCP Cluster服務"
        }
      ],
      serviceList: [
        { routerName: "DHCP/DHCP Cluster服務", router: "winDHCP" },
        ,
      ],
      serviceData: [
        {
          service: "DHCP/DHCP Cluster服務",
          en: "DHCP/DHCP Cluster  Service",
          skillType: "Server管理",
          servicePropty: "系統規劃暨建置服務",
          duration: "視專案範圍及服務內容決定",
          price: "視服務時數決定",
          demand:
            "DHCP協定服務是企業網路普遍採用的基礎網路結構服務,其主要功能為自動指派P位址和相關的TCP/IP組態訊息給網路上的主機設備,由於此種動態配置P組態的方式可以有效的降低TCP/IP組態管理的負荷並且降低人為輸入組態錯誤的可能,所以幾乎成為企業網路上最常見的服務之一。Windows Server內建的DHCP角色服務，他的加強功能就是DHCP容錯移轉(DHCP Failover)功能，因為它被賦予管理所有網路內動態IP電腦位址的重任。有鑑於此，在最新Windows Server的伺服器角色中已提供了DHCP伺服器自動容錯備援（DHCP Failover）的功能，讓IT人員不再需要因為DHCP主機的無預警停機而驚心膽跳。",
          strong1:
            "為了避免DHCP伺服器因各種軟硬體的失效或錯誤而導致企業用戶無法取得有效的P位址而無法連接網路,設計容錯和高度可用性的DHCP伺服服務就有其必要性,另一方面,若基於用戶端過多而希望降低伺服器負荷的效能上考量,支援負載平衡的DHCP服務就成為另一項重要的考量,因此目前Windows DHCP角色服務總共支援了三種不同的高可用性或負載平衡的做法 : 1. 分割領域方法(split scope approach)  2. 容錯移轉叢集內的DHCP角色  3. DHCP容錯移轉他的特性如下",
          strong2: "	使容錯能力(避免單點失誤)",
          strong3: "	負載平衡能力",
          strong4: "	具容錯和負載平衡能力",
          strong5: "	需共用儲存區",
          strong6: "	支援兩部以上伺服器",
          strong7: "	複製彼此租用資料",
          content1:
            "透過Microsoft技術團隊完整的規劃及建置，客戶可以在最短時間內導入「DHCP/DHCP Cluster 服務 服務」，解決管理儲存空間的自動化備援問題。 本服務之服務內容包括：",
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
.WIN-DHCP {
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
  .WIN-DHCP {
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
  .WIN-DHCP {
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