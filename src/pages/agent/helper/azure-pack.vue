<template>
  <div class="azure-pack-wrapper">
    <div class="azure-pack-service">
      <h2>Microsoft — Azure Pack</h2>
      <div class="tabbox">
        <input checked id="tab1" name="tabs" type="radio" />
        <label class="tp" for="tab1">產品說明</label>
        <input id="tab3" name="tabs" type="radio" />
        <label class="tp" for="tab3">相關連結</label>
        <br />
        <div class="content" style="background-color: white;">
          <div id="content1">
            <div class="text">
              <h5>微軟 Windows Azure Pack 簡介</h5>
              <p>Windows Azure Pack整合了 Windows Server、System Center 和 SQL Server，以提供自助入口網站和雲端服務，例如虛擬機器裝載 (IaaS)、資料庫即服務 (DBaaS)、可擴充的 Web 應用程式裝載 (PaaS) 等等。</p>
            </div>
            <div class="text">
              <h5>Windows Azure Pack 功能</h5>
              <p>一旦安裝在您的資料中心內之後，Windows Azure Pack 就會與 System Center 和 Windows Server 整合，協助提供下列功能：</p>
              <div class="toggle-list">
                <div class="item">
                  <input type="checkbox" id="box-1" />
                  <label for="box-1">多租用戶的管理入口網站</label>
                  <div>
                    <p>與 Microsoft Azure 一致且可自訂的自助入口網站體驗，可供佈建、監控和管理各項服務，例如網站、虛擬機器和 Service Bus。</p>
                  </div>
                </div>
                <div class="item">
                  <input type="checkbox" id="box-2" />
                  <label for="box-2">系統管理員的管理入口網站</label>
                  <div>
                    <p>系統管理員的入口網站，用於設定和管理雲端資源、使用者帳戶、多租用戶方案、配額及定價</p>
                  </div>
                </div>
                <div class="item">
                  <input type="checkbox" id="box-3" />
                  <label for="box-3">服務管理 API</label>
                  <div>
                    <p>在管理入口網站中，成為各項功能之基礎的服務管理 API 是一種 REST API，有助於實現服務存取和各種整合案例，包括自訂入口網站和帳單系統。</p>
                  </div>
                </div>
                <div class="item">
                  <input type="checkbox" id="box-4" />
                  <label for="box-4">網站</label>
                  <div>
                    <p>與 Microsoft Azure 網站一致的這項服務有助於針對 ASP.NET、PHP 和 Node.js Web 應用程式，提供一套高密度、可擴充的共用虛擬主機平台。它包含了常見開放原始碼 Web 應用程式的可自訂 Web 應用程式庫，而且能與自訂開發之網站和應用程式的原始檔控制系統整合。</p>
                  </div>
                </div>
                <div class="item">
                  <input type="checkbox" id="box-5" />
                  <label for="box-5">虛擬機器</label>
                  <div>
                    <p>這項服務有助於為以 Windows Hyper-V 和 System Center 為基礎的 Windows 和 Linux 虛擬機器 (VM) 提供基礎架構即服務 (IaaS) 功能。它包含了 VM 範本庫、調整選項以及虛擬網路功能。</p>
                  </div>
                </div>
                <div class="item">
                  <input type="checkbox" id="box-6" />
                  <label for="box-6">Service Bus</label>
                  <div>
                    <p>與 Microsoft Azure Service Bus 一致的這項服務有助於在分散式應用程式之間提供可靠的訊息服務。它包含了佇列和主題架構的發行/訂閱功能。</p>
                  </div>
                </div>
                <div class="item">
                  <input type="checkbox" id="box-7" />
                  <label for="box-6">自動化和擴充性</label>
                  <div>
                    <p>Windows Azure Pack 也包含一些自動化並整合其他自訂服務到服務架構中的功能，包括 Runbook 編輯器和執行環境。</p>
                  </div>
                </div>
                <div class="item">
                  <input type="checkbox" id="box-8" />
                  <label for="box-6">大幅提升規模並改善恢復功能</label>
                  <div>
                    <p>本版 Hyper-V 提供舊版所不及的更大運算和存放資源，同時改進硬碟錯誤的處理方式。在 Windows Server 2012 中執行 Hyper-V 的電腦可設定多達 320 個邏輯處理器和 4 TB 的記憶體。虛擬機器可設定 64 個虛擬處理器和 1 TB 的記憶體。改進硬碟錯誤處理方式可提升虛擬化環境的恢復功能和穩定性。</p>
                  </div>
                </div>
                <div class="item">
                  <input type="checkbox" id="box-9" />
                  <label for="box-9">資料庫即服務</label>
                  <div>
                    <p>這項服務有助於為 SQL Server 和 MySQL 資料庫服務提供資料庫即服務 (DBaaS) 功能。網站服務中的 Web 應用程式和許多其他應用程式都能使用這項功能。</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="text">
              <h5>Windows Azure Pack實現價值</h5>
              <p>Windows Azure Pack以Windows Server 和 System Center為基礎，提供了多用戶、自助式的雲端，可和您現有的軟體及硬體投資相輔相成。</p>
              <div class="toggle-list">
                <div class="item">
                  <input type="checkbox" id="box-1" />
                  <label for="box-1">一致的 Windows Azure 自助式管理體驗</label>
                  <div>
                    <p>Windows Azure Pack 中的管理入口網站可讓您控制自身為租戶提供 IT 服務的方式，同時讓租戶得以在佈建和管理資源上享有豐富且自助式的使用者體驗。</p>
                    <ul>
                      <li>租戶專用的管理入口網站：這個入口網站和Windows Azure 中的 Windows Azure 開發人員入口網站體驗如出一轍，可為租戶提供自助式的佈建和管理功能。此外，它也運用了包含 Active Directory Federation Services 在內的多個驗證技術。</li>
                      <li>管理員專用的管理入口網站：這個入口網站可讓管理員設定和管理提供給租戶的服務和資源雲端。</li>
                    </ul>
                  </div>
                </div>
                <div class="item">
                  <input type="checkbox" id="box-2" />
                  <label for="box-2">高密度的 Web 應用程式代管</label>
                  <div>
                    <p>建立高密度、可擴充的 Web 應用程式主機服務，簡化多租戶、高密度網站代管服務的部署和管理。</p>
                    <ul>
                      <li>Web App Gallery 可讓租戶存取熱門 Web 應用程式，而 Windows Azure Pack 則會同時提供支援的 SQL 和MySQL 資料庫功能</li>
                      <li>支援多種應用程式架構，包括 ASP.NET、傳統 ASP、PHP 和 Node.js，更針對原始程式碼控制提供了完整的 GitHub、BitBucket、DropBox 和 Team Foundation Server 整合</li>
                    </ul>
                  </div>
                </div>
                <div class="item">
                  <input type="checkbox" id="box-3" />
                  <label for="box-3">基礎結構即服務，符合直覺，兼具彈性！</label>
                  <div>
                    <p>針對 Windows Server 和 Linux VM 建立基礎結構即服務產品，並且與軟體定義的網路功能整合，方便直接進行移轉和部署。</p>
                    <ul>
                      <li>虛擬網路可從租戶的現有網路設定和 IP架構進行簡單的移轉</li>
                      <li>虛擬機器角色能協助建立虛擬機器的動態擴充層，以提供負載平衡或彈性</li>
                      <li>租戶亦可從他們的入口網站連接虛擬主控台，以進行簡化的管理和設定</li>
                    </ul>
                  </div>
                </div>
                <div class="item">
                  <input type="checkbox" id="box-4" />
                  <label for="box-4">輕盈跨越不同雲端，IT 管理者整合的好幫手</label>
                  <div>
                    <p>Windows Azure Pack 中的服務匯流排服務可在無法進行同步遞交，但寄件者需要確保訊息最終能抵達收件者手中時，讓應用程式相互傳遞訊息。而應用程式可位於相同的雲端、跨越不同雲端，分別位於雲端和裝置，或是其他多種支援案例。</p>
                    <ul>
                      <li>佇列：服務匯流排佇列會提供非同步的緩衝處理，進而讓訊息收件者依據自身的步調處理訊息。因此，您可以更有效率地向外延展應用程式，並賦予您的架構更多彈性。</li>
                      <li>主題：服務匯流排主題和訂閱提供了豐富的發佈訂閱功能，讓多個訂閱者能在同一時間獨立擷取已發佈訊息資料流的已篩選或未篩選檢視。服務匯流排的主題和訂閱能協助您進行延展，以處理跨多個使用者和應用程式的大量訊息。</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="text">
              <h5>System Center 適用對象</h5>
              <p>Microsoft System Center 提供跨內部部署、服務提供者和 Microsoft Azure 環境的整合式管理，藉以實現 Microsoft Cloud Platform。</p>
              <ul>
                <li>專業人員和小型企業</li>
                <li>中型企業和大型企業</li>
              </ul>
            </div>
            <div class="text">
              <h5>產品支援聯絡窗口</h5>
              <p>技術支援的服務時間是星期一至五早上 9 點到晚上 6 點 (台灣地區時間)。</p>
            </div>
          </div>
          <div id="content3">
            <div class="text">
              <h5>相關網站連結</h5>
              <ul>
                <li>
                  <a
                    href="https://social.technet.microsoft.com/Forums/windowsserver/zh-tw/home?forum=winserverhyperv"
                  >Windows Server Hyper-V 論壇</a>
                </li>
                <li>
                  <a
                    href="https://docs.microsoft.com/en-us/previous-versions/windows/it-pro/windows-server-2008-R2-and-2008/cc753637(v=ws.10)?redirectedfrom=MSDN"
                  >Windows Server Hyper-V 技術文件庫</a>
                </li>
                <li>
                  <a
                    href="https://docs.microsoft.com/en-us/previous-versions/windows/it-pro/windows-server-2012-R2-and-2012/jj618319(v=ws.11)?redirectedfrom=MSDN"
                  >Windows Server Hyper-V 網路虛擬化閘道架構指南</a>
                </li>
                <li>
                  <a
                    href="http://channel9.msdn.com/Events/TechEd/NorthAmerica/2013/MDC-B380"
                  >Windows Server Hyper-V 網路虛擬化的深入剖析</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "@/assets/css/setting.scss";


.azure-pack-service {
  max-width: 100%;
  padding: 60px;

  h2 {
    font-size: 30px;
    color: $color_blue;
    text-align: center;
    position: relative;
    font-family: "Noto Sans TC", sans-serif;
  }

  h2:after {
    content: "...";
    position: absolute;
    left: 50%;
    bottom: -30px;
  }

  .tabbox {
    margin: 0 auto;
    width: 100%;
    text-align: center;
    padding: 60px 0px;
    .content > div {
      display: none;
      padding: 20px 0px;
    }

    input {
      display: none;
    }

    .tp {
      display: inline-block;
      padding: 5px 10px;
      font-weight: 600;
      text-align: center;
      font-family: "Montserrat", sans-serif;
      margin: 0;

      left: 0;
      top: 27px;
    }

    .tp:hover {
      color: $color_blue;
      cursor: pointer;
    }

    input:checked + .tp {
      background-color: $color_darkblue;
      color: #fff;
    }

    #tab1:checked ~ .content #content1,
    #tab2:checked ~ .content #content2,
    #tab3:checked ~ .content #content3 {
      display: block;
      text-align: left;
    }

    #content1,
    #content2,
    #content3 {
      border-top: 2px solid $color_darkblue;
      margin: 0 0 20px;
      .text {
        width: 100%;
        h5 {
          background-color: $color_lightblue2;
          color: $color_skyblue;
          padding: 15px;
          font-family: "Noto Sans TC", sans-serif;
        }

        h6 {
          color: $color_darkblue;
          font-family: "Noto Sans TC", sans-serif;
        }

        ul {
          padding-left: 20px;
          li {
            font-family: "Montserrat", sans-serif;
            &:before {
              content: "\2022";
              color: $color_skyblue;
              font-weight: bold;
              display: inline-block;
              width: 3p;
              margin-left: -1em;
            }
          }
        }
        p {
          font-size: 15px;
          font-family: "Montserrat", sans-serif;
        }
        table {
          width: 100%;
          margin: 30px 0;
          th {
            border-top: 2px solid $color_skyblue;
            border-bottom: 2px solid $color_skyblue;
            border-right: 2px solid $color_lightblue2;
            padding: 15px;
            color: $color_blue;
            &:last-child {
              border-right: none;
            }
          }

          td {
            border: 2px solid $color_lightblue2;
            font-size: 14px;
            padding: 10px;
            font-weight: 300;
            font-family: "Montserrat", sans-serif;
            &:last-child {
              border-right: none;
            }
            &:first-child {
              border-left: none;
              font-weight: 900;
            }
          }
        }

        span {
          color: $color_skyblue;
          font-family: "Montserrat", sans-serif;
        }
        .toggle-list {
          width: 100%;
          margin: 0 auto;
          text-align: center;
          margin-top: $gutter * 3;
          padding-bottom: $gutter;

          .item {
            width: 100%;
            margin-bottom: $gutter_half;
            input[type="checkbox"] {
              display: none;
              &:checked {
                & + label {
                  background-color: $color_skyblue;
                  color: white;
                  &:after {
                    content: "x";
                    color: white;
                  }
                  & + div {
                    display: block;
                  }
                }
              }
            }
            label {
              display: block;
              width: 100%;
              box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
              position: relative;
              padding: $gutter;
              background-color: white;
              color: #353535;
              margin: 0;
              cursor: pointer;
              text-align: left;
              -webkit-user-select: none;
              -khtml-user-select: none;
              -moz-user-select: none;
              -ms-user-select: none;
              user-select: none;
              font-family: "Montserrat", sans-serif;
              &:after {
                content: "+";
                font-weight: bold;
                position: absolute;
                right: $gutter;
                color: #353535;
              }
              &:hover {
                background-color: $color_skyblue;
                color: white;
                @include transition(background-color, 100ms, linear);
                &:after {
                  color: white;
                }
              }
            }
            div {
              display: none;
              border-top: none;
              padding: $gutter;
              background-color: $color_gray2;

              text-align: left;
            }
          }
        }
      }
    }
  }

  p {
    line-height: 25px;
    text-align: justify;
  }
}
@media (max-width: 768px) {
  .azure-pack-service {
    padding: 0px;
  }
}

@media (max-width: 414px) {
  .azure-pack-service {
    h2 {
      font-size: 26px;
    }
    .tabbox {
      .tp {
        font-size: 15px;
      }
    }
  }
}

@media (max-width: 375px) {
  .azure-pack-service {
    .tabbox {
      .tp {
        font-size: 15px;
      }
    }
  }
}
</style>