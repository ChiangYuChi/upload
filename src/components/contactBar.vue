<template>
  <div class="maxlabs-request">
    <img src="../assets/img/gcp-bar.jpg" alt />
    <div class="txt">
      <h3>需要{{info.line1}} &nbsp;就找麥斯創新</h3>
      <p>
        我們致力給您最好的{{info.line2}}服務體驗，無論是雲端搬遷、技術支援等，只要是{{info.line3}}相關需求，都歡迎立即與我們聯繫!
      </p>
      <router-link to="contact" class="router-link">詢問我們</router-link>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: {
    info: {
      type: Object
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/setting.scss";
.maxlabs-request {
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
    box-sizing: border-box;

    h3 {
      font-size: 40px;
      font-weight: 900;
      text-transform: uppercase;
      color: white;
      text-align: center;
      font-family: "Noto Sans TC", sans-serif;
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

@media (max-width: 768px) {
  .maxlabs-request {
    .txt {
      h3 {
        font-size: 30px;
      }
    }
  }
}
@media (max-width: 414px) {
  .maxlabs-request {
    .txt {
      h3 {
        font-size: 26px;
      }

      p {
        display: none;
      }
    }
  }
}
@media (max-width: 375px) {
  .maxlabs-request {
    .txt {
      h3 {
        font-size: 24px;
      }
    }
  }
}
</style>