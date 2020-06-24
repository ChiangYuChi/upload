<template>
  <div class="cloud-wrapper">
    <div class="banner">
      <Banner v-for="item in bannerData" v-bind="item" :key="item"></Banner>
    </div>
    <div class="office365-advice-package">
      <table>
        <thead>
          <th>Azure技術服務包 服務內容</th>
        </thead>
        <tbody>
          <tr>
            <td>架構討論/評估建議/月付計算/位置/CDN需求評估/備份規劃/地面連結</td>
          </tr>
          <tr>
            <td>EMAIL問題協助/遠端協助/AZURE知識庫/客戶入口網站</td>
          </tr>
          <tr>
            <td>帳務管理/報表 訂閱通知/RSS訂閱</td>
          </tr>
          <tr>
            <td>Azure 應用課程訓練/線上課程訓練折扣</td>
          </tr>
          <tr>
            <td>Azure IoT / OMS with POWER BI 課程折扣</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="office365-advice-level">
      <div class="advice-box">
        <ul>
          <h4>銀級技術支援服務</h4>
          <li>範圍及回應時間：早上九點到晚上六點，週一至週五</li>
          <li>電話與電子郵件接受諮詢，四小時內回覆</li>
          <li>現場服務，兩個工作天內到點接受諮詢</li>
          <li>400 點的計點服務（範例點數）</li>
          <li>半年一次提供書面服務報告與建議</li>
          <li>主動提供最新的系統升級與安全性資訊</li>
          <li>上述費用及點數計算方式，依實際每位客戶簽定專屬合約內容而定，以專屬合約內所定義的每點點數費用及抵扣方式說明為實際狀況。</li>
        </ul>
      </div>
      <div class="advice-box">
        <ul>
          <h4>金級技術支援服務</h4>
          <li>範圍及回應時間：早上九點到晚上六點，週一至週五</li>
          <li>電話與電子郵件接受諮詢，二小時內回覆</li>
          <li>現場服務，一個工作天內到點接受諮詢/li></li>
          <li>1000 點的計點服務（範例點數</li>
          <li>專屬的技術客戶經理提供主動式支援與服務計畫</li>
          <li>每月提供書面服務報告與建議</li>
          <li>上述費用及點數計算方式，依實際每位客戶簽定專屬合約內容而定，以專屬合約內所定義的每點點數費用及抵扣方式說明為實際狀況。</li>
          <li>每月一次現場檢討會議</li>
        </ul>
      </div>
      <div class="advice-box">
        <ul>
          <h4>白金級技術支援服務</h4>
          <li>範圍及回應時間：早上九點到晚上六點，週一至週五</li>
          <li>電話與電子郵件接受諮詢，二小時內回覆</li>
          <li>現場服務，上班時間內四小時內到點接受諮詢</li>
          <li>2000 點的計點服務（範例點數</li>
          <li>專屬的技術客戶經理提供主動式支援與服務計畫</li>
          <li>每月提供書面服務報告與建議</li>
          <li>上述費用及點數計算方式，依實際每位客戶簽定專屬合約內容而定，以專屬合約內所定義的每點點數費用及抵扣方式說明為實際狀況。</li>
          <li>每月一次現場檢討會議</li>
        </ul>
      </div>
    </div>
    <div class="office-maxlabs-request">
      <img src="../../assets/img/gcp-bar.jpg" alt />
      <div class="txt">
        <h3>需要 Office 365 技術顧問服務 &nbsp;就找麥斯創新</h3>
        <p>我們致力給您最好的服務體驗，無論是雲端搬遷、帳務服務、技術支援等，只要是 Office 365 相關需求，都歡迎立即與我們聯繫!</p>
        <router-link to="contact" class="router-link">詢問我們</router-link>
      </div>
    </div>
    <div class="feature">
      <h4>完整的企業用途方案 , 有以下的必經流程 :</h4>
      <div class="item">
        <h4>—售前服務—</h4>
        <p>討論 需求 , 以及如何 配合既有工作環境流程 , 取得較大綜效</p>
        <p>現場或者電話勘查 , 確認環境條件 , 是否可以發揮方案預計效益</p>
        <p>報價 , 依據預算與目標 , 以及 現場環境與流程 , 調整報價組態</p>
      </div>
      <div class="item">
        <h4>—現場服務—</h4>
        <p>建置 , 事前的備料 , 前置作業 , 現場 安裝 / 設定 / 調整 / 測試 / 驗證</p>
        <p>教育訓練 , 協助管理者與使用者取得基本概念 與 強化現場需注意事項</p>
      </div>
      <div class="item">
        <h4>—售後服務—</h4>
        <p>售後的技術支援 , 如郵件/遠端連線/到場技術支援 ,網通/硬體備品服務</p>
        <p>協助判斷 主機或者組件故障因素 , 協助災難復原程序</p>
        <p>協同各家原廠技術專家，一起快速解決問題，擬定風險計劃</p>
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
          line1: " Office 365 技術顧問服務"
        }
      ]
    };
  }
};
</script>
<style lang="scss">
@import "@/assets/css/setting.scss";
.banner {
  background-image: url("./../../assets/img/cloud-advice-bg.jpg");
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
      font-family: "Montserrat", sans-serif;
      h1 {
        font-size: 40px;
        width: 50%;
        box-sizing: border-box;
        color: white;
        margin: 5px auto;
        text-align: center;
        font-weight: 400;
        border-bottom: 1px solid white;
        padding-bottom: 20px;
        box-sizing: border-box;
        position: relative;
        font-family: "Noto Sans TC", sans-serif;
      }
    }
  }
}
</style>

<style lang="scss" scoped>
@import "@/assets/css/setting.scss";

.office365-advice-package {
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
  table {
    margin-bottom: 20px;
    border-collapse: collapse;
    border: none;
    border-radius: 3px;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    background: #336ca6;
    margin: 0 auto;

    th,
    td {
      box-shadow: inset 0 -1px rgba(0, 0, 0, 0.25),
        inset 0 1px rgba(0, 0, 0, 0.25);
      font-family: "Montserrat", sans-serif;
    }

    th {
      font-weight: normal;
      -webkit-font-smoothing: antialiased;
      padding: 1em;
      color: rgba(0, 0, 0, 0.45);
      text-shadow: 0 0 1px rgba(0, 0, 0, 0.1);
      font-size: 1.5em;
    }

    td {
      color: #f7f7f7;
      padding: 0.7em 1em 0.7em 1.15em;
      text-shadow: 0 0 1px rgba(255, 255, 255, 0.1);
      font-size: 1.4em;
    }

    tr {
      &:hover {
        background: rgba(0, 0, 0, 0.19);
      }
    }
  }
}

.office365-advice-level {
  width: 80%;

  margin: 0 auto;
  font-family: "Montserrat", sans-serif;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  .advice-box {
    width: 30%;
    border: 3px solid rgb(249, 249, 249);
    transition: all 1s;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-bottom: 40px;

    ul {
      width: 80%;
      padding: 40px;
      h4 {
        font-family: "Noto Sans TC", sans-serif;
      }
      li {
        list-style: disc;
        line-height: 30px;
        font-family: "Montserrat", sans-serif;
      }
    }
    &:hover {
      border: 3px solid $color_skyblue;
    }
  }
}

.office-maxlabs-request {
  width: 100%;
  height: 350px;
  position: relative;
  font-family: "Montserrat", sans-serif;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    vertical-align: middle;
  }

  .txt {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    padding: 20px;
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    flex-direction: column;
    transition: opacity 0.5s;

    h3 {
      font-size: 40px;
      font-weight: 900;
      text-transform: uppercase;
      color: white;
      text-align: center;
      font-family: "Noto Sans TC", sans-serif;
    }

    p {
      color: white;
      text-align: center;
      font-family: "Montserrat", sans-serif;
    }

    .router-link {
      font-size: 25px;
      padding: 15px 25px;
      box-sizing: border-box;
      text-decoration: none;
      color: white;
      width: 200px;
      margin: 20px auto;
      border: 1px solid white;
      text-align: center;
      border-radius: 4px;
      font-family: "Montserrat", sans-serif;
      &:hover {
        font-size: 26px;
        color: $color_yellow;
      }
    }
  }
}

.feature {
  width: 90%;
  padding-top: 50px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;

  h4 {
    width: 100%;
    text-align: center;
    font-family: "Noto Sans TC", sans-serif;
  }
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
@media (max-width: 1280px) {
}

@media (max-width: 1024px) {
  .gcp-banner {
    .banner-container {
      .text {
        h1 {
          .diamond {
            top: 50%;
            left: 38%;
          }
        }
      }
    }
  }
  .gcp-intro {
    .intro-container {
      width: 100%;
      .text {
        .item {
          .fas {
            width: 150px;
            height: 150px;
          }
        }
      }
    }
  }
}
@media (max-width: 768px) {
  .banner-container {
    .text {
      h1 {
        .diamond {
          display: none;
        }
      }
    }
  }

  .gcp-intro {
    .intro-container {
      .text {
        .item {
          width: 50%;
          border: 1px solid $color_gray1;
          padding: 10px;
        }
      }
    }
  }
}
@media (max-width: 414px) {
  .gcp-intro {
    .intro-container {
      .text {
        .item {
          width: 50%;
          border: 1px solid $color_gray1;
          padding: 10px;
        }
      }
    }
  }

  .gcp-maxlabs-request {
    .txt {
      p {
        display: none;
      }
    }
  }
}
</style>