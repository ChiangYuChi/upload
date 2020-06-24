<template>
  <div class="microsoft-wrapper">
    <div class="microsoft-banner">
      <Banner v-for="item in bannerData" v-bind="item" :key="item"></Banner>
    </div>
    <div class="microsoft-intro">
      <div class="intro-container">
        <div class="text">
          <p>
            軟體的大量授權提供較簡易且經濟的方式，組織只要透過單一採購就能讓內部多台電腦上執行軟體。透過 Microsoft 大量授權方案取得軟體使用權時，只需支付軟體使用權的費用。另一方面，盒裝軟體則包含媒體 (CD-ROM 或 DVD)、使用者手冊和其他包裝項目。在排除這些實體成本並採用大量採購方式後，成本通常會下降，並可享有更符合客戶需求的購買選項，軟體管理也更有效。
            如果您選擇某些大量授權方案，也可以同時購買軟體保證。這項完善的維護產品可將軟體的投資效益發揮到極致，它結合了最新的軟體與電話支援、合作夥伴服務、教育訓練及 IT 工具等。您可在購買使用權時選購軟體保證，並在授權合約期間立刻開始享有利益。
            您可以根據所選的大量授權方案選擇是否要收到媒體，而且可依需求選擇分別取得媒體 (或輔助媒體)、文件及產品支援。
          </p>
        </div>
        <div class="pic">
          <img src="./../../assets/img/microsoft-logo-lg.png" alt />
        </div>
      </div>
    </div>
    <div class="microsoft-products">
      <div class="product-container">
        <div class="item">
          <div class="category">Open License</div>
          <div class="product">
            <router-link to="/agent-openlicense">Open License</router-link>
          </div>
        </div>
        <div class="item">
          <div class="category">SPLA</div>
          <div class="product">
            <router-link to="/agent-spla">SPLA</router-link>
          </div>
        </div>
        <div class="item">
          <div class="category">Microsoft 365</div>
          <div class="product">
            <router-link to="/agent-microsoft365">Microsoft 365</router-link>
          </div>
        </div>
        <div class="item">
          <div class="category">雲端運算平台</div>
          <div class="product">
            <router-link to="/agent-hyper-v">Serve Hyper-V</router-link>
            <router-link to="/agent-system-center">System Center</router-link>
            <router-link to="/agent-azure">Azure</router-link>
            <router-link to="/agent-azurepack">Azure Pack</router-link>
          </div>
        </div>
        <div class="product-explanation">
          <router-view></router-view>
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
          line1: "Microsoft",
          line2: "組織只要透過單一採購就能讓內部多台電腦上執行軟體"
        }
      ]
    };
  }
};
</script>
<style lang="scss">
@import "@/assets/css/setting.scss";

.microsoft-banner {
  background-image: url("./../../assets/img/microsoft-bg.jpg");
  background-size: cover;
  background-position-y: 50%;
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
        border-bottom: 1px solid white;
        padding-bottom: 20px;
        box-sizing: border-box;
        position: relative;
        font-family: 'Noto Sans TC', sans-serif;
      }

      h3 {
        font-size: 25px;
        width: 90%;
        margin: 3px auto;
        text-align: center;
        color: white;
     font-family: 'Noto Sans TC', sans-serif;
        line-height: 30px;
        padding: 2px;
        box-sizing: border-box;
      }
    }
  }
}

@media (max-width: 375px) {
  .microsoft-banner {
    .banner-container {
      .text {
        h3 {
          font-size: 23px;
        }
      }
    }
  }
}
</style>


<style lang="scss" scoped>
@import "@/assets/css/setting.scss";

.microsoft-wrapper {
  .microsoft-intro {
    width: 100%;
    padding: 30px;
   

    .intro-container {
      width: 80%;
      margin: 0 auto;
      display: flex;
      .text {
        width: 60%;
        color: $color_gray1;
        font-size: 20px;
        font-weight: 300;
        letter-spacing: 2px;
        text-align: justify;
        box-sizing: border-box;
        p{
           font-family: "Montserrat", sans-serif;
        }
      }
      .pic {
        width: 40%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      img {
        width: 100%;
        vertical-align: middle;
        padding-left: 40px;
        box-sizing: border-box;
      }

      .router {
        border: 1px solid $color_skyblue;
        border-radius: 5px;
        padding: 5px 15px;
        box-sizing: border-box;
        text-decoration: none;
        transition: all 1s;
        &:hover {
          background-color: $color_darkblue;
          color: white;
        }
      }
    }
  }
  .microsoft-products {
    width: 100%;
    padding: 30px;
    box-sizing: border-box;
    .product-container {
      width: 80%;
      margin: 0 auto;
      display: flex;
      flex-wrap: wrap;
      .item {
        width: 49%;
        height: 200px;
        display: flex;
        margin: 10px 5px;
        .category,
        .product {
          width: 50%;
        }
        .category {
          background: linear-gradient(to right, $color_blue, $color_lightblue2);
         font-family: "Montserrat", sans-serif;
          font-size: 40px;
          font-weight: 300;
          color: white;
          padding: 20px;
          box-sizing: border-box;
        }
        .product {
          background-color: $color_darkblue;
          display: flex;
          flex-direction: column;
          a {
            font-family: "Montserrat", sans-serif;
            font-size: 15px;
            color: white;
            padding: 5px;
            font-weight: 300;
          }
        }
      }
      .product-explanation {
        width: 100%;
      }
    }
  }
}
@media (max-width: 1280px) {
  .microsoft-wrapper {
    .microsoft-intro {
      .intro-container {
        .text {
          width: 100%;
        }
        .pic {
          display: none;
        }
      }
    }
    .microsoft-products {
      .product-container {
        flex-direction: row;
        justify-content: center;
        .item {
          width: 45%;
          margin: 10px;
          .category,
          .product {
            width: 50%;
          }
        }
      }
    }
  }
}
@media (max-width: 1024px) {
  .microsoft-wrapper {
    .microsoft-products {
      .product-container {
        .item {
          .category {
            font-size: 25px;
          }
        }
      }
    }
  }
}
@media (max-width: 768px) {
  .microsoft-wrapper {
    .microsoft-products {
      .product-container {
        .item {
          width: 100%;
        }
      }
    }
  }
}

@media (max-width: 767px) {
  .microsoft-wrapper {
    .microsoft-intro {
      display: none;
    }

    .microsoft-products {
      .product-container {
        .item {
          height: 150px;
          .category,.product{
            font-size: 15px;
          }
        }
      }
    }
  }
}
</style>