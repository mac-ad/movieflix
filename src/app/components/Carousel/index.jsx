import Swiper from "swiper/react";
import GridCard from "../Grid/GridCard";
import "./Carousel.css";
import { useRef, useEffect } from "react";

const Carousel = ({ items, type }) => {
  const swiperRef = useRef(null);

  useEffect(() => {
    const swiperContainer = swiperRef.current;

    if (swiperContainer) {
      Object.assign(swiperContainer, {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 10,
        injectStyles: [
          `
          .swiper-button-next,
          .swiper-button-prev {
            background-position: center;
            background-repeat: no-repeat;
            border-radius: 100%;
            color: red;
            height:15px;
            padding:.5em;
            width:15px;
            background:rgba(255,255,255,.8);
            color:black;
          }

          .swiper-button-next:hover,
          .swiper-button-prev:hover{
            background:var(--primary);
          }
          `,
        ],
        breakpoints: {
          550: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
          800: {
            slidesPerView: 4,
            slidesPerGroup: 4,
          },
          1024: {
            slidesPerView: 5,
          },
          1300: {
            slidesPerView: 6,
          },
          1500: {
            slidesPerView: 7,
          },
          1600: {
            slidesPerView: 8,
          },
        },
      });
    }
  }, []);

  return (
    <div className="carousel-container">
      <swiper-container ref={swiperRef} space-between="10" navigation="true">
        {items.map((item) => (
          <swiper-slide key={item.id}>
            <GridCard item={item} type={type} />
          </swiper-slide>
        ))}
      </swiper-container>
    </div>
  );
};

export default Carousel;
