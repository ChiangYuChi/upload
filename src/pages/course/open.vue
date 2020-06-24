<template>
  <div class="open-course-wrapper">
    <div class="banner">
      <Banner v-for="item in bannerData" v-bind="item" :key="item"></Banner>
    </div>
    <div class="course-intro">
      <div class="intro-container">
        <div class="bar">
          <div class="item">
            <div class="icon">
              <img src="./../../assets/img/course-1.png" alt />
            </div>

            <p>無懼風雨，隨時隨地參與線上課程</p>
          </div>
          <div class="item">
            <div class="icon">
              <img src="./../../assets/img/course-2.png" alt />
            </div>
            <p>學你所需，結合理論與實務</p>
          </div>
          <div class="item">
            <div class="icon">
              <img src="./../../assets/img/course-3.png" alt />
            </div>
            <p>循序漸進，豐富有趣的內容</p>
          </div>
        </div>
        <h3>職場進修 麥斯創新線上學習課程 (E-Learning)</h3>
        <section>
          <h4>數位科技時代 培養職場硬實力</h4>
          <p>想跟進數位科技浪潮，又擔心不知如何踏出第一步? 麥斯創新科技看準未來工業 4.0 發展核心所需，以培訓台灣資訊專業人才為旨，推出數位學習課程- Online Learning – 為企業培育人才及個人職場進修培養硬實力。</p>
        </section>
        <section>
          <h4>企業內部培訓 提升巿場競爭力</h4>
          <p>數位科技催生了各行各業的新視野，企業數位轉型勢在必行，因此對具備產業知識與經驗的內部員工培訓，將有助於提高企業獲利能力。</p>
        </section>
        <section>
          <h4>個人職場進修 轉職加薪跳板</h4>
          <p>無論是上班族、房屋仲介、傳產工廠老闆、醫生、甚至高中生，都能藉此提升自我專業能力，也是為自己加薪的最佳跳板，因此與時俱進掌握數位時代中的關鍵技能，不僅能讓您在眾多求職者中脫穎而出，搖身一變成為企業心目中的搶手人才，也能讓您工作也能越換越好，躋身百萬高薪人才之列。</p>
        </section>
        <h3>麥斯創新線上學習課程特色</h3>
        <section>
          <h4>循序漸進由淺入深 零基礎無痛入門</h4>
          <p>課程包含跨領域人才首選必學的程式語言系列課程、前端與資安系列課程及專案管理系列課程等等，內容由淺入深，即使是新手或是後菜鳥學員，皆能由初級到進階，一步一步提升專業技能、實現職涯目標。</p>
        </section>
        <section>
          <h4>結合理論及實務</h4>
          <p>術業有專攻，除了理論外，麥斯創新著重 Hand-on 實作經驗傳承，由在雲端整合、專案系統開發建置導入及資料分析等各領域中極具實戰經驗的講師搭配案例教學，讓學員將所學更貼近實務應用。</p>
        </section>
        <section>
          <h4>客製化服務 助力企業 AI技術落地實際環境</h4>
          <p>依企業內訓需求調整課程內容，以助企業培育關鍵人才，將專業技術落地實際場域，打造創新生態環境，完成數位轉型目標提升企業競爭力。</p>
        </section>
      </div>
    </div>
    <div class="hot-course">
      <div class="course-container">
        <div class="title">
          <div class="icon">
            <img src="./../../assets/img/course-4.png" alt />
          </div>
          <h5>本週熱門課程</h5>
          <div class="more">
            <a href="#">更多熱門課程</a>
            <i class="fas fa-arrow-right"></i>
          </div>
        </div>
        <div class="items">
          <div class="item" v-for="(item, index) in courseData" :key="index">
            <div class="pic">
              <img :src="item.images" alt />
              <div class="ribbon">上課囉</div>
            </div>
            <div class="text">
              <div class="title">{{ item.title }}</div>
              <div class="comment">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                {{item.comments}} 則評價
              </div>
              <div class="duration">課時 {{item.duration}} 小時</div>
              <div class="student">同學 {{item.student}} 人</div>
              <div class="price">NT$ {{item.price}}</div>
            </div>
          </div>
        </div>
        <div class="watch-more">
          <div class="horziontal-line"></div>
          <a href>
            <button>觀看更多課程</button>
          </a>
          <div class="horziontal-line"></div>
        </div>
      </div>
    </div>
    <div class="lecturer">
      <div class="title">
        <h3>我們的講師</h3>
        <p>來自各方的業界專家，在 麥斯創新與你分享他們的才華密技</p>
      </div>
      <div class="teacher">
        <div
          class="item"
          v-for="(item,index) in teacherData"
          :key="index"
          :style="{ backgroundImage:`url(${item.img})` }"
        >
          <div class="text">
            <div class="content">
              <div class="name">{{item.teacherName}}</div>
              <div class="course-name">{{item.courseName}}</div>
              <div class="teacher-description">{{item.teacherDescription}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="wishing-well">
      <div class="well-container">
        <div class="watch-more">
          <div class="well">
            <h3>課程許願</h3>
            <p>在麥斯創新找不到你想要學習的課程嗎？</p>
            <a href>
              <button>課程許願池</button>
            </a>
          </div>

          <div class="well">
            <h3>成為麥斯好老師</h3>
            <p>想要和世界各地的人分享你的知識與技能嗎？</p>
            <a href>
              <button>我要開課</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Banner from "../../components/banner";
export default {
  components: {
    Banner
  },
  data() {
    return {
      bannerData: [
        {
          line1: "麥斯創新 2020 公開課程",
          line2: "數位科技時代 培養職場硬實力"
        }
      ],
      courseData: [
        {
          title: "職場必備的 Word 關鍵技法 - 入門",
          images: require("./../../assets/img/course-5.jpg"),
          comments: 100,
          student: 100,
          price: 2000,
          duration: 23
        },
        {
          title: "動畫互動網頁程式入門 (HTML/CSS/JS)",
          images: require("./../../assets/img/course-6.jpg"),
          comments: 150,
          student: 87,
          price: 2487,
          duration: 29
        },
        {
          title: "程式設計基本概念",
          images: require("./../../assets/img/course-7.jpg"),
          comments: 129,
          student: 87,
          price: 2487,
          duration: 29
        }
      ],
      teacherData: [
        {
          img: require("./../../assets/img/course-8.jpg"),
          teacherName: "海苔熊",
          courseName: "動畫互動網頁程式入門",
          teacherDescription:
            "動畫與平面設計起家，持續做到整體品牌形象CI設計到UI/UX APP介面設計，目前專攻網頁動畫與互動，研究如何以網頁的技巧實踐 MotionGraphics的精神，以設計的角度主宰網頁，讓網頁不只是能用、資訊呈現，更要有趣、好玩。"
        },
        {
          img: require("./../../assets/img/course-9.jpg"),
          teacherName: "Mary Jane",
          courseName: "職場必備的 Word 關鍵技法 - 入門",
          teacherDescription:
            "這堂課真的很棒，真的很適合想要入門 Word 的新手；這樣的花費得到對於 Word 如此的認識，真的是物超所值，也可以讓人更想了解Excel可以應用到甚麼樣的地步"
        },
        {
          img: require("./../../assets/img/course-10.jpg"),
          teacherName: "小白",
          courseName: "程式設計基本概念",
          teacherDescription:
            "撰寫程式可以讓你可以學習怎麼樣把一個複雜的問題切分成一個個小問題，在這個過程中不但可以訓練邏輯思考、解決問題的能力。是一個很好培養自學能力和團隊合作能力的機會"
        },
        {
          img: require("./../../assets/img/course-11.jpg"),
          teacherName: "大白",
          courseName: "Microsoft Azure 架構規劃",
          teacherDescription:
            "完成此課程後，您將具備應用Azure中的資源來設計規劃商業應用所需環境的能力，提供相關服務的建議，並實現最佳化性能、規模、監控和適當的調整，同時擁有參加AZ-301認證考試所需的技能與知識。"
        }
      ]
    };
  }
};
</script>
<style lang="scss">
@import "@/assets/css/setting.scss";
.banner {
  background-image: url("./../../assets/img/course-bg.jpg");
  background-size: cover;
  background-position-y: 90%;
  background-repeat: no-repeat;
  font-family: "Montserrat", sans-serif;
  .banner-container {
    width: 100%;
    height: 520px;
    position: relative;
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    .text {
      width: 95%;
      font-family: "Montserrat", sans-serif;
      h1 {
        font-size: 40px;
        width: 60%;
        box-sizing: border-box;
        color: white;
        margin: 5px auto;
        text-align: center;
        font-weight: 400;
        border-bottom: 2px solid $color_darkblue;
        padding-bottom: 20px;
        box-sizing: border-box;
        position: relative;
      }

      h3 {
        text-align: center;
        line-height: 60px;
        color: white;
      }
    }
  }
}
@media (max-width: 414px) {
  .banner {
    .banner-container {
      .text {
        h1 {
          font-size: 30px;
          width: 100%;
        }

        h3 {
          font-size: 25px;
        }
      }
    }
  }
}
</style>
<style lang="scss" scoped>
@import "@/assets/css/setting.scss";

.course-intro {
  width: 100%;
  .intro-container {
    width: 80%;
    margin: 0 auto;
    padding: 30px;
    box-sizing: border-box;
    .bar {
      width: 100%;
      display: flex;
      border: 2px solid rgb(197, 197, 197);
      border-radius: 3px;
      padding: 30px;
      box-sizing: border-box;
      margin-bottom: 30px;

      .item {
        width: 0;
        flex-grow: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        border-right: 1px solid $color_gray1;

        .icon {
          width: 15%;
          img {
            width: 100%;
          }
        }
        p {
          font-size: 20px;
          font-family: "Montserrat", sans-serif;
          color: $color_gray1;
          padding: 20px 20px 0 0;
          box-sizing: border-box;
          margin-left: 10px;
        }

        &:last-child {
          border: none;
        }
      }
    }
    h3 {
      font-weight: bold;
      font-size: 25px;
    }
    section {
      padding: 15px 0 15px 0;
      box-sizing: border-box;
      text-align: justify;
      h4 {
        font-size: 20px;
      }
      p {
        font-family: "Montserrat", sans-serif;
        font-size: 18px;
        color: $color_gray1;
      }
    }
  }
}
.hot-course {
  width: 100%;
  .course-container {
    width: 80%;
    margin: 0 auto;
    padding: 0 30px;
    box-sizing: border-box;
    position: relative;
    .title {
      width: 100%;
      display: flex;
      position: relative;
      .icon {
        width: 5%;
        img {
          width: 100%;
        }
      }
      h5 {
        padding-top: 25px;
        color: rgb(84, 84, 84);
      }
      .more {
        padding-top: 25px;
        position: absolute;
        right: 15px;

        a {
          text-decoration: none;
        }
      }
    }
    .items {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      .item {
        width: 30%;

        margin: 15px;
        border-bottom: 10px solid rgb(0, 181, 153);

        .pic {
          width: 100%;
          transition: transform 0.2s ease;
          overflow: hidden;
          cursor: pointer;
          position: relative;
          img {
            width: 100%;
            height: 200px;
            transform: scale(1, 1);
            transition: all 1s ease-out;

            &:hover {
              transform: scale(1.2, 1.2);
            }
          }
          .ribbon {
            background-color: rgb(0, 182, 154);
            position: absolute;
            top: 10%;
            right: -15%;
            width: 150px;
            overflow: hidden;
            transform: rotate(45deg);
            text-align: right;
            padding-right: 60px;
            box-sizing: border-box;
            color: white;
          }
        }

        .text {
          padding: 5px 10px;
          width: 100%;
          position: relative;
          line-height: 30px;

          .title {
            font-size: 20px;
            font-weight: 800;
          }

          .comment {
            color: $color_gray1;
            .fas {
              color: $color_orange;
            }
          }

          .price {
            position: absolute;
            right: 20px;
            bottom: 5%;
            color: rgb(0, 181, 153);
            font-size: 24px;
          }

          .title,
          .student,
          .price,
          .comments,
          .duration {
            font-family: "Noto Sans TC", sans-serif;
          }
        }
      }
    }
    .watch-more {
      padding: 70px 0 70px 0;
      display: flex;
      justify-content: center;
      align-items: center;

      .horziontal-line {
        transform: translateY(-50%);
        width: 30%;
        height: 2px;
        background: rgb(204, 204, 204);
        margin: 50px;
      }

      button {
        width: 250px;
        height: 50px;
        background-color: rgb(74, 142, 104);
        color: white;
        border: none;
        transition: all 1s;
        letter-spacing: 6px;
        border-radius: 2px;

        &:focus {
          outline: none;
        }
        &:hover {
          font-size: 17px;
        }
      }
    }
  }
}
.lecturer {
  width: 100%;
  .title {
    width: 80%;
    margin: 0 auto;
    text-align: center;
    font-weight: 500;
    h3 {
      font-size: 33px;
      color: rgb(84, 84, 84);
      line-height: 40px;
    }
    p {
      font-size: 23px;
      color: rgb(84, 84, 84);
    }
  }

  .teacher {
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;

    .item {
      width: 25%;
      height: 350px;
      margin: 15px;
      border-bottom: 10px solid rgb(0, 181, 153);
      background-size: cover;
      background-position-x: 35%;
      overflow: hidden;
      cursor: pointer;
      .text {
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.4);
        color: white;
        position: relative;

        .content {
          width: 100%;
          height: 50%;
          position: absolute;
          bottom: -30%;
          left: 0%;
          transition: all 1s;
          text-align: center;

          .name,
          .course-name,
          .teacher-description {
            font-family: "Montserrat", sans-serif;
            line-height: 25px;
          }
          .name {
            font-size: 25px;
          }

          .teacher-description {
            text-align: justify;
            padding: 20px;
          }
        }

        &:hover {
          .content {
            bottom: 30%;
          }
        }
      }
    }
  }
}
.wishing-well {
  width: 100%;

  .well-container {
    width: 80%;
    margin: 0 auto;
    padding: 0 30px;
    box-sizing: border-box;

    .watch-more {
      padding: 70px 0 70px 0;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      .well {
        width: 40%;
        text-align: center;

        &:first-child {
          border-right: 2px solid rgb(204, 204, 204);
        }
        p {
          font-family: "Montserrat", sans-serif;
          font-weight: 300;
          letter-spacing: 2px;
          color: $color_gray1;
        }

        button {
          width: 250px;
          height: 50px;
          background-color: rgb(0, 181, 153);
          color: white;
          border: none;
          transition: all 1s;
          letter-spacing: 6px;
          margin: 20px;
          font-family: "Montserrat", sans-serif;
          font-size: 20px;
          border-radius: 2px;

          &:focus {
            outline: none;
          }
          &:hover {
            font-size: 23px;
          }
        }
      }
    }
  }
}

@media (max-width: 1280px) {
  .course-intro {
    .intro-container {
      .bar {
        .item {
          padding-left: 20px;
          box-sizing: border-box;
        }
      }
    }
  }
}
@media (max-width: 1024px) {
  .course-intro {
    .intro-container {
      .bar {
        .item {
          .icon {
            width: 50%;
          }
        }
      }
    }
  }
  .lecturer {
    .teacher {
      flex-direction: row;
      flex-wrap: wrap;
      .item {
        width: 45%;
      }
    }
  }
}

@media (max-width: 768px) {
  .course-intro {
    .intro-container {
      .bar {
        .item {
          display: flex;
          flex-direction: column;

          justify-content: center;
          padding: 0;
          .icon {
            width: 50%;

            margin: 0 auto;
          }
          p {
            font-size: 16px;
            text-align: center;
          }
        }
      }
    }
  }
  .hot-course {
    .course-container {
      width: 90%;
      padding: 0;
      .title {
        padding-left: 5px;
        h5 {
          padding-top: 5px;
        }
        .more {
          padding-top: 15px;
        }
      }
      .items {
        flex-direction: column;
        .item {
          width: 65%;
          margin: 20px auto;
          .pic {
            .ribbon {
              top: 20%;
              width: 200px;
              padding-right: 85px;
            }
          }
        }
      }
    }
  }
}

@media (max-width: 767px) {
  .course-intro {
    display: none;
  }

  .hot-course {
    .course-container {
      .title {
        .icon {
          display: none;
        }
        h5 {
          padding-top: 15px;
          margin: 0 auto;
        }
        .more {
          display: none;
        }
      }
    }
  }

  .wishing-well {
    .well-container {
      width: 100%;
    }
  }
}

@media (max-width: 414px) {
  
  .hot-course {
    .course-container {
      

      .items {
        .item {
          width: 85%;
          margin: 20px auto;
          .pic {
            .ribbon {
              top: 10%;
              width: 150px;
              padding-right: 55px;
            }
          }
        }
      }
    }
  }

  .lecturer {
    .teacher {
      .item {
        width: 100%;
      }
    }
  }

  .wishing-well {
    width: 100%;

    .well-container {
      .watch-more {
        flex-direction: column;
        .well {
          width: 90%;
          margin-bottom: 15px;
          padding-bottom: 15px;

          &:first-child {
            border-right: none;
            border-bottom: 2px solid rgb(204, 204, 204);
          }

          button {
            width: 200px;
            margin: 0 auto;
          }
        }
      }
    }
  }
}
</style>