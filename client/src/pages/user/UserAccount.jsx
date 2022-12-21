import React from 'react'
import { Outlet, Link, NavLink } from 'react-router-dom'
import Avatar from '../../components/common/Avatar'
import Wrapper from '../../components/common/Wrapper'
import { USER_DEFAULT_AVATAR } from '../../shared/Constants'
import { FaRegUser, FaFileInvoice, FaRegCommentDots } from 'react-icons/fa'

function UserAccount() {
  return (
    <div className="bg-gray-100 py-[2rem]">
      <Wrapper>
        <div className="flex justify-between">
          <div className="w-[20%]">
            <div className="flex w-full gap-[2rem] items-center p-[1rem] border-b-solid border-b-[.1rem] border-b-secondaryColor box-border">
              <Avatar src={USER_DEFAULT_AVATAR} alt="avatar" />
              <h4 className="text-[1.5rem] text-primaryColor font-bold">user name</h4>
            </div>
            <div className="flex flex-col gap-[2rem] px-[1rem] py-[2rem]">
              <div className="flex gap-[1rem] items-center">
                <FaRegUser className="text-[1.6rem] w-[2rem]" />{' '}
                <span className="text-[1.6rem] font-bold">Tài khoản của tôi</span>
              </div>
              <NavLink
                to="/user/account/profile"
                className="ml-[3rem] text-[1.6rem]"
                style={({ isActive }) =>
                  isActive
                    ? {
                        color: '#FF8303',
                      }
                    : undefined
                }
              >
                Hồ sơ
              </NavLink>
              <NavLink
                to="/user/account/address"
                className="ml-[3rem] text-[1.6rem]"
                style={({ isActive }) =>
                  isActive
                    ? {
                        color: '#FF8303',
                      }
                    : undefined
                }
              >
                Địa chỉ
              </NavLink>
              <NavLink
                to="/user/account/password"
                className="ml-[3rem] text-[1.6rem]"
                style={({ isActive }) =>
                  isActive
                    ? {
                        color: '#FF8303',
                      }
                    : undefined
                }
              >
                Đổi mật khẩu
              </NavLink>
              <div className="flex gap-[1rem] items-center">
                <FaFileInvoice className="text-[1.6rem] w-[2rem]" />{' '}
                <span className="text-[1.6rem] font-bold">Đơn hàng</span>
              </div>
              <div className="flex gap-[1rem] items-center">
                <FaRegCommentDots className="text-[1.6rem] w-[2rem]" />{' '}
                <span className="text-[1.6rem] font-bold">Đánh giá sản phẩm</span>
              </div>
            </div>
          </div>
          <div className="w-[75%] bg-white">
            <Outlet />
          </div>
        </div>
      </Wrapper>
    </div>
  )
}

export default UserAccount
