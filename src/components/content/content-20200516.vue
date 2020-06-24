<template>
  <div class="content-wrapper">
    <div class="content-box">
      <h1>【限時促銷】微軟 OFFICE 365 促銷方案活動開跑</h1>
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
            <span>即日起至2020/6/30止</span>
          </p>
          <p>活動對象</p>
        </div>
        <div class="content">
          <p>活動內容</p>
          <div class="detail">
            <ul>
              <li>麥斯創新同時提供給新客戶更多的選擇,只要您是新用戶，之前沒有使用過微軟OFFICE365 的企業,如果30人以上,即可以享有買1年送半年的機會</li>
              <li>如果人數超過100人，麥斯創新再送您半年</li>
            </ul>
          </div>
          <div class="pic">
            <img src="./../../assets/img/office365-promo.jpg" alt />
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

      .activity {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        .pic {
          display: none;
        }
        .time {
          width: 100%;
          flex-direction: column;
          border-left: none;
          margin: 0px;

          p {
            color: $color_blue;
            span {
              color: $color_gray1;
            }
            display: flex;
            flex-direction: column;
            text-align: left;
            padding-left: 0px;
          }
        }
      }
    }
  }
}
</style>