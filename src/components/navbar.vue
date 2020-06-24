<template>
  <div class="main-header">
    <div class="top-container">
      <div class="top-nav">
        <ul>
          <li>
            <i class="fab fa-facebook-f"></i>
          </li>
          <li>
            <i class="fab fa-linkedin"></i>
          </li>
          <li>
            <a href="https://twitter.com/MaxlabsL">
              <i class="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <i class="fab fa-instagram"></i>
          </li>
          <li>
            <form action class="top-login">
              <a href="#" class="login">
                <router-link to="sign-in">{{$t("login")}}</router-link>
              </a>
            </form>
          </li>
        </ul>
      </div>
    </div>
    <div class="header-container">
      <router-link to="/" class="logo">
        <img src="./../assets/img/maxlabs_logo_28060.png" alt />
      </router-link>

      <input type="checkbox" id="chk" />
      <label for="chk" class="show-menu-btn">
        <i class="fas fa-bars"></i>
      </label>
      <nav class="main-nav">
        <ul class="top-level">
          <li>
            <a href="#">
              <router-link to="/update">
                <div class="nav-item-group">
                  <div>最新消息</div>
                </div>
              </router-link>
            </a>
          </li>
          <li>
            <a href="#">
              <router-link to="azure">
                <div class="nav-item-group">
                  <div>公有雲服務</div>
                  <i class="fas fa-angle-right icon-group"></i>
                </div>
              </router-link>
            </a>
            <ul class="second-level">
              <li>
                <a href="#">
                  <router-link to="azure">Microsoft Cloud</router-link>
                </a>
                <ul class="third-level">
                  <li>
                    <a href="#">
                      <router-link to="azure">Azure</router-link>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <router-link to="office365">Office 365</router-link>
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">
                  <router-link to="aws">Amazon Web Services</router-link>
                </a>
              </li>
              <li>
                <a href="#">
                  <router-link to="gcp">Google Cloud</router-link>
                </a>
                <ul class="third-level">
                  <li>
                    <a href="#">
                      <router-link to="gcp">GCP</router-link>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <router-link to="g-suite">G Suite</router-link>
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">
                  <router-link to="ali-cloud">Alibaba Cloud (阿里雲)</router-link>
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">
              <router-link to="/agent-adobe">
                <div class="nav-item-group">
                  <div>代理產品</div>
                  <i class="fas fa-angle-right icon-group"></i>
                </div>
              </router-link>
            </a>
            <ul class="second-level">
              <li>
                <a href="#">
                  <router-link to="/agent-adobe">軟體銷售</router-link>
                </a>
                <ul class="third-level">
                  <li>
                    <a href="#">
                      <router-link to="/agent-adobe">ADOBE</router-link>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <router-link to="agent-microsoft">Ｍicrosoft</router-link>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <router-link to="agent-vmware">VMware</router-link>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <router-link to="agent-mail2000">Mail2000</router-link>
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href>
                  <router-link to="/under-construction">硬體銷售</router-link>
                </a>
                <ul class="third-level">
                  <li>
                    <a href="#">
                      <router-link to="hardware-audiocodes">AudioCodes</router-link>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <router-link to="hardware-asus">ASUS</router-link>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <router-link to="/under-construction">HPE</router-link>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <router-link to="/under-construction">Lenovo</router-link>
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">
                  <router-link to="netcom-gear">網通設備銷售</router-link>
                </a>
              </li>

              <li>
                <a href="#">
                  <router-link to="/under-construction">儲存設備銷售</router-link>
                </a>
              </li>
              <li>
                <a href="#">
                  <router-link to="/under-construction">硬體伺服器租賃</router-link>
                </a>
              </li>

              <li>
                <a href>
                  <router-link to="/under-construction">PC/NB 設備租賃</router-link>
                </a>
              </li>
              <li>
                <a href>
                  <router-link to="agent-SSL">SSL 第三方憑證</router-link>
                </a>
              </li>
              <li>
                <a href="#">
                  <router-link to="agent-SPLArent">商用軟體租賃</router-link>
                </a>
                <ul class="third-level">
                  <li>
                    <a href="#">
                      <router-link to="agent-SPLArent">微軟 SPLA 軟體租賃</router-link>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <router-link to="agent-vCAN">VMware vCAN 軟體租賃</router-link>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">
              <router-link to="ground-solution">
                <div class="nav-item-group">
                  <div>解決方案</div>
                  <i class="fas fa-angle-right icon-group"></i>
                </div>
              </router-link>
            </a>
            <ul class="second-level">
              <li>
                <a href="#">
                  <router-link to="/under-construction">Microsoft 雲端解決方案</router-link>
                </a>
              </li>
              <li>
                <a href="#">
                  <router-link to="/under-construction">Microsoft 地端解決方案</router-link>
                </a>
              </li>
              <li>
                <a href="#">
                  <router-link to="/under-construction">Google 雲端解決方案</router-link>
                </a>
              </li>

              <li>
                <a href="#">
                  <router-link to="/under-construction">VMware 解決方案</router-link>
                </a>
              </li>
              <li>
                <a href="#">
                  <router-link to="prog-customized">程式客製化服務</router-link>
                </a>
              </li>
              <li>
                <a href="#">
                  <router-link to="website-customized">網站客製化服務</router-link>
                </a>
              </li>
              <li>
                <a href="#">
                  <router-link to="app-customized">APP 客製化服務</router-link>
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">
              <router-link to="advice-service">
                <div class="nav-item-group">
                  <div>麥斯產品與服務</div>
                  <i class="fas fa-angle-right icon-group"></i>
                </div>
              </router-link>
            </a>
            <ul class="second-level">
              <li>
                <a href="https://chiangyuchi.github.io/alto/dist/#/">端點桌面平台管理</a>
              </li>
              <li>
                <a href="#">
                  <router-link to="/under-construction">雲端技術顧問服務</router-link>
                </a>
              </li>
              <li>
                <a href="#">
                  <router-link to="advice-office365">Office365 技術顧問服務</router-link>
                </a>
              </li>
              <li>
                <a href="#">
                  <router-link to="/under-construction">G Suite 技術顧問服務</router-link>
                </a>
              </li>
              <li>
                <a href="#">
                  <router-link to="/under-construction">VMWare 技術顧問服務</router-link>
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">
              <router-link to="open-course">
                <div class="nav-item-group">
                  <div>培訓課程</div>
                  <i class="fas fa-angle-right icon-group"></i>
                </div>
              </router-link>
            </a>
            <ul class="second-level">
              <li>
                <a href="#">
                  <router-link to="open-course">2020 H2 公開課程</router-link>
                </a>
              </li>
              <li>
                <a href="#">
                  <router-link to="/trainging">企業委託到府包班</router-link>
                </a>
              </li>
              <li>
                <a href="#">
                  <router-link to="/trainging">Youtube 線上讀書會</router-link>
                </a>
              </li>
              <li>
                <a href="#">
                  <router-link to="/trainging">Facebook 線上讀書會</router-link>
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">
              <router-link to="/under-construction">
                <div class="nav-item-group">
                  <div>技術分享與支援</div>

                  <i class="fas fa-angle-right icon-group"></i>
                </div>
              </router-link>
            </a>
            <ul class="second-level">
              <li>
                <a href="#">
                  <router-link to="/under-construction">麥斯電子報</router-link>
                </a>
              </li>
              <li>
                <a href="#">
                  <router-link to="/under-construction">技術部落格</router-link>
                </a>
              </li>
              <li>
                <a href="#">
                  <router-link to="/under-construction">技術討論區</router-link>
                </a>
              </li>
              <li>
                <a href="#">
                  <router-link to="/under-construction">報修服務</router-link>
                </a>
              </li>
              <li>
                <a href="#">
                  <router-link to="/under-construction">工具下載</router-link>
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">
              <router-link to="about">
                <div class="nav-item-group">
                  <div>關於麥斯</div>
                  <i class="fas fa-angle-right icon-group"></i>
                </div>
              </router-link>
            </a>
            <ul class="second-level">
              <li>
                <a href="#">
                  <router-link to="about">麥斯創新</router-link>
                </a>
              </li>
              <li>
                <a href="#">
                  <router-link to="cooperation">商業合作</router-link>
                </a>
              </li>
              <li>
                <a href="#">
                  <router-link to="/under-construction">商業投資</router-link>
                </a>
              </li>
              <li>
                <a href="#">
                  <router-link to="our-partner">合作夥伴</router-link>
                </a>
              </li>

              <li>
                <a href="#">
                  <router-link to="recuit">麥斯徵才</router-link>
                </a>
              </li>
              <li>
                <a href="#">
                  <router-link to="contact">聯絡我們</router-link>
                </a>
              </li>
            </ul>
          </li>
          <li>
            <form action class="header-login">
              <a href="#" class="login">
                <router-link to="sign-in">
                  <div class="nav-item-group">
                    <div>登入</div>
                  </div>
                </router-link>
              </a>
            </form>
          </li>

          <label for="chk" class="hide-menu-btn">
            <i class="fas fa-times"></i>
          </label>
        </ul>
      </nav>
    </div>
  </div>
</template>


<style lang="scss" scoped>
@import "../assets/css/setting.scss";

.main-header {
  width: 100%;
  background-color: white;
  z-index: 999;
}

.top-container {
  max-width: 100%;
  border-bottom: 1px solid $color_gray2;
}

.top-nav {
  width: 80%;
  margin: 0 auto;
  padding-right: 10px;

  ul {
    display: flex;
    justify-content: flex-end;

    li {
      padding-top: 15px;
    }

    a {
      text-decoration: none;
      color: black;
    }
  }
}

.fab {
  &:last-child {
    margin-right: 15px;
    padding-right: 20px;
  }
  &:hover {
    font-size: 18px;
    cursor: pointer;
    color: $color_darkblue;
  }
}

.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;

  width: 90%;
  padding: 5px 20px 0 20px;
}

.logo {
  width: 20%;

  img {
    width: 100%;

    box-sizing: border-box;
    vertical-align: middle;
  }
}

#chk {
  visibility: hidden;
  z-index: -1111;
  position: absolute;
}

.show-menu-btn,
.hide-menu-btn {
  display: none;
  transition: 0.4s;
  font-size: 30px;
  cursor: pointer;

  &:hover {
    color: #3498db;
  }
}

.show-menu-btn {
  line-height: 100px;
  position: absolute;
  right: 10%;
}

.main-nav {
  width: 75%;

  box-sizing: border-box;
}

.top-level {
  display: flex;
  cursor: pointer;
  padding: 5px;
  justify-content: space-between;
  box-sizing: border-box;
  font-size: 15px;
  li {
    position: relative;
    transition: 1s;

    box-sizing: border-box;
    padding: 5px 10px 5px 10px;

    a {
      text-decoration: none;
      box-sizing: border-box;
      color: black;
      font-family: "Montserrat", sans-serif;
    }

    &:hover {
      .second-level {
        display: inline;
        background-color: $color_whiteOpacity2;
      }
    }
  }
}
.second-level {
  position: absolute;

  top: 30px;
  left: 0px;
  list-style: none;
  width: 190px;
  margin: 0;
  z-index: 999;
  border-top: 3px solid rgb(0, 181, 153);

  box-sizing: border-box;
  display: none;
  box-sizing: border-box;
  li {
    position: relative;
    transition: 1s;
    border-top: 1px dotted black;
    padding: 5px 10px 5px 10px;
    width: 100%;
    font-size: 14px;

    &:hover {
      background-color: rgb(0, 181, 153);
      a {
        color: white;
      }
      .third-level {
        display: inline;
        a {
          color: black;

          &:hover {
            a {
              color: white;
            }
          }
        }
      }
    }

    &:nth-child(1) {
      border: none;
    }
  }
}

.third-level {
  position: absolute;
  top: 0;
  right: -180px;
  width: 180px;
  list-style: none;
  padding: 0;
  margin: 0;
  top: 10px;
  display: none;
  box-shadow: 1px 1px 5px rgba(255, 255, 255, 0.2);
  background-color: $color_whiteOpacity1;

  z-index: 999;

  background-color: $color_whiteOpacity2;
}

.header-language {
  display: none;
  span {
    width: 0.5px;
    height: 1px;
  }
}

.header-login {
  display: none;
  margin-left: 25px;
}

.icon-group {
  display: none;
}

@media (max-width: 1540px) {
  .top-container {
    .top-nav {
      width: 69%;
    }
  }

  .header-container {
    flex-direction: column;
  }
  .logo {
    width: 40%;
    padding-top: 28px;
    img {
      width: 100%;
      vertical-align: middle;
    }
  }
  .main-nav {
    width: 90%;
    padding: 0 15px 0 15px;
  }

  .top-level {
    padding: 5px;

    li {
      a {
        padding: 0px;
      }
    }
  }
  .header-language {
    margin-left: 15px;
    span {
      width: 0.5px;
      height: 1px;
    }
  }
  .header-login {
    margin-left: 25px;
  }
}

@media (max-width: 1280px) {
  .header-container {
    .logo {
      width: 40%;
    }
  }
}

@media (max-width: 1024px) {
  .top-container {
    .top-nav {
      width: 75%;
    }
  }

  .header-container {
    display: flex;
    flex-direction: column;

    .main-nav {
      width: 99%;
    }
  }
  .logo {
    margin: 0 auto;
    img {
      width: 100%;
      vertical-align: middle;
    }
  }
}

@media (max-width: 768px) {
  .main-header {
    max-width: 100%;
    .top-container {
      display: none;
    }

    .header-container {
      .logo {
        width: 60%;

        img {
          padding-bottom: 10px;
        }
      }

      .show-menu-btn,
      .hide-menu-btn {
        line-height: 115px;
        font-size: 35px;
        display: block;
      }

      #chk:checked ~ .main-nav {
        right: -5%;
      }

      .main-nav {
        position: fixed;
        width: 110%;
        height: 100vh;
        background: #ffffff;
        right: -200%;
        top: 0;
        text-align: center;
        line-height: normal;
        transition: 0.7s;
        z-index: 9999;
        box-sizing: border-box;

        cursor: pointer;
      }
    }
  }

  .top-level {
    height: 100vh;
    flex-direction: column;
    text-align: left;
    margin-left: 10px;
    padding: 60px 24px 5px 20px;

    li {
      border-bottom: 1px solid $color_gray2;
      width: 100%;

      a {
        padding: 0;
      }

      &:hover {
        .second-level {
          display: none;
        }
      }
    }
  }

  .second-level {
    top: 20px;
    left: 120px;
    border-radius: 0;
  }

  .third-level {
    top: 0;
    right: -150px;
    width: 150px;
  }

  .header-language {
    display: block;
  }

  .header-login {
    display: block;
  }

  .header-login {
    margin-left: 0;
  }

  .header-language {
    margin-left: 0;
  }

  .fa-times {
    position: absolute;
    top: -30px;
    right: 50px;
  }

  .hide-menu-btn {
    position: absolute;
    top: 40px;
    right: 0px;
  }

  .icon-group {
    display: inline;
    line-height: 50px;
  }
  .nav-item-group {
    display: flex;
    justify-content: space-between;
    height: 50px;
    line-height: 50px;
  }
}

@media (max-width: 414px) {
  .main-header {
    .header-container {
      .logo {
        width: 70%;
      }

      .show-menu-btn {
        line-height: 95px;
        font-size: 25px;
      }
    }
  }
}
</style>