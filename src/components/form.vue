<template>
  <div class="contact-wrapper">
    <div class="demo-request">
      <div class="contact-container">
        <h1>與我們聯絡</h1>
        <p>麥斯創新客服中心服務對象為洽詢本公司業務者，針對相關業務問題，您可以填寫業務聯絡表單，提出您的問題與建議，或來電洽詢。</p>

        <form>
          <div class="field name-box">
            <input type="text" id="last-name" placeholder="名*" />
          </div>
          <div class="field name-box">
            <input type="text" id="first-name" placeholder="姓*" />
          </div>
          <div class="field industry-box">
            <input type="text" id="industry" placeholder="產業別*" />
          </div>
          <div class="field telenum-box">
            <input type="text" id="area-code" placeholder="公司名稱" />
            <input type="text" id="company-num" placeholder="聯絡人*" />
            <input type="text" id="company-num-branch" placeholder="所屬部門" />
          </div>
          <div class="field telenum-box">
            <input type="text" id="area-code" placeholder="區碼" />
            <input type="text" id="company-num" placeholder="公司電話*" />
            <input type="text" id="company-num-branch" placeholder="分機" />
          </div>
          <div class="field mobile-box">
            <input type="text" id="mobile-num" placeholder="行動電話*" />
          </div>
          <div class="field email-box">
            <input type="text" id="email" placeholder="公司電子郵件*" />
          </div>
          <div class="field request-type">
            <label for="product-info">產品資訊</label>
            <input type="checkbox" id="product-info" name="product-info" value="product-info" />
            <label for="product-info">合作資訊</label>
            <input type="checkbox" id="product-info" name="product-info" value="product-info" />
            <label for="product-info">其它</label>
            <input type="checkbox" id="product-info" name="product-info" value="product-info" />
          </div>

          <div class="field msg-box">
            <label for="msg">留言</label>
            <textarea id="msg" rows="5" placeholder="您的留言..."></textarea>
          </div>
          <label for>
            <input type="checkbox" />
            <span>
              您已詳閱本公司之
              <a href="#">
                <router-link to="privacy">隱私權聲明</router-link>
              </a>，並同意本公司依法蒐集、處理及利用您的個人資料。
            </span>
          </label>
          <input class="button" type="submit" value="Send" />
        </form>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/css/setting.scss";
.demo-request {
  width: 100%;
  padding: 30px;
  box-sizing: border-box;
  // background-color: $color_gray2;
  background-position-y: 100%;
  background-position-x: 100%;
  background-repeat: no-repeat;
  background-color: $color_gray2;

  .contact-container {
    width: 100%;
    height: auto;
    position: relative;
    box-sizing: border-box;
    margin: 0 auto;

    form {
      margin: 0 auto;

      padding: 10px;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
    }

    h1 {
      font-weight: 400;
      text-align: center;
      padding: 10px;

      box-sizing: border-box;
    }

    p {
      font-family: "Montserrat", sans-serif;

      font-weight: 400;
      text-align: center;
      padding: 10px;
      margin: 0;
      font-size: 17px;
      color: #747474;
    }

    .field {
      display: flex;
      flex-direction: column;

      width: 50%;
      padding: 20px;
    }

    .telenum-box {
      display: flex;
      flex-direction: row;

      input {
        flex-grow: 1;
        margin: 5px;
      }
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
      border: none;
      border: 1px solid $color_gray1;
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

@media (max-width: 1440px) {
  .demo-request {
    .contact-container {
      .field {
        width: 70%;
      }
    }
  }
}
@media (max-width: 1024px) {
  .demo-request {
    .contact-container {
      .field {
        width: 80%;
      }
    }
  }
}
@media (max-width: 768px) {
  .demo-request {
    .contact-container {
      .field {
        display: flex;
        flex-direction: column;

        width: 100%;

        box-sizing: border-box;
      }

      .telenum-box {
        display: flex;
        flex-direction: row;

        input {
          width: 35%;
          margin: 5px;
          font-size: 10px;
        }
      }
    }
  }
}
</style>
