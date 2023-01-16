import React from 'react'
import Wrapper from '../common/Wrapper'
import { GiTomato } from 'react-icons/gi'
import { Link, NavLink } from 'react-router-dom'
import { USER_DEFAULT_AVATAR } from '../../shared/Constants'
import { FaFileInvoice, FaPizzaSlice, FaRegChartBar, FaSignOutAlt, FaUserAlt } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { selectCurrentUser } from '../../features/auth/authSlice'

function AdminSidebar() {
  const user = useSelector(selectCurrentUser)
  return (
    <div className="w-[20%] bg-orangeColor py-[2rem]">
      <div className="w-full h-[20%] flex flex-col gap-[1rem] justify-center items-center">
        <div className="w-[5rem] aspect-square rounded-[50%] overflow-hidden">
          <img
            src={user.imageURL ? user.imageURL : USER_DEFAULT_AVATAR}
            alt="user avatar"
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="text-white text-[1.8rem] font-bold">Nguyen Van A</h3>
      </div>
      <div className="w-full flex flex-col h-[80%] pl-[2rem] ">
        <NavLink
          to="/admin/order"
          className={({ isActive }) =>
            isActive
              ? 'flex w-full justify-start items-center gap-[2rem] p-[2rem] h-[calc(100%/6)] bg-white rounded-l-[5rem] text-orangeColor font-bold'
              : 'flex w-full justify-start items-center gap-[2rem] p-[2rem] h-[calc(100%/6)] text-white'
          }
        >
          <div className="w-[15%] flex justify-center items-center">
            <FaFileInvoice className="text-[2.5rem]" />
          </div>
          <h3 className="text-[1.8rem]">Đơn hàng</h3>
        </NavLink>
        <NavLink
          to="/admin/products"
          className={({ isActive }) =>
            isActive
              ? 'flex w-full justify-start items-center gap-[2rem] p-[2rem] h-[calc(100%/6)] bg-white rounded-l-[5rem] text-orangeColor font-bold'
              : 'flex w-full justify-start items-center gap-[2rem] p-[2rem] h-[calc(100%/6)] text-white'
          }
        >
          <div className="w-[15%] flex justify-center items-center">
            <FaPizzaSlice className="text-[2.5em]" />
          </div>
          <h3 className="text-[1.8rem]">Sản phẩm</h3>
        </NavLink>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? 'flex w-full justify-start items-center gap-[2rem] p-[2rem] h-[calc(100%/6)] bg-white rounded-l-[5rem] text-orangeColor font-bold'
              : 'flex w-full justify-start items-center gap-[2rem] p-[2rem] h-[calc(100%/6)] text-white'
          }
        >
          <div className="w-[15%] flex justify-center items-center">
            <FaFileInvoice className="text-[2.5rem]" />
          </div>
          <h3 className="text-[1.8rem]">Voucher</h3>
        </NavLink>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? 'flex w-full justify-start items-center gap-[2rem] p-[2rem] h-[calc(100%/6)] bg-white rounded-l-[5rem] text-orangeColor font-bold'
              : 'flex w-full justify-start items-center gap-[2rem] p-[2rem] h-[calc(100%/6)] text-white'
          }
        >
          <div className="w-[15%] flex justify-center items-center">
            <FaRegChartBar className="text-[2.5rem]" />
          </div>
          <h3 className="text-[1.8rem]">Thống kê</h3>
        </NavLink>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? 'flex w-full justify-start items-center gap-[2rem] p-[2rem] h-[calc(100%/6)] bg-white rounded-l-[5rem] text-orangeColor font-bold'
              : 'flex w-full justify-start items-center gap-[2rem] p-[2rem] h-[calc(100%/6)] text-white'
          }
        >
          <div className="w-[15%] flex justify-center items-center">
            <FaUserAlt className="text-[2.5rem]" />
          </div>
          <h3 className="text-[1.8rem]">Nhân sự</h3>
        </NavLink>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? 'flex w-full justify-start items-center gap-[2rem] p-[2rem] h-[calc(100%/6)] bg-white rounded-l-[5rem] text-orangeColor font-bold'
              : 'flex w-full justify-start items-center gap-[2rem] p-[2rem] h-[calc(100%/6)] text-white'
          }
        >
          <div className="w-[15%] flex justify-center items-center">
            <FaSignOutAlt className=" text-[2.5rem]" />
          </div>
          <h3 className=" text-[1.8rem]">Đăng xuất</h3>
        </NavLink>
      </div>
    </div>
  )
}

export default AdminSidebar
