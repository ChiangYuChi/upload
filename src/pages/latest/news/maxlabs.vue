<template>
  <div class="latest-news-wrapper">
    <div class="sepatator">
      <div class="box"></div>
      <h4>麥斯動態</h4>
      <div class="box"></div>
    </div>
    <section class="contain">
      <p>麥斯最新訊息，一手掌握</p>
      <div class="brand">
        <div class="brand-name-container">
          <ul>
            <li>
                <router-link to="/update">公司動態</router-link>
            </li>
            <li>優惠方案</li>
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
          list-style: disc;
          width: 100px;
          cursor: pointer;
           font-family: "Montserrat", sans-serif;
          &::before {
            color: $color_blue;
            font-weight: bold;
            display: inline-block;
            width: 1em;
            margin-left: -1em;
          }

          a {
            text-decoration: none;
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

@media (max-width: 1280px) {
   .latest-news-wrapper {
    .sepatator {
      .box {
          width: 520px;
      }
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
      p {
        padding-bottom: 10px;
      }

      .brand {
        width: 100%;

        ul {
          display: flex;
          justify-content: center;
          align-items: center;

          li {
            margin: 0 30px 0 30px;
            list-style: none;
            border: 1px solid $color_skyblue;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 15px;
          }
        }
      }
      .brand-news {
        width: 98%;
        margin: 0 auto;
        display: flex;
      }
    }
  }
}
@media (max-width: 767px) {
}
@media (max-width: 414px) {
  .latest-news-wrapper {
    .sepatator {
      .box {
        width: 130px;
      }
    }

    .contain {
      .brand-news {
        width: 400px;

        margin-left: -15px;
        display: flex;
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
    .contain {
      width: 100%;
      .brand-news {
        width: 355px;

        margin-left: 3px;
      }
    }
  }
}
</style>