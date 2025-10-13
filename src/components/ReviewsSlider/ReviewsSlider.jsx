import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import s from "./ReviewsSlider.module.css";
import { getAvatarData } from "../../utils/getAvatarData";

export default function ReviewsSlider({ reviews = [] }) {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={20}
      slidesPerView={1}
      loop
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      speed={600}
      pagination={{ clickable: true }}
      navigation
      breakpoints={{
        768: { slidesPerView: 2 },
        1440: { slidesPerView: 3 },
      }}
      className={s.swiper}
    >
      {reviews.map((review) => {
        const name = review.user?.name || review.name || "Анонім";
        const date = new Date(review.createdAt).toLocaleDateString("uk-UA", {
          year: "numeric",
          month: "long",
          day: "numeric",
        });
        const { firstLetter, bgColor } = getAvatarData(name);

        return (
          <SwiperSlide
            key={review._id}
            className={s.slide}
            aria-label={`Відгук від ${name}`}
          >
            <div className={s.card}>
              <div className={s.header}>
                <div className={s.avatar} style={{ backgroundColor: bgColor }}>
                  {firstLetter}
                </div>
                <div className={s.info}>
                  <p className={s.name}>{name}</p>
                  <p className={s.date}>{date}</p>
                </div>
              </div>
              <p className={s.text}>{review.text}</p>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
