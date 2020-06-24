<template>
  <div class="customized-wrapper">
    <div class="banner">
      <Banner v-for="item in bannerData" v-bind="item" :key="item"></Banner>
    </div>
    <div class="customized-intro">
      <div class="plan-intro">
        <h2>企業軟硬體系統應用開發- 方案介紹</h2>
        <p>您有特殊規格的客製化需求嗎?客製化開發的設計流程往往綜橫交錯，甚至連客戶自己也摸不著頭緒該如何定義這些特別的流程需求，但當需求方自己都沒辦法定義出規格時又該如何委請專業人員進行企業內部系統或是客製化網站的製作呢?</p>
        <p>您可以交給我們，我們會以專業的角度提供您建議，不論您的需求尚在起步階段，或客製化的需求尚未完全聚焦，我們會協助您一步步將輪廓完整描繪出來。</p>
        <p>近年不論是傳統產業的產業革命或是沒聽過的新型態服務如雨後春筍串出，但這樣的產業往往會需要一個堅強的技術後盾，無論您是新創網路服務事業或是實體服務線上化，我們都能提供您專業的技術支援，憑藉著麥斯創新服務多年的經驗，我們有信心只要您的一通電話，我們會一步步協助您建立起您的線上服務，不論您在大台北地區或是其他地區，只要您有需求，我們的服務馬上就到。</p>

        <blockquote>
          在這頁的介紹中您可以從以下幾個區塊來了解這個方案：
          <br />1.
          <a href="#">適用商家</a> / 確認這個方案是否符合您的需求。
          <br />2.
          <a href="#">製作流程</a> / 提供一個大方向讓您可以了解這個專案大概會需要哪些步驟。
        </blockquote>

        <p>
          麥斯創新擁有十分豐富的軟硬體客製化開發經驗，面對客戶的疑問指教總是能耐心聆聽與虛心指導，若您有其他問題需要諮詢，也歡迎您透過下方
          <a
            href="#contact-buttom"
          >馬上聯繫我們</a> 與我們連繫。
        </p>
      </div>
      <div class="plan-object">
        <h1>
          適用情境/商家
          <span>range</span>
        </h1>
        <hr />
        <div class="content">
          <div class="items">
            <div class="text">
              <div class="item">
                <h3>大型專案</h3>
                <p>企業大型專案多採用客製化開發，要從市面上找到適合的模組並不容易。透過客製化可以因應客戶目標與特性去設計相對應的服務，提升客戶的整體管理或作業效益，擴展企業營運流程的可控性</p>
              </div>
            </div>
            <div class="text">
              <div class="item">
                <h3>彈性功能</h3>
                <p>模組化的核心為滿足多數消費者，不容易因應各企業實作專屬對應功能，因此因此企業個殊化需求時，就需要採用客制化開發</p>
              </div>
            </div>
            <div class="text">
              <div class="item">
                <h3>系統整合</h3>

                <p>多系統之間要進行集中管理及部份的資料交換及匯整，或是系統單點登錄管理(SSO)等，則需客制化開發。</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="customized-detail">
        <div class="detail-container">
          <h3>我們能提供您......</h3>
          <hr />
          <div class="item">
            <div class="text">
              <h2>軟體系統應用開發</h2>
              <p>
                Microsoft Windows Server/Client系統
                <br />Microsoft Active Directory目錄服務系統
                <br />Microsoft Exchange 郵件系統
                <br />Microsoft SQL 資料庫系統包含DTS/SSIS/Reporting/Power BI
                <br />Microsoft System Center Configure Manager
                <br />System Center Operation Manager
                <br />
              </p>
            </div>
          </div>
          <div class="item">
            <div class="text">
              <h2>硬體整合開發</h2>
              <p>
                Microsoft Windows Server/Client系統
                <br />Microsoft Active Directory目錄服務系統
                <br />Microsoft Exchange 郵件系統
                <br />Microsoft SQL 資料庫系統包含DTS/SSIS/Reporting/Power BI
                <br />Microsoft System Center Configure Manager
                <br />System Center Operation Manager
                <br />
              </p>
            </div>
          </div>
          <div class="item">
            <div class="text">
              <h2>商務應用網站開發</h2>
              <p>
                形象官方網站設計(整合上下游廠商及員工登入及SSO)
                <br />購物網站設計(B2B/B2C/線上線下多租戶購物網站)
                <br />國內外拍賣交易平台後台管理應用系統
                <br />團購網站設計
                <br />電子型錄設計
                <br />企業功能型客製化網站設計(訪客系統/停車預約系統/企業入口網站/請假 排班系統/售票系統等)
                <br />整合線上金流(國內外B2B金流、國內第三方支付、第三方代收代付、銀行/數位銀行)
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="customized-process">
      <div class="process-container">
        <h2>客製化流程 work flow</h2>
        <hr />
        <div class="items">
          <div class="item">
            <div class="left">
              <p>Step 1</p>
            </div>
            <div class="right">
              <h3>需求訪談</h3>
              <p>客戶提出系統構想意向、功能需求期望。麥斯創新提供客戶、專案經驗分享，與客戶互相確認資訊技術、合作關係之適合性。</p>
            </div>
          </div>
          <div class="item">
            <div class="left">
              <p>Step2</p>
            </div>
            <div class="right">
              <h3>需求確認</h3>
              <p>進行功能需求訪談，釐清系統目標。確認專案目標、功能範圍，研究系統限制性。 視專案需要提供系統Proposal以提供初步專案系統建議、規劃。</p>
            </div>
          </div>
          <div class="item">
            <div class="left">
              <p>Step3</p>
            </div>
            <div class="right">
              <h3>系統分析</h3>
              <p>
                經過初步的需求訪談以及您提供的資料提出方案規劃，我們將協助整理您整理手邊的資料以及理清腦海中的思緒，一同討論適合您的客製化網站架構，共同決定網站的方向。
                隨著您的專案規模以及功能的明朗度，將會明顯的影響這個階段的所需時間，在任何客製化網站或新創網路服務等中大型規模的專案，規劃這個階段所佔的比重高於40%都還算是家常便飯。
              </p>
            </div>
          </div>
          <div class="item">
            <div class="left">
              <p>Step4</p>
            </div>
            <div class="right">
              <h3>專案規劃</h3>
              <p>
                提出系統規格，包含系統所使用的技術架構、資料庫結構定義，完成畫面雛形規劃、詳細功能需求確認，確定系統專案規模與目標。 視專案需要提供系統Proof Of
                Concept(POC)以讓使用者等初步進行體驗系統功能、畫面操作、需求複雜度確認。
              </p>
            </div>
          </div>
          <div class="item">
            <div class="left">
              <p>Step5</p>
            </div>
            <div class="right">
              <h3>系統開發</h3>
              <p>據協定之系統需求規格，進行系統功能實作開發。 視專案需要制訂系統開發規格書，以規範開發之系統架構、模組，以維持程式品質。</p>
            </div>
          </div>
          <div class="item">
            <div class="left">
              <p>Step6</p>
            </div>
            <div class="right">
              <h3>系統測試</h3>
              <p>依據系統規格，進行系統功能測試實作。 依系統規模之大小分別，可再進行單元測試、整合測試。 在使用頻率較高的系統，搭配指定的軟硬體配備環境下，則再進行壓力測試。</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="customized-service">
      <div class="service-container">
        <h1>
          我們的服務
          <span>service</span>
        </h1>
        <hr />
        <div class="content">
          <div class="items">
            <div class="text">
              <div class="item">
                <h3>令人安心的維護服務</h3>
                <p>透過一通電話、一封Email、一張傳真，我們會立刻安排專員替您修正。同時也享有每日備份與多地備援服務，再也不怕意外的發生。</p>
              </div>
            </div>
            <div class="text">
              <div class="item">
                <h3>永久的安心保固</h3>
                <p>對於95%的客戶來說，經過麥斯創新與客戶雙方的交叉測試後的專案功能已經幾近完美，但為了提供更貼心的服務，有任何錯誤或技術更新造成的功能失常，我們將負責到底。</p>
              </div>
            </div>
            <div class="text">
              <div class="item">
                <h3>專業的技術諮詢服務</h3>
                <p>麥斯創新擁有豐富的系統整合經驗，擔任過許多企業的諮詢顧問，對於技術與新知有相當的掌握，相信我們可以替您解決所有的疑難雜症。</p>
              </div>
            </div>
            <div class="text">
              <div class="item">
                <h3>豐富的虛實整合經驗</h3>
                <p>麥斯創新挾著自己的實際體驗以及服務客戶多年的經驗，絕對能帶給您最豐富的虛實整合體驗。</p>
              </div>
            </div>
          </div>
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
          line1: " 程式客製化服務"
        }
      ]
    };
  }
};
</script>

<style lang="scss" >
@import "@/assets/css/setting.scss";
.banner {
  background-image: url("./../../assets/img/customized-slider-bg-1.jpg");
  background-size: cover;
  background-position-y: 10%;
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
        width: 50%;
        box-sizing: border-box;
        color: white;
        margin: 5px auto;
        text-align: center;
        border-bottom: 1px solid white;
        padding-bottom: 20px;
        box-sizing: border-box;
      }

      p {
        font-size: 15px;
        width: 50%;
        margin: 3px auto;
        text-align: left;
        color: white;
        font-family: "Montserrat", sans-serif;
        line-height: 20px;
        padding: 2px;
        box-sizing: border-box;
      }
    }
  }
}
</style>
<style lang="scss" scoped>
@import "@/assets/css/setting.scss";
@mixin contact-btn-hover {
  background-image: linear-gradient(45deg, $color_orange, $color_yellow);
}

.customized-intro {
  width: 100%;

  .plan-intro {
    width: 70%;
    margin: 0 auto;
    padding: 50px;
    box-sizing: border-box;

    h2 {
      font-size: 20px;
      font-weight: 300;
      color: rgb(108, 108, 108);
      font-family: "Noto Sans TC", sans-serif;
    }
    p {
      font-family: "Montserrat", sans-serif;
    }
    blockquote {
      border-left: 2px solid rgb(197, 197, 197);
      font-size: 15px;
      padding: 15px;
      a {
        text-decoration: none;
        color: rgb(159, 148, 110);
        font-family: "Montserrat", sans-serif;
      }
    }
  }

  .plan-object {
    width: 90%;

    margin: 0 auto;
    padding: 50px;
    box-sizing: border-box;

    h1 {
      font-size: 20px;
      font-weight: 400;
      text-align: left;
      padding: 20px;
      font-family: "Noto Sans TC", sans-serif;

      span {
        font-size: 40px;
        color: rgb(225, 225, 225);
        letter-spacing: 3px;
        padding: 20px;
      }
    }

    hr {
      border: 0;
      height: 2px;
      background-color: rgb(225, 225, 225);
    }

    .content {
      display: flex;

      .items {
        display: flex;
        justify-content: space-between;
        width: 90%;
        padding: 40px;
        margin: 0 auto;

        .text {
          width: 30%;

          .item {
            text-align: center;

            h3 {
              padding: 15px;
              font-family: "Noto Sans TC", sans-serif;
            }

            p {
              padding: 10px;
              text-align: justify;
              font-weight: 300;
              font-size: 17px;
              font-family: "Montserrat", sans-serif;
            }
          }
        }
      }
    }
  }
}

.customized-detail {
  width: 100%;

  h3 {
    font-size: 20px;
    font-weight: 400;
    text-align: left;
    padding: 20px;
    font-family: "Noto Sans TC", sans-serif;
  }

  .detail-container {
    width: 70%;
    margin: 0 auto;
    padding: 20px;
    box-sizing: border-box;

    hr {
      border: 0;
      height: 2px;
      background-color: rgb(225, 225, 225);
    }

    .item {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 70px;
      background-color: $color_gray2;
      padding: 20px 20px;
      margin-top: 20px;

      h2 {
        font-weight: 900;
        width: 70%;
        border-bottom: 2px solid $color_lightblue2;
        margin-bottom: 13px;
        font-family: "Noto Sans TC", sans-serif;
      }

      p {
        font-weight: 300;
        font-family: "Montserrat", sans-serif;
      }

      .text {
        width: 55%;
        flex-shrink: 0;
        padding: 50px 30px;
        box-sizing: border-box;
        position: relative;
        z-index: 3;
        background-color: rgba(225, 225, 225, 0.4);
        color: black;
      }
    }
  }
}

.customized-process {
  width: 100%;

  .process-container {
    width: 80%;

    margin: 0 auto;
    padding: 30px;
    box-sizing: border-box;
    text-transform: uppercase;

    h2 {
      font-size: 20px;
      font-weight: 400;
      text-align: left;
      padding: 20px;
      font-family: "Noto Sans TC", sans-serif;
    }

    hr {
      border: 0;
      height: 2px;
      background-color: rgb(225, 225, 225);
    }

    .items {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;

      .item {
        width: 28%;
        margin: 5px;
        display: flex;
        flex-direction: column;
        border: 2px solid $color_gray2;

        .left {
          padding: 5px;

          p {
            font-size: 24px;
            margin: 0;
            font-family: "Montserrat", sans-serif;
          }
        }

        .right {
          padding: 20px 10px;
          h3 {
            font-family: "Noto Sans TC", sans-serif;
          }
          p {
            font-family: "Montserrat", sans-serif;
          }
        }
      }
    }
  }
}

.customized-service {
  width: 100%;

  .service-container {
    width: 80%;
    margin: 0 auto;
    padding: 50px;
    box-sizing: border-box;

    h1 {
      font-size: 20px;
      font-weight: 400;
      text-align: left;
      padding: 20px;
    }

    span {
      font-size: 40px;
      color: rgb(225, 225, 225);
      letter-spacing: 3px;
      padding: 20px;
    }

    hr {
      border: 0;
      height: 2px;
      background-color: rgb(225, 225, 225);
    }

    .content {
      display: flex;

      .items {
        display: flex;

        padding: 40px;
        margin-left: 30px;
        flex-wrap: wrap;
        flex-direction: row;

        .text {
          width: 40%;
          margin: 30px;

          .item {
            text-align: center;
            padding: 3px;

            h3 {
              padding: 15px;
            }

            p {
              padding: 10px;
              text-align: justify;
              font-weight: 300;
              font-size: 17px;
            }
          }
        }
      }
    }
  }
}
.customized-contact-maxlabs {
  width: 100%;

  padding: 30px;
  box-sizing: border-box;

  background-color: $color_gray2;
  background-position-y: 100%;
  background-position-x: 100%;
  background-repeat: no-repeat;
  background-size: 40%;

  .contact-container {
    max-width: 80%;
    padding: 30px 100px;

    box-sizing: border-box;

    margin: 0 auto;

    form {
      margin: 0 auto;

      padding: 50px;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
    }

    h1 {
      font-weight: 400;
      text-align: center;
      padding: 30px;
      color: #747474;
      box-sizing: border-box;
      margin-bottom: 20px;
    }

    .field {
      display: flex;
      flex-direction: column;

      width: 70%;
      padding: 20px;
    }

    label {
      font-size: 20px;
      font-family: "Montserrat", sans-serif;
      padding: 5px;
    }

    input,
    textarea {
      padding: 5px 15px;
      font-size: 18px;
      border-radius: 3px;
      border: none;
    }

    input[type="checkbox"] {
      cursor: pointer;
    }

    a {
      text-decoration: none;
      padding: 3px;

      &:hover {
        color: $color_darkblue;
      }
    }

    .button {
      margin-top: 10px;
      border-radius: 3px;
      cursor: pointer;

      &:hover {
        font-size: 19px;
      }
    }
  }
}

@media (max-width: 768px) {
  .customized-banner {
    .banner-container {
      .text {
        width: 100%;
        h1 {
          width: 80%;
        }
      }
    }
  }
  .customized-intro {
    .plan-intro {
      width: 90%;
      padding: 10px;
      h2 {
        margin-bottom: 10px;
        font-size: 18px;
      }
      p {
        padding: 10px 0 10px 0;
      }
    }
    .plan-object {
      width: 100%;

      padding: 10px;
    }
  }

  .customized-detail {
    .detail-container {
      width: 90%;
      padding: 0px;
      .item {
        .text {
          width: 95%;
        }
      }
    }
  }
}

@media (max-width: 414px) {
  .customized-intro {
    .plan-object {
      padding: 0px;
      .content {
        .items {
          width: 100%;
          padding: 0px;
          flex-direction: column;

          .text {
            width: 90%;
            margin: 0 auto;
          }
        }
      }
    }
  }
  .customized-detail {
    .detail-container {
      .item {
        .text {
          h2 {
            font-size: 20px;
          }
          p {
            font-size: 14px;
          }
        }
      }
    }
  }

  .customized-process {
    width: 100%;

    .process-container {
      width: 100%;

      padding: 0px;

      hr {
        margin-bottom: 10px;
      }

      .items {
        .item {
          width: 90%;

          margin: 10px auto;

          .left {
            padding: 10px;

            p {
              font-size: 18px;
              margin: 0;
            }
          }

          .right {
            padding: 10px 10px;
            h3 {
              line-height: 40px;
              p {
                line-height: 30px;
              }
            }
          }
        }
      }
    }
  }

  .customized-service {
    width: 100%;

    .service-container {
      width: 100%;
      padding: 0px;

      hr {
        border: 0;
        height: 2px;
        background-color: rgb(225, 225, 225);
      }

      .content {
        .items {
          padding: 0px;
          margin-left: 0px;

          .text {
            width: 90%;
            margin: 10px;
          }
        }
      }
    }
  }
}
</style>