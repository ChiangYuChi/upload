<template>
  <div class="service">
    <h2>{{info.service}}</h2>

    <div class="table-container">
      <table>
        <tr>
          <th>技術類別</th>
          <th>服務屬性</th>
          <th>服務時數</th>
          <th>價格</th>
        </tr>
        <tr>
          <td>{{info.skillType}}</td>
          <td>{{info.servicePropty}}</td>
          <td>{{info.duration}}</td>
          <td>{{info.price}}</td>
        </tr>
      </table>
    </div>
    <div class="toggle-list">
      <div class="item">
        <input type="checkbox" id="box-1" />
        <label for="box-1">企業需求</label>
        <div>
          <p>{{info.demand}}</p>
        </div>
      </div>
      <div class="item">
        <input type="checkbox" id="box-2" />
        <label for="box-2">特性、效益</label>
        <div>
          <p>{{info.strong1}}</p>
          <ul>
            <li>{{info.strong2}}</li>
            <li>{{info.strong3}}</li>
            <li>{{info.strong4}}</li>
            <li>{{info.strong5}}</li>
            <li>{{info.strong6}}</li>
            <li>{{info.strong7}}</li>
            <li>{{info.strong8}}</li>
            <li>{{info.strong9}}</li>
            <li>{{info.strong10}}</li>
            <li>{{info.strong11}}</li>
          </ul>
        </div>
      </div>
      <div class="item">
        <input type="checkbox" id="box-3" />
        <label for="box-3">服務內容</label>
        <div>
          <p>{{info.content1}}</p>
          <ul>
            <li>{{info.content2}}</li>
            <li>{{info.content3}}</li>
            <li>{{info.content4}}</li>
            <li>{{info.content5}}</li>
            <li>{{info.content6}}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: {
    info: {
      type: Object
    }
  }
};
</script>
<style lang="scss" >
@import "@/assets/css/setting.scss";

.service {
  max-width: 100%;
  padding: 0px 20px;

  h2 {
    font-size: 30px;
    color: $color_blue;
    text-align: center;
    position: relative;
    font-family: "Noto Sans TC", sans-serif;
  }

  .table-container {
    overflow-x: auto;
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
      ul {
        padding-left: 30px;
        box-sizing: border-box;
      }
    }
  }
}

@media (max-width: 1280px) {
  .service {
    width: 100%;
    padding: 0;
    h2 {
      font-size: 30px;
    }
    .tabbox {
      .tp {
        font-size: 15px;
      }
    }
  }
}

@media (max-width: 768px) {
  .service {
    h2 {
      font-size: 26px;
    }
  }
}

@media (max-width: 414px) {
  .service {
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
  .service {
    .tabbox {
      .tp {
        font-size: 15px;
      }
    }
  }
}
</style>
