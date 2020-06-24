<template>
  <div class="about-wrapper">
    <div class="about-banner">
      <div class="banner-container">
        <div class="text">
          <h2>ABOUT US</h2>
          <p>麥斯創新期望成為客戶最可靠的夥伴，提供專業技術服務，解決系統大小事。</p>
          <p>Maximum value for all, Maxlabs for you</p>
        </div>
      </div>
    </div>
    <div class="about-intro">
      <div class="intro-container">
        <div class="text">
          <h4>關於麥斯</h4>
          <p>
            麥斯創新是立足大中華地區的系統整合 (SI)
            服務商，具有原廠最高技術服務認證，如Microsoft Service Ready
            Partner、Deployment Center、CA Taiwan Service Center 等殊榮。
            麥斯創新藉由策略聯盟，掌握原廠產品的專業技術能力，提供客戶兩岸三地的資訊及顧問服務需求。我們致力於使客戶感受最佳經驗移轉，提升系統的管理性、穩定性、系統效能及安全性，以發揮最大投資效益
          </p>
          <h4>企業宗旨</h4>
          <p>
            麥斯創新自我期許成為頂尖的資訊系統整合的廠商公司，成為大中華地區的系統整合
            (SI)
            服務商，而麥斯創新的技術團隊成員皆為IT業界經驗豐富之技術人員，至少都有系統整合業界年資3~20年不等。麥斯創新專業服務領域為資訊基礎架構，包含儲存，網路，虛擬化，資訊安全，伺服器運算系統包括進行各種的客製化開發服務的技術顧問及各種項目的專家所組成。
          </p>
          <ul>
            <li>透過不斷的更新及創新的科技資訊技術，提升企業或個人的競爭力</li>
            <li>
              持續不斷的透過專業的技術加上誠意服務的態度，努力減少人與機器間溝通的落差
              。
            </li>
            <li>企業客戶所信任所託付的工作，盡全力完成每一件專案，必須更負責任的比客戶要求的做更多。</li>
          </ul>
        </div>
      </div>
      <div class="about-maxlabs-request">
        <img src="./../../assets/img/aboutrequest_maxlabs_bg.jpg" alt />
        <div class="txt">
          <h3>
            完善的
            <span>服務流程</span>
          </h3>
          <p>
            我們造就了無數的成功案例。
            <br />選擇麥斯創新，您可以享受最完整、親切又便利的服務。
            <br />無論是雲端搬遷、帳務服務、技術支援等，只要是相關需求，都歡迎立即與我們聯繫!
          </p>
          <a href="mailto:john@maxlabs.com.tw">詢問我們</a>
        </div>
      </div>
      <div class="intro-container">
        <div class="text">
          <h4>營運策略</h4>
          <p>麥斯創新藉由策略聯盟，掌握原廠產品的專業技術能力，也緊密的各原廠持續性的合作，滿足企業客戶在資訊及顧問服務需求。我們致力於使客戶感受最佳經驗移轉，提升系統的管理性、穩定性、系統效能及安全性，提供多元且確實的解決方案，以發揮客戶最大投資效益。</p>
          <h4>麥斯願景</h4>
          <p>麥斯創新朝向技術整合的解決方案供應商，以『技術服務為基本要素，專業服務為態度』為使命，以成為IT解決方案與服務的領導者為願景，創造與企業客戶共生互利的價值。</p>
          <h4>企業識別系統(CIS)</h4>
          <p>麥斯創新的CIS的緣起，是因為第一個字母「Ｍ」，而延伸出來的是二個三角型及一個在視覺上填滿的實體灰色「小三角型」，灰色「小三角型」代表的是麥斯創新的每一位成員所凝聚出來的技術能量及熱誠，而第一個淡藍色「三角型」是代表麥斯創新的「技術」、「服務」、「熱誠」，而另一個較深藍色的「三角型」代表的是資訊領域中的「軟體」、「硬體」、「網路」，經由每一個麥斯創新的員工，以每個人強大的熱情及技術能力將來服務每一位客戶，客戶更加能信任及持續的信任麥斯創新所提供出來的技術整合解決方案</p>
        </div>
      </div>
    </div>
    <div class="about-location">
      <div class="location-container">
        <h1>Our Location</h1>
        <div id="allmap" ref="allmap"></div>
        <div class="location-detail">
          <b>台灣台北 Taipei,Taiwan</b>
          <p>地址：台北市忠孝東路一段 35 號 5 樓</p>
          <p>電話：886-2-2322-1098</p>
          <p>傳真：886-2-2322-1067</p>
        </div>

        <a href="./contactmax.html" class="contact-btn">Contact Us</a>
      </div>
    </div>
  </div>
</template>
<script></script>

<style lang="scss" scoped>
@import "@/assets/css/setting.scss";
.about-banner {
  background-image: url("./../../assets/img/about-us-bg-1.jpg");
  background-size: cover;
  background-position-y: 25%;
  background-repeat: no-repeat;

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

.about-intro {
  width: 100%;
  position: relative;

  display: flex;
  flex-direction: column;

  .intro-container {
    width: 100%;

    display: flex;
    flex-direction: column;
    background-image: url("../../assets/img/about-us-bg-2.png");
    background-position-y: 100%;
    background-position-x: 100%;
    background-repeat: no-repeat;
    background-size: 50%;

    display: flex;

    justify-content: space-between;
    align-items: center;

    .text {
      width: 50%;

      line-height: 35.2px;
      margin: 0px auto;

      margin-top: 15px;
      box-sizing: border-box;

      h4 {
        font-size: 41px;
        padding: 30px;
        box-sizing: border-box;
        text-align: center;
        font-weight: 400;
        color: $color_blue;
      }

      p {
        font-size: 16px;
        padding: 20px;
        box-sizing: border-box;
        text-align: justify;
        font-family: "Montserrat", sans-serif;
        font-weight: 400;
      }

      a {
        text-decoration: none;
      }

      ul {
        box-sizing: border-box;

        padding: 20px 40px;
      }

      li {
        list-style: disc;
        padding: 0px 40px;
      }
    }
  }

  .pic {
    width: 100%;
    height: 200px;
    // background-image: url(../img/request_maxlabs_bg.jpg);
    padding: 50px;
  }
}

.about-maxlabs-request {
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
    }

    p {
      color: white;
      text-align: center;
    }

    span {
      color: $color_yellow;
    }

    a {
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

      &:hover {
        font-size: 26px;
        color: $color_yellow;
      }
    }
  }
}

.about-location {
  width: 100%;
  background-color: #f4f6f9;
  position: relative;
  padding-bottom: 50px;

  .location-container {
    max-width: 1120px;
    margin: 0px auto;

    box-sizing: border-box;
    position: relative;

    h1 {
      font-weight: 400;
      text-align: center;
      padding: 30px;
      color: $color_blue;
      box-sizing: border-box;
      margin-bottom: 20px;
    }

    #map {
      height: 500px;
      max-width: 1100px;
      margin: 0 auto;
    }

    .location-detail {
      color: #747474;
      font-weight: 400;
      text-align: center;
      margin-top: 20px;
      padding-bottom: 50px;
    }
  }

  .contact-btn {
    text-decoration: none;
    width: 126px;
    height: 41px;

    box-sizing: border-box;

    position: absolute;
    bottom: 0;
    left: 45%;
    margin-top: 20px;
    bottom: 0%;
    border: 1px solid black;
    border-radius: 3px;
    color: black;
    font-size: 15px;

    font-weight: 300;
    padding: 12px 15px;
    text-align: center;

    cursor: pointer;

    &:hover {
      color: $color_darkblue;
      font-size: 17px;
    }
  }
}

@media (max-width: 1280px) {
  .about-intro {
    .intro-container {
      .text {
        width: 90%;
      }
    }
  }
}
@media (max-width: 1024px) {
}
@media (max-width: 768px) {
  .about-banner {
    .banner-container {
      .text {
        p {
          width: 100%;
        }
      }
    }
  }
}
@media (max-width: 414px) {
  .about-banner {
    .banner-container {
      .text {
        p {
          font-size: 16px;
          width: 100%;

          padding: 0px 35px 0px 35px;
        }
      }
    }
  }

  .about-location {
    .contact-btn {
      left: 35%;
    }
  }
}
</style>
