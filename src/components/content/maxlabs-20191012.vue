<template>
  <div class="content-wrapper">
    <div class="content-box">
      <h1>麥斯創新在 Lenovo 2019 Transform 3.0 推出 ALTO 自動化部屬平台</h1>

      <div class="share">
        <span>
          <i class="fas fa-thumbs-up"></i>讚
        </span>
        <span>
          <i class="fas fa-share-alt"></i>分享
        </span>
        <span>成為朋友中第一個說讚的人。</span>
      </div>
      <div class="activity">
        <div class="pic">
          <img src="./../../assets/img/maxlabs_logo_28060.png" alt />
        </div>
        <div class="time">
          <p>
            主辦單位
            <span>Lenovo</span>
          </p>
          <p>
            報導連結
            <a href="https://ithome.com.tw/pr/133948">https://ithome.com.tw/pr/133948</a>
          </p>
        </div>
        <div class="content">
          <p>活動內容</p>
          <div class="detail">
            <ul>
              <li>
                Lenovo 主辦的 TRANSFORM 3.0 臺北場活動，廣邀 7 家夥伴共襄盛舉，各自呈現與 Lenovo 合力打造的「Smarter Workspace」、「Smarter Businesses」等創新智慧方案，搭配 Lenovo 自家 Data Center Group 和 Intelligent Device Group 的「Smarter Devices」展示，顯現充沛的智慧轉型能量。
                麥斯創新於其中推出 ALTO 自動化部屬平台。
              </li>
            </ul>
          </div>

          <div class="pic">
            <p>
              現今許多企業積極導入先進數位技術，期望打造現代化 IT 系統架構，實踐智慧轉型目標；但不少企業的轉型歷程，明顯側重資料中心端基礎建設的改造，殊不知唯有針對 Workforce 與 Workplace一併落實智慧化，才能讓轉型綜效達到最大化。
              著眼於此，Lenovo 以「智能為一切可能」（Smarter Technology for All）為使命，致力推動各式裝置、終端設備與數位科技的整合，形成了獨特的智慧翻轉策略與創新方案，以協助企業大幅提升員工生產力、倍增營運績效。
              Lenovo 深知單憑一己力量，不易達成「智能為一切可能」，因而積極延攬 Solution Partner。日前由 Lenovo 主辦的 TRANSFORM 3.0 臺北場活動，便廣邀 7 家夥伴共襄盛舉，各自呈現與 Lenovo 合力打造的「Smarter Workspace」、「Smarter Businesses」等創新智慧方案，搭配 Lenovo 自家 Data Center Group 和 Intelligent Device Group 的「Smarter Devices」展示，顯現充沛的智慧轉型能量。
            </p>
            <p>著眼於此，Lenovo 以「智能為一切可能」（Smarter Technology for All）為使命，致力推動各式裝置、終端設備與數位科技的整合，形成了獨特的智慧翻轉策略與創新方案，以協助企業大幅提升員工生產力、倍增營運績效。</p>
            <p>Lenovo 深知單憑一己力量，不易達成「智能為一切可能」，因而積極延攬 Solution Partner。日前由 Lenovo 主辦的 TRANSFORM 3.0 臺北場活動，便廣邀 7 家夥伴共襄盛舉，各自呈現與 Lenovo 合力打造的「Smarter Workspace」、「Smarter Businesses」等創新智慧方案，搭配 Lenovo 自家 Data Center Group 和 Intelligent Device Group 的「Smarter Devices」展示，顯現充沛的智慧轉型能量。</p>
            <p>
              麥斯創新推出自行開發的 ALTO Desk Management 自動化部署平臺。此平臺集結自動化部署、更新、軟體派送、資產管理和安全性掃瞄等豐富功能，可幫助企業減少人力工時成本，提高作業系統部署升級效率；以主要功能「部署」而論，能夠滿足備份及還原、作業系統安裝、驅動程式安裝、基本設定（網域／Printer／Outlook）、User Profile 連接等作業需求，讓部署的產能（1人／天）從過去 6~8 臺 PC大增為 15~20 臺。
              針對一些不適合配置伺服器的場域，麥斯創新巧妙運用 Lenovo ThinkCentre M920 Tiny 袖珍型電腦或 ThinkCentre Nano M90n 迷你電腦，搭配 ALTO Desk Management 建立網路部署升級的核心。
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "@/assets/css/setting.scss";
.content-wrapper {
  width: 100%;

  font-family: "Montserrat", sans-serif;
}
.content-box {
  width: 100%;
  h1 {
    font-size: 24px;
    text-align: left;
    border-bottom: 2px solid $color_skyblue;
    padding-bottom: 10px;
    margin-bottom: 10px;
  }
  .share {
    margin-bottom: 10px;
    span {
      &:nth-child(1),
      &:nth-child(2) {
        background-color: rgb(24, 120, 242);
        color: white;
        font-size: 10px;
        margin: 2px;
        padding: 5px;
      }
      &:last-child {
        font-size: 8px;
        padding: 5px;
      }
    }
  }
  .activity {
    display: flex;
    flex-wrap: wrap;

    .pic {
      width: 20%;

      img {
        width: 100%;
        vertical-align: middle;
      }
    }

    .time {
      width: 78%;
      display: flex;
      flex-direction: column;
      border-left: 1px solid $color_gray2;

      p {
        color: $color_blue;
        span {
          color: $color_gray1;
          margin-left: 5px;
        }
        display: flex;
        flex-direction: row;
        text-align: left;
        padding-left: 20px;

        a {
          text-decoration: none;
          margin-left: 5px;
        }
      }
      margin-left: 20px;
    }

    .content {
      width: 100%;

      p {
        color: $color_blue;
        text-align: left;
        padding: 0;
      }

      .detail {
        ul {
          padding-left: 20px;
          li {
            list-style: circle;
          }
        }
      }

      .pic {
        width: 100%;
        img {
          width: 100%;
        }
        p{text-align: justify;}
      }
    }
  }
}
</style>