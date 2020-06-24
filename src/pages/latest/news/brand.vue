<template>
  <div class="latest-news-wrapper">
    <div class="sepatator">
      <div class="box"></div>
      <h4>品牌新訊</h4>
      <div class="box"></div>
    </div>
    <section class="contain">
      <p>提供您最快、最新之麥斯代理產品原廠品牌訊息!</p>
      <div class="brand">
        <div class="brand-name-container">
          <ul>
            <li>ADOBE</li>
            <li>
              <a href="#">
                <router-link to="/latest/ms">Microsoft</router-link>
              </a>
            </li>
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
      font-family: 'Noto Sans TC', sans-serif;
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
      margin: 10px 0 10px 0;
      font-weight: 300;
      letter-spacing: 2px;
      padding-bottom: 30px;
       font-family: "Montserrat", sans-serif;
    }
    .brand {
      width: 20%;
      ul {
        padding-left: 20px;
        li {
          height: 40px;
           font-family: "Montserrat", sans-serif;
          &::before {
            color: $color_blue;
            font-weight: bold;
            display: inline-block;
            width: 1em;
            margin-left: -1em;
          }
        }
      }
    }
    .brand-news {
      width: 78%;
      margin-left: 20px;
    }
  }
}

@media (max-width: 1024px) {
  .latest-news-wrapper {
    .sepatator {
      .box {
        width: 400px;
      }
    }
    .contain {
      flex-direction: row;

      .brand-news {
        width: 78%;

        margin-left: 0;
      }
    }
  }
}

@media (max-width: 768px) {
  .latest-news-wrapper {
    .sepatator {
      .box {
        width: 290px;
      }
    }
    .contain {
      .brand {
        width: 90%;

        ul {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          width: 100%;
          justify-content: center;
          align-items: center;
          li {
            width: 30%;
            height: 40px;
            padding: 5px 0px;
            box-sizing: border-box;
            text-align: center;
            margin: 5px;
            border-radius: 30px;
            font-size: 15px;
            list-style: none;
            background-color: $color_lightblue2;
            color: white;
            a {
              text-decoration: none;
            }
          }
        }
      }
      .brand-news {
        width: 90%;
        margin: 0 auto;
        margin-top: 30px;
      }
    }
  }
}

@media (max-width: 414px) {
  .latest-news-wrapper {
    .sepatator {
      .box {
        width: 130px;
      }
    }
  }
}
@media (max-width: 375px) {
  .latest-news-wrapper {
    .sepatator {
      .box {
        width: 120px;
      }
    }
  }
}
</style>