<template>
  <div class="content-wrapper">
    <div class="content-box">
      <h1>雲端辦公新潮流 Microsoft雲端辦公方案 資安問題免煩惱</h1>

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
          <img src="./../../assets/img/microsoft-logo.jpg" alt />
        </div>
        <div class="time">
          <p>
            活動時間
            <span>時間 5/21</span>
          </p>
          <p>線上直播</p>
        </div>
        <div class="content">
          <p>活動內容</p>
          <div class="detail">
            <ul>
              <li>大部份的企業已開始實施「在家工作」，員工在家工作的時間，主管及人資要如何能及時了解員工上下班的打卡地點及狀況?在家上班的員工當用自己的電腦遠端存取公司的資料，該如何做好資訊安全，我們提供了安全居家辦公技巧，快手刀來報名。</li>
            </ul>
          </div>
          <p>活動對象</p>
          <div class="detail">
            <ul>
              <li>企業 IT 管理人員</li>
            </ul>
          </div>
          <div class="pic">
            <img src="./../../assets/img/microsoft-live.jpg" alt />

            <img src="./../../assets/img/microsoft-live-3.jpg" alt />
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
  }
  .share {
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
        }
        display: flex;
        flex-direction: column;
        text-align: left;
        padding-left: 20px;
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
      }
    }
  }
}

@media (max-width: 414px) {
  .content-wrapper {
    width: 90%;
    margin: 0 auto;
    .content-box {
      h1 {
        font-size: 15px;
        margin-bottom: 10px;
      }
      .share {
        span {
          &:nth-child(1),
          &:nth-child(2) {
            font-size: 13px;

            padding: 0px;
          }
        }
      }
    }
  }
}
</style>