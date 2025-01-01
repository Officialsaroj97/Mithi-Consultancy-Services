// ClientsSection.js
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "./ClientsSection.css"; // Your custom styles
import Belimo from "../assets/Belimo.png";
import cit from "../assets/cit.png";
import gra from "../assets/gra.png";
import Lg from "../assets/Lg.png";
import lil from "../assets/lil.png";
import myob from "../assets/myob.png";
import old from "../assets/old.png";
import tru from "../assets/tru.png";

const ClientsSection = () => {
  return (
    <section id="clients" className="clients section light-background">
      <div className="container" data-aos="zoom-in">
        <div className="swiper-container">
          <Swiper
            modules={[Autoplay, Pagination]}
            loop={true}
            speed={600}
            autoplay={{ delay: 5000 }}
            pagination={{ clickable: true }}
            breakpoints={{
              320: { slidesPerView: 2, spaceBetween: 40 },
              480: { slidesPerView: 3, spaceBetween: 60 },
              640: { slidesPerView: 4, spaceBetween: 80 },
              992: { slidesPerView: 5, spaceBetween: 120 },
              1200: { slidesPerView: 6, spaceBetween: 120 },
            }}
          >
            <SwiperSlide>
              <img src={Belimo} alt="Client 1" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={cit} alt="Client 1" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={gra} alt="Client 1" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Lg} alt="Client 1" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={lil} alt="Client 1" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={myob} alt="Client 1" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={old} alt="Client 1" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={tru} alt="Client 1" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
