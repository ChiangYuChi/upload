<template>
  <div class="latest-news-wrapper">
    <div class="sepatator">
      <div class="box"></div>
      <h4>麥斯影片</h4>
      <div class="box"></div>
    </div>
    <section class="contain">
      <p>提供您麥斯代理產品，原廠影音訊息。</p>
      <div class="brand">
        <div class="brand-name-container">
          <ul>
            <li>ADOBE</li>
            <li>Microsoft</li>
            <li>VMware</li>
            <li>Mail2000</li>
            <li>AudioCodes</li>
            <li>ASUS</li>
            <li>HPE</li>
            <li>Lenovo</li>
          </ul>
        </div>
      </div>
      <div class="brand-news">
        <router-view></router-view>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/css/setting.scss";

.latest-news-wrapper {
  width: 100%;
  margin-top: 60px;

  .sepatator {
    width: 90%;
    margin: 0 auto;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    h4 {
      font-size: 20px;
      letter-spacing: 2px;
      color: #999999;
      font-family: "Noto Sans TC", sans-serif;
    }
    .box {
      width: 600px;
      height: 3px;
      border: 1px solid #caccd1;
    }
  }

  .contain {
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    padding-top: 20px;
    p {
      width: 100%;
      font-size: 18px;
      text-align: center;
      color: #999999;
      margin: 10px 0 20px 0;
      padding-bottom: 30px;
      font-weight: 300;
      letter-spacing: 2px;
      font-family: "Montserrat", sans-serif;
    }
    .brand {
      width: 20%;

      ul {
        padding-left: 20px;
        li {
          height: 40px;
          &::before {
            content: "\2022";
            color: $color_blue;
            font-weight: bold;
            display: inline-block;
            width: 1em;
            margin-left: -1em;
            font-family: "Montserrat", sans-serif;
          }
        }
      }
    }
    .brand-news {
      width: 78%;
      margin-left: 20px;
      display: flex;
    }
  }
}
</style>