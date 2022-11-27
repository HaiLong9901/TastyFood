import React from 'react'
import Slider from '../components/Slider'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Lazy, Autoplay, EffectFade } from 'swiper'
import 'swiper/css'
import 'swiper/css/lazy'
import 'swiper/css/effect-fade'
import {
  FaRegCopy,
  FaShoppingCart,
  FaAngleDoubleRight,
  FaSearch,
  FaShippingFas,
  FaWallet,
  FaShippingFast,
} from 'react-icons/fa'
import img from '../assets/Image/spicy-red-soup-beef-noodle-bowl-wooden-table.jpg'
import img2 from '../assets/Image/delicious-ice-cream.jpg'
import img3 from '../assets/Image/quail-eggs-stew-with-belly-pork-chinese-food.jpg'
import cream from '../assets/Image/cream_icon.png'
import coffee from '../assets/Image/coffee_icon.png'
import cake from '../assets/Image/cake_icon.png'
import burgar from '../assets/Image/burgar_icon.png'
import cake1 from '../assets/Image/cake1.png'
import cake2 from '../assets/Image/cake.png'
import Title from '../components/common/Title'
import Wrapper from '../components/common/Wrapper'
import ProductCard from '../components/product/ProductCard'

function Home() {
  return (
    <div>
      <div className="bg-primaryColor lg:h-[calc(100vh-8rem)] h-[calc(50vh-8rem)]">
        <Swiper
          modules={[Autoplay, EffectFade]}
          spaceBetween={0}
          slidesPerView={1}
          effect={'fade'}
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
          <div className="flex flex-wrap lg:gap-[2.5rem] md:gap-[4.5rem] gap-[3.5rem] mt-[5rem]">
            <ProductCard photo={img} name="Bún bò Huế" price="12000" sale="10000" />
            <ProductCard photo={img2} name="Kem tươi" price="12000" sale="10000" />
            <ProductCard photo={img3} name="Canh sườn kho" price="12000" sale="10000" />
            <ProductCard photo={img} name="Bún bò Huế" price="12000" sale="10000" />
            <ProductCard photo={img2} name="Kem tươi" price="12000" sale="10000" />
            <ProductCard photo={img3} name="Canh sườn kho" price="12000" sale="10000" />
            <ProductCard photo={img} name="bun bo" price="12000" sale="10000" />
            <ProductCard photo={img2} name="Kem tươi" price="12000" sale="10000" />
            <ProductCard photo={img3} name="Canh sườn kho" price="12000" sale="10000" />
            <ProductCard photo={img} name="Bún bò Huế" price="12000" sale="10000" />
          </div>
        </Wrapper>
      </div>
      <div className="py-[5rem] bg-yellowColor">
        <Wrapper>
          <div>
            <div className="flex justify-between">
              <div className="w-[19%] aspect-[4/3] border-[.2rem] border-secondaryColor border-solid rounded-[1rem] flex flex-col gap-[1rem] items-center py-[1rem] cursor-pointer relative">
                <img src={cream} alt="cream" className="w-[30%]" />
                <h3 className="text-[1.6rem] text-secondaryColor font-bold absolute bottom-[1rem] ">Voucher siu hot</h3>
              </div>
              <div className="w-[19%] aspect-[4/3] border-[.2rem] border-secondaryColor border-solid rounded-[1rem] flex flex-col gap-[1rem] items-center py-[1rem] cursor-pointer relative">
                <img src={cream} alt="cream" className="w-[30%]" />
                <h3 className="text-[1.6rem] text-secondaryColor font-bold absolute bottom-[1rem] ">Kem mát lạnh</h3>
              </div>
              <div className="w-[19%] aspect-[4/3] border-[.2rem] border-secondaryColor border-solid rounded-[1rem] flex flex-col gap-[1rem] items-center py-[1rem] cursor-pointer relative">
                <img src={coffee} alt="cream" className="w-[30%]" />
                <h3 className="text-[1.6rem] text-secondaryColor font-bold absolute bottom-[1rem] ">
                  Giải khát siu ngon
                </h3>
              </div>
              <div className="w-[19%] aspect-[4/3] border-[.2rem] border-secondaryColor border-solid rounded-[1rem] flex flex-col gap-[1rem] items-center py-[1rem] cursor-pointer relative">
                <img src={cake} alt="cream" className="w-[40%]" />
                <h3 className="text-[1.6rem] text-secondaryColor font-bold absolute bottom-[1rem] ">
                  Bánh kem cực đỉnh
                </h3>
              </div>
              <div className="w-[19%] aspect-[4/3] border-[.2rem] border-secondaryColor border-solid rounded-[1rem] flex flex-col gap-[1rem] items-center py-[1rem] cursor-pointer relative">
                <img src={burgar} alt="cream" className="w-[50%]" />
                <h3 className="text-[1.6rem] text-secondaryColor font-bold absolute bottom-[1rem] ">Ăn vặt cực đã</h3>
              </div>
            </div>
            <div className="flex justify-between mt-[2rem]">
              <div className="w-[24%] bg-white aspect-video rounded-[1rem] p-[1.5rem] flex flex-col justify-between">
                <div className="flex justify-between items-center">
                  <h2 className="text-[2.5rem] text-orangeColor font-bold">KHAITRUONG123</h2>
                  <FaRegCopy className="text-[2.5rem] text-orangeColor cursor-pointer" />
                </div>
                <p className="text-[1.6rem] text-primaryColor italic">
                  (*) Giảm 10% cho hóa đơn từ 250k. Áp dụng cho các sản phẩm thuộc danh mục Kem, Trà sữa.
                </p>
              </div>
              <div className="w-[24%] bg-white aspect-video rounded-[1rem] p-[1.5rem] flex flex-col justify-between">
                <div className="flex justify-between items-center">
                  <h2 className="text-[2.5rem] text-orangeColor font-bold">KHAITRUONG123</h2>
                  <FaRegCopy className="text-[2.5rem] text-orangeColor cursor-pointer" />
                </div>
                <p className="text-[1.6rem] text-primaryColor italic">
                  (*) Giảm 10% cho hóa đơn từ 250k. Áp dụng cho các sản phẩm thuộc danh mục Kem, Trà sữa.
                </p>
              </div>
              <div className="w-[24%] bg-white aspect-video rounded-[1rem] p-[1.5rem] flex flex-col justify-between">
                <div className="flex justify-between items-center">
                  <h2 className="text-[2.5rem] text-orangeColor font-bold">KHAITRUONG123</h2>
                  <FaRegCopy className="text-[2.5rem] text-orangeColor cursor-pointer" />
                </div>
                <p className="text-[1.6rem] text-primaryColor italic">
                  (*) Giảm 10% cho hóa đơn từ 250k. Áp dụng cho các sản phẩm thuộc danh mục Kem, Trà sữa.
                </p>
              </div>
              <div className="w-[24%] bg-white aspect-video rounded-[1rem] p-[1.5rem] flex flex-col justify-between">
                <div className="flex justify-between items-center">
                  <h2 className="text-[2.5rem] text-orangeColor font-bold">KHAITRUONG123</h2>
                  <FaRegCopy className="text-[2.5rem] text-orangeColor cursor-pointer" />
                </div>
                <p className="text-[1.6rem] text-primaryColor italic">
                  (*) Giảm 10% cho hóa đơn từ 250k. Áp dụng cho các sản phẩm thuộc danh mục Kem, Trà sữa.
                </p>
              </div>
            </div>
          </div>
        </Wrapper>
      </div>
      <div>
        <Wrapper>
          <div className="mt-[2rem] relative">
            <img src={cake2} alt="cake" className="absolute w-[50%] rotate-[-45deg] right-[-15%] top-[30%]" />
            <img src={cake1} alt="cake" className="absolute w-[30%] rotate-[-20deg] right-0 top-[10%]" />
            <div className="flex justify-center">
              <Title title="Về chúng tôi" />
            </div>
            <div className="flex mt-[5rem] flex-wrap gap-[5rem]">
              <div className="w-[35%] flex items-start">
                <div>
                  <h2 className="text-[20rem] text-orangeColor leading-none">1</h2>
                </div>
                <div>
                  <h3 className="text-[5rem] text-primaryColor font-dancingScript leading-tight">
                    Thương hiệu hàng đầu
                  </h3>
                  <article className="text-[1.8rem] text-primaryColor leading-[2]">
                    Là một trong những thương hiệu trà sữa được ưa chuộng tại Đài Loan. Năm 2017 là tròn 4 năm Ding Tea
                    phát triển tại Việt Nam với menu gần 100 hương vị khác nhau đáp ứng mọi độ tuổi khách hàng tại Việt
                    Nam
                  </article>
                </div>
              </div>
              <div className="w-[35%] flex items-start">
                <div>
                  <h2 className="text-[20rem] text-orangeColor leading-none">2</h2>
                </div>
                <div>
                  <h3 className="text-[5rem] text-primaryColor font-dancingScript leading-tight">Hệ thống bậc nhất</h3>
                  <article className="text-[1.8rem] text-primaryColor leading-[2]">
                    Với sự phát triển mạnh mẽ, tại Việt Nam Ding Tea đã có tới gần 200 cửa hàng trải khắp các tỉnh
                    thành. Đảm bảo khả năng phục vụ khách hàng ở mọi lứa tuổi ở khắp mọi nơi tại Việt Nam.
                  </article>
                </div>
              </div>
              <div className="w-[35%] flex items-start">
                <div>
                  <h2 className="text-[20rem] text-orangeColor leading-none">3</h2>
                </div>
                <div>
                  <h3 className="text-[5rem] text-primaryColor font-dancingScript leading-tight">Chuyên nghiệp</h3>
                  <article className="text-[1.8rem] text-primaryColor leading-[2]">
                    Với đội ngũ nhân viên được đào tạo bài bàn, chuyên nghiệp. Am hiểu về các nguyên liệu , thành phần
                    pha chế, chất lượng an toàn thực phẩm đặt lên hàng đầu. Cùng với đó là sự tươi vui & tôn trọng dành
                    cho mọi khách hàng.
                  </article>
                </div>
              </div>
              <div className="w-[35%] flex items-start">
                <div>
                  <h2 className="text-[20rem] text-orangeColor leading-none">4</h2>
                </div>
                <div>
                  <h3 className="text-[5rem] text-primaryColor font-dancingScript leading-tight">Phát triển mạnh mẽ</h3>
                  <article className="text-[1.8rem] text-primaryColor leading-[2]">
                    Không chỉ tạo ra những hương vị trà sữa phù hợp với người Việt để lại chất “đậm” riêng Ding Tea còn
                    tạo nên những hệ thống công nghệ ứng dụng mua, giao hàng mang lại tính trải nghiệm cao cho khách
                    hàng.
                  </article>
                </div>
              </div>
            </div>
          </div>
        </Wrapper>
      </div>
      <div className="bg-yellowColor py-[5rem] my-[5rem]">
        <Wrapper>
          <div className="flex flex-col items-center">
            <Title title="Cách thức đặt hàng" />
            <div className="w-full flex mt-[5rem]">
              <div className="w-[20%] flex flex-col gap-[2rem]">
                <div className="w-full aspect-square border-secondaryColor border-solid border-[.5rem] rounded-[50%] flex justify-center items-center">
                  <FaSearch className="text-[10rem] text-secondaryColor" />
                </div>
                <h2 className="text-[1.8rem] text-secondaryColor text-center font-bold">Xem và chọn hàng</h2>
              </div>
              <div className="w-[calc(20%/3)] flex justify-center items-center">
                <FaAngleDoubleRight className="text-[5rem] text-secondaryColor" />
              </div>
              <div className="w-[20%] flex flex-col gap-[2rem]">
                <div className="w-full aspect-square border-secondaryColor border-solid border-[.5rem] rounded-[50%] flex justify-center items-center">
                  <FaShoppingCart className="text-[10rem] text-secondaryColor" />
                </div>
                <h2 className="text-[1.8rem] text-secondaryColor text-center font-bold">Đặt hàng</h2>
              </div>
              <div className="w-[calc(20%/3)] flex justify-center items-center">
                <FaAngleDoubleRight className="text-[5rem] text-secondaryColor" />
              </div>
              <div className="w-[20%] flex flex-col gap-[2rem]">
                <div className="w-full aspect-square border-secondaryColor border-solid border-[.5rem] rounded-[50%] flex justify-center items-center">
                  <FaShippingFast className="text-[10rem] text-secondaryColor" />
                </div>
                <h2 className="text-[1.8rem] text-secondaryColor text-center font-bold">Vận chuyển</h2>
              </div>
              <div className="w-[calc(20%/3)] flex justify-center items-center">
                <FaAngleDoubleRight className="text-[5rem] text-secondaryColor" />
              </div>
              <div className="w-[20%] flex flex-col gap-[2rem]">
                <div className="w-full aspect-square border-secondaryColor border-solid border-[.5rem] rounded-[50%] flex justify-center items-center">
                  <FaWallet className="text-[10rem] text-secondaryColor" />
                </div>
                <h2 className="text-[1.8rem] text-secondaryColor text-center font-bold">Thanh toán</h2>
              </div>
            </div>
          </div>
        </Wrapper>
      </div>
    </div>
  )
}

export default Home
