<template>
  <div class="MDI-citrix">
    <div class="banner">
      <Banner v-for="item in bannerData" v-bind="item" :key="item"></Banner>
    </div>
    <div class="main">
      <div class="solution-list">
        <SolutionList v-for="(item,index) in serviceList" :key="index" :info="item"></SolutionList>
      </div>

      <div class="view">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
import Banner from "@/components/banner";
import SolutionList from "@/components/SolutionBlock/solutionList";
export default {
  components: {
    Banner,
    SolutionList
  },
  data() {
    return {
      bannerData: [
        {
          line1: "地端解決方案",
          line2: "VDI-Citrix"
        }
      ],
      serviceList: [
        { routerName: "Hypervisor(XenServer)服務", router: "/CitrixHyper" },
        {
          routerName: "Virual Apps and Desktops (XenAPP & Xendesktop)服務",
          router: "/CitriVirtual"
        },
        {
          routerName: "Workspace服務",
          router: "/CitriWorkspace"
        },
        {
          routerName: "Workspace APP服務",
          router: ""
        }
      ]
    };
  }
};
</script>
<style lang="scss">
.MDI-citrix {
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
    .view {
      width: 75%;
    }
  }
}

@media (max-width: 1280px) {
  .MDI-citrix {
    width: 100%;
    .main {
      padding: 0;
      width: 100%;
      margin: 0 auto;
      .view {
        width: 90%;
        margin: 20px auto 0 auto;
      }
      .solution-list {
        display: none;
      }
    }
  }
}
</style>