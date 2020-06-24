<template>
  <div class="vmware-wrapper">
    <div class="banner">
      <Banner v-for="item in bannerData" v-bind="item" :key="item"></Banner>
    </div>

    <div class="vmware-intro">
      <div class="intro-container">
        <div class="text">
          <p>VMware 是提供領先業界的虛擬化與雲端基礎架構解決方案的全球領導廠商，讓企業能充分掌握業務與 IT 的軟體定義的作法，漸進的依照特定需求，改善IT資源的營運、傳送與消耗，藉此加快客戶的數位轉型歷程步伐。VMware軟體支援全球最複雜的數位基礎架構，涵蓋了企業資訊應用架構中的運算，儲存，網路三個 主要的基礎架構， 並提供統一、原則導向的管理技術，可將異質雲端之間的 IT 服務自動化，並加以管理。其突破性的創新已在企業和社會產生極大效益。</p>
        </div>
        <div class="pic">
          <img src="./../../assets/img/vmware-logo.png" alt />
        </div>
      </div>
    </div>
    <div class="vmware-intro">
      <div class="intro-container">
        <div class="pic">
          <img src="./../../assets/img/vmware-1.jpg" alt />
        </div>
        <div class="text">
          <h2>VMware 可協助遠端員工發揮生產力</h2>
          <p>
            VMware 可協助遠端員工發揮生產力
            任何組織在面臨中斷時必須確保業務持續營運。瞭解如何為所有應用程式和裝置提供持續且安全的存取能力，以維持生產力及連接遠端數位員工，同時讓 IT 能依照需求擴充遠端使用者。
          </p>
          <div class="btn">
            <router-link to="contact" class="router">深入了解</router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="vmware-intro">
      <div class="intro-container">
        <div class="text">
          <h2>體驗 VMware Cloud</h2>
          <p>
            體驗 VMware Cloud
            雲端的衝擊無可避免。探索您能如何部署及管理在任何雲端的任何應用程式，同時維持最高等級一致的基礎架構與作業。採用 VMware 的技術，您就可以從資料中心至雲端和邊緣，自由建置和部署新一代應用平台。
          </p>
          <div class="btn">
            <router-link to="contact" class="router">探索 VMware Cloud</router-link>
          </div>
        </div>
        <div class="pic">
          <img src="./../../assets/img/vmware-2.jpg" alt />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Banner from "../../components/banner";
export default {
  components: {
    Banner
  },
  data() {
    return {
      bannerData: [
        {
          line1: "VMware",
          line2: "VMware 助您發揮遠端員工能力"
        }
      ]
    };
  }
};
</script>
<style lang="scss">
@import "@/assets/css/setting.scss";

.banner {
  background-image: url("./../../assets/img/vmware-bg.jpg");
  background-size: cover;
  background-position-y: 70%;
  background-position-x: 25%;
  background-repeat: no-repeat;
  font-family: "Montserrat", sans-serif;
  .banner-container {
    width: 100%;
    height: 520px;
    position: relative;
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    .text {
      width: 90%;
     
      h1 {
        font-size: 40px;
        width: 90%;
        box-sizing: border-box;
        color: white;
        margin: 5px auto;
        text-align: center;
        font-weight: 400;
        border-bottom: 2px solid $color_darkblue;
        padding-bottom: 20px;
        box-sizing: border-box;
        position: relative;
        font-family: 'Noto Sans TC', sans-serif;
      }

      h3 {
        text-align: center;
        line-height: 60px;
        color: white;
        font-family: 'Noto Sans TC', sans-serif;
        font-size: 22px;
      }
    }
  }
}


</style>
<style lang="scss" scoped>
@import "@/assets/css/setting.scss";
.vmware-intro {
  width: 100%;
  padding: 30px;

  .intro-container {
    width: 90%;
    margin: 0 auto;
    display: flex;
    .text {
      width: 60%;
      color: $color_gray1;
      font-size: 20px;
      font-weight: 300;
      letter-spacing: 2px;
      text-align: justify;
      padding: 15px 10px;
      box-sizing: border-box;
      padding: 20px;
      p{
         font-family: "Montserrat", sans-serif;
      }

      h2{
        font-family: 'Noto Sans TC', sans-serif;
      }
    }
    .pic {
      width: 40%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    img {
      width: 70%;
      vertical-align: middle;
    }

    .router {
      border: 1px solid $color_skyblue;
      border-radius: 5px;
      padding: 5px 15px;
      text-decoration: none;
      transition: all 1s;
       font-family: "Montserrat", sans-serif;
      &:hover {
        background-color: $color_darkblue;
        color: white;
      }
    }
  }
}
@media (max-width: 768px) {
}

@media (max-width: 768px) {
  .vmware-intro {
    width: 100%;
    padding: 0px;

    .intro-container {
      width: 100%;
      flex-direction: column-reverse;
      position: relative;

      .text {
        width: 90%;
        margin: 0 auto;

        padding: 0 0 30px;

        h2 {
          font-size: 25px;
          padding: 0 10px;
          text-align: center;
        }

        p {
          padding: 15px 10px;
        }
      }
      .pic {
        width: 100%;
        margin: 0 auto;
        padding-top: 40px;
      }
      img {
        width: 90%;
      }

      .btn {
        width: 100%;
      }
    }
  }
 
}
</style>