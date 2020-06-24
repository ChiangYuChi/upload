<template>
  <div class="latest-wrapper">
    <div class="latest-banner">
      <div class="banner-container">
        <div class="text">
          <h1>
            最新消息
            <div class="line-1"></div>
          </h1>
        </div>
      </div>
    </div>
    <div class="latest-container">
      <nav>
        <ul>
          <li v-for="(item, index) in latestLink" :key="index">
            <router-link :to="item.link">{{item.routerName}}</router-link>
          </li>
        </ul>
      </nav>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      latestLink: [
        { link: "/latest/ms", routerName: "品牌新訊" },
        { link: "/promotion/ms", routerName: "促銷訊息" },
        { link: "/video", routerName: "麥斯影片" },
        { link: "/update", routerName: "麥斯動態" }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/setting.scss";
.latest-banner {
  background-image: url("../../assets/img/latest-bg.jpg");
  background-size: cover;
  background-position-y: 10%;
  background-position-x: 25%;
  background-repeat: no-repeat;
  .banner-container {
    width: 100%;
    height: 320px;
    position: relative;
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    .text {
      width: 80%;
      h1 {
        font-size: 40px;
        width: 50%;
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
      p {
        font-size: 15px;
        width: 50%;
        margin: 3px auto;
        text-align: left;
        color: white;
        font-family: "Montserrat", sans-serif;
        line-height: 20px;
        padding: 2px;
        box-sizing: border-box;
      }
    }
  }
}
.latest-container {
  width: 100%;
  margin: 60px 0;
  nav {
    width: 85%;
    margin: 0 auto;
    ul {
      display: flex;
      li {
        height: 52px;
        width: 152px;
        color: grey;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid $color_skyblue;
        border-radius: 40px;
        margin: 10px;
        a {
          font-size: 18px;
          font-family: "Montserrat", sans-serif;
          letter-spacing: 2px;
          text-decoration: none;
        }
      }
    }
  }
}

@media (max-width: 414px) {
  .latest-container {
    nav {
      width: 100%;

      ul {
        li {
          a {
            font-size: 15px;
          }
        }
      }
    }
  }
}

@media (max-width: 375px) {
  .latest-banner {
    .banner-container {
      .text {
        width: 90%;
      }
    }
  }

  .latest-container {
    nav {
      width: 100%;

      ul {
        display: flex;

        li {
          a {
            font-size: 13px;
          }
        }
      }
    }
  }
}
</style>