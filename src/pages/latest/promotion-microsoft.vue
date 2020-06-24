<template>
  <div class="promotion-wrapper">
    <div class="items" v-for="(item, index) in arrayData" :key="index">
      <router-link :to="item.path">
        <div class="pic">
          <img :src="item.images" alt />
        </div>
      </router-link>
      <div class="text">
        <div class="title">{{ item.title }}</div>
        <p class="second-title">{{ item.secondTitle }}</p>
      </div>
      <hr />
      <div class="logo">
        <img :src="item.logo" alt />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      arrayData: [
        {
          title: "【限時促銷】Office365先上手再下單，試用3 個月免費",
          secondTitle: "即日起至2020/6/30止",
          images: require("./../../assets/img/promo-1.jpg"),
          logo: require("./../../assets/img//microsoft-logo.jpg"),
          path: "/20200516"
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/setting.scss";
.promotion-wrapper {
  width: 100%;

  display: flex;
  flex-direction: row;

  .items {
    flex-grow: 30%;
    height: 325px;
    border: 1px solid rgb(224, 224, 224);
    margin: 15px;
    .pic {
      width: 100%;
      transition: transform 0.2s ease;
      overflow: hidden;
      cursor: pointer;
      img {
        width: 100%;
        transform: scale(1, 1);
        transition: all 1s ease-out;

        &:hover {
          transform: scale(1.2, 1.2);
        }
      }
    }

    .text {
      padding: 5px 10px;
      width: 100%;

      .title {
        font-size: 18px;
        font-weight: 800;
        font-family: "Montserrat", sans-serif;
      }

      .second-title {
        font-weight: 16px;
        padding-left: 5px;
        font-family: "Montserrat", sans-serif;
      }
    }

    hr {
      width: 80%;
      border: 1px solid rgb(224, 224, 224);
      margin: 0 auto;
    }
    .logo {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 25%;
      }
    }
  }

  @media (max-width: 414px) {
    .item {
      .text {
        padding: 5px 10px;
        width: 95%;

        .title {
          font-size: 13px;
          font-weight: 800;
        }

        p {
          font-size: 13px;
        }
      }

      hr {
        width: 80%;
        border: 1px solid rgb(224, 224, 224);
        margin: 0 auto;
      }
      .logo {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: 25%;
        }
      }
    }
  }
}
</style>
