<template>
  <div class="recuit-wrapper">
    <div class="recuit-banner">
      <div class="banner-container">
        <div class="text">
          <h2>隱私權聲明</h2>
          <p></p>
        </div>
      </div>
    </div>
    <div class="privacy-intro">
      <div class="intro-container">
        <h3>一、個人資料包含哪些範圍？</h3>
        <p>
          根據 個資法 第二條規定，個人資料包含以下範圍：
          個人資料：指自然人之姓名、出生年月日、國民身分證統一編號、護照號碼、特徵、指紋、婚姻、家庭、教育、職業、病歷、醫療、基因、性生活、健康檢查、犯罪前科、聯絡方式、財務情況、社會活動及其他得以直接或間接方式識別該個人之資料。
          (紅色字樣是網站可能會收集的資料，其他非業務相關的資料不會任意收集。
        </p>
        <h3>二、我們如何使用網友個資？</h3>
        <p>
          個人資料保護法已於101年10月1日正式施行了，10月1日起，如果有任何單位或人員要收集您的個人資料，將需要您的書面同意，並說明如何使用您的資料。您可以要求查閱、複製、補充或更正您已留存的個人資料，最重要的是，如果您不希望再接到任何本公司的電話行銷或公司產品、活動相關訊息通知EDM，請記得要求停止使用!
          今後您瀏覽麥斯創新科技有限公司官方網站及ALTO產品網站或又是參與本公司活動時，如果有留存個人資料的需要，我們將會要求相關人員務必完成上述各項程序，以確保您的個人權益，並且以更積極、重視的態度來處理及保護您的個人資料。
          至於您之前已提供給本公司的個人資料，新法規定可以繼續留存使用，我們仍會在符合您同意的範圍內繼續提供各種公司產品、活動相關訊息通知EDM或電話行銷服務給您，如果您不希望我們提供這些服務，也歡迎您來信SupportIT@maxlabs.com.tw隨時反映告知，我們會即時為您服務。同時，我們會繼續加強個資保護宣導及教育訓練，以提供給各位更加安全優質的產品後續服務，謝謝您的支持。
        </p>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "@/assets/css/setting.scss";
.recuit-wrapper {
  background-repeat: no-repeat;
  background-position-y: 100%;
  .recuit-banner {
    background-image: url("../assets/img/privacy.jpg");
    background-size: cover;
    background-position-y: 35%;
    background-repeat: no-repeat;

    box-sizing: border-box;

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
          width: 50%;
          padding: 10px;
          box-sizing: border-box;
          color: white;
          margin: 0 auto;
          text-align: center;
          font-weight: 400;
        }

        p {
          font-size: 18px;
          width: 50%;
          margin: 0 auto;
          text-align: center;
          color: rgba(255, 255, 255, 0.68);
          font-family: "Montserrat", sans-serif;
        }
      }
    }
  }

  .recuit-position {
    width: 90%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 0 auto;
    justify-content: space-around;
    font-family: "Montserrat", sans-serif;
    .item {
      width: 40%;
      border: 2px solid $color_gray2;
      padding: 20px;
      box-sizing: border-box;
      margin: 20px;
      transition: all 1s;
      cursor: pointer;
      position: relative;

      &:hover {
        border: 3px solid $color_skyblue;
      }
      h3 {
        padding-bottom: 16px;
      }

      ul {
        width: 100%;
        li {
          font-size: 15px;
        }
      }

      .b-1 {
        margin-bottom: 15px;
        height: 250px;
      }

      .b-2 {
        height: 220px;
      }

      hr {
        margin-bottom: 40px;
      }
      .btn {
        margin-top: 40px;
        position: absolute;
        bottom: 20px;
        border-radius: 4px;
        .router {
          text-decoration: none;
          padding: 10px 20px;
          border: 1px solid $color_skyblue;
          &:hover {
            font-size: 18px;
          }
        }
      }
    }
  }
}
.privacy-intro {
  width: 100%;
  position: relative;

  .intro-container {
    width: 80%;

    background-image: url("../assets/img/about-us-bg-2.png");

    background-position-y: 100%;
    background-position-x: 100%;
    background-repeat: no-repeat;
    background-size: 50%;

    margin: 0 auto;
    padding: 60px;
    box-sizing: border-box;
    line-height: 60px;

    .text {
      width: 50%;

      line-height: 35.2px;
      margin: 0px auto;
      padding: 55px;
      margin-top: 15px;
      box-sizing: border-box;

      h4 {
        font-size: 41px;
        padding: 30px;
        box-sizing: border-box;
        text-align: center;
        font-weight: 400;
      }

      p {
        font-size: 16px;
        padding: 20px;
        box-sizing: border-box;
        text-align: justify;
        font-weight: 400;
      }

      a {
        text-decoration: none;
      }

      ul {
        padding: 0 20px;
        box-sizing: border-box;

        li {
          list-style: disc;
        }
      }
    }
  }
}

@media (max-width: 1280px) {
  .recuit-wrapper {
    .recuit-position {
      .item {
        .b-1 {
          margin-bottom: 55px;
        }
        .b-2 {
          margin-bottom: 30px;
        }
      }
    }
  }
}
@media (max-width: 1024px) {
  .recuit-wrapper {
    .recuit-position {
      margin: 0 auto;
      .item {
        width: 100%;
        text-align: justify;
        .b-1 {
          margin-bottom: 15px;
          height: auto;
        }
        .b-2 {
          height: auto;
        }
      }
    }
  }
}

@media (max-width: 414px) {
  .recuit-wrapper {
    .recuit-banner {
      .banner-container {
        .text {
          h2 {
            width: 80%;
          }

          p {
            width: 80%;
          }
        }
      }
    }
    .recuit-position {
      .item {
        h3,
        b {
          font-size: 16px;
        }
      }
    }
  }
}
</style>