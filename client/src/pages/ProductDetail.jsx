import React, { useState } from 'react'
import img from '../assets/Image/spicy-red-soup-beef-noodle-bowl-wooden-table.jpg'
import Wrapper from '../components/common/Wrapper'
import { AiOutlineTag } from 'react-icons/ai'
import { FaPaperPlane } from 'react-icons/fa'
import StarRate from '../components/common/StarRate'
import ReviewBox from '../components/common/ReviewBox'
import { USER_DEFAULT_AVATAR } from '../shared/Constants'
function ProductDetail() {
  const [quantity, setQuantity] = useState(0)
  return (
    <Wrapper>
      <div className="my-[5rem]">
        <div className="flex flex-col lg:flex-row w-full justify-between">
          <div className="w-full lg:w-[45%] aspect-video rounded-[.5rem] overflow-hidden">
            <img src={img} alt="banh" className="w-full h-full object-cover" />
          </div>
          <div className="w-full lg:w-[50%]">
            <div className="flex flex-col gap-[1rem] pb-[2rem] border-b-[.2rem] border-b-secondaryColor border-dashed">
              <h2 className="text-[4rem] font-bold text-primaryColor">Bún bò huế</h2>
              <h3 className="text-[2.5rem] font-bold text-orangeColor">
                9.000 <span className="text-[2rem] underline">đ</span>
              </h3>
              <div className="flex gap-[1rem]">
                <AiOutlineTag className="text-orangeColor text-[2rem]" />
                <span className="text-primaryColor italic line-through text-[1.8rem]">
                  10.000 <span className="text-[1.6rem] underline">đ</span>
                </span>
              </div>
            </div>
            <p className="text-primaryColor text-[1.6rem] py-[1rem]">
              Bún bò là món ăn đặc trưng của người Huế, được lan rộng ra khắp vùng miền với tên bún bò Huế, hãy theo dõi
              bài viết để biết cách nấu bún bò Huế như thế nào nhé.
            </p>
            <div className="flex gap-[1rem] my-[1rem] items-center">
              <h4 className="text-[1.6rem]">Số lượng</h4>
              <div className="flex gap-[.5rem]">
                <div
                  className="text-[1.6rem] font-bold flex items-center justify-center w-[4rem] aspect-square bg-secondaryColor text-white rounded-[.5rem] cursor-pointer"
                  onClick={() => {
                    if (quantity === 0) return
                    setQuantity((prev) => prev - 1)
                  }}
                >
                  -
                </div>
                <div className="text-[1.6rem] font-bold flex items-center justify-center w-[4rem] aspect-square border-solid border-secondaryColor border-[.1rem] text-secondaryColor rounded-[.5rem]">
                  {quantity}
                </div>
                <div
                  className="text-[1.6rem] font-bold flex items-center justify-center w-[4rem] aspect-square bg-secondaryColor text-white rounded-[.5rem] cursor-pointer"
                  onClick={() => {
                    setQuantity((prev) => prev + 1)
                  }}
                >
                  +
                </div>
              </div>
            </div>
            <div className="py-[2rem] flex items-center justify-center lg:justify-start">
              <span className="text-whiteColor text-[1.6rem] font-bold bg-orangeColor text-white py-[1rem] px-[3rem] rounded-[2rem] hover:bg-transparent hover:text-orangeColor border-solid border-orangeColor border-[.1rem] cursor-pointer box-border duration-300">
                Thêm vào giỏ hàng
              </span>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[50%]">
          <h2 className="text-[2.4rem] text-secondaryColor font-bold my-[2rem]">Nhận xét sản phẩm</h2>
          <ReviewBox
            imageURL={USER_DEFAULT_AVATAR}
            rate={3}
            review="Bún bò là món ăn đặc trưng của người Huế, được lan rộng ra khắp vùng miền với tên bún bò Huế, hãy theo dõi bài viết để biết cách nấu bún bò Huế như thế nào nhé."
            name="Nguyen Van A"
          />
        </div>
      </div>
    </Wrapper>
  )
}

export default ProductDetail
