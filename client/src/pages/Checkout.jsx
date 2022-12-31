import React, { useState } from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import { selectProductsFromOrder } from '../features/order/orderSlice'
import { useSelector } from 'react-redux'
import { ImLocation2 } from 'react-icons/im'
import Wrapper from '../components/common/Wrapper'
import { useGetUserQuery } from '../features/apis/apiSlice'
function Checkout() {
  const location = useLocation()
  const navigate = useNavigate()
  const [changeLocationBox, setChangeLocationBox] = useState(false)
  const [addressIndex, setAddressIndex] = useState(0)
  const productsOrder = useSelector(selectProductsFromOrder)
  const {
    data: user,
    isFetching: isFetchingUser,
    isSuccess: isSuccessUser,
    isError: isErrorUSer,
    error: errorUser,
  } = useGetUserQuery()
  let OrderRender
  if (isFetchingUser) OrderRender = <div>Loading</div>
  else if (isSuccessUser) console.log(user)
  const LocationBox = (
    <div className="w-screen h-screen bg-primaryColor/50 absolute top-0 left-0 flex justify-center items-center">
      <div className="bg-white w-[35%] h-[80%] rounded-[.5rem] flex flex-col">
        <div className="w-full border-solid border-grayColor border-b-[.1rem] p-[2rem]">
          <h2 className="text-[1.6rem] text-primaryColor font-bold">Địa chỉ của bạn</h2>
        </div>
        <div className="w-full p-[2rem] grow overflow-y-auto">
          {user.result.address?.map((address, index) => (
            <div className="w-full flex gap-[1rem] py-[1rem] border-gray-200 border-dashed border-b-[.1rem]">
              <input
                type="radio"
                id={address._id}
                name="address"
                checked={index === addressIndex}
                onChange={() => {
                  setAddressIndex(index)
                  setChangeLocationBox(false)
                }}
              />
              <label htmlFor={address._id} className="text-[1.6rem] text-primaryColor">
                {address.address}
              </label>
            </div>
          ))}
        </div>
        <div className="p-[2rem] flex justify-between">
          <button
            className="text-[1.6rem] text-white py-[1rem] bg-orangeColor px-[2rem] rounded-[.5rem]"
            onClick={() => navigate('/user/account/address')}
          >
            Thêm địa chỉ
          </button>
          <button
            className="text-[1.6rem] text-primaryColor py-[1rem] px-[2rem] rounded-[.5rem] border-solid border-primaryColor border-[.1rem]"
            onClick={() => setChangeLocationBox(false)}
          >
            Quay lại
          </button>
        </div>
        {/* <div>
          <button>Quay lại</button>
        </div> */}
      </div>
    </div>
  )
  OrderRender = (
    <div className="w-full bg-gray-200 py-[5rem]">
      {changeLocationBox ? LocationBox : null}
      <Wrapper>
        <div className="bg-white rounded-[.5rem] p-[2rem]">
          <h2 className="text-[2rem] text-orangeColor font-bold flex gap-[1rem] items-center">
            <ImLocation2 className="text-[2rem]" /> Địa chỉ nhận hàng
          </h2>
          <div className="flex gap-[2rem] mt-[1rem]">
            <h4 className="text-[1.6rem] text-primaryColor">{user.result.address[addressIndex].address}</h4>
            <span
              className="text-[1.6rem] text-blue-500 italic cursor-pointer"
              onClick={() => setChangeLocationBox(true)}
            >
              Thay đổi
            </span>
          </div>
        </div>
      </Wrapper>
    </div>
  )
  return productsOrder.length ? <>{OrderRender}</> : <Navigate to="/" state={{ from: location }} replace />
}

export default Checkout
