<template>
  <div class="amazon-wrapper">
    <div class="amazon-banner">
      <div class="banner-container">
        <div class="pic">
          <img src="./../../assets/img/aws-partner.png" alt />
        </div>
        <div class="text">
          <h2>“買 AWS 就找麥斯創新“</h2>
          <p>
            麥斯創新擁有多年雲端經驗，提供您最專業的 AWS 服務諮詢，彈性計費、高擴展、高安全、符合各產業需求及應用情境。
            <br />無論是搬遷、代管、AWS雲端應用，都交給麥斯創新，您只需專注企業核心
          </p>
        </div>
      </div>
    </div>
    <div class="amazon-intro">
      <div class="intro-container">
        <div class="text">
          <div class="pic">
            <img src="./../../assets/img/aws-logo.png" alt />
          </div>
          <p>
            Amazon Web Services (AWS) 是全球最全面和廣泛採納的雲端平台，透過全球資料中心提供超過 175 項功能完整的服務。數百萬個客戶
            (包括成長最快的新創公司、最大型企業以及領先的政府機構) 都使用 AWS 來降低成本、變得更靈活，且更迅速地創新，包括 Spotify、Airbnb、MLB、Pinterest 等等。
          </p>
          <p>
            與任何其他雲端供應商相較之下，AWS
            提供更豐富廣泛的服務，且這些服務亦提供琳瑯滿目的眾多功能，從運算、儲存和資料庫等基礎設施技術，乃至諸如機器學習與人工智慧、資料湖與分析和物聯網等新興技術，皆無一不備。這可協助您更加快速、簡單且更具成本效益地將現有的應用程式推向雲端，盡情打造心目中的理想作業環境。
          </p>
          <p>AWS 在全球 22 個地理區域內規劃 70 個可用區域，而且已宣布計劃在印尼、義大利、南非和西班牙增加 15 個可用區域和 5 個 AWS 區域。</p>
        </div>
      </div>
    </div>
    <div class="amazon-service">
      <h2>AWS 應用服務</h2>
      <div class="tabbox">
        <input checked id="tab1" name="tabs" type="radio" />
        <label class="tp" for="tab1">Amazon E2</label>

        <input id="tab2" name="tabs" type="radio" />
        <label class="tp" for="tab2">Amazon S3</label>

        <input id="tab3" name="tabs" type="radio" />
        <label class="tp" for="tab3">Amazon CloudFront CDN</label>
        <br />
        <div class="content" style="background-color: white;">
          <div id="content1">
            <p>
              亞馬遜彈性雲端運算英（Amazon Elastic Compute Cloud，Amazon EC2）是可以依照您的需求透過 Web
              服務介面在幾分鐘之內開啟或是關閉運算服務達到高可擴展性。您也可以按照你的運算用途來選擇不同規格的 EC2 執行個體種類 (Instance
              type)，每種執行個體的種類都包含一或是多種規格大小以滿足不同的需求。EC2 可依照您的使用需求按需付費 (Pay-as-you-go)，或者，您也可以購買預留執行個體
              (Reserved Instance)，透過預付的方式，來達到成本優化的目的。
            </p>
          </div>
          <div id="content2">
            <p>
              Amazon S3 (Amazon Simple Storage Service)，為 AWS 雲端平台的物件式儲存服務。它提供了99.999999999% 的耐久度
              (Durability)，若您想要進一步提升資料耐久度或使想要將檔案放置到靠近您客戶的區域 (Region) 以降低延遲可以更進一步開起跨區域複寫 (Cross Region
              Replication, CRR) 設定，使不同 AWS 區域間的儲存貯體 (Bucket) 自動同步複製物件，跨區域複寫的儲存貯體可由相同 AWS 帳戶或不同帳戶所共同擁有。
              您可以依照資料的存取頻率在 Amazon S3 上選擇相對應的儲存類別或者你也可以設定檔案生命週期使原本儲存在 S3 標準的檔案移轉至 S3 智慧型分層、S3 標準 – IA 和 S3
              單區域 – IA 與 S3 Glacier。
            </p>
          </div>
          <div id="content3">
            <p>
              CDN 全名為 Content Delivery Network，又名內容傳遞網路，它是一種在網路上傳輸的內容快取機制，透過不同全球不同節點佈有 CDN
              服務，能夠有效降低內容傳輸的延遲，確保網站在世界各地讀取維持同等的速度。AWS 裡面的 CDN 服務就是 Amazon CloudFront ，Amazon CloudFront
              提供開發者及企業一個簡單的方式，透過全球節點網路，向最終使用者發佈內容，實現低延遲的高速資料傳輸。
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="amazon-advantage">
      <div class="advantage-container">
        <h2>AWS 六大優勢</h2>
        <h3>全球第一雲端服務領導品牌</h3>
        <div class="items">
          <div class="item">
            <div class="icon">
              <i class="fas fa-wrench"></i>
            </div>
            <h4>功能最多</h4>
            <p>與任何其他雲端供應商相較之下，AWS 提供更豐富廣泛的服務，AWS 提供的運算、儲存、資料庫、分析等服務超過 120 種。且這些服務亦提供琳瑯滿目的眾多功能，其設施覆蓋在世界版圖上建立的最廣最深，從運算、儲存和資料庫等基礎設施技術，乃至諸如機器學習與人工智慧、資料湖與分析和物聯網等新興技術，皆無一不備。這可協助您更加快速、簡單且更具成本效益地將現有的應用程式推向雲端，盡情打造心目中的理想作業環境。</p>
          </div>
          <div class="item">
            <div class="icon">
              <i class="fas fa-chart-line"></i>
            </div>
            <h4>規模經濟優勢</h4>
            <p>AWS 擁有最大且最動態的社群，與全球最高的市場佔有率，內含全球數百萬有效客戶和數萬名合作夥伴。客戶遍佈幾乎每個產業，規模不等，包括新創公司、企業和公共部門組織。因此 Amazon Web Services可以利用規模經濟優勢，將這一特點轉化成更低的按使用量付費的價格，回饋給使用者。</p>
          </div>
          <div class="item">
            <div class="icon">
              <i class="fas fa-heart"></i>
            </div>
            <h4>無須維護成本</h4>
            <p>AWS 在 2014 年透過推出 AWS Lambda 率先打造無伺服器運算空間，讓開發人員無須佈建或管理伺服器即可執行程式碼，雲端運算讓您可以專注於自己的客戶，卸下安裝和維護伺服器的繁重工作。您可透過 AWS 運用最新技術，更快速地進行實驗和創新，實現企業轉型目標。</p>
          </div>
          <div class="item">
            <div class="icon">
              <i class="fas fa-globe-asia"></i>
            </div>
            <h4>最優異的營運經驗</h4>
            <p>AWS 提供深獲信任且無與倫比的經驗、成熟度、可靠度、安全性和效能，讓您安心無虞地使用最重要的應用程式。AWS 已為全球執行各種使用案例的數百萬客戶提供雲端服務長達 13 年以上。與其他雲端供應商相較之下，AWS 具備最優異的營運經驗且規模更大。</p>
          </div>
          <div class="item">
            <div class="icon">
              <i class="fas fa-shield-alt"></i>
            </div>
            <h4>最安全</h4>
            <p>AWS 建構現今最靈活且最安全的雲端運算環境，核心基礎架構可滿足軍隊、全球銀行及其他高度機密組織的安全性需求。由一組深入的雲端安全工具提供支援，這些工具具有 230 項安全、合規性，以及控管各項服務與功能。AWS 支援 90 項安全標準和合規認證，且儲存客戶資料的所有 117 項 AWS 服務均提供加密該資料的能力。</p>
          </div>
          <div class="item">
            <div class="icon">
              <i class="fas fa-hand-holding-usd"></i>
            </div>
            <h4>無前期投資成本</h4>
            <p>與其投資重金構建資料中心和伺服器，不如使用雲端服務，只在使用時為使用的運算資源付費，將大筆開銷轉化成變動費用</p>
          </div>
        </div>
      </div>
    </div>
    <div class="amazon-advice">
      <div class="advice-container"></div>
    </div>
    <div class="aws-maxlabs-request">
      <img src="../../assets/img/gcp-bar.jpg" alt />
      <div class="txt">
        <h3>需要 AWS 服務 &nbsp;就找麥斯創新</h3>
        <p>我們致力給您最好的雲端服務體驗，只要是 AWS 相關需求，都歡迎立即與我們聯繫!</p>

        <router-link to="contact" class="router-link">詢問我們</router-link>
      </div>
    </div>
  </div>
</template>
<script>
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
import ContactForm from "../../components/form.vue";

export default {
  components: {
    Swiper,
    SwiperSlide,
    ContactForm
  },
  directives: {
    swiper: directive
  },
  data() {
    return {
      swiperOption: {
        //swiper3
        autoplay: 3000,
        speed: 1000,
        sildesPerView: 1,
        spaceBetween: 0,
        loop: true,
        autoplay: {
          delay: 3500
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      }
    };
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/setting.scss";

.amazon-banner {
  background-image: url("./../../assets/img/aws-banner.jpg");
  background-size: cover;
  background-position-y: 10%;

  background-position-x: 25%;
  background-repeat: no-repeat;

  .banner-container {
    width: 100%;
    height: 520px;
    position: relative;
    background-color: rgba(23, 116, 178, 0.3);
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 100px 0 0 270px;
    box-sizing: border-box;

    .pic {
      width: 200px;

      img {
        width: 100%;
      }
    }

    .text {
      width: 100%;
      height: 220px;

      padding-left: 50px;
      text-align: justify;
      flex-direction: column;
      box-sizing: border-box;
      h2 {
        font-size: 35px;
        box-sizing: border-box;
        color: white;
        margin: 5px auto;
        text-align: left;
        font-weight: 500;
      }

      p {
        font-size: 15px;
        margin: 3px auto;
        text-align: left;
        color: white;
        font-family: "Montserrat", sans-serif;
        line-height: 30px;
        padding: 10px;
        box-sizing: border-box;
      }
    }
  }
}

.amazon-intro {
  max-width: 100%;
  background-image: url("./../../assets/img/aws-intro-bg.jpg");
  background-attachment: fixed;

  .intro-container {
    width: 100%;
    height: 520px;

    background-color: rgba(255, 255, 255, 0.9);
    padding-top: 50px;

    box-sizing: border-box;

    .text {
      width: 50%;
      margin: 0 auto;

      .pic {
        width: 20%;
        margin: 20px auto;

        img {
          width: 100%;
        }
      }

      p {
        font-family: "Montserrat", sans-serif;
        font-weight: 400;
        padding: 5px;
      }
    }
  }
}

.amazon-service {
  max-width: 100%;
  padding: 60px;

  h2 {
    font-size: 30px;
    color: $color_blue;
    text-align: center;
    position: relative;
  }

  h2:after {
    content: "...";
    position: absolute;
    left: 50%;
    bottom: -30px;
  }

  .tabbox {
    margin: 0 auto;
    min-width: 320px;
    max-width: 1000px;
    text-align: center;
    padding: 60px 0 60px;

    .content > div {
      display: none;
      padding: 20px 25px 5px;
    }

    input {
      display: none;
    }

    .tp {
      display: inline-block;
      padding: 5px 10px;
      font-weight: 600;
      text-align: center;
    }

    .tp:hover {
      color: $color_blue;
      cursor: pointer;
    }

    input:checked + .tp {
      background: #ffa500;
      color: #fff;
    }

    #tab1:checked ~ .content #content1,
    #tab2:checked ~ .content #content2,
    #tab3:checked ~ .content #content3,
    #tab4:checked ~ .content #content4,
    #tab5:checked ~ .content #content5 {
      display: block;
      text-align: left;
    }

    #content1,
    #content2,
    #content3 {
      margin: 0 0 20px;

      height: 150px;
      border: 1px solid #ffa500;
      border-radius: 3px;
    }

    p {
      line-height: 25px;
      text-align: justify;
       font-family: "Montserrat", sans-serif;
    }
  }
}

.amazon-advantage {
  max-width: 100%;
  background-image: url("./../../assets/img/aws-advantage-bg.jpg");
  background-size: cover;
  position: relative;

  .advantage-container {
    width: 100%;

    position: relative;
    background-color: rgba(0, 0, 0, 0.6);
    padding: 50px 0 550px 0;
    box-sizing: border-box;

    h2,
    h3 {
      text-align: center;
      color: white;
      margin: 10px;
    font-family: 'Noto Sans TC', sans-serif;}

    .items {
      width: 80%;

      margin: 0 auto;

      display: flex;

      flex-wrap: wrap;

      justify-content: space-between;
      position: absolute;
      left: 10%;
      margin-top: 30px;

      .item {
        width: 29%;
        padding: 50px 0 50px 0;
        box-sizing: border-box;
        box-shadow: 0 0 3px rgba(14, 190, 255, 0.5);
        background-color: white;
        margin: 5px;
        z-index: 1;

        .icon {
          width: 100px;
          height: 100px;
          border: 2px solid $color_blue;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0 auto;

          .fas {
            font-size: 50px;
            color: $color_blue;
          }
        }

        h4 {
          font-size: 26px;
          font-weight: 400;
          text-align: center;
          padding: 15px;
        }

        p {
          text-align: justify;
          padding: 30px;
           font-family: "Montserrat", sans-serif;
        }
      }
    }
  }
}

.amazon-advice {
  max-width: 100%;

  box-sizing: border-box;
  background-image: url("./../../assets/img/aws-intro-bg.jpg");
  background-position-y: 50%;
  background-size: cover;

  .advice-container {
    max-width: 100%;

    background-color: rgba(255, 255, 255, 0.9);
    padding: 290px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
  }
}

.aws-maxlabs-request {
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
      font-family: 'Noto Sans TC', sans-serif;
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
@media (max-width: 1440px) {
  .amazon-banner {
    .banner-container {
      padding: 50px 0 0 60px;
      box-sizing: border-box;
    }
  }
  .amazon-advice {
    .advice-container {
      padding: 350px;
    }
  }
}

@media (max-width: 1024px) {
  .amazon-advantage {
    .advantage-container {
      padding: 50px;

      .items {
        position: static;
        justify-content: space-evenly;

        .item {
          width: 100%;
          padding: 10px 0 10px 0;

          p {
            text-align: justify;
            padding: 30px;
            line-height: 30px;
          }
        }
      }
    }
  }

  .amazon-advice {
    .advice-container {
      padding: 100px;
    }
  }
}

@media (max-width: 768px) {
  .amazon-banner {
    .banner-container {
      display: flex;
      flex-direction: column;

      justify-content: center;
      align-items: center;
      padding: 50px 0 0 0;
      .pic {
        width: 200px;
      }

      .text {
        padding: 50px;

        h2 {
          font-size: 45px;
          text-align: center;
        }

        p {
          display: none;
        }
      }
    }
  }
  .amazon-intro {
    .intro-container {
      height: auto;

      .text {
        width: 90%;
        padding: 10px;
      }
    }
  }
  .amazon-service {
    .tabbox {
      #content1,
      #content2,
      #content3 {
        height: auto;
      }
    }
  }
}

@media (max-width: 414px) {
  .amazon-banner {
    .banner-container {
      .text {
        padding: 30px;
        h2 {
          font-size: 32px;
        }
      }
    }
  }

  .amazon-advice {
    display: none;
  }

  .amazon-advantage {
    max-width: 100%;

    .advantage-container {
      width: 100%;
      padding: 50px 0 50px 0;
      .items {
        width: 100%;
        .item {
          width: 90%;
        }
      }
    }
  }
}

@media (max-width: 375px) {
  .amazon-banner {
    .banner-container {
      .text {
        padding: 30px;
        h2 {
          font-size: 30px;
        }
      }
    }
  }

  .amazon-service {
    width: 100%;

    padding: 0;
    .tabbox {
      #content1,
      #content2,
      #content3 {
        height: auto;
      }
    }
  }
}
</style>