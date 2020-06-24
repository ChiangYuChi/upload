<template>
  <div class="contact-wrapper">
    <div class="contact-banner">
      <div class="banner-container">
        <div class="text">
          <h2>連結麥斯創新的社群</h2>
          <p>麥斯創新期望成為客戶最可靠的夥伴，提供專業技術服務，解決系統大小事。</p>
          <p>透過成為麥斯創新 的合作夥伴，一同攜手實現願景</p>
        </div>
      </div>
    </div>
    <div class="partners">
      <div class="partner-container">
        <h3>麥斯創新精選合作夥伴</h3>
        <div class="text">
          <p>麥斯創新合作夥伴們從不會是局外人，他們參與持續演進的麥斯創新生態系。合作夥伴是麥斯創新至關重要的元素。</p>
        </div>
        <div class="icon">
          <div class="pic">
            <img src="../assets/img/partner1.png" alt />
          </div>
          <div class="pic">
            <img src="../assets/img/partner2.png" alt />
          </div>
          <div class="pic">
            <img src="../assets/img/partner3.png" alt />
          </div>
          <div class="pic">
            <img src="../assets/img/partner4.png" alt />
          </div>
          <div class="pic">
            <img src="../assets/img/partner5.png" alt />
          </div>
          <div class="pic">
            <img src="../assets/img/partner6.jpg" alt />
          </div>
          <div class="pic">
            <img src="../assets/img/partner7.png" alt />
          </div>
          <div class="pic">
            <img src="../assets/img/partner10.png" alt />
          </div>
          <div class="pic">
            <img src="../assets/img/partner11.png" alt />
          </div>
          <div class="pic">
            <img src="../assets/img/partner12.png" alt />
          </div>
        </div>
      </div>
    </div>
    <div class="bar">
      <div class="text">
        <p>成為麥斯創新合作夥伴</p>
        <p>享有的優勢</p>
      </div>
    </div>

    <div class="partner-community">
      <div class="item">
        <div class="pic">
          <img src="../assets/img/partner-community1.jpg" alt />
        </div>
        <div class="text">
          <h4>觸及高品質的社群</h4>
          <p>一個不斷進化的生態系麥斯創新總是充滿活力且獨一無二。</p>
        </div>
      </div>
      <div class="item">
        <div class="pic">
          <img src="../assets/img/partner-community2.jpg" alt />
        </div>
        <div class="text">
          <h4>成為麥斯創新生態系的一部分</h4>
          <p>麥斯創新望長期耕耘合作夥伴的關係。我們的座右銘是"匯聚力量，加速成長"，所以積極尋覓願意為此信念貢獻所長，並從中受益的合作夥伴。</p>
        </div>
      </div>
      <div class="item">
        <div class="pic">
          <img src="../assets/img/partner-community3.jpg" alt />
        </div>
        <div class="text">
          <h4>確保產品與社群以優勢互惠</h4>
          <p>麥斯創新合作夥伴關係以優勢互惠為方針，擬定合作夥伴利益與會員社群需求相輔相成方案，精準推廣合作之產品及服務。</p>
        </div>
      </div>
      <div class="item">
        <div class="pic">
          <img src="../assets/img/partner-community4.jpg" alt />
        </div>
        <div class="text">
          <h4>多元合作夥伴</h4>
          <p>麥斯創新與夥伴的合作總是不斷挑戰平凡</p>
        </div>
      </div>
    </div>

    <ContactForm></ContactForm>
  </div>
</template>

<script>
import ContactForm from "../components/form";
export default {
  components: {
    ContactForm
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/setting.scss";
.contact-banner {
  background-image: url("../assets/img/partner.jpg");
  background-size: cover;
  background-position-y: 45%;
  background-repeat: no-repeat;

  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;

  .banner-container {
    width: 100%;
    height: 520px;
    position: relative;

    .text {
      position: absolute;
      width: 100%;
      height: 520px;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.4);

      display: flex;
      justify-content: center;
      flex-direction: column;

      h2 {
        font-size: 65px;
        width: 100%;
        padding: 10px;
        box-sizing: border-box;
        color: white;
        margin: 0 auto;
        text-align: center;

        font-weight: 400;
      }

      p {
        font-size: 18px;
        width: 90%;
        margin: 0 auto;
        text-align: center;
        color: rgba(255, 255, 255, 0.68);
        font-family: "Montserrat", sans-serif;
      }
    }
  }
}
.partners {
  width: 100%;
  .partner-container {
    width: 90%;
    margin: 0 auto;
    font-family: "Montserrat", sans-serif;
    text-align: center;
    padding: 50px;

    h3 {
      width: 100%;
      font-size: 32px;
      color: #5e6366;
      font-weight: 300;
    }
    .text {
      width: 100%;
      p {
        font-size: 25px;
        color: #5e6366;
        padding-top: 23px;
      }
    }
    .icon {
      width: 100%;
      margin-top: 60px;
      display: flex;
      flex-wrap: wrap;
      .pic {
        width: 20%;

        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: 50%;
          vertical-align: middle;
        }
      }
    }
  }
}

.bar {
  background-color: #bdb099;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    margin: 0;
    color: white;
    text-align: center;
    font-size: 25px;
    font-weight: 500;
    line-height: 35px;
  }
}

.partner-community {
  display: flex;
  .item {
    width: 25%;
    .pic {
      width: 100%;
      height: 250px;

      overflow: hidden;
      img {
        width: 100%;

        vertical-align: middle;
      }
    }
    .text {
      width: 100%;
      color: #5e6366;
      padding: 38px 38px 20px 35px;
      text-align: left;
      h4 {
        font-size: 20px;
      }
      p {
        font-size: 14px;
        padding: 3px;
      }
    }
  }
}

@media (max-width: 1280px) {
}
@media (max-width: 1024px) {
}
@media (max-width: 768px) {
}
@media (max-width: 767px) {
}
@media (max-width: 414px) {
  .contact-banner {
    .banner-container {
      .text {
        h2 {
          font-size: 40px;
          width: 100%;
          padding: 10px;
          box-sizing: border-box;
          color: white;
          margin: 0 auto;
          text-align: center;
          font-weight: 400;
        }
      }
    }
  }

  .partners {
    .partner-container {
      width: 100%;
      margin: 0 auto;
      font-family: "Montserrat", sans-serif;
      text-align: center;
      padding: 50px;

      h3 {
        width: 100%;
        font-size: 22px;
        color: #5e6366;
        font-weight: 300;
      }
    }
  }
  .bar {
    display: none;
  }

  .partner-community {
    display: flex;
    flex-direction: column;
    .item {
      width: 100%;

      &:nth-child(2),
      &:nth-child(4) {
        display: none;
      }
    }
  }
}
@media (max-width: 375px) {
  .contact-banner {
    .banner-container {
      .text {
        h2 {
          font-size: 35px;
        }

        p {
          font-size: 15px;
        }
      }
    }
  }
}
</style>
