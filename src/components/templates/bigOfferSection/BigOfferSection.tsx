'use client';
import React from 'react';
import styles from './BigOfferSection.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import BigOfferCard from '@/components/atoms/BigOfferCard';

const BigOfferSection = () => {
  return (
    <div className={styles['big-offer-section']}>
      <h2 className={styles['big-offer-section__heading']}>Big Offer</h2>
      <p className={styles['big-offer-section__subheading']}>
        For in this week, take your food, buy your best one.
      </p>
      <Swiper
        modules={[Pagination, Navigation, Scrollbar, A11y, Autoplay]}
        centeredSlides={true}
        onSlideChange={() => console.log('slide change')}
        initialSlide={1}
        loop
        breakpoints={{
          0: {
            slidesPerView: 1.1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 1.5,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 2.5,
            spaceBetween: 40,
          },
        }}
        onSwiper={(swiper) => console.log(swiper)}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        scrollbar={{ draggable: false }}
      >
        <SwiperSlide>
          <BigOfferCard image="/images/image_bigOffer_1.png" link="/offers/1" />
        </SwiperSlide>
        <SwiperSlide>
          <BigOfferCard image="/images/image_bigOffer_2.png" link="/offers/2" />
        </SwiperSlide>
        <SwiperSlide>
          <BigOfferCard image="/images/image_bigOffer_3.png" link="/offers/3" />
        </SwiperSlide>
        <SwiperSlide>
          <BigOfferCard image="/images/image_bigOffer_1.png" link="/offers/1" />
        </SwiperSlide>
        <SwiperSlide>
          <BigOfferCard image="/images/image_bigOffer_2.png" link="/offers/2" />
        </SwiperSlide>
        <SwiperSlide>
          <BigOfferCard image="/images/image_bigOffer_3.png" link="/offers/3" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BigOfferSection;
