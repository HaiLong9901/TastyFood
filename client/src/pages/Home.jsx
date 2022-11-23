import React from 'react'
import Slider from '../components/Slider'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Lazy, Autoplay, EffectFade } from 'swiper'
import 'swiper/css'
import 'swiper/css/lazy'
import 'swiper/css/effect-fade'
import img from '../assets/Image/spicy-red-soup-beef-noodle-bowl-wooden-table.jpg'
import img2 from '../assets/Image/delicious-ice-cream.jpg'
import img3 from '../assets/Image/quail-eggs-stew-with-belly-pork-chinese-food.jpg'
import Title from '../components/common/Title'
import Wrapper from '../components/common/Wrapper'

function Home() {
  return (
    <div>
      <div className="bg-primaryColor lg:h-[calc(100vh-8rem)] h-[calc(50vh-8rem)]">
        <Swiper
          modules={[Autoplay, EffectFade, Lazy]}
          spaceBetween={0}
          slidesPerView={1}
          effect={'fade'}
          lazy={true}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
        >
          <SwiperSlide>
            <Slider background={img} title="Phở bò" desc="gcsjdbjblsbcjbkjsdkcjksjdcbskdckjrskcksjdjcs" />
          </SwiperSlide>
          <SwiperSlide>
            <Slider background={img2} title="Kem tươi" desc="gcsjdbjblsbcjbkjsdkcjksjdcbskdckjrskcksjdjcs" />
          </SwiperSlide>
          <SwiperSlide>
            <Slider background={img3} title="Mì tôm" desc="gcsjdbjblsbcjbkjsdkcjksjdcbskdckjrskcksjdjcs" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="py-[2rem]">
        <Wrapper>
          <div className="flex justify-center">
            <Title title="Món nổi bật" />
          </div>
        </Wrapper>
      </div>
    </div>
  )
}

export default Home
