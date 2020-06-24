<template>
  <div class="card">
    <div class="slider-wrap">
      <swiper :options="swiperOption">
        <swiper-slide class="carousel">
          <div class="slide slide_one">
            <div class="slide-content">
              <h3>{{line1}}</h3>
              <p>
                <span>{{line2}}</span>
              </p>
              <p>
                <i class="fas fa-check"></i>
                {{line3}} &nbsp;&nbsp;
                <i class="fas fa-check"></i>
                {{line4}}&nbsp;&nbsp;
                <i class="fas fa-check"></i>
                {{line5}}
              </p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide class="carousel">
          <div class="slide slide_two">
            <div class="slide-content">
              <h3>{{line6}}</h3>
              <p>
                <span>{{line7}}</span>
                <span>{{line8}}</span>
              </p>
            </div>
          </div>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>
<script>
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
  name: "Slider",
  components: {
    Swiper,
    SwiperSlide
  },
  directives: {
    swiper: directive
  },
  data() {
    return {
      swiperOption: {
        //swiper3
        autoplay: 1000,
        speed: 1000,
        sildesPerView: 1,
        spaceBetween: 0,
        loop: true,
        autoplay: {
          delay: 3500
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      }
    };
  },
  props: {
    line1: [String],
    line2: [String],
    line3: [String],
    line4: [String],
    line5: [String],
    line6: [String],
    line7: [String],
    line8: [String]
  }
};
</script>
