import React from 'react';
import { Link } from 'react-router-dom'; // Імпорт Link з react-router-dom
import { Swiper, SwiperSlide } from 'swiper/react';
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
            <Link to={`/manga/${manga.id}`}>
              <img src={getCoverUrl(manga)} alt={`Cover of ${manga.attributes.title.en || 'Manga'}`} />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
