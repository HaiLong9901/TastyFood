import React, { useState } from 'react'
import img from '../assets/Image/spicy-red-soup-beef-noodle-bowl-wooden-table.jpg'
import Wrapper from '../components/common/Wrapper'
import { AiOutlineTag } from 'react-icons/ai'
function ProductDetail() {
  const [quantity, setQuantity] = useState(0)
  return (
    <Wrapper>
      <div className="my-[5rem]  flex flex-col lg:flex-row w-full justify-between">
        <div className="w-[45%] aspect-video">
          <img src={img} alt="banh" className="w-full h-full object-cover" />
        </div>
        <div className="w-[50%]">
          <div className="flex flex-col gap-[1rem] pb-[2rem] border-b-[.2rem] border-b-secondaryColor border-dashed">
            <h2 className="text-[4rem] font-bold text-primaryColor">Bún bò huế</h2>
            <h3 className="text-[2.5rem] font-bold text-orangeColor">
              10.000 <span className="text-[2rem] underline">đ</span>
            </h3>
            <div className="flex gap-[1rem]">
              <AiOutlineTag className="text-orangeColor text-[2rem]" />
              <span className="text-primaryColor italic line-through text-[1.8rem]">
                9.000 <span className="text-[1.6rem] underline">đ</span>
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
        </div>
      </div>
    </Wrapper>
  )
}

export default ProductDetail
