<template>
  <div class="vCAN-wrapper">
    <div class="vCAN-banner">
      <Banner v-for="item in bannerData" v-bind="item" :key="item"></Banner>
    </div>
    <div class="vCAN-intro">
      <div class="intro-container">
        <div class="nav">
          <ul>
            <li>
              <a href="#vCAN-1">概觀</a>
            </li>
            <li>
              <a href="#vCAN-2">特點</a>
            </li>
            <li>
              <a href="#vCAN-3">適合對象</a>
            </li>
            <li>
              <a href="#vCAN-4">FAQ</a>
            </li>
          </ul>
        </div>
        <div id="vCAN-1">
          <h3>VMware vCAN 簡介</h3>
          <div class="text">
            <p>vCAN 為VMware與其服務提供商合作夥伴(Service Provider)所發展之一種以訂閱(Subscription)的授權方式，提供的對象為VMware所授權合法之第三方提供託管服務公司，包括基礎架構即服務（IaaS）提供商，雲服務提供商（CSP），應用服務提供商（ASP），互聯網服務提供商（ISP））和平台服務（PaaS）提供商。vCloud Air是一項VMware所開發，基於vSphere的雲計算服務。vCloud Air擁有三個基礎設施即服務（IaaS）訂閱服務類型：獨立雲、虛擬私有雲與災難恢復。vCloud Air同時也提供成為按需虛擬私有雲（Virtual Private Cloud OnDemand）的按程收費服務。</p>
            <p>
              在全球110多個國家，超過4300個VMware Cloud供應商（VMware Cloud Provider，VCP）加入VMware Cloud供應商計畫（VMware Cloud Provider Program，VCPP），提供訂製的雲解決方案和服務，讓供應商可提供月租模式的公有雲或混合雲服務。VMware 正提供雲供應商持續的創新，包括VMware vCloud Director、VMware vSAN、VMware NSX、VMware vCloud® Availability™，即雲為基礎的災備即服務（DR as a Service），實現服務交付。
              VMware Cloud供應商遍布全球110多個國家，以VMware雲端基礎架構技術為基礎，VMware Cloud供應商搭建與企業自建（on premise）可互通的運行環境，推動應用的無縫遷移以及多雲間的相容性，且毫不影響可視化、維運、自動化、安全。全球VCP的組成包括合法授權的第三方託管服務供應商，包括基礎架構即服務（IaaS）供應商，雲服務供應商（CSP），應用服務供應商（ASP），網際網路服務供應商（ISP））和平台服務（PaaS）供應商。
            </p>
          </div>
        </div>
        <div id="vCAN-2">
          <h3>VMware vCAN 的特點</h3>
          <div class="text">
            <h5>VMware vCAN 計畫等級與要求</h5>
            <p>vCAN 為VMware與其服務提供商合作夥伴(Service Provider)所發展之一種以訂閱(Subscription)的授權方式，提供的對象為VMware所授權合法之第三方提供託管服務公司，包括基礎架構即服務（IaaS）提供商，雲服務提供商（CSP），應用服務提供商（ASP），互聯網服務提供商（ISP））和平台服務（PaaS）提供商。vCloud Air是一項VMware所開發，基於vSphere的雲計算服務。vCloud Air擁有三個基礎設施即服務（IaaS）訂閱服務類型：獨立雲、虛擬私有雲與災難恢復。vCloud Air同時也提供成為按需虛擬私有雲（Virtual Private Cloud OnDemand）的按程收費服務。</p>
            <p>
              在全球110多個國家，超過4300個VMware Cloud供應商（VMware Cloud Provider，VCP）加入VMware Cloud供應商計畫（VMware Cloud Provider Program，VCPP），提供訂製的雲解決方案和服務，讓供應商可提供月租模式的公有雲或混合雲服務。VMware 正提供雲供應商持續的創新，包括VMware vCloud Director、VMware vSAN、VMware NSX、VMware vCloud® Availability™，即雲為基礎的災備即服務（DR as a Service），實現服務交付。
              VMware Cloud供應商遍布全球110多個國家，以VMware雲端基礎架構技術為基礎，VMware Cloud供應商搭建與企業自建（on premise）可互通的運行環境，推動應用的無縫遷移以及多雲間的相容性，且毫不影響可視化、維運、自動化、安全。全球VCP的組成包括合法授權的第三方託管服務供應商，包括基礎架構即服務（IaaS）供應商，雲服務供應商（CSP），應用服務供應商（ASP），網際網路服務供應商（ISP））和平台服務（PaaS）供應商。
            </p>
          </div>
        </div>
        <div id="vCAN-3"></div>
        <div id="vCAN-4"></div>
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
          line1: "vCloud Air Network (vCan) 租賃計畫",
          line2: "以VMware技術為基礎，VMware團隊協助夥伴成為雲端服務供應商"
        }
      ]
    };
  }
};
</script>
<style lang="scss">
@import "@/assets/css/setting.scss";

.vCAN-banner {
  background-image: url("./../../assets/img/vCAN-bg.jpg");
  background-size: cover;
  background-position-y: 100%;
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
      width: 90%;

      h1 {
        font-size: 40px;
        width: 90%;
        box-sizing: border-box;
        color: white;
        margin: 5px auto;
        text-align: center;

        font-weight: 400;
        font-family: "Noto Sans TC", sans-serif;
        border-bottom: 1px solid white;
        padding-bottom: 20px;
        box-sizing: border-box;
        position: relative;
      }

      h3 {
        font-size: 25px;
        width: 90%;
        margin: 3px auto;
        text-align: center;
        color: white;
        font-family: "Noto Sans TC", sans-serif;
        line-height: 30px;
        padding: 2px;
        box-sizing: border-box;
      }
    }
  }
}

@media (max-width: 1280px) {
  .vCAN-banner {
    .banner-container {
      .text {
        width: 90%;

        h1 {
          font-size: 40px;
          width: 90%;
        }

        p {
          width: 90%;
          font-size: 20px;
        }
      }
    }
  }
}

@media (max-width: 767px) {
  .vCAN-banner {
    .banner-container {
      .text {
        h1 {
          font-size: 27px;
          width: 100%;
        }

        h3 {
          display: none;
        }
      }
    }
  }
}

@media (max-width: 375px) {
  .vCAN-banner {
    .banner-container {
      .text {
        h1 {
          font-size: 24px;
        }
      }
    }
  }
}
</style>
<style lang="scss" scoped>
@import "@/assets/css/setting.scss";

.vCAN-intro {
  width: 100%;
  .intro-container {
    width: 90%;
    margin: 0 auto;

    .nav {
      margin-top: 20px;
      ul {
        display: flex;
        li {
          width: 150px;
          font-family: "Montserrat", sans-serif;
          a {
            text-decoration: none;
          }
        }
      }
    }

    h3 {
      width: 100%;
      background-color: $color_skyblue;
      color: white;
      font-family: "Noto Sans TC", sans-serif;
    }

    h4 {
      color: $color_darkblue;
      font-size: 17px;
      font-weight: bold;
      font-family: "Noto Sans TC", sans-serif;
    }

    #vCAN-2 {
      ul {
        padding-left: 20px;
        li {
          list-style: square;
          font-family: "Montserrat", sans-serif;
        }
      }
    }

    #vCAN-1,
    #vCAN-2,
    #vCAN-3,
    #vCAN-4 {
      margin-top: 20px;
      .text {
        p {
          font-family: "Montserrat", sans-serif;
          text-align: justify;
          
        }
      }
    }
  }
}

@media (max-width: 768px) {
  .vCAN-intro {
    .intro-container {
      padding: 20px 0 20px 0;
      .nav {
        ul {
          width: 100%;
          display: flex;
          margin: 0 auto;
          justify-content: space-between;
          li {
            width: 80px;
            text-align: center;
            line-height: 40px;
          }
        }
      }
    }
  }
}

@media (max-width: 414px) {
  .vCAN-banner {
    .banner-container {
      .text {
        width: 100%;

        h1 {
          font-size: 25px;
          width: 95%;
        }
      }
    }
  }
}
</style>