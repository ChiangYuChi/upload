<template>
  <div class="office365-wrapper">
    <div class="slider-wrap">
      <Slider v-for="item in sliderData" v-bind="item" :key="item"></Slider>
    </div>
    <div class="office365-intro">
      <div class="intro-container">
        <h4>產品特色</h4>
        <div class="text">
          <div class="item">
            <i class="fas fa-circle-notch"></i>
            <h2>永遠維持最新狀態</h2>
            <p>
              有了 Office 365 訂閱之後，Office
              <br />應用程式可永遠保持最新版本
            </p>
          </div>
          <div class="item">
            <i class="fas fa-window-restore"></i>
            <h2>跨平台同步</h2>
            <p>
              支援跨裝置跨平台服務，電腦、平板、手機上皆可使用，生產力不受限。
              Office 365 + 裝置 + 網際網路 = 隨時 隨地保持生產力！
            </p>
          </div>
          <div class="item">
            <i class="fas fa-cloud-upload-alt"></i>
            <h2>雲端協作</h2>
            <p>您可以在需要的時候，在任何地點以您所選的任何裝置進行作業。共用檔案。 加入會議。與小組保持同步。 在需要完成工作時，Office 隨侍在側。</p>
          </div>
          <div class="item">
            <i class="fas fa-shield-alt"></i>
            <h2>資安防禦</h2>
            <p>
              超值優惠--Office 365限量驚喜特惠價
              <br />完整導入--評估、導入、售後一次到位
              <br />全面防護--提供微軟企業等級資安防護
            </p>
            <p></p>
          </div>
        </div>
      </div>
    </div>
    <div class="office365-plan" id="office365-plan">
      <div class="plan-container">
        <h2>Microsoft 365 熱銷方案</h2>
        <div class="text panel">
          <div class="item">
            <h4>Exchange Online（方案1)</h4>
            <h3>企業級電子郵件</h3>
            <div class="discount">
              <p>
                每月最低不到
                <span>NT$０００</span>
              </p>
            </div>
            <ul>
              <li>不包含任何 Office 應用程式</li>
              <li>不包含 Exchange、OneDrive、SharePoint、Teams 等服務</li>
              <li>50 GB 的信箱儲存空間，可傳送 150 MB 的郵件</li>
              <li>可將支援的 Outlook 版本連結至 Exchange Online</li>
              <li>可使用Outlook 網頁版，外觀及風格類似完整 Outlook 用戶端</li>
              <li>焦點收件匣可追蹤重要的電子郵件。可切換兩個索引標籤：[焦點] 內含您需要立即處理的電子郵件，而 [其他] 則內含所有其他項目</li>
              <li>行事曆具共同排程會議與作業功能，包含共用行事曆、群組、全域通訊清單、外部連絡人、工作、會議室和委派功能</li>
              <li>信箱皆具 Exchange Online Protection 使用頂級反惡意程式碼和反垃圾郵件防護機制</li>
              <li>舊郵件自動就地封存，收件匣常保整齊</li>
            </ul>
          </div>
          <div class="item">
            <h4>Exchange Online（方案2)</h4>
            <h3>含 Exchange Online（方案 1) 的所有功能</h3>
            <div class="discount">
              <p>
                每月最低不到
                <span>NT$０００</span>
              </p>
            </div>
            <ul>
              <li>不包含任何 Office 應用程式</li>
              <li>不包含 Exchange、OneDrive、SharePoint、Teams 等服務</li>
              <li>無限制信件儲存空間 (主要信箱 100 GB 的儲存空間，外加舊郵件封存的無限制儲存空間)</li>
              <li>代管的整合通訊服務提供自動答錄服務、電話撥入式使用者介面，以及公司自動語音應答功能</li>
              <li>根據個人識別資訊 (PII) 和支付卡產業 (PCI) 等法規標準，並透過深度內容分析協助識別、監控和保護敏感性資料，使用內建資料外洩防護 (DLP) 原則控制敏感性的商務資料</li>
            </ul>
          </div>
          <div class="item">
            <h4>Microsoft 365 商務版基本版</h4>
            <h3>適合需 Microsoft Teams 和雲端儲存空間的企業</h3>
            <div class="discount">
              <p>
                每月最低不到
                <span>NT$０００</span>
              </p>
            </div>
            <ul>
              <li>不包含桌面版 Office 應用程式。</li>
              <li>具網頁版 Office 應用程式：Outlook、Word、Excel、PowerPoint、OneNote (外加僅提供 PC 版的 Access 和 Publisher)。</li>
              <li>50 GB 的信箱儲存空間</li>
              <li>1 TB OneDrive雲端儲存與共用空間</li>
              <li>高畫質視訊會議，最多可250個使用者使用者參與</li>
              <li>使用 Microsoft Teams 建立團隊合作中心讓小組彼此聯繫</li>
              <li>Microsoft 24x7 電話和 Web 支援，可隨時取得協助。</li>
            </ul>
          </div>
          <div class="item">
            <h4>Microsoft 365 商務標準版</h4>
            <h3>適合需跨裝置 Office 應用程式的企業</h3>
            <div class="discount">
              <p>
                每月最低不到
                <span>NT$０００</span>
              </p>
            </div>
            <ul>
              <li>每個使用者使用一個授權，可在五部行動裝置、五部平板電腦和五部 PC 或 Mac 上完整安裝 Office 應用程式</li>
              <li>具網頁版 Office 應用程式：Outlook、Word、Excel、PowerPoint、OneNote (外加僅提供 PC 版的 Access 和 Publisher)</li>
              <li>50 GB 的信箱儲存空間</li>
              <li>1 TB OneDrive雲端儲存與共用空間</li>
              <li>使用 Microsoft Teams 建立團隊合作中心讓小組彼此聯繫</li>
              <li>Microsoft 24x7 電話和 Web 支援，可隨時取得協助。</li>
            </ul>
          </div>
          <div class="item">
            <h4>Microsoft 365 商務進階版</h4>
            <h3>適合需要商務標準版的所有功能的企業</h3>
            <div class="discount">
              <p>
                每月最低不到
                <span>NT$０００</span>
              </p>
            </div>
            <ul>
              <li>每個使用者使用一個授權，可在五部行動裝置、五部平板電腦和五部 PC 或 Mac 上完整安裝 Office 應用程式</li>
              <li>電腦版 Office 應用程式：Outlook、Word、Excel、PowerPoint、OneNote (外加僅提供 PC 版的 Access 和 Publisher)</li>
              <li>1 TB OneDrive雲端儲存與共用空間</li>
              <li>應用程式每個月自動更新取得新功能。</li>
              <li>享有 Microsoft 全年無休的電話和 Web 支援，可隨時取得協助。</li>
            </ul>
          </div>
          <div class="item">
            <h4>Microsoft 365 Apps 商務版</h4>
            <h3>適合需跨裝置 Office 應用程式及雲端儲存的企業</h3>
            <div class="discount">
              <p>
                每月最低不到
                <span>NT$０００</span>
              </p>
            </div>
            <ul>
              <li>存取電腦版 Office 應用程式：Outlook、Word、Excel、PowerPoint、OneNote (外加僅提供 PC 版的 Access 和 Publisher)</li>
              <li>每個使用者使用一個授權，可在五部行動裝置、五部平板電腦和五部 PC 或 Mac 上完整安裝 Office 應用程式。</li>
              <li>1 TB 雲端儲存與共用空間</li>
              <li>應用程式每個月自動更新取得新功能。</li>
              <li>Microsoft 24x7 電話和 Web 支援，可隨時取得協助。</li>
            </ul>
          </div>
          <div class="item">
            <h4>企業版 (E3)</h4>
            <h3>Office 應用程式整合式共同作業服務</h3>
            <div class="discount">
              <p>
                每月最低不到
                <span>NT$０００</span>
              </p>
            </div>
            <ul>
              <li>包含完整的電腦版 Office 應用程式</li>
              <li>每個使用者可在 5 部平板電腦與 5 支手機上安裝 Office 行動裝置應用程式和商務服務</li>
              <li>每個使用者享有 100GB 的信箱容量</li>
              <li>1 TB OneDeive 雲端儲存與共用空間 （無限制的 OneDrive 儲存空間適用於至少有 5 個使用者的訂閱）</li>
              <li>降低 IT 成本，並且可自行控制轉移至雲端的進度</li>
              <li>透過 Microsoft Teams 建立團隊合作中心。</li>
              <li>線上廣播會議可讓最多 10,000 個人員透過幾乎任何裝置上的瀏覽器來加入會議。</li>
              <li>五層安全性和監控措施，協助確保客戶資料的安全</li>
            </ul>
          </div>
          <div class="item">
            <h4>企業版 (E5)</h4>
            <h3>具 Microsoft 365 最新功能與主動式網路安全性</h3>
            <div class="discount">
              <p>
                每月最低不到
                <span>NT$０００</span>
              </p>
            </div>
            <ul>
              <li>包含完整的電腦版 Office 應用程式</li>
              <li>透過瀏覽器來建立和編輯 Word、OneNote、PowerPoint 及 Excel 文件。</li>
              <li>每個使用者享有 100GB 的信箱容量</li>
              <li>1 TB OneDeive 雲端儲存與共用空間 （無限制的 OneDrive 儲存空間適用於至少有 5 個使用者的訂閱）</li>
              <li>透過 Microsoft Teams 建立團隊合作中心。</li>
              <li>線上廣播會議可讓最多 10,000 個人員透過幾乎任何裝置上的瀏覽器來加入會議。</li>
              <li>啟用主動式網路安全性，最終協助降低您的成本。</li>
            </ul>
          </div>
        </div>
        <div class="plan-contact-btn">
          <p>上述為官方牌價</p>
          <p>若您的企業有大量部署或任何問題，歡迎聯絡我們或撥打客戶服務專線：886-2-3322-1098，將有專人為您處理。</p>
          <a href="contactmax.html">與我聯絡</a>
        </div>
      </div>
      <div class="plan-banner">
        <div class="plan-banner-container">
          <div class="text">
            <h1>麥斯創新科技</h1>
            <h2>
              <span>No.1</span>
              Office 365 導入專家
            </h2>
            <h3>企業等級資安防護輕鬆GO！</h3>
            <p>
              <i class="fas fa-check"></i>企業導入諮詢
            </p>
            <p>
              <i class="fas fa-check"></i>協助您企業導入最合適的版本
            </p>
            <p>
              <i class="fas fa-check"></i>特別優惠方案
            </p>
            <p>
              <i class="fas fa-check"></i>完整的售後服務
            </p>
          </div>
        </div>
      </div>
      <div class="plan-feature">
        <div class="plan-feature-container">
          <div class="item">
            <h2>Exchange Online 雲端大信箱</h2>
            <div class="text">
              <div class="pic">
                <img src="./../../assets/img/office365-plan-feature-1.jpg" alt />
              </div>
              <div class="text-detail">
                <p>低成本、大容量</p>
                <p>完全不需購買硬體成本，每月每人只要 NT$ 130，即可使用強大的郵件服務。</p>
                <p>安全高、備援強</p>
                <p>內建完善的垃圾郵件防堵以及郵件掃毒機制。</p>
                <p>大容量</p>
                <p>50GB 的企業級信箱，讓您不再擔心信箱爆掉，專心衝刺您的事業！(企業版E3/E5為100GB信箱容量)</p>
                <p>好管理、高效率</p>
                <p>
                  階層式共用通訊錄，方便公司統一管理，避免資料被特定員工把持
                  內建行事曆，可開放共用，專案合作更有效率。
                </p>
                <p>跨裝置</p>
                <p>不分 Windows Phone、iPhone、Android 還是 Blackberry 裝置，都可享有行動存取的便利。</p>
              </div>
            </div>
          </div>
          <div class="item">
            <h2>Microsoft Teams</h2>
            <div class="text">
              <div class="text-detail">
                <p>溝通</p>
                <p>您可以利用群組聊天、線上會議、通話與 Web 會議功能，讓小組掌握一致的資訊。</p>
                <p>會議</p>
                <p>會議排程與 Exchange Online 行事曆結合，並可透過 Teams 直接開啟Skype進行會議。</p>
                <p>提升共同作業成效</p>
                <p>使用 Word、Excel、PowerPoint 和 SharePoint 等內建 Office 365 App 在檔案上共同作業。</p>
                <p>提升共同作業成效</p>
                <p>使用 Word、Excel、PowerPoint 和 SharePoint 等內建 Office 365 App 在檔案上共同作業。</p>
                <p>保護小組安全</p>
                <p>取得端對端安全性、系統管理控制措施和合規性，這些全都是由 Office 365 提供。</p>
              </div>
              <div class="pic">
                <img src="./../../assets/img/office365-plan-feature-2.jpg" alt />
              </div>
            </div>
          </div>
          <div class="item">
            <h2>OneDrive for Business</h2>
            <div class="text">
              <div class="pic">
                <img src="./../../assets/img/office365-plan-feature-3.jpg" alt />
              </div>
              <div class="text-detail">
                <p>低費用</p>
                <p>完全不需購買硬體成本，即可使用強大的雲端空間。</p>
                <p>跨裝置</p>
                <p>不分 Windows Phone、iPhone、Android 還是 Blackberry 裝置，都可享有行動存取的便利。</p>
                <p>大容量</p>
                <p>每位使用者線上 1 TB 雲端儲存空間，隨時線上儲存共用。(企業版E3/E5最大可有無限制雲端存取空間</p>
                <p>好管理、高效率</p>
                <p>
                  階層式共用通訊錄，方便公司統一管理，避免資料被特定員工把持
                  內建行事曆，可開放共用，專案合作更有效率。
                </p>
                <p>備援強</p>
                <p>內建安全機制，符合最新規範，保證 99.9% SLA，24 小時客服技術支援。</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="anti-virus-lazybag">
        <a href>
          <router-link to="contact">Office 365 遠距辦公防疫懶人包 即刻前往</router-link>>>>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
import Slider from "../../components/slider";

export default {
  components: {
    Slider
  },
  data() {
    return {
      sliderData: [
        {
          line1: "Ｍicrosoft 365 商務標準版",
          line2: "購買年約或續約 1 年 贈送半年客製化顧問包",
          line6: "Microsoft 365 商務版基本版",
          line7: "企業上雲的最佳入門",
          line8: "新客戶簽署年約 加碼贈遠距防疫辦公禮包"
        }
      ]
    };
  }
};
</script>
<style lang="scss">
@import "@/assets/css/setting.scss";
.office365-wrapper {
  .slider-wrap {
    position: relative;
    width: 100%;
    height: 440px;

    .slide {
      display: flex;
      width: 100%;
      height: 100%;
      position: relative;
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
    }

    //可能輪播機設定應該都要用一樣的命名
    .slide_one {
      background-image: url("./../../assets/img/office365-slider.jpg");
      background-size: cover;
      width: 100%;
      height: 440px;
      background-repeat: no-repeat;
      background-position: 76% 24%;
    }
    .slide_two {
      background-image: url("./../../assets/img/office365-slider-2.jpg");
      background-size: cover;
      width: 100%;
      height: 440px;
      background-repeat: no-repeat;
      background-position: 76% 24%;
    }

    .slide-content {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      background-color: rgba(0, 0, 0, 0.5);
      color: #fff;
      text-align: left;
      letter-spacing: 2px;

      h3 {
        font-size: 60px;
        font-weight: bold;
        width: 50%;

        margin: 0 auto;
      }

      p {
        font-size: 30px;
        font-weight: bold;
        font-family: "Montserrat", sans-serif;
        width: 50%;
        margin: 0 auto;
      }

      span {
        color: $color_yellow;
        padding: 10px;
        font-family: "Noto Sans TC", sans-serif;
      }
    }
    .fas {
      display: none;
    }
  }
}
</style>
<style lang="scss" scoped>
@import "@/assets/css/setting.scss";

.office365-intro {
  width: 100%;

  .intro-container {
    width: 100%;
    width: 90%;

    margin: 0px auto;
    padding: 15px;
    margin-top: 25px;

    h4 {
      font-size: 30px;
      color: $color_blue;
      box-sizing: border-box;
      text-align: center;
      font-weight: bold;
    }

    .text {
      display: flex;

      .item {
        flex-grow: 1;
        width: 25%;
        margin: 5px;
        display: flex;
        flex-direction: column;
        border: 1px solid $color_gray2;
        padding: 15px;

        align-items: center;

        .fas {
          font-size: 46px;
          color: $color_blue;
          padding: 10px;
        }

        h2 {
          font-size: 20px;
          font-weight: bold;
          color: $color_blue;
          padding: 10px;
        }

        p {
          font-size: 16px;
          box-sizing: border-box;
          text-align: justify;
          font-family: "Montserrat", sans-serif;
          font-weight: 400;
        }
      }
    }
  }
}

.office365-plan {
  width: 100%;

  .plan-container {
    width: 90%;
    margin: 40px auto;
    padding: 40px;
    box-sizing: border-box;
    h2 {
      color: $color_blue;
      font-size: 30px;
      height: 80px;
      text-align: center;
      font-weight: bold;
      position: relative;
      &::after {
        content: "...";
        position: absolute;
        left: 50%;
        bottom: -20px;
      }
    }

    .text {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      padding: 40px;
      margin-top: 50px;
      box-sizing: border-box;
      .item {
        border: 1px solid rgb(235, 235, 235);
        width: 31%;
        position: relative;
        margin: 30px 10px 5px 10px;

        h3 {
          font-size: 18px;
          padding: 45px 10px 10px 20px;
          font-family: "Noto Sans TC", sans-serif;
        }

        h4 {
          position: absolute;
          top: -20px;
          left: 10px;
          padding: 10px;
          background-color: $color_blue;
          color: white;
          font-family: "Noto Sans TC", sans-serif;
        }
        p {
          font-size: 15px;
          padding: 5px 0px 5px 20px;
          box-sizing: border-box;
          font-family: "Montserrat", sans-serif;
          font-weight: 400;
          font-family: "Montserrat", sans-serif;
        }
        .discount {
          margin-top: 6px;

          p {
            span {
              color: $color_orange;
              padding: 10px;
              font-size: 30px;
              font-weight: 700;
              font-family: "Montserrat", sans-serif;
            }
          }
        }

        ul {
          padding: 5px 0px 5px 35px;

          li {
            list-style: disc;
            line-height: 25px;
            color: $color_gray1;
            font-family: "Montserrat", sans-serif;
          }
        }
      }
    }

    .plan-contact-btn {
      width: 80%;
      margin: 0 auto;
      text-align: center;

      p {
        padding-bottom: 17px;
        font-family: "Montserrat", sans-serif;
      }

      a {
        margin-top: 65px;
        padding: 10px 60px;
        background-color: $color_orange;
        text-decoration: none;
        color: white;
        font-family: "Montserrat", sans-serif;
      }
    }
  }

  .plan-banner {
    background-image: url("../../assets/img/office365-bar.jpg");
    background-size: 100%;
    background-repeat: no-repeat;
    background-position-y: 50%;

    .plan-banner-container {
      width: 100%;
      height: 320px;
      position: relative;

      .text {
        position: absolute;
        max-width: 100%;

        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(224, 224, 224, 0.5);

        display: flex;
        justify-content: center;
        flex-direction: column;
        padding: 10px 45px;
        box-sizing: border-box;

        label {
          font-size: 18px;
          color: white;
        }

        h1 {
          font-size: 33px;
          padding-top: 10px;
          color: white;
          font-family: "Noto Sans TC", sans-serif;
        }

        h2 {
          font-size: 30px;
          color: white;
          text-align: center;
          font-family: "Noto Sans TC", sans-serif;
          span {
            color: $color_orange;
            font-family: "Noto Sans TC", sans-serif;
          }
        }

        h3 {
          font-size: 24px;
          color: $color_orange;
          text-align: center;
          font-family: "Noto Sans TC", sans-serif;
        }

        text-align: center;
        p {
          text-align: center;
          font-family: "Montserrat", sans-serif;
        }
      }
    }
  }

  .plan-feature {
    width: 100%;

    .plan-feature-container {
      width: 60%;
      padding: 50px;
      box-sizing: border-box;
      margin: 0 auto;

      .item {
        width: 100%;
        padding: 25px;
        box-sizing: border-box;

        h2 {
          text-align: center;
          font-size: 30px;
          color: $color_blue;
          font-weight: 400;
          padding: 35px;
          box-sizing: border-box;
        }

        .text {
          width: 100%;
          display: flex;

          .pic {
            width: 70%;
            padding: 25px;

            img {
              width: 100%;
            }
          }

          .text-detail {
            padding: 25px;
            text-align: justify;
            background-color: $color_gray2;

            p {
              padding: 5px;
              font-size: 16px;
              font-family: "Montserrat", sans-serif;
            }

            p:nth-child(odd) {
              color: $color_blue;
              font-size: 20px;
              font-weight: 500;
            }
          }
        }
      }
    }
  }

  .anti-virus-lazybag {
    width: 100%;
    padding: 50px;
    box-sizing: border-box;
    background-color: $color_blue;
    display: flex;
    justify-content: center;
    align-items: center;

    a {
      color: $color_yellow;
      text-decoration: none;
      font-size: 30px;
      font-family: "Montserrat", sans-serif;
      transition: 0.8s;
      &:hover {
        color: $color_gray2;
        font-size: 30.5px;
      }
    }
  }
}

@media (max-width: 1280px) {
  .office365-intro {
    .intro-container {
      box-sizing: border-box;
      .text {
        margin-right: 20px;
        .item {
          width: 100%;
        }
      }
      h4 {
        padding: 40px;
      }
    }
  }

  .office365-plan {
    width: 100%;
    .plan-container {
      .text {
        width: 90%;
        margin: 0 auto;
        .item {
          width: 90%;
          padding: 40px;
        }
      }
    }

    .plan-feature {
      .plan-feature-container {
        width: 90%;
      }
    }
  }
}

@media (max-width: 768px) {
  .slider-wrap {
    .slide-content {
      h3 {
        font-size: 50px;
      }
      p {
        font-size: 20px;
        padding: 30px;
      }
    }
  }
  .office365-intro {
    .intro-container {
      .text {
        flex-direction: column;
        flex-wrap: wrap;
        .item {
          width: 100%;

          display: flex;
          flex-direction: column;
          align-items: center;
        }
      }
    }
  }
  .office365-plan {
    width: 100%;
    .plan-container {
      .text {
        .item {
          width: 90%;
          padding: 15px;

          h4 {
            left: 30px;
          }
        }
      }
    }

    .plan-feature {
      .plan-feature-container {
        .item {
          .text {
            flex-direction: column;
            .pic {
              width: 100%;
              padding: 25px;
            }
          }

          &:nth-child(2) {
            .text {
              flex-direction: column-reverse;
            }
          }
        }
      }
    }
  }
}
@media (max-width: 767px) {
  .office365-intro {
    .intro-container {
      h4 {
        font-size: 35px;
      }

      .text {
        width: 100%;
        flex-direction: column;
        .item {
          border: 1px solid $color_gray2;
          width: 100%;

          flex-direction: column;

          .fas {
            font-size: 76px;
          }

          h2 {
            font-size: 30px;
          }

          p {
            font-size: 22px;
          }
        }
      }
    }
  }
}
@media (max-width: 414px) {
  .slider-wrap {
    .slide-content {
      width: 100%;
      h3 {
        font-size: 23px;

        width: 90%;
        text-align: center;
      }
      p {
        font-size: 15px;
        padding: 0px;
        width: 100%;
        text-align: center;
        box-sizing: border-box;
      }
    }
  }

  .office365-intro {
    .intro-container {
      box-sizing: border-box;
      width: 100%;
      .text {
        width: 100%;
        .item {
          width: 90%;
          margin: 0 auto;

          h2 {
            font-size: 20px;
          }

          p {
            font-size: 18px;
          }
        }
      }
      h4 {
        font-size: 26px;
      }
    }
  }

  .office365-plan {
    width: 100%;

    .plan-container {
      width: 100%;
      padding: 0;
      .text {
        width: 100%;

        .item {
          width: 100%;
          padding: 15px;

          h4 {
            left: 10px;
            font-size: 16px;
          }

          .discount {
            p {
              span {
                font-size: 20px;
              }
            }
          }
        }
      }
    }

    .plan-banner {
      .plan-banner-container {
        .text {
          background-color: rgba(224, 224, 224, 0.5);

          display: flex;
          justify-content: center;
          flex-direction: column;
          padding: 0px;
          p {
            display: none;
          }
        }
      }
    }

    .plan-feature {
      width: 100%;
      .plan-feature-container {
        width: 90%;
        padding: 0;
        .item {
          width: 100%;

          padding: 0;
          margin: 30px 0 30px 0;
          h2 {
            width: 100%;
            font-size: 25px;

            padding: 10px 0 10px 0;
          }
          .text {
            flex-direction: column;
            .pic {
              width: 100%;
              padding: 0;
            }
          }
        }
      }
    }
  }
}
</style>