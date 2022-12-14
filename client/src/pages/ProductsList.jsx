import React, { useState } from 'react'
import Wrapper from '../components/common/Wrapper'
import { useGetAllProductsQuery } from '../features/apis/apiSlice'
import img from '../assets/Image/spicy-red-soup-beef-noodle-bowl-wooden-table.jpg'
import ProductCard from '../components/product/ProductCard'
import { FaAngleRight, FaAngleDown } from 'react-icons/fa'
import SuccessBox from '../components/common/SuccessBox'
import { useSearchParams } from 'react-router-dom'

function ProductsList() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [openFilterBox, setOpenFilterBox] = useState(false)
  const { data: productsList, isSuccess: isSuccessList, isFetching: isFetchingList } = useGetAllProductsQuery()
  const sort = parseInt(searchParams.get('sort_by'))
  console.log('sort: ', typeof sort)
  let ProductsList
  if (isFetchingList) {
    ProductsList = (
      <>
        {Array.apply(undefined, Array(8)).map(() => (
          <div className="md:w-[22rem] w-[16rem] aspect-[3/4] animate-pulse bg-gray-200 rounded-[.5rem]"></div>
        ))}
      </>
    )
  } else if (isSuccessList) {
    let list = productsList.results
    let sortList = [...list]
    if (sort === 0) list = sortList.sort((product1, product2) => product2.sale_price - product1.sale_price)
    else if (sort === 1) list = sortList.sort((product1, product2) => product1.sale_price - product2.sale_price)
    else if (sort === 2)
      list = sortList.sort(
        (product1, product2) =>
          product1.sale_price / product1.original_price - product2.sale_price / product2.original_price,
      )
    console.log('list: ', list)
    ProductsList = (
      <>
        {list?.map((product) => (
          <ProductCard key={product.key} {...product} />
        ))}
      </>
    )
  }
  return (
    <Wrapper>
      <div className="flex my-[5rem] justify-between flex-col-reverse lg:flex-row gap-[2rem]">
        <div className="flex flex-wrap content-start w-full lg:w-[80%] gap-[3rem] md:gap-[4rem] lg:gap-[2rem]">
          {ProductsList}
        </div>
        <div className="w-full lg:w-[18%]">
          <div className="p-[.5rem] border-orangeColor border-solid border-[.1rem] rounded-[.5rem] bg-yellowColor">
            <div className="flex justify-between items-center">
              <h3 className="text-[1.6rem]">L???c s???n ph???m</h3>
              <div onClick={() => setOpenFilterBox(!openFilterBox)} className="cursor-pointer">
                {openFilterBox ? <FaAngleDown className="text-[2rem]" /> : <FaAngleRight className="text-[2rem]" />}
              </div>
            </div>
            {openFilterBox ? (
              <div className="flex flex-col gap-[2rem] my-[2rem]">
                <div className="">
                  <h3 className="text-[1.3rem] font-bold text-secondaryColor my-[.5rem]">S???p x???p</h3>
                  <select
                    name=""
                    id=""
                    className="w-full p-[.5rem] text-[1.5rem] outline-none rounded-[.5rem] text-secondaryColor"
                    onChange={(e) => {
                      console.log(e.target.value)
                      setSearchParams({ sort_by: e.target.value })
                    }}
                  >
                    <option className="text-[1.5rem]" value="0">
                      Gi?? cao ?????n th???p
                    </option>
                    <option className="text-[1.5rem]" value="1">
                      Gi?? th???p ?????n cao
                    </option>
                    <option className="text-[1.5rem]" value="2">
                      Gi???m gi?? nhi???u
                    </option>
                  </select>
                </div>
                <div>
                  <h3 className="text-[1.3rem] font-bold text-secondaryColor my-[.5rem]">Lo???i s???n ph???m</h3>
                  <div className="bg-white p-[.5rem] rounded-[.5rem] flex flex-wrap gap-[.5rem] max-h-[20rem] overflow-auto scrollbar">
                    <span className="text-[1.3rem] text-white bg-secondaryColor py-[.5rem] px-[1rem] cursor-pointer rounded-[.5rem]">
                      B??nh
                    </span>
                    <span className="text-[1.3rem] text-white bg-secondaryColor py-[.5rem] px-[1rem] cursor-pointer rounded-[.5rem]">
                      M??
                    </span>
                    <span className="text-[1.3rem] text-white bg-secondaryColor py-[.5rem] px-[1rem] cursor-pointer rounded-[.5rem]">
                      Tr?? s???a
                    </span>
                    <span className="text-[1.3rem] text-white bg-secondaryColor py-[.5rem] px-[1rem] cursor-pointer rounded-[.5rem]">
                      FastFood
                    </span>
                    <span className="text-[1.3rem] text-white bg-secondaryColor py-[.5rem] px-[1rem] cursor-pointer rounded-[.5rem]">
                      B??nh
                    </span>
                    <span className="text-[1.3rem] text-white bg-secondaryColor py-[.5rem] px-[1rem] cursor-pointer rounded-[.5rem]">
                      M??
                    </span>
                    <span className="text-[1.3rem] text-white bg-secondaryColor py-[.5rem] px-[1rem] cursor-pointer rounded-[.5rem]">
                      Tr?? s???a
                    </span>
                    <span className="text-[1.3rem] text-white bg-secondaryColor py-[.5rem] px-[1rem] cursor-pointer rounded-[.5rem]">
                      FastFood
                    </span>
                    <span className="text-[1.3rem] text-white bg-secondaryColor py-[.5rem] px-[1rem] cursor-pointer rounded-[.5rem]">
                      B??nh
                    </span>
                    <span className="text-[1.3rem] text-white bg-secondaryColor py-[.5rem] px-[1rem] cursor-pointer rounded-[.5rem]">
                      M??
                    </span>
                    <span className="text-[1.3rem] text-white bg-secondaryColor py-[.5rem] px-[1rem] cursor-pointer rounded-[.5rem]">
                      Tr?? s???a
                    </span>
                    <span className="text-[1.3rem] text-white bg-secondaryColor py-[.5rem] px-[1rem] cursor-pointer rounded-[.5rem]">
                      FastFood
                    </span>
                    <span className="text-[1.3rem] text-white bg-secondaryColor py-[.5rem] px-[1rem] cursor-pointer rounded-[.5rem]">
                      B??nh
                    </span>
                    <span className="text-[1.3rem] text-white bg-secondaryColor py-[.5rem] px-[1rem] cursor-pointer rounded-[.5rem]">
                      M??
                    </span>
                    <span className="text-[1.3rem] text-white bg-secondaryColor py-[.5rem] px-[1rem] cursor-pointer rounded-[.5rem]">
                      Tr?? s???a
                    </span>
                    <span className="text-[1.3rem] text-white bg-secondaryColor py-[.5rem] px-[1rem] cursor-pointer rounded-[.5rem]">
                      FastFood
                    </span>
                    <span className="text-[1.3rem] text-white bg-secondaryColor py-[.5rem] px-[1rem] cursor-pointer rounded-[.5rem]">
                      B??nh
                    </span>
                    <span className="text-[1.3rem] text-white bg-secondaryColor py-[.5rem] px-[1rem] cursor-pointer rounded-[.5rem]">
                      M??
                    </span>
                    <span className="text-[1.3rem] text-white bg-secondaryColor py-[.5rem] px-[1rem] cursor-pointer rounded-[.5rem]">
                      Tr?? s???a
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
    // <SuccessBox title="Thanh cong" />
  )
}

export default ProductsList
