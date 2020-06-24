<template>
  <div>
    <div class="main-footer">
      <div class="footer-container">
        <div class="footer-item">
          <h4>公有雲服務</h4>
          <nav>
            <a href="#">
              <router-link to="azure" hash="#azure">Azure</router-link>
            </a>
            <a href="#">
              <router-link to="office365">Office 365</router-link>
            </a>
            <a href="#">
              <router-link to="aws">Amazon Web Services</router-link>
            </a>
            <a href="#">
              <router-link to="gcp">Google Cloud Plateform</router-link>
            </a>
            <a href="#">
              <router-link to="g-suite">G Suite</router-link>
            </a>
          </nav>
        </div>
        <div class="footer-item">
          <h4>代理產品</h4>
          <nav>
            <a href="#">
              <router-link to="/agent-adobe">軟體</router-link>
            </a>
            <a href>
              <router-link to="/under-construction">硬體銷售</router-link>
            </a>
            <a href="#">
              <router-link to="/under-construction">網通設備銷售</router-link>
            </a>
            <a href="#">
              <router-link to="/under-construction">儲存設備銷售</router-link>
            </a>
            <a href="#">
              <router-link to="/under-construction">硬體伺服器租賃</router-link>
            </a>
            <a href>
              <router-link to="/under-construction">PC/NB 設備租賃</router-link>
            </a>
            <a href>
              <router-link to="/under-construction">SSL 第三方憑證</router-link>
            </a>
            <a href="#">
              <router-link to="agent-microsoft-SPLA">商用軟體租賃</router-link>
            </a>
          </nav>
        </div>

        <div class="footer-item">
          <h4>麥斯產品與服務</h4>
          <nav>
            <a href="https://chiangyuchi.github.io/alto/dist/#/">端點桌面管理平台</a>
            <a href="#">
              <router-link to="cloud-advice">雲端技術顧問服務</router-link>
            </a>
            <a href="#">
              <router-link to="/under-construction">Office365 技術顧問服務</router-link>
            </a>

            <a href="#">
              <router-link to="/under-construction">G Suite 技術顧問服務</router-link>
            </a>

            <a href="#">
              <router-link to="/under-construction">VMWare 技術顧問服務</router-link>
            </a>
          </nav>
        </div>

        <div class="footer-item">
          <h4>解決方案</h4>
          <nav>
            <a href="#">
              <router-link to="/under-construction">Microsoft 雲端解決方案</router-link>
            </a>
            <a href="#">
              <router-link to="/under-construction">Microsoft 地端解決方案</router-link>
            </a>
            <a href="#">
              <router-link to="/under-construction">Google 雲端解決方案</router-link>
            </a>

            <a href="#">
              <router-link to="/under-construction">VMware 解決方案</router-link>
            </a>
            <a href="#">
              <router-link to="prog-customized">程式客製化服務</router-link>
            </a>
            <a href="#">
              <router-link to="website-customized">網站客製化服務</router-link>
            </a>
            <a href="#">
              <router-link to="/under-construction">APP 客製化服務</router-link>
            </a>
          </nav>
        </div>
        <div class="footer-item">
          <h4>培訓課程</h4>
          <nav>
            <a href="#">
              <router-link to="/under-construction">公開課程</router-link>
            </a>
            <a href="#">
              <router-link to="/under-construction">企業包班</router-link>
            </a>
            <a href="#">
              <router-link to="/under-construction">線上讀書會</router-link>
            </a>
          </nav>
        </div>
        <div class="footer-item">
          <h4>技術分享</h4>
          <nav>
            <a href="#">
              <router-link to="/under-construction">麥斯電子報</router-link>
            </a>
            <a href="#">
              <router-link to="/under-construction">技術部落格</router-link>
            </a>
            <a href="#">
              <router-link to="/under-construction">技術討論區</router-link>
            </a>
          </nav>
          <h4>技術支援</h4>
          <nav>
            <a href="#">
              <router-link to="/under-construction">報修服務</router-link>
            </a>
            <a href="#">
              <router-link to="/under-construction">工具下載</router-link>
            </a>
          </nav>
        </div>
        <div class="footer-item">
          <h4>關於麥斯</h4>
          <nav>
            <a href="#">
              <router-link to="about">關於麥斯</router-link>
            </a>
            <a href="#">
              <router-link to="cooperation">商業合作</router-link>
            </a>
            <a href="#">
              <router-link to="/under-construction">商業投資</router-link>
            </a>
            <a href="#">
              <router-link to="our-partner">合作夥伴</router-link>
            </a>
            <a href="#">
              <router-link to="/under-construction">麥斯徵才</router-link>
            </a>
          </nav>
        </div>
        <div class="footer-item">
          <div class="newsletter-subscribe">
            <nav>
              <h4>聯繫我們</h4>
              <p>台北市忠孝東路一段 35 號 5 樓</p>
              <p>TEL: 02-3322-1098</p>
              <p>FAX: 02-3322-1067</p>
              <p>Email: service[＠]maxlabs[。]com[。]tw]</p>
              <div class="icon">
                <i class="fab fa-facebook-f"></i>

                <i class="fab fa-linkedin"></i>
                <a href="https://twitter.com/MaxlabsL">
                  <i class="fab fa-twitter"></i>
                </a>
                <i class="fab fa-instagram"></i>
              </div>
            </nav>
            <h4>訂閱電子報</h4>
            <div class="subscribe-container">
              <form action>
                <input type="text" placeholder="E-Mail Address" />
                <input type="submit" value="subscribe" />
              </form>｀
            </div>
          </div>
        </div>
      </div>
      <div class="copyright">
        麥斯創新科技有限公司 版權所有 Copyright © 2020 Maxlabs Innovation Technology, Ltd. All Rights Reserved.
        <br />
        <span>建議閱讀最佳尺寸 1280 pixel</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "@/assets/css/setting.scss";
.main-footer {
  width: 100%;
  background-color: rgb(34, 82, 135);
  font-family: "Noto Sans TC", sans-serif;
  padding: 20px;
  box-sizing: border-box;

  .footer-container {
    display: flex;
    max-width: 94%;
    margin: auto;
    justify-content: space-around;

    .footer-item {
      // width: 0;
      // flex-grow: 1;
      margin: 0 10px;

      h4 {
        font-size: 15px;
        color: white;
        font-weight: 400;
        border-bottom: 1px solid #fff;
        margin-bottom: 1em;
        padding-bottom: 1em;
        box-sizing: border-box;
      }

      nav {
        display: flex;
        flex-direction: column;
        color: rgba(205, 222, 238, 0.7);
        padding-bottom: 2em;
        box-sizing: border-box;

        a {
          text-decoration: none;

          line-height: 1.4;

          color: rgba(205, 222, 238, 0.7);
          line-height: 1.4;
          padding: 5px 0;
          box-sizing: border-box;
        }
      }
    }

    .footer-item:nth-child(2) {
      width: 8%;
    }

    .footer-item:nth-child(3),
    .footer-item:nth-child(4) {
      width: 10%;
    }

    .footer-item:nth-child(5),
    .footer-item:nth-child(6),
    .footer-item:nth-child(7) {
      width: 6%;
    }

    .footer-item:last-child {
      width: 19%;
      p {
        padding-bottom: 10px;
      }
      form {
        display: flex;
        width: 100%;
        margin: auto 0px;
      }

      input[type="text"],
      input[type="submit"] {
        border: none;
        padding: 15px 20px;
      }

      input[type="text"] {
        width: 0;
        flex-grow: 1;
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
      }

      input[type="submit"] {
        color: #fff;
        background-color: rgb(236, 8, 32);
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
      }

      .icon {
        letter-spacing: 15px;
        font-size: 20px;

        .fab {
          &:hover {
            color: $color_skyblue;
            cursor: pointer;
          }
        }
      }
    }
  }

  .copyright {
    width: 100%;
    text-align: center;
    padding: 10px 0px;
    color: white;
    span{
      font-size: 12px;
    }
  }
}

@media (max-width: 1024px) {
  .main-footer {
    max-width: 100%;

    .footer-container {
      display: flex;
      flex-direction: column;

      max-width: 100%;
      margin: 0 auto;

      .footer-item {
        width: 100%;
        margin: 0 auto;
      }

      .footer-item:first-child,
      .footer-item:nth-child(2),
      .footer-item:nth-child(3),
      .footer-item:nth-child(4),
      .footer-item:nth-child(5),
      .footer-item:nth-child(6),
      .footer-item:nth-child(7) {
        display: none;
      }

      .footer-item:last-child {
        text-align: center;
        width: 100%;
        form {
          display: flex;
          max-width: 100%;
          margin: auto 0px;
        }

        input[type="text"],
        input[type="submit"] {
          border: none;
          padding: 15px 20px;
        }

        input[type="text"] {
          width: 0;
          flex-grow: 1;
          border-top-left-radius: 4px;
          border-bottom-left-radius: 4px;
        }

        input[type="submit"] {
          color: #fff;
          background-color: rgb(236, 8, 32);
          border-top-right-radius: 4px;
          border-bottom-right-radius: 4px;
        }

        .icon {
          letter-spacing: 15px;
          font-size: 20px;

          .fab {
            &:hover {
              color: $color_skyblue;
              cursor: pointer;
            }
          }
        }
      }
    }

    .copyright {
      width: 100%;
      text-align: center;

      padding: 10px 0px;
    }
  }
}

@media (max-width: 768px) {
  .main-footer {
    .copyright {
      font-size: 14px;
      padding: 10px 63px;
      box-sizing: border-box;
    }
  }
}

@media (max-width: 414px) {
  .main-footer {
    .copyright {
      font-size: 14px;
      padding: 10px 53px;
      box-sizing: border-box;
    }
  }
}

@media (max-width: 375px) {
  .main-footer {
    .copyright {
      font-size: 14px;
      padding: 10px 43px;
      box-sizing: border-box;
    }
  }
}
</style>