<template>
  <div class="ssl-wrapper">
    <div class="ssl-banner">
      <Banner v-for="item in bannerData" v-bind="item" :key="item"></Banner>
    </div>
    <div class="ssl-intro">
      <div class="intro-container">
        <div class="text">
          <p>SSL (Secure Sockets Layer) 憑證服務是目前最常用之網路通訊安全標準，提供伺服器身分鑑別及資料傳輸加密，以保護網路使用者所傳輸的資料在傳輸過程中不被駭客截取或竄改，強化網路交易安全。是網路安全必要的一環，對於電子商務公司交易接受信用卡、金融卡付款，或是有傳輸個人資料如：姓名、電話、地址等敏感資訊的網站，可提高客戶使用網站服務的信心，同時也大大增加網站資訊的安全性。</p>
          <p>2014年Google宣告網站安裝SSL數位憑證 (https) 將有助於提高搜尋SEO排名結果，而http或者non-SSL環境代表網站的環境是透明的，任何人都可以在網路的任意節點讀取、看到使用者瀏覽、傳輸的資料，甚至可以竄改網站的網頁，為了更容易被網友搜尋並且更安心的使用網站服務，安裝SSL數位憑證已成為經營網站不可或缺的必要條件。</p>
        </div>
        <div class="pic">
          <img src="./../../assets/img/ssl-certificate-4.png" alt />
        </div>
        <div class="version">
          <h3>SSL憑證免費與付費版的差異</h3>
          <div class="table-container">
            <table>
              <tr>
                <th>項目</th>
                <th>免費版 SSL</th>
                <th>付費版 SSL</th>
              </tr>
              <tr>
                <td>品牌效果</td>
                <td>無信任度</td>
                <td>提高信任度</td>
              </tr>
              <tr>
                <td>憑證效期</td>
                <td>
                  3個月需自動續約
                  且有失敗風險
                </td>
                <td>保障續約資格</td>
              </tr>
              <tr>
                <td>適用範圍</td>
                <td>僅支援Linux系統</td>
                <td>虛擬主機均支援</td>
              </tr>
              <tr>
                <td>認證標章</td>
                <td>無法透過網頁識別</td>
                <td>可藉由網頁識別</td>
              </tr>
              <tr>
                <td>驗證差異</td>
                <td>無組織驗證SSL</td>
                <td>提供組織驗證SSL</td>
              </tr>
              <tr>
                <td>多網域</td>
                <td>不適用多網域SSL</td>
                <td>支援多網域SSL</td>
              </tr>
              <tr>
                <td>賠償機制</td>
                <td>無</td>
                <td>有</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div class="ssl-sales">
      <div class="ssl-container">
        <div class="text">
          <h3>SSL 憑證特賣會</h3>
          <div class="item">
            <div class="pic">
              <img src="./../../assets/img/ssl-certificate-1.png" alt />
            </div>
            <div class="ssl-name">
              <h4>SSL 憑證 （單一網域）</h4>
              <p>SSL 伺服器數位憑證 : 對應一個網站名稱</p>
              <div class="pricing">
                <div class="price">
                  <span>一年</span>$8,400(未稅)
                </div>
                <div class="price">
                  <span>二年</span>$15,600(未稅)
                </div>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="pic">
              <img src="./../../assets/img/ssl-certificate-2.png" alt />
            </div>
            <div class="ssl-name">
              <h4>SAN SSL</h4>
              <p>SAN SSL伺服器數位憑證 : 包含一個網站名稱與二個網域別名，擴充費用另計</p>
              <div class="pricing">
                <div class="price">
                  <span>一年</span>$16,400(未稅)
                </div>
                <div class="price">
                  <span>二年</span>$30,400(未稅)
                </div>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="pic">
              <img src="./../../assets/img/ssl-certificate-3.png" alt />
            </div>
            <div class="ssl-name">
              <h4>Wildcard SSL 憑證（整合多個子網域）</h4>
              <p>專屬網域 SSL伺服器數位憑證 : 萬用字元憑證(Wildcard)</p>
              <div class="pricing">
                <div class="price">
                  <span>一年</span>$32,400(未稅)
                </div>
                <div class="price">
                  <span>二年</span>$60,800(未稅)
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="ssl-maxlabs-request">
      <img src="../../assets/img/gcp-bar.jpg" alt />
      <div class="txt">
        <h3>需要購買 SSL 憑証 &nbsp;就找麥斯創新</h3>
        <router-link to="contact" class="router-link">來電另有優惠</router-link>
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
          line1: "SSL 第三方公開憑證",
          line2: "為您的網站通信提供加密 確保您客戶資料受到保護！"
        }
      ]
    };
  }
};
</script>
<style lang="scss">
@import "@/assets/css/setting.scss";

.ssl-banner {
  background-image: url("./../../assets/img/ssl-bg.jpg");
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

@media (max-width: 414px) {
  .ssl-banner {
    .banner-container {
      .text {
        width: 95%;
        text-align: center;
        h1 {
          font-size: 30px;
        }
        h3 {
          font-size: 20px;
          padding: 0 55px 0 55px;
          box-sizing: border-box;
        }
      }
    }
  }
}

@media (max-width: 375px) {
  .ssl-banner {
    .banner-container {
      .text {
        width: 100%;

        h3 {
          padding: 0 48px 0 48px;
        }
      }
    }
  }
}
</style>


<style lang="scss" scoped>
@import "@/assets/css/setting.scss";

.ssl-wrapper {
  .ssl-intro {
    width: 100%;
    padding: 30px;
    box-sizing: border-box;

    font-family: "Montserrat", sans-serif;

    .intro-container {
      width: 80%;
      margin: 0 auto;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      .text {
        width: 60%;
        color: $color_gray1;
        font-size: 20px;
        font-weight: 300;
        letter-spacing: 2px;
        text-align: justify;

        box-sizing: border-box;
        p {
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
        width: 80%;
        vertical-align: middle;
        padding-left: 40px;

        box-sizing: border-box;
      }
      .version {
        width: 100%;
        margin-top: 50px;

        h3 {
          text-align: center;
          font-weight: bold;
          font-size: 40px;
        }
        .table-container {
          overflow-x: auto;
          table {
            width: 100%;
            margin: 30px 0;

            th {
              border-top: 2px solid $color_skyblue;
              border-bottom: 2px solid $color_skyblue;
              border-right: 2px solid $color_lightblue2;
              padding: 15px;
              color: white;
              background-color: $color_skyblue;
              font-family: "Montserrat", sans-serif;
              &:last-child {
                border-right: none;
              }
            }

            td {
              border: 2px solid $color_lightblue2;
              font-size: 14px;
              padding: 10px;
              font-weight: 300;
              font-family: "Montserrat", sans-serif;
              &:last-child {
                border-right: none;
              }
              &:first-child {
                border-left: none;
                font-weight: 900;
              }
            }
          }
        }
      }
    }
  }
  .ssl-sales {
    background-color: $color_gray2;
    padding: 30px;
    box-sizing: border-box;
    .ssl-container {
      width: 80%;
      margin: 0 auto;
      .text {
        width: 100%;
        h3 {
          background-color: $color_lightblue2;
          color: $color_skyblue;
          padding: 15px;
        }
        .item {
          width: 100%;
          display: flex;
          margin: 10px 0 10px 0;
          border-top: 2px dotted black;
          border-bottom: 2px dotted black;

          .pic {
            width: 15%;
            img {
              width: 100%;
              vertical-align: middle;
            }
          }
          .ssl-name {
            width: 80%;
            margin-left: 40px;
            padding-top: 10px;
            h4 {
              font-size: 30px;
              font-family: "Noto Sans TC", sans-serif;
              font-weight: 300;
              color: $color_darkblue;
            }
            p {
              font-size: 15px;
              color: gray;
              font-family: "Montserrat", sans-serif;
            }
            .pricing {
              display: flex;
              margin-bottom: 15px;
              .price {
                font-size: 18px;
                color: $color_orange;
                margin-right: 10px;
                font-family: "Montserrat", sans-serif;
                span {
                  background-color: $color_orange;
                  padding: 5px;
                  color: white;
                  border-radius: 3px;
                  font-size: 12px;
                  margin-right: 10px;
                  font-family: "Montserrat", sans-serif;
                }
              }
            }
          }
        }
      }
    }
  }
  .ssl-maxlabs-request {
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
      box-sizing: border-box;
      background-color: rgba(0, 0, 0, 0.6);
      display: flex;
      justify-content: center;
      flex-direction: column;
      transition: opacity 0.5s;
      box-sizing: border-box;

      h3 {
        font-size: 40px;
        font-weight: 900;
        text-transform: uppercase;
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
        width: 250px;
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
}

@media (max-width: 768px) {
  .ssl-wrapper {
    .ssl-intro {
      .intro-container {
        .text {
          width: 100%;
        }
        .pic {
          display: none;
        }
      }
    }
    .ssl-sales {
      .ssl-container {
        .text {
          .item {
            box-sizing: border-box;

            &:nth-child(3),
            &:nth-child(4) {
              border-top: none;
            }
          }
        }
      }
    }
  }
}

@media (max-width: 767px) {
  .ssl-wrapper {
    .ssl-intro {
      .intro-container {
        .text {
          display: none;
        }
      }
    }
  }
}

@media (max-width: 414px) {
  .ssl-wrapper {
    .ssl-intro {
      padding: 10px;
      .intro-container {
        .version {
          h3 {
            font-size: 37px;
            padding: 0 30px 0 30px;
          }
        }
      }
    }
    .ssl-sales {
      .ssl-container {
        width: 90%;

        .text {
          h3 {
            padding: 0;
          }
          .item {
            .pic {
              display: none;
            }
            .ssl-name {
              width: 100%;
              margin: 0;

              h4 {
                font-size: 20px;
              }
              p {
                font-size: 13px;
              }
              .pricing {
                .price {
                  font-size: 0.8em;
                  margin-bottom: 10px;
                }
              }
            }
          }
        }
      }
    }
    .ssl-maxlabs-request {
      .txt {
        h3 {
          padding: 0px 20px 0px 20px;
          box-sizing: border-box;
        }
      }
    }
  }
}

@media (max-width: 375px) {
  .ssl-wrapper {
    .ssl-intro {
      .intro-container {
        .version {
          h3 {
            font-size: 30px;
          }
        }
      }
    }
    .ssl-maxlabs-request {
      .txt {
        h3 {
          font-size: 30px;
        }
      }
    }
  }
}
</style>