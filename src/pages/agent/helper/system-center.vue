<template>
  <div class="system-center-wrapper">
    <div class="system-center-service">
      <h2>Microsoft — System Center</h2>
      <div class="tabbox">
        <input checked id="tab1" name="tabs" type="radio" />
        <label class="tp" for="tab1">產品說明</label>
        <input id="tab2" name="tabs" type="radio" />
        <label class="tp" for="tab2">軟體授權</label>
        <input id="tab3" name="tabs" type="radio" />
        <label class="tp" for="tab3">相關連結</label>
        <br />
        <div class="content" style="background-color: white;">
          <div id="content1">
            <div class="text">
              <h5>System Center 簡介</h5>
              <p>Microsoft System Center 解決方案提供整合式管理，幫助您取得及彙整關於您的基礎結構、原則、處理程序與最佳作法的資訊，讓您的 IT 人員能夠建立便於管理的系統並自動化各種操作。</p>
            </div>
            <div class="text">
              <h5>System Center 功能</h5>
              <div class="toggle-list">
                <div class="item">
                  <input type="checkbox" id="box-1" />
                  <label for="box-1">App Controller</label>
                  <div>
                    <p>App Controller 提供通用的自助經驗，協助您輕鬆設定、部署及管理跨私有雲及公有雲的虛擬機器和服務。</p>
                    <ul>
                      <li>跨雲端佈建</li>
                      <li>VM 和應用程式自助</li>
                    </ul>
                  </div>
                </div>
                <div class="item">
                  <input type="checkbox" id="box-2" />
                  <label for="box-2">Data Protection Manager</label>
                  <div>
                    <p>Data Protection Manager 是企業備份系統。您可以使用 DPM 從來源位置備份 (複製) 資料到目標次要位置。若因為規劃或非預期問題，導致無法使用原始資料，則您可以從次要位置還原資料。您可以使用 DPM 從 Microsoft 伺服器和工作負載備份應用程式資料，以及從伺服器和用戶端電腦備份檔案資料。您可以建立完整備份、增量備份、差異備份及裸機備份，來完整還原系統。</p>
                    <ul>
                      <li>VM 和應用程式的集中式備份</li>
                      <li>VM 的項目層級復原</li>
                      <li>將備份資料封存至 Azure</li>
                    </ul>
                  </div>
                </div>
                <div class="item">
                  <input type="checkbox" id="box-3" />
                  <label for="box-3">Configuration Manager</label>
                  <div>
                    <p>Configuration Manager 藉由減少手動工作，讓您專注在高價值的專案上，將硬體和軟體的投資最大化，增加了 IT 產能和效率，還藉由在適當的時機提供正確的軟體，賦予使用者產能。Configuration Manager 可進行安全且可擴充的軟體部署、法規遵循設定管理，以及伺服器、桌上型電腦、筆記型電腦和行動裝置的全方位資產管理，進而協助您提供更有效的 IT 服務。</p>
                    <ul>
                      <li>彈性的作業系統部署</li>
                      <li>法規遵循和設定管理</li>
                      <li>資產智慧與盤點</li>
                      <li>應用程式傳遞</li>
                      <li>修補管理</li>
                      <li>用戶端健全狀況和監控</li>
                      <li>裝置管理</li>
                    </ul>
                  </div>
                </div>
                <div class="item">
                  <input type="checkbox" id="box-4" />
                  <label for="box-4">Endpoint Protection</label>
                  <div>
                    <p>Endpoint Protection 為 Microsoft 平台提供反惡意程式碼和安全性解決方案。</p>
                    <ul>
                      <li>惡意程式碼保護、身分識別和修復</li>
                    </ul>
                  </div>
                </div>
                <div class="item">
                  <input type="checkbox" id="box-5" />
                  <label for="box-5">Operations Manager</label>
                  <div>
                    <p>Operations Manager 讓您在單一主控台中即可監控許多電腦的服務、裝置和作業。操作員可以使用大量的檢視，顯示狀態、健全狀況及效能資訊，以及顯示針對可用性、效能、組態和安全性狀況所產生的警示，來快速洞悉在不同系統和工作負載執行的 IT 環境和 IT 服務。</p>
                    <ul>
                      <li>基礎結構及應用程式監控和警示</li>
                      <li>Microsoft 和協力廠商工作負載監控</li>
                      <li>包含 Azure 的雲端監控</li>
                      <li>系統狀態、健全狀況及效能資訊</li>
                    </ul>
                  </div>
                </div>
                <div class="item">
                  <input type="checkbox" id="box-6" />
                  <label for="box-6">Orchestrator</label>
                  <div>
                    <p>Orchestrator 是資料中心的工作流程管理解決方案。Orchestrator 可讓您將環境中的資源建立、監控及部署加以自動化。</p>
                    <ul>
                      <li>工作流程自動化</li>
                      <li>視覺化 Runbook 製作</li>
                      <li>跨平台工作流程整合</li>
                    </ul>
                  </div>
                </div>
                <div class="item">
                  <input type="checkbox" id="box-7" />
                  <label for="box-6">Service Manager</label>
                  <div>
                    <p>Service Manager 提供整合式平台，供您自動化並調整組織的 IT 服務管理最佳做法，例如那些在 Microsoft Operations Framework (MOF) 和 Information Technology Infrastructure Library (ITIL) 中的最佳做法。它會為意外和問題解決方式，還有為變更控制項及資產生命週期管理提供內建程序。</p>
                    <ul>
                      <li>服務類別目錄</li>
                      <li>自助要求入口網站</li>
                      <li>版本和服務等級協定管理</li>
                      <li>資料倉儲和報告</li>
                      <li>意外和變更要求</li>
                    </ul>
                  </div>
                </div>
                <div class="item">
                  <input type="checkbox" id="box-8" />
                  <label for="box-6">Virtual Machine Manager</label>
                  <div>
                    <p>Virtual Machine Manager 是虛擬化資料中心的管理解決方案，可讓您設定及管理虛擬主機、網路及儲存體資源，進而建立虛擬機器和服務，並將其部署到您建立的私有雲中。</p>
                    <ul>
                      <li>VM 和私有雲管理</li>
                      <li>儲存體和網路管理</li>
                      <li>異質性 VM 主機支援</li>
                      <li>以範本驅動的工作負載部署</li>
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
          <div id="content2">
            <div class="text">
              <h5>System Center 2012 伺服器授權管理</h5>
              <p>System Center 2012 伺服器授權管理大量的簡化了購買所需管理功能的過程，並能讓您從私有雲中充分獲得更多好處。 System Center 2012 伺服器管理解決方案有兩個版本：標準版與資料中心版。這兩個版本都包含管理私有雲所需 System Center 全部的功能。版本之間的差異僅在於虛擬機器的授權。只需要為管理的每台伺服器直接選擇所需的版本，隨後即可開始享受各項的功能，最終達成您的目標。</p>
              <table>
                <tr>
                  <th>服器授權版本</th>
                  <th>包含元件</th>
                  <th>每個可用虛擬機器授權的數量*</th>
                </tr>
                <tr>
                  <td>System Center 2012 資料中心版</td>
                  <td rowspan="8">
                    <ul>
                      <li>App Controller</li>
                      <li>Configuration Manager</li>
                      <li>Data Protection Manager</li>
                      <li>Endpoint Protection</li>
                      <li>Operations Manager</li>
                      <li>Orchestrator</li>
                    </ul>
                  </td>
                  <td rowspan="4">無限制</td>
                </tr>
                <tr></tr>
                <tr></tr>
                <tr></tr>
                <tr>
                  <td>
                    System Center 2012
                    標準版
                  </td>
                  <td rowspan="4">2</td>
                </tr>
              </table>
              <p>*虛擬機等同於受管理的作業系統環境（OSE）。</p>
            </div>
            <div class="text">
              <h5>System Center 2012 用戶端授權管理</h5>
              <p>
                System Center 2012 用戶端授權管理提供了簡單且成本低廉的方式，可供您管理和保護用戶端系統。用戶可以針對 System Center 2012 Configuration Manager、System Center 2012 Endpoint Protection，以及 System Center 2012 用戶端管理套件單獨購買用戶端授權管理。 Configuration Manager 與 Endpoint Protection 也可作為 Core CAL 套件的一部分進行授權，而用戶端管理套件則可作為 Enterprise CAL 套件提供的一部分。
                表1：伺服器授權管理的選項
              </p>
              <table>
                <tr>
                  <th>用户端授權版本</th>
                  <th>包含的元件</th>
                </tr>
                <tr>
                  <td>Configuration Manager 用户端授權管理</td>
                  <td>
                    <ul>
                      <li>Configuration Manager</li>
                      <li>Virtual Machine Manager</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>Endpoint Protection 訂閱</td>
                  <td>
                    <ul>
                      <li>Endpoint Protection</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>用戶端管理套件用戶端授權管理</td>
                  <td>
                    <ul>
                      <li>Data Protection Manager</li>
                      <li>Operations Manager</li>
                      <li>Orchestrator</li>
                      <li>Service Manager</li>
                    </ul>
                  </td>
                </tr>
              </table>
            </div>
          </div>
          <div id="content3">
            <div class="text">
              <h5>相關網站連結</h5>
              <ul>
                <li>
                  <a href="https://social.technet.microsoft.com/Forums/zh-tw/home">System Center 論壇</a>
                </li>

                <li>
                  <a
                    href="https://docs.microsoft.com/zh-tw/previous-versions/system-center/system-center-2012-R2/dn235548(v=sc.12)?redirectedfrom=MSDN"
                  >System Center 快速入門</a>
                </li>
                <li>
                  <a href="https://technet.microsoft.com/library/hh546760.aspx">System Center 虛擬實驗室</a>
                </li>
                <li>
                  <a
                    href="https://docs.microsoft.com/zh-tw/previous-versions/system-center/developer/cc817313(v=msdn.10)?redirectedfrom=MSDN"
                  >System Center 技術文件庫</a>
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

.system-center-service {
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
      margin: 0;
      left: 0;
      top: 27px;
      font-family: "Montserrat", sans-serif;
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
            font-family: "Montserrat", sans-serif;
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
              font-family: "Montserrat", sans-serif;
              cursor: pointer;
              text-align: left;
              -webkit-user-select: none;
              -khtml-user-select: none;
              -moz-user-select: none;
              -ms-user-select: none;
              user-select: none;
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
  .system-center-service {
    padding: 0px;
  }
}

@media (max-width: 414px) {
  .system-center-service {
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
  .system-center-service {
    .tabbox {
      .tp {
        font-size: 15px;
      }
    }
  }
}
</style>