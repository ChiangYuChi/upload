<template>
  <div class="hyperV-wrapper">
    <div class="hyperV-service">
      <h2>Microsoft — Windows Server Hyper-V</h2>
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
              <h5>微軟 Windows Server Hyper-V 簡介</h5>
              <p>Hyper-V 技術可以虛擬化硬體並提供環境，讓您在一台實體電腦上同時執行多個作業系統。Hyper-V 可讓您建立和管理虛擬機器及其資源。每個虛擬機器都是可以執行本身作業系統的獨立虛擬化電腦系統。虛擬機器中執行的作業系統稱為「客體作業系統」。</p>
            </div>
            <div class="text">
              <h5>微軟 Windows Server Hyper-V 功能</h5>
              <div class="toggle-list">
                <div class="item">
                  <input type="checkbox" id="box-1" />
                  <label for="box-1">用戶端 Hyper-V</label>
                  <div>
                    <p>現在 Windows 桌面作業系統版本也提供 Hyper-V 技術。可不用安裝伺服器作業系統就能使用 Hyper-V。</p>
                  </div>
                </div>
                <div class="item">
                  <input type="checkbox" id="box-2" />
                  <label for="box-2">動態記憶體</label>
                  <div>
                    <p>增強的動態記憶體功能包括設定記憶體下限以及「智慧型分頁處理」的支援，智慧型分頁處理是一種記憶體管理技術，可為將記憶體下限設為少於啟動記憶體的虛擬機器提供可靠的重新啟動經驗。</p>
                  </div>
                </div>
                <div class="item">
                  <input type="checkbox" id="box-3" />
                  <label for="box-3">Windows PowerShell 的 Hyper-V 模組</label>
                  <div>
                    <p>Windows PowerShell 的 Hyper-V 模組包含超過 160 個 Cmdlet 來管理 Hyper-V、虛擬機器和虛擬硬碟。Cmdlet 名稱與其他 Windows PowerShell Cmdlet (使用‘Get’和‘Set’這類動詞) 一致，讓熟悉 Windows PowerShell 的使用者可以更容易學習如何使用新的 Cmdlet。</p>
                  </div>
                </div>
                <div class="item">
                  <input type="checkbox" id="box-4" />
                  <label for="box-4">Hyper-V 複本</label>
                  <div>
                    <p>可在兩個站台的各個存放系統、叢集和資料中心之間複寫虛擬機器，以維護業務連續性並提供嚴重損壞修復。使用內建解決方案，將虛擬機器設定為複寫到另一台執行 Hyper-V 的伺服器。</p>
                  </div>
                </div>
                <div class="item">
                  <input type="checkbox" id="box-5" />
                  <label for="box-5">匯入虛擬機器</label>
                  <div>
                    <p>匯入程序已更新，可幫助您解決無法匯入虛擬機器的設定問題。可在手動複製檔案之後匯入虛擬機器，而不是先匯出虛擬機器。</p>
                  </div>
                </div>
                <div class="item">
                  <input type="checkbox" id="box-6" />
                  <label for="box-6">即時移轉</label>
                  <div>
                    <p>
                      可在非叢集環境中執行即時移轉，也可以同時執行一個以上的即時移轉，並使用更高的網路頻寬。
                      無論存放區是在中央 SMB 共用或是位於本機，都支援在非叢集環境中執行即時移轉。可使用更高的網路頻寬 (最高 10 GB) 更快速完成移轉。也可同時執行一個以上的即時移轉，快速移動多個虛擬機器。
                    </p>
                  </div>
                </div>
                <div class="item">
                  <input type="checkbox" id="box-7" />
                  <label for="box-6">資源計量</label>
                  <div>
                    <p>可追蹤和收集特定虛擬機器所用之實體處理器、記憶體、存放區和網路使用量的相關資料。可以使用此資料來進行容量計劃、監控不同商務單位或客戶的消耗量，或是擷取協助重新分配執行工作負載之成本的必要資料。</p>
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
                  <label for="box-9">簡化授權</label>
                  <div>
                    <p>Hyper-V Administrators 群組引入並實作為一個本機安全性群組。這個群組可以減少隸屬於本機 Administrators 群組的使用者數目，同時提供使用者對 Hyper-V 的存取權。Hyper-V Administrators 成員對於 Hyper-V 所有功能具有完整與不受限制的存取權。</p>
                  </div>
                </div>
                <div class="item">
                  <input type="checkbox" id="box-10" />
                  <label for="box-10">存放區移轉</label>
                  <div>
                    <p>可將支援單一根目錄 I/O 虛擬化 (SR-IOV) 的網路介面卡直接指派給虛擬機器。使用 SR-IOV 可最大化網路傳輸量，同時將網路延遲與處理網路流量所需的 CPU 額外負荷降至最低。</p>
                  </div>
                </div>
                <div class="item">
                  <input type="checkbox" id="box-11" />
                  <label for="box-11">SR-IOV</label>
                  <div>
                    <p>可將支援單一根目錄 I/O 虛擬化 (SR-IOV) 的網路介面卡直接指派給虛擬機器。使用 SR-IOV 可最大化網路傳輸量，同時將網路延遲與處理網路流量所需的 CPU 額外負荷降至最低。</p>
                  </div>
                </div>
                <div class="item">
                  <input type="checkbox" id="box-12" />
                  <label for="box-12">存放區移轉</label>
                  <div>
                    <p>將虛擬機器所用的虛擬硬碟移至其他實體存放區，並保持虛擬機器持續運作。這項新功能可讓您更容易管理虛擬機器所用的實體存放子系統。不再需要讓虛擬機器離線，就可以移動、維護或升級基本的實體存放區。</p>
                  </div>
                </div>
                <div class="item">
                  <input type="checkbox" id="box-13" />
                  <label for="box-13">SMB 3.0 檔案共用上的存放區</label>
                  <div>
                    <p>支援使用 SMB 3.0 檔案共用來提供虛擬機器存放區。以新的方式提供虛擬機器存放區，而不需使用存放區域網路 (SAN)。可將檔案共用指定為虛擬機器的存放位置。</p>
                  </div>
                </div>
                <div class="item">
                  <input type="checkbox" id="box-14" />
                  <label for="box-14">虛擬光纖通道</label>
                  <div>
                    <p>可從在虛擬機器中執行的客體作業系統，直接連線到「光纖通道」存放區。也可以從客體作業系統內部直接設定叢集 (有時稱為客體叢集)。</p>
                  </div>
                </div>
                <div class="item">
                  <input type="checkbox" id="box-15" />
                  <label for="box-15">虛擬硬碟格式</label>
                  <div>
                    <p>引入新的格式以配合不斷發展的需求，同時利用存放硬體的創新技術。新的虛擬硬碟格式 (VHDX) 支援多達 64 TB 的存放容量。它也可以針對斷電造成的損毀提供內建保護，同時防止某些大型磁區實體磁碟出現效能降低的情形。</p>
                  </div>
                </div>
                <div class="item">
                  <input type="checkbox" id="box-16" />
                  <label for="box-16">虛擬機器快照</label>
                  <div>
                    <p>您不再需要先關機、關閉虛擬機器或將虛擬機器設為已儲存狀態就能復原存放空間。刪除虛擬機器快照之後，原先快照所耗用的存放空間現在可供使用，且虛擬機器會維持在運作中。</p>
                  </div>
                </div>
                <div class="item">
                  <input type="checkbox" id="box-17" />
                  <label for="box-17">虛擬 NUMA</label>
                  <div>
                    <p>
                      較新的作業系統與高效能應用程式 (例如 SQL Server) 所包含的最佳化功能可識別電腦的 NUMA 拓撲，在排程執行緒或配置記憶體時考慮 NUMA 來提升效能。虛擬 NUMA 功能可以讓虛擬機器 (例如 SQL 伺服器) 中執行的客體作業系統與 NUMA 感知應用程式利用這些效能最佳化功能。
                      客體作業系統現在可以使用虛擬 NUMA 拓撲。預設的虛擬 NUMA 拓撲已最佳化為符合實體電腦的 NUMA 拓撲。
                    </p>
                  </div>
                </div>
                <div class="item">
                  <input type="checkbox" id="box-18" />
                  <label for="box-18">虛擬交換器</label>
                  <div>
                    <p>
                      更新的虛擬交換器結構提供開放的架構，讓協力廠商可以在虛擬交換器中加入新的功能。這兩個可延伸 Windows 網路功能之公用平台的用途如下：
                      NDIS 篩選驅動程式可用來監控或修改 Windows 的網路封包。
                      WFP 圖說文字驅動程式允許獨立軟體廠商 (ISV) 建立驅動程式來篩選和修改 TCP/IP 封包、監控或授權連線、篩選受 IP 安全性 (IPsec) 保護的流量，以及篩選遠端程序呼叫 (RPC)。
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="text">
              <h5>微軟 Windows Server Hyper-V 適用對象</h5>
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
              <h6>如何購買微軟 Office 365?</h6>
              <table>
                <tr>
                  <th></th>
                  <th>Office 365小型企業進階版</th>
                  <th>Office 365中型企業進階版</th>
                  <th>Office 365企業版</th>
                </tr>
                <tr>
                  <td>零售通路</td>
                  <td>●</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>線上購買</td>
                  <td>●</td>
                  <td>●</td>
                  <td>●</td>
                </tr>
                <tr>
                  <td>Open 大量授權</td>
                  <td></td>
                  <td>●</td>
                  <td>●</td>
                </tr>
                <tr>
                  <td>Open 大量授權</td>
                  <td></td>
                  <td></td>
                  <td>●</td>
                </tr>
              </table>
              <ul>
                <li>購買 Office 365 的客戶可以將 Office 365 授權指派給居住於全球各地的使用者，唯以下國家/地區除外：古巴、 伊朗、朝鮮民主主義人民共和國、蘇丹以及敘利亞。Lync Online 方案 2 僅限澳門特別行政區使用。</li>
              </ul>
            </div>
            <div class="text">
              <h6>微軟 Office 365 各方案說明</h6>
              <table>
                <tr>
                  <th></th>
                  <th>Exchange Online Plan 1</th>
                  <th>Office 365 ProPlus</th>
                  <th>Office 365 企業版 (方案E1)</th>
                  <th>Office 365 企業版(方案E3)</th>
                  <th>Office 中型企業版</th>
                  <th>Office 365 小型企業進階版(SBP)</th>
                </tr>
                <tr>
                  <td>使用人數上限</td>
                  <td>無特定上限</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>300人</td>
                  <td>25人</td>
                </tr>
                <tr>
                  <td>建議企業規模</td>
                  <td>無特定上限</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>250人以下</td>
                  <td>10人</td>
                </tr>
                <tr>
                  <td>企業級電子郵件、共用行事曆、行動郵件、通訊錄、每位使用者50GB 的儲存空間、享有專屬的網域名稱。</td>
                  <td>●</td>
                  <td></td>
                  <td>●</td>
                  <td>●</td>
                  <td>●</td>
                  <td>●</td>
                </tr>
                <tr>
                  <td>反惡意程式碼保護與反垃圾郵件過濾。</td>
                  <td>●</td>
                  <td></td>
                  <td>●</td>
                  <td>●</td>
                  <td>●</td>
                  <td>●</td>
                </tr>
                <tr>
                  <td>進階電子郵件封存(無上限儲存空間)、進階法規遵循設定。</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>●</td>
                  <td>●</td>
                  <td>●</td>
                </tr>
                <tr>
                  <td>會議：高畫質網路視訊會議、遠端桌面分享、即時訊息</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>網站：可做為對外網站以及企業內小組網站作為文件管理空間。</td>
                  <td></td>
                  <td></td>
                  <td>●</td>
                  <td>●</td>
                  <td>●</td>
                  <td>●</td>
                </tr>
                <tr>
                  <td>個人網站儲存空間25G。</td>
                  <td></td>
                  <td></td>
                  <td>●</td>
                  <td>●</td>
                  <td>●</td>
                  <td>●</td>
                </tr>
                <tr>
                  <td>Office 應用程式：可下載最新Office 離線使用。每位使用者享有5台 PC/ Mac +5 台指定行動裝置的使用權。</td>
                  <td></td>
                  <td>●</td>
                  <td></td>
                  <td>●</td>
                  <td>●</td>
                  <td>●</td>
                </tr>
                <tr>
                  <td>管理：與企業Active Directory 目錄管理服務整合。</td>
                  <td>●</td>
                  <td></td>
                  <td>●</td>
                  <td>●</td>
                  <td>●</td>
                  <td>●</td>
                </tr>
                <tr>
                  <td>網路線上訂閱(未稅)</td>
                  <td>月繳$130</td>
                  <td>月繳$415</td>
                  <td>月繳$255</td>
                  <td>月繳$655</td>
                  <td>月繳$480</td>
                  <td>
                    月繳$485
                    年繳$4860
                  </td>
                </tr>
                <tr>
                  <td>Open 大量授權(預付一年)</td>
                  <td>$1,540</td>
                  <td>$4,960</td>
                  <td>$3,070</td>
                  <td>$7,780</td>
                  <td>$5,760</td>
                  <td>無</td>
                </tr>
              </table>
              <ul>
                <li>中型企業版與小型企業版不得與其他方案或是個別方案混合訂閱。</li>
                <li>企業版(E1/E3)可與個別方案(Exchange Online, SharePoint Online, Lync Online, Office 365 ProPlus) 搭配混合訂閱。</li>
              </ul>
              <p>*價格僅列出參考。最新價網或經銷商報價為主。</p>
              <p>*僅列出最常訂閱之項目，請到微軟官網參考所有方案。</p>
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



.hyperV-service {
  max-width: 100%;
  padding: 60px;

  h2 {
    font-size: 30px;
    color: $color_blue;
    text-align: center;
    position: relative;
    font-family: 'Noto Sans TC', sans-serif;
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
          font-family: 'Noto Sans TC', sans-serif;
        }

        h6 {
          color: $color_darkblue;
            font-family: 'Noto Sans TC', sans-serif;
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
     font-family: "Montserrat", sans-serif;
  }
}


@media (max-width: 768px) {
  .hyperV-service {
    padding: 0px;
  }
}

@media (max-width: 414px) {
  .hyperV-service {
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
  .hyperV-service {
    .tabbox {
      .tp {
        font-size: 15px;
      }
    }
  }
}

</style>