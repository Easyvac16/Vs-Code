import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Slider({ mangas }) {


  function getCoverUrl(manga) {
    const coverArt = manga.relationships?.find(rel => rel.type === 'cover_art');
    if (coverArt && coverArt.attributes && coverArt.attributes.fileName) {
      return `https://uploads.mangadex.org/covers/${manga.id}/${coverArt.attributes.fileName}`;
    }
    return '';
  }

  return (
    <>
      <Swiper
        slidesPerView={6}
        spaceBetween={30}
        centeredSlides={false}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {mangas.map((manga, index) => (
          <SwiperSlide key={index}>
            <img src={getCoverUrl(manga)} alt={`Cover of ${manga.attributes.title.en || 'Manga'}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
