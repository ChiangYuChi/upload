<template>
  <div class="contact-wrapper">
    <div class="contact-banner">
      <div class="banner-container">
        <div class="text">
          <h2>CONTACT US</h2>
          <p>
            麥斯創新期望成為客戶最可靠的夥伴，提供專業技術服務，解決系統大小事。
          </p>
          <p>Maximum value for all, Maxlabs for you</p>
        </div>
      </div>
    </div>
    <ContactForm></ContactForm>
  </div>
</template>

<script>
import ContactForm from "../components/form";
export default {
  components: {
    ContactForm,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/setting.scss";
.contact-banner {
  background-image: url("../assets/img/contact-bg.jpg");
  background-size: cover;
  background-position-y: 15%;
  background-repeat: no-repeat;

  box-sizing: border-box;

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
        font-family:"Montserrat", sans-serif;
      }
    }
  }
}

.contact-maxlabs {
  width: 100%;

  padding: 30px;
  box-sizing: border-box;
  background-image: url(/img/about-us-bg-2.png);

  background-position-y: 100%;
  background-position-x: 100%;
  background-repeat: no-repeat;
  background-size: 40%;

  .contact-container {
    max-width: 80%;
    padding: 30px 100px;

    box-sizing: border-box;

    margin: 0 auto;

    form {
      margin: 0 auto;

      padding: 50px;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
    }

    h1 {
   
      font-weight: 400;
      text-align: center;
      padding: 30px;
      color: #747474;
      box-sizing: border-box;
      margin-bottom: 20px;
    }

    .field {
      display: flex;
      flex-direction: column;

      width: 70%;
      padding: 20px;
    }

    label {
      font-size: 20px;
   
      padding: 5px;
    }

    input,
    textarea {
      padding: 5px 15px;
      font-size: 18px;
      border-radius: 3px;

      &:focus {
        outline: none;
      }
    }

    input[type="checkbox"] {
      cursor: pointer;
    }

    a {
      text-decoration: none;
      padding: 3px;

      &:hover {
        color: $color_darkblue;
      }
    }

    .button {
      margin-top: 10px;
      border-radius: 3px;
      cursor: pointer;

      &:hover {
        font-size: 19px;
      }
    }
  }
}
</style>
