<template>
  <div class="vmware-wrapper">
    <div class="mail2000-banner">
      <Banner v-for="item in bannerData" v-bind="item" :key="item"></Banner>
    </div>
    <div class="mail2000-intro n-1">
      <div class="semi-circle">
        <p>免費信箱給不了的「服務體驗」，盡在 Mail2000！</p>
      </div>
      <div class="intro-container">
        <div class="text">
          <p>Mail2000 是一套完整的電子郵件系統，以客戶需求為基礎，發展出一套符合台灣人使用習慣的介面功能，也以郵件伺服器、企業雲端服務等多種型態，服務各類型機關、組織，遍及全台個式中大型機關組織、大專院校。不只滿足前端使用者的需求，豐富的功能更幫助商務人士提升生產力，許多企業、商家因為穩定的信箱、專業的客服協助下，更能專注投入事業！</p>
        </div>
      </div>
    </div>
    <div class="mail2000-intro n-2">
      <div class="intro-container">
        <div class="item">
          <div class="pic">
            <i class="fas fa-crown"></i>
          </div>
          <div class="text">
            <h4>台灣市佔 No.1</h4>
          </div>
        </div>
        <div class="item">
          <div class="pic">
            <i class="fas fa-trophy"></i>
          </div>
          <div class="text">
            <h4>23 個國家獎項</h4>
          </div>
        </div>
        <div class="item">
          <div class="pic">
            <i class="fas fa-trophy"></i>
          </div>
          <div class="text">
            <h4>25,000+ 家產業客戶</h4>
          </div>
        </div>
        <div class="item">
          <div class="pic">
            <i class="fas fa-user"></i>
          </div>
          <div class="text">
            <h4>1,200,000+ 個用戶帳號</h4>
          </div>
        </div>
      </div>
    </div>
    <div class="mail2000-table">
      <h2>麥斯創新代理 Mail2000 優勢</h2>
      <div class="table-container">
        <table>
          <tr>
            <th>免費信箱</th>
            <th>Mail2000 信箱</th>
          </tr>
          <tr>
            <td>沒有服務！自求多福 商務聯絡用途，遇到任何狀況無人協助處理</td>
            <td>
              <span>有代理商及經銷商技術支援(台灣工程師)</span>有任何信件狀況，有問題找得到人！
            </td>
          </tr>
          <tr>
            <td>無電話客服</td>
            <td>有電話客服，並且國台語皆可溝通</td>
          </tr>
          <tr>
            <td>外國人設計的介面看不習慣 / 用不習慣</td>
            <td>系統核心與介面皆為台灣人研發設計，符合國人使用習慣</td>
          </tr>
          <tr>
            <td>商務使用無法安心、信賴</td>
            <td>不怕漏信掉信、寄不到，皆有專人服務</td>
          </tr>
          <tr>
            <td>功能或介面不好用，只能自己努力適應</td>
            <td>
              代理商/經銷商 續約專人服務/USER指派關懷/續約時程提醒/
              <span>問題諮詢</span>/
              <span>促銷方案佈達</span>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div class="mail2000-maxlabs-request">
      <img src="../../assets/img/gcp-bar.jpg" alt />
      <div class="txt">
        <h3>需要 Mail2000 服務 &nbsp;就找麥斯創新</h3>
        <p>我們致力給您最好的服務體驗，只要是 Mail2000 相關需求，都歡迎立即與我們聯繫!</p>

        <router-link to="contact" class="router-link">詢問我們</router-link>
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
          line1: "Mail2000",
          line2: "安全、穩定、高效能電子郵件系統"
        }
      ]
    };
  }
};
</script>
<style lang="scss">
@import "@/assets/css/setting.scss";

.mail2000-banner {
  background-image: url("./../../assets/img/mail2000-bg.jpg");
  background-size: cover;
  background-position-y: 70%;
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
      width: 100%;

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
        font-family: "Noto Sans TC", sans-serif;
      }

      h3 {
        text-align: center;
        line-height: 60px;
        color: white;
        font-family: "Noto Sans TC", sans-serif;
        width: 100%;
        font-size: 23px;
        text-align: center;
      }
    }
  }
}
</style>
<style lang="scss" scoped>
@import "@/assets/css/setting.scss";
.mail2000-intro {
  width: 100%;

  font-family: "Montserrat", sans-serif;
  .semi-circle {
    border-radius: 0 0 100px 100px;
    width: 100%;
    height: 100px;
    background-color: $color_skyblue;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 30px;
    p {
      font-family: "Montserrat", sans-serif;
    }
  }

  .intro-container {
    width: 100%;
    .text {
      width: 80%;
      margin: 0 auto;
      padding-top: 25px;

      p {
        font-size: 20px;
        text-align: center;
        font-family: "Montserrat", sans-serif;
      }
      h4 {
        text-align: center;
        font-family: "Noto Sans TC", sans-serif;
      }
    }
  }
}

.n-2 {
  width: 100%;
  .intro-container {
    width: 60%;
    display: flex;
    margin: 0 auto;
    .item {
      width: 0;
      flex-grow: 1;
      margin: 0 15px;

      h4 {
        font-family: "Noto Sans TC", sans-serif;
      }

      .fas {
        font-size: 50px;
        color: rgb(137, 115, 88);
        border: 1px solid rgb(137, 115, 88);
        width: 100px;
        height: 100px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 30px auto;
      }
    }
  }
}

.mail2000-table {
  padding: 50px;

  h2 {
    text-align: center;
    padding-bottom: 20px;
    font-family: "Noto Sans TC", sans-serif;
  }

  .table-container {
    overflow-x: auto;

    table {
      margin: 0 auto;
    }

    table,
    th,
    td {
      border: 1px solid black;
      padding: 10px;
      border: 2px solid white;
      font-family: "Montserrat", sans-serif;
    }

    th {
      background-color: rgb(137, 115, 88);
      color: white;
    }
    td {
      background-color: rgb(240, 235, 233);
      color: $color_gray1;
      span {
        color: $color_orange;
      }
    }
  }
}

.mail2000-maxlabs-request {
  width: 100%;
  height: 350px;
  position: relative;

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

@media (max-width: 414px) {
  .mail2000-intro {
    .semi-circle {
      p {
        font-size: 20px;
        width: 80%;
        padding: 5px;
        text-align: center;
      }
    }
    .intro-container {
      .text {
        p {
          text-align: justify;
        }
      }
    }
  }

  .n-2 {
    display: none;
  }
  .mail2000-table {
    h2 {
      font-size: 25px;
      color: $color_darkblue;
    }
    padding: 10px;
  }

  .mail2000-maxlabs-request {
    .txt {
      h3 {
        font-size: 25px;
        padding: 0 60px 0 60px;
        box-sizing: border-box;
      }
    }
  }
}

@media (max-width: 375px) {
  .mail2000-maxlabs-request {
    .txt {
      h3 {
        font-size: 20px;
      }
    }
  }
}
</style>