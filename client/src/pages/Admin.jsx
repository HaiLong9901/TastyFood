import React from 'react'
import Wrapper from '../components/common/Wrapper'
import { GiTomato } from 'react-icons/gi'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectCurrentUser } from '../features/auth/authSlice'
import { USER_DEFAULT_AVATAR } from '../shared/Constants'
import { FaFileInvoice, FaPizzaSlice } from 'react-icons/fa'
function Admin() {
  const user = useSelector(selectCurrentUser)
  return (
    <div className="flex h-screen">
      {/* <div className="h-[5rem] bg-secondaryColor">
        <Wrapper>
          <div className="flex gap-[2rem] items-center h-[5rem]">
            <Link to="/" className="flex items-center">
              <span className="text-[2.5rem] text-white font-logoFont">TastyF</span>
              <div className="flex items-baseline">
                <GiTomato className="text-[2.8rem] text-red-600" />
                <GiTomato className="text-[2.8rem] text-red-600" />
              </div>
              <span className="text-[2.5rem] text-white font-logoFont">d</span>
            </Link>
            <h3 className="text-[2.4rem] font-bold text-white">ADMIN</h3>
          </div>
        </Wrapper>
      </div>
      <div className="flex w-full h-screen">
        <div className="w-[20%] bg-yellowColor"></div>
      </div> */}
      <div className="w-[20%] bg-secondaryColor py-[2rem]">
        <div className="w-full flex flex-col gap-[1rem] justify-center items-center">
          <div className="w-[5rem] aspect-square rounded-[50%] overflow-hidden">
            <img
              src={user.imageURL ? user.imageURL : USER_DEFAULT_AVATAR}
              alt="user avatar"
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-white text-[2rem] font-bold">Nguyen Van A</h3>
        </div>
        <div className="w-full px-[1rem] py-[2rem]">
          <div className="flex w-full gap-[2rem] p-[2rem]">
            <div className="w-[15%] flex justify-center items-center">
              <FaFileInvoice className="text-white text-[4rem]" />
            </div>
            <h3 className="text-white text-[3rem] font-bold">Đơn hàng</h3>
          </div>
          <div className="flex w-full gap-[2rem] p-[2rem]">
            <div className="w-[15%] flex justify-center items-center">
              <FaPizzaSlice className="text-white text-[4rem]" />
            </div>
            <h3 className="text-white text-[3rem] font-bold">Sản phẩm</h3>
          </div>
          <div className="flex w-full gap-[2rem] p-[2rem]">
            <div className="w-[15%] flex justify-center items-center">
              <FaFileInvoice className="text-white text-[4rem]" />
            </div>
            <h3 className="text-white text-[3rem] font-bold">Voucher</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Admin
