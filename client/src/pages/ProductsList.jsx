import React, { useState } from 'react'
import Wrapper from '../components/common/Wrapper'
import { useGetAllProductsQuery } from '../features/apis/apiSlice'
import img from '../assets/Image/spicy-red-soup-beef-noodle-bowl-wooden-table.jpg'
import ProductCard from '../components/product/ProductCard'
import { FaAngleRight, FaAngleDown } from 'react-icons/fa'

function ProductsList() {
  const [openFilterBox, setOpenFilterBox] = useState(false)
  const { data: productsList, isSuccess: isSuccessList, isFetching: isFetchingList } = useGetAllProductsQuery()
  let ProductsList
  if (isFetchingList) {
    ProductsList = (
      <>
        {Array.apply(Array(8)).map((product) => (
          <div className="md:w-[22rem] w-[16rem] aspect-[3/4] animate-pulse bg-yelowColor"></div>
        ))}
      </>
    )
  } else if (isSuccessList) {
    ProductsList = (
      <>
        {productsList.results?.map((product) => (
          <ProductCard key={product.key} {...product} />
        ))}
      </>
    )
  }
  return (
    <Wrapper>
      <div className="flex my-[5rem] justify-between flex-col-reverse lg:flex-row gap-[2rem]">
        <div className="flex flex-wrap w-full lg:w-[80%] gap-[3rem] md:gap-[4rem] lg:gap-[2rem]">{ProductsList}</div>
        <div className="w-full lg:w-[18%]">
          <div className="p-[.5rem] border-orangeColor border-solid border-[.1rem] rounded-[.5rem] bg-yellowColor">
            <div className="flex justify-between items-center">
              <h3 className="text-[1.6rem]">Lọc sản phẩm</h3>
              <div onClick={() => setOpenFilterBox(!openFilterBox)} className="cursor-pointer">
                {openFilterBox ? <FaAngleDown className="text-[2rem]" /> : <FaAngleRight className="text-[2rem]" />}
              </div>
            </div>
            {openFilterBox ? (
              <div className="flex flex-col gap-[2rem] my-[2rem]">
                <div className="">
                  <h3 className="text-[1.3rem] font-bold text-secondaryColor my-[.5rem]">Sắp xếp</h3>
                  <select
                    name=""
                    id=""
                    className="w-full p-[.5rem] text-[1.3rem] outline-none rounded-[.5rem] text-secondaryColor"
                  >
                    <option value="0">Giá cao đến thấp</option>
                    <option value="1">Giá thấp đến cao</option>
                    <option value="2">Giảm giá nhiều</option>
                  </select>
                </div>
                <div>
                  <h3 className="text-[1.3rem] font-bold text-secondaryColor my-[.5rem]">Loại sản phẩm</h3>
                  <div className="bg-white p-[.5rem] rounded-[.5rem] flex flex-wrap gap-[.5rem] max-h-[20rem] overflow-auto scrollbar">
                    <span className="text-[1.3rem] text-white bg-secondaryColor py-[.5rem] px-[1rem] cursor-pointer rounded-[.5rem]">
                      Bánh
                    </span>
                    <span className="text-[1.3rem] text-white bg-secondaryColor py-[.5rem] px-[1rem] cursor-pointer rounded-[.5rem]">
                      Mì
                    </span>
                    <span className="text-[1.3rem] text-white bg-secondaryColor py-[.5rem] px-[1rem] cursor-pointer rounded-[.5rem]">
                      Trà sữa
                    </span>
                    <span className="text-[1.3rem] text-white bg-secondaryColor py-[.5rem] px-[1rem] cursor-pointer rounded-[.5rem]">
                      FastFood
                    </span>
                    <span className="text-[1.3rem] text-white bg-secondaryColor py-[.5rem] px-[1rem] cursor-pointer rounded-[.5rem]">
                      Bánh
                    </span>
                    <span className="text-[1.3rem] text-white bg-secondaryColor py-[.5rem] px-[1rem] cursor-pointer rounded-[.5rem]">
                      Mì
                    </span>
                    <span className="text-[1.3rem] text-white bg-secondaryColor py-[.5rem] px-[1rem] cursor-pointer rounded-[.5rem]">
                      Trà sữa
                    </span>
                    <span className="text-[1.3rem] text-white bg-secondaryColor py-[.5rem] px-[1rem] cursor-pointer rounded-[.5rem]">
                      FastFood
                    </span>
                    <span className="text-[1.3rem] text-white bg-secondaryColor py-[.5rem] px-[1rem] cursor-pointer rounded-[.5rem]">
                      Bánh
                    </span>
                    <span className="text-[1.3rem] text-white bg-secondaryColor py-[.5rem] px-[1rem] cursor-pointer rounded-[.5rem]">
                      Mì
                    </span>
                    <span className="text-[1.3rem] text-white bg-secondaryColor py-[.5rem] px-[1rem] cursor-pointer rounded-[.5rem]">
                      Trà sữa
                    </span>
                    <span className="text-[1.3rem] text-white bg-secondaryColor py-[.5rem] px-[1rem] cursor-pointer rounded-[.5rem]">
                      FastFood
                    </span>
                    <span className="text-[1.3rem] text-white bg-secondaryColor py-[.5rem] px-[1rem] cursor-pointer rounded-[.5rem]">
                      Bánh
                    </span>
                    <span className="text-[1.3rem] text-white bg-secondaryColor py-[.5rem] px-[1rem] cursor-pointer rounded-[.5rem]">
                      Mì
                    </span>
                    <span className="text-[1.3rem] text-white bg-secondaryColor py-[.5rem] px-[1rem] cursor-pointer rounded-[.5rem]">
                      Trà sữa
                    </span>
                    <span className="text-[1.3rem] text-white bg-secondaryColor py-[.5rem] px-[1rem] cursor-pointer rounded-[.5rem]">
                      FastFood
                    </span>
                    <span className="text-[1.3rem] text-white bg-secondaryColor py-[.5rem] px-[1rem] cursor-pointer rounded-[.5rem]">
                      Bánh
                    </span>
                    <span className="text-[1.3rem] text-white bg-secondaryColor py-[.5rem] px-[1rem] cursor-pointer rounded-[.5rem]">
                      Mì
                    </span>
                    <span className="text-[1.3rem] text-white bg-secondaryColor py-[.5rem] px-[1rem] cursor-pointer rounded-[.5rem]">
                      Trà sữa
                    </span>
                    <span className="text-[1.3rem] text-white bg-secondaryColor py-[.5rem] px-[1rem] cursor-pointer rounded-[.5rem]">
                      FastFood
                    </span>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default ProductsList
