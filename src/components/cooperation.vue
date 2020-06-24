<template>
  <div class="cooperate-wrapper">
    <div class="cooperate-banner">
      <div class="banner-container">
        <div class="text">
          <h2>商業合作</h2>
          <p>麥斯創新期望成為客戶最可靠的夥伴，提供專業技術服務，解決系統大小事。</p>
          <p>Maximum value for all, Maxlabs for you</p>
        </div>
      </div>
    </div>
    <div class="cooperate-intro">
      <div class="intro-container">
        <div class="text">
          <h4>合作提案</h4>

          <p>
            資訊軟體產業的發展與推廣需要大家一起共同合作、分工努力。 如果您對於麥斯創新科技的技術與專業知識有信心，願意在業務上或技術上進行交流合作，成為事業的夥伴，歡迎與我們聯繫。
            期望能在技術領域上能夠參與並提供協助。
          </p>

          <hr />

          <b>徵求策略合作夥伴</b>

          <ul>
            <li>業務夥伴 - 業務銷售、拓展商機，推廣解決方案</li>
            <li>技術夥伴 - 進行產品整合，可合作建立加值服務應用</li>
          </ul>
          <span>請將您的建議 e-mail 至 MaxLabsSalesDept[@]maxlabs[。]com[。]tw， 或是透過表單聯繫我們</span>
          <router-link to="contact" class="router-link">聯絡我們</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/css/setting.scss";
.cooperate-banner {
  background-image: url("../assets/img/cooperation.jpg");
  background-size: cover;
  background-position-y: 35%;
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

.cooperate-intro {
  width: 100%;
  position: relative;
  height: auto;
  display: flex;

  .intro-container {
    width: 100%;
    background-image: url("../assets/img/about-us-bg-2.png");
    background-position-y: 100%;
    background-position-x: 100%;
    background-repeat: no-repeat;
    background-size: 50%;

    display: flex;

    justify-content: space-between;
    align-items: center;

    .text {
      width: 100%;
      line-height: 35.2px;
      margin: 0px auto;
      padding: 65px;
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
  .router-link {
    position: absolute;
    bottom: 0%;
    left: 50%;
    text-decoration: none;
    padding: 10px 15px;
    background-color: $color_blue;

    border-radius: 3px;
    font-size: 16px;
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    margin: 20px 0 10px 0;
    color: white;
    cursor: pointer;
    &:hover {
      font-size: 17px;
      background-image: linear-gradient(45deg, $color_orange, $color_yellow);
    }
  }
}
</style>