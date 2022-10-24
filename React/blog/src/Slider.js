import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper'
import "./App.css";
import SwiperCore, {
  EffectCoverflow,
  Pagination,
  Navigation
} from "swiper/core";

SwiperCore.use([EffectCoverflow, Pagination, Navigation]);

export default function App() {
  return (
    <div className="container">
      <div className="title_wrapper">
        <div className="reactLogo">
          <img src="images/react.png" />
        </div>
        <div className="title_">
          <span>React</span>Swiper Slider
        </div>
      </div>
      <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      ...
    </Swiper>
    </div>
  );
}
