<template>
  <div class="content-wrapper">
    <div class="content-box">
      <h1>DevFest Kaohsiung 2019</h1>

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
            活動時間<span>2019/12/07(周六) 09:00(+0800) ~ 18:00(+0800)</span>
          </p>
          <p>地點<span>高雄市數位內容創意中心 DAKUO / 高雄市鹽埕區七賢三路123號3樓</span></p>
          <p>主辦單位 <span>GDG Cloud Kaohsiung, GDG Tainan, GDG Kaohsiung</span></p>
          <p>贊助單位 <span>麥斯創新科技</span></p>
          <p>報名網址 <a href="https://gdg-kaohsiung.kktix.cc/events/devfest-kaohsiung-2019">https://gdg-kaohsiung.kktix.cc/events/devfest-kaohsiung-2019</a></p>
          
        </div>
        <div class="content">
          <p>活動內容</p>
          <div class="detail">
            <ul>
              <li>首次 DevFest Kaohsiung 將於 2019/12/7 (六) 在 高雄市數位內容創意中心 DAKUO 舉辦，與你一起暢談 Tensorflow、Kubernetes、Flutter、Kotlin... 等 Google 相關技術。活動分成三大主題區：雙軌議程、Code Lab 實作工作坊 (無程式基礎也 OK)、孩童程式體驗營 (跑 conf 咖從小養成，父母也能安心投入議程海)。
 </li>
            </ul>
          </div>
          
          <div class="pic">
            <img src="./../../assets/img/promo-3.png" alt />

            
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
      
        a{
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
      }
    }
  }
}
</style>