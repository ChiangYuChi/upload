<template>
  <div class="audiocode-wrapper">
    <div class="audiocode-banner">
      <Banner v-for="item in bannerData" v-bind="item" :key="item"></Banner>
    </div>
    <div class="audiocode-service">
      <div class="brand-pic">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/qzkk779nv5M"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div class="tabbox">
        <input checked id="tab1" name="tabs" type="radio" />
        <label class="tp" for="tab1">品牌簡介</label>
        <input checked id="tab2" name="tabs" type="radio" />
        <label class="tp" for="tab2">產品列表</label>
        <input id="tab3" name="tabs" type="radio" />
        <label class="tp" for="tab3">相關連結</label>
        <br />
        <div class="content" style="background-color: white;">
          <div id="content1">
            <div class="text">
              <h5>AudioCodes 品牌簡介</h5>
              <p>
                AudioCodes於1993年在以色列成立，全球總計超過600個員工，其中40%專注於R&D研發作業，擁有20年以上的電信產業經驗，更是全球VoIP與數據通訊市場的領導者。AudioCodes的產品與解決方案包括有：IP話機、媒體閘道器、整合服務商用閘道器、會談邊界控制器(SBC) 、家用閘道器、多媒體服務器、行動通訊解決方案、加值應用及專業級服務等等。
                AudioCodes在全球已有超過100個國家的建置及佈署經驗，均仰賴其專業核心技術－VoIPerfect™，創造出優異的VoIP網路元素及高清晰(HD)的語音品質，不僅建立良好的客戶評價，更與多家知名電信廠商如：BroadSoft, Microsoft, Avaya, Genesys, Nokia-Siemens, Alcatel-Lucent等等擁有良好的合作夥伴關係，可為企業提供最專業的服務及無與倫比的產品使用經驗。
                AudioCodes不僅有完整的產品線，更與Microsoft長期合作，是微軟認證的整合夥伴，將您的Teams輕鬆整合現有交換機，分機上雲行動化，提昇企業效率與生產力！
              </p>
            </div>
          </div>
          <div id="content2">
            <div class="text">
              <h5>AudioCodes IP Phones</h5>
              <p>AudioCodes 400 系列高清 IP 電話滿足了對高清網路語音不斷增長的需求，最終端用戶電話和終端的解決方案，提高了業務的生產力和舒適的通話體驗</p>
              <div class="items">
                <div class="item" v-for="(item, index) in routerData" :key="index">
                  <div class="pic">
                    <img :src="item.images" alt />
                    <div class="ribbon">熱賣中</div>
                  </div>
                  <div class="text">
                    <div class="title">{{ item.title }}</div>
                    <div class="price">麥斯售價 NT$ {{item.price}}</div>
                    <div class="detail">{{item.detail}}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="content3">
            <div class="text">
              <h5>相關網站連結</h5>
              <ul>
                <li>
                  <a href="https://www.asus.com/">官方網站</a>
                </li>
              </ul>
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
          line1: "AudioCodes",
          line2: "Voice DNA for the digital workplace"
        }
      ],
      routerData: [
        {
          title: "C450HD IP Phone",
          images: require("@/assets/img/audiocode-1.png"),
          price: 2000,
          detail:
            "支持在具有本地客戶端體驗的Microsoft Teams與Skype for Business之間進行單擊切換。"
        },
        {
          title: "C448HD IP Phone",
          images: require("@/assets/img/audiocode-2.png"),
          price: 2487,
          detail:
            "是Microsoft Teams的本機入門級/公用區域電話，旨在支持下一代企業協作技術。"
        },
        {
          title: "450HD IP Phone",
          images: require("@/assets/img/audiocode-3.png"),
          price: 2487,
          detail: "AudioCodes 400HD IP電話系列的成員，擁有5英寸大彩色觸摸屏"
        }
      ]
    };
  }
};
</script>
<style lang="scss">
@import "@/assets/css/setting.scss";

.audiocode-banner {
  background-image: url("./../../assets/img/audiocode-bg.jpg");
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
        font-family: Arial;
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

@media (max-width: 375px) {
  .microsoft-banner {
    .banner-container {
      .text {
        h3 {
          font-size: 23px;
        }
      }
    }
  }
}
</style>
<style lang="scss" scoped >
@import "@/assets/css/setting.scss";
.audiocode-service {
  max-width: 100%;
  padding: 60px;

  .brand-pic {
    width: 80%;
    margin: 0 auto;

    iframe {
      width: 100%;
      vertical-align: middle;
      margin: 0 auto;
    }
  }

  .tabbox {
    margin: 0 auto;
    width: 80%;
    text-align: center;
    padding: 60px 0px;

    font-family: "Noto Sans TC", sans-serif;

    .content > div {
      display: none;
      padding: 20px 0px;
    }

    input {
      display: none;
    }

    .tp {
      display: inline-block;
      padding: 5px 10px;
      font-weight: 600;
      text-align: center;
      font-family: Arial;
      margin: 0;
      font-family: "Montserrat", sans-serif;
      left: 0;
      top: 27px;
    }

    .tp:hover {
      color: $color_blue;
      cursor: pointer;
    }

    input:checked + .tp {
      background-color: $color_darkblue;
      color: #fff;
    }

    #tab1:checked ~ .content #content1,
    #tab2:checked ~ .content #content2,
    #tab3:checked ~ .content #content3 {
      display: block;
      text-align: left;
    }

    #content1,
    #content2,
    #content3 {
      border-top: 2px solid $color_darkblue;
      margin: 0 0 20px;
      .text {
        width: 100%;
        h5 {
          background-color: $color_lightblue2;
          color: $color_skyblue;
          padding: 15px;
          font-family: "Noto Sans TC", sans-serif;
        }
        p {
          font-size: 15px;
          line-height: 25px;
          text-align: justify;
          font-family: "Montserrat", sans-serif;
        }
        .items {
          width: 100%;
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: space-between;

          .item {
            width: 30%;

            margin: 15px;
            border-bottom: 10px solid rgb(0, 181, 153);

            .pic {
              width: 100%;
              transition: transform 0.2s ease;
              overflow: hidden;
              cursor: pointer;
              position: relative;
              img {
                width: 100%;
                height: 200px;
                transform: scale(1, 1);
                transition: all 1s ease-out;

                &:hover {
                  transform: scale(1.2, 1.2);
                }
              }
              .ribbon {
                background-color: rgb(0, 182, 154);
                position: absolute;
                top: 10%;
                right: -15%;
                width: 150px;
                overflow: hidden;
                transform: rotate(45deg);
                text-align: right;
                padding-right: 60px;
                box-sizing: border-box;
                color: white;
                font-family: "Montserrat", sans-serif;
              }
            }

            .text {
              padding: 5px 10px;
              width: 100%;
              position: relative;
              line-height: 30px;

              .title {
                font-size: 18px;
                font-weight: 800;
                font-family: "Montserrat", sans-serif;
              }

              .price {
                position: absolute;
                right: 10px;
                bottom: 96%;
                color: rgb(0, 181, 153);
                font-size: 16px;
                font-family: "Montserrat", sans-serif;
              }

              .title,
              .price {
                font-family: "Montserrat", sans-serif;
              }
            }
          }
        }
      }
    }
  }
}

@media (max-width: 1024px) {
  .audiocode-service {
    .tabbox {
      #content2 {
        .text {
          .items {
            .item {
              width: 45%;
            }
          }
        }
      }
    }
  }
}
@media (max-width: 767px) {
  .audiocode-service {
    .tabbox {
      #content2 {
        .text {
          .items {
            .item {
              width: 50%;
            }
          }
        }
      }
    }
  }
}

@media (max-width: 414px) {
  .audiocode-service {
    .tabbox {
      #content2 {
        .text {
          .items {
            .item {
              width: 90%;
            }
          }
        }
      }
    }
  }
}
</style>