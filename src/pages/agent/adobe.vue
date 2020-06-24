<template>
  <div class="adobe-wrapper">
    <div class="adobe-banner">
      <Banner v-for="item in bannerData" v-bind="item" :key="item"></Banner>
    </div>
    <div class="adobe-container">
      <div class="intro">
        <div class="item">
          <div class="text">
            <h3>在 Office 365 中使用 Adobe Sign 更快完成業務。</h3>
            <p>Adobe Sign 就在您的 Microsoft Office 365 應用程式中。現在直接透過日常使用的解決方案取得電子簽名，比以往更加簡單。</p>
            <p>
              <b>節省時間，加速簽署。</b>直接在 Microsoft SharePoint、Outlook、Teams、Word 和 PowerPoint 中，準備和傳送文件以索取電子簽名，並追蹤其狀態，既快速又輕鬆。
            </p>
            <p>
              <b>建立自動化的工作流程。</b>將簽署步驟加入 SharePoint 工作流程，或使用 Microsoft Flow 連接器使流程自動化。
            </p>
            <p>
              <b>讓客戶感到滿意。</b>隨時隨地都能輕鬆愉快地簽署文件、合約和表格。
            </p>
          </div>
          <div class="pic">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/dOt2k0fnoR8"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div class="item">
          <div class="pic">
            <img src="./../../assets/img/adobe-1.jpg" alt />
          </div>
          <div class="text">
            <h3>搭配 Acrobat DC 和 PDF 服務，充分運用 Office 365。</h3>
            <p>現在您團隊中的每個人都可以直接在 Office 365 中順暢地使用 PDF 檔案。</p>
            <p>
              <b>想在哪裡工作，就在那裡使用。</b>在 Office 365 中將 Word、Excel 或 PowerPoint 檔案轉換為 PDF，或是在 Acrobat DC 中使用 Office 檔案。任君選擇。
            </p>
            <p>
              <b>在線上完成更多工作。</b>透過商務用 OneDrive 或從 SharePoint、Word、Excel 或 PowerPoint 線上將文件合併為單一 PDF 以及重新排列頁面。
            </p>
            <p>
              <b>安心保護檔案。</b>以密碼保護 Office 365 中的檔案，確保機密資訊的安全，並限制複製、編輯或列印。
            </p>
          </div>
        </div>
      </div>
      <div class="feature">
        <div class="item">
          <h4>Word | Excel | PowerPoint</h4>
          <p>直接在您的 Office 365 應用程式中建立和共用 PDF。您還能在 Word 和 PowerPoint 中傳送文件，以索取簽名並追蹤狀態。</p>
        </div>
        <div class="item">
          <h4>SharePoint</h4>
          <p>將 Document Cloud 解決方案與 SharePoint 搭配使用，簡化您的文件工作流程。快速簽署合約，並順暢使用 PDF 檔案。</p>
        </div>
        <div class="item">
          <h4>Outlook</h4>
          <p>直接在 Outlook 中傳送需要簽名的文件並查看其狀態。使用自動填寫和簽署技術來辨識欄位並簽署您所收到的文件。不離開 Outlook 也能使用 Acrobat，將訊息和檔案夾轉換為 PDF。</p>
        </div>
        <div class="item">
          <h4>Microsoft Teams</h4>
          <p>在 Microsoft Teams 中建立、共用和審批資產及電子合約，以加快建立內容與審批文件的速度。</p>
        </div>
        <div class="item">
          <h4>Microsoft Flow</h4>
          <p>將電子簽名整合到 Microsoft Flow 所支援的常用應用程式中。自動在合約簽署完成後展開各項工作，並使用通知範本密切注意其狀態。</p>
        </div>
        <div class="item">
          <h4>OneDrive</h4>
          <p>透過商務用 OneDrive 在線上完成更多工作。直接在 OneDrive 將 Office 檔案轉換成 PDF 並將多個文件合併成單一檔案。</p>
        </div>
      </div>
      <div class="bar">
        <div class="bar-container">
          <div class="text">
            <p>
              <b>安全性。</b>使用 Adobe 領先業界的
              <span>安全資源</span> 保護您的資料、文件與公司。
            </p>
            <p>
              <b>合規性。</b>Adobe Document Cloud 解決方案符合最嚴苛的業界和法規要求 — 讓您能輕鬆確保
              <span>合規性</span>，並收集合法的電子簽名。
            </p>
            <p>
              <b>控制權。</b>取得部署和管理所需的控制權，只需使用我們的企業
              <span>部署資源</span>和管理指南。
            </p>
          </div>
        </div>
      </div>
      <div class="bar-2">
        <div class="bar-container">
          <h4>Microsoft 與其他 Adobe Document Cloud 的整合。</h4>
          <h5>Adobe Sign</h5>
          <p>透過您信賴的電子簽名技術，在 Microsoft Dynamics 內，隨時隨地使用任何裝置進行合約傳送、簽署、追蹤及歸檔。</p>
        </div>
      </div>
      <div class="bar-3">
        <div class="bar-container">
          <h4>想要知道更多？</h4>
          <p>無論您需要一些解決方案的基本資訊，還是想要針對您的獨特環境自訂報價，我們都非常樂意協助解答您的問題。</p>
          <p>立即預約專家現場演示 Adobe Document Cloud</p>
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
          line1: "Adobe Sign 與 Office 365 的完美結合",
          line2: "更快速、聰明且安全地進行工作。"
        }
      ]
    };
  }
};
</script>
<style lang="scss">
@import "@/assets/css/setting.scss";
.adobe-banner {
  background-image: url("./../../assets/img/adobe-slider-2.jpg");
  background-size: cover;
  background-position-y: 10%;
  background-position-x: 25%;
  background-repeat: no-repeat;
  font-family: "Montserrat", sans-serif;
  .banner-container {
    width: 100%;
    height: 520px;
    position: relative;
    background-color: rgba(255, 255, 255, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;

    .text {
      width: 80%;

      h1 {
        font-size: 40px;
        width: 50%;

        box-sizing: border-box;
        color: black;
        margin: 5px auto;
        text-align: center;
        font-weight: 400;
        border-bottom: 2px solid $color_darkblue;
        padding-bottom: 20px;
        box-sizing: border-box;
        position: relative;
        font-family: "Noto Sans TC", sans-serif;
        .pic {
          width: 100%;
          img {
            width: 50%;
          }
        }
      }

      h3 {
        text-align: center;
        line-height: 60px;
        font-family: "Noto Sans TC", sans-serif;
      }

      p {
        font-size: 18px;
        width: 50%;
        margin: 3px auto;
        text-align: left;
        color: black;
        line-height: 30px;

        text-align: center;
        font-family: "Noto Sans TC", sans-serif;
      }
    }
  }
}
</style>
<style lang="scss" scoped>
@import "@/assets/css/setting.scss";

.adobe-container {
  width: 100%;

  .intro {
    width: 90%;
    margin: 0 auto;
    padding-top: 50px;
    border-bottom: 1px solid $color_gray1;
    font-family: "Montserrat", sans-serif;
    .item {
      display: flex;

      h3 {
        font-family: "Noto Sans TC", sans-serif;
      }
      p {
        font-family: "Montserrat", sans-serif;
      }
      .text {
        padding: 50px;
        box-sizing: border-box;
      }
      .pic {
        width: 30%;
        padding: 50px;
        box-sizing: border-box;
        iframe,
        img {
          width: 100%;
        }
      }
    }
  }
  .feature {
    width: 90%;
    padding: 50px 0 50px 0;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;

    .item {
      width: 30%;
      margin: 20px;
      h4 {
        color: $color_skyblue;
        font-family: "Noto Sans TC", sans-serif;
      }
      p {
        font-family: "Montserrat", sans-serif;
      }
    }
  }
  .bar {
    width: 100%;
    background-image: url("./../../assets/img/adobe-1.jpg");
    background-size: cover;
    font-family: "Montserrat", sans-serif;

    .bar-container {
      width: 100%;
      margin: 0 auto;
      height: 350px;
      position: relative;
      background-color: rgba(0, 0, 0, 0.6);
      .text {
        color: white;
        position: absolute;
        top: 20%;
        left: 5%;
        padding: 50px;
        box-sizing: border-box;
        p {
          font-size: 18px;
          font-family: "Montserrat", sans-serif;
          b {
            font-size: 20px;
          }
          span {
            color: $color_yellow;
          }
        }
      }
    }
  }
  .bar-2 {
    width: 100%;
    .bar-container {
      width: 90%;
      padding: 50px;
      box-sizing: border-box;
      margin: 0 auto;

      line-height: 40px;
      h4 {
        font-size: 32px;
        font-family: "Noto Sans TC", sans-serif;
      }
      h5 {
        font-size: 24px;
        font-family: "Noto Sans TC", sans-serif;
      }
      p {
        font-size: 18px;
        font-weight: 300;
        font-family: "Montserrat", sans-serif;
      }
    }
  }
  .bar-3 {
    background-color: rgb(45, 45, 45);
    width: 100%;

    .bar-container {
      width: 90%;
      padding: 50px;
      box-sizing: border-box;
      margin: 0 auto;
      text-align: center;

      line-height: 40px;
      h4 {
        font-size: 32px;
        color: white;
        font-family: "Noto Sans TC", sans-serif;
      }

      p {
        font-size: 18px;
        font-weight: 300;
        color: white;
        font-family: "Montserrat", sans-serif;
      }
    }
  }
}

@media (max-width: 1280px) {
  .customized-banner {
    .banner-container {
      .text {
        p {
          width: 90%;
        }
      }
    }
  }

  .adobe-container {
    width: 100%;

    .intro {
      .item {
        flex-direction: column;
        width: 90%;
        margin: 0 auto;
        .text {
          padding: 50px;

          text-align: justify;
          width: 100%;
        }
        .pic {
          width: 100%;

          iframe,
          img {
            width: 100%;
          }
        }
      }

      &:nth-child(1) {
        .item {
          flex-direction: column-reverse;
        }
      }
    }
    .feature {
      .item {
        width: 45%;
      }
    }
  }
}

@media (max-width: 768px) {
  .customized-banner {
    .banner-container {
      .text {
        h1 {
          .pic {
            width: 100%;
            img {
              width: 100%;
            }
          }
        }
      }
    }
  }

  .adobe-container {
    .feature {
      .item {
        width: 90%;
        margin: 0 auto;
      }
    }
  }
}
@media (max-width: 414px) {
  .customized-banner {
    .banner-container {
      .text {
        h3 {
          font-size: 22px;
        }
      }
    }
  }

  .adobe-container {
    .intro {
      width: 100%;

      .item {
        .text {
          padding: 20px;
          p {
            margin-top: 20px;
          }
        }
        .pic {
          padding: 0;
        }
      }
    }
    .feature {
      .item {
        width: 100%;
        margin: 5px;
      }
    }

    .bar {
      .bar-container {
        .text {
          color: white;
          position: absolute;

          margin: -100px 40px 0px 0;
          padding: 0px;
          width: 95%;
          box-sizing: border-box;

          p {
            font-size: 15px;
            margin: 10px;
            b {
              font-size: 20px;
            }
            span {
              color: $color_yellow;
            }
          }
        }
      }
    }

    .bar-2 {
      .bar-container {
        h4 {
          font-size: 20px;
        }
        h5 {
          font-size: 16px;
        }
        p {
          font-size: 16px;
          font-weight: 300;
        }
      }
    }
    .bar-3 {
      display: none;
    }
  }
}
</style>