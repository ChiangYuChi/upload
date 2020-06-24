<template>
  <div class="content-wrapper">
    <div class="content-box">
      <h1>麥斯創新官網初版上線</h1>

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
            <span>2020/05/16</span>
          </p>
         
        </div>
        <div class="content">
         
          <div class="detail">
            <ul>
              <li>麥斯創新成立一周年，很多客戶一直期待的官方網站終於上線了，還有很多的項目仍在努力中，歡迎參觀並給予指教</li>
             
            </ul>
          </div>
          <div class="pic">
         
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
</style>