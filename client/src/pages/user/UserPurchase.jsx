import React from 'react'
import { NavLink, Outlet, useParams } from 'react-router-dom'

function UserPurchase() {
  const param = useParams()
  return (
    <div className="px-[2rem] py-[1rem]">
      <div className="flex">
        <NavLink
          to="/user/purchase/all"
          className="text-[1.6rem] py-[1rem] w-[20%] text-center font-bold"
          style={({ isActive }) =>
            isActive
              ? {
                  color: '#FF8303',
                  borderBottom: 'solid .5rem #FF8303',
                }
              : undefined
          }
        >
          Tất cả đơn hàng
        </NavLink>
        <NavLink
          to="/user/purchase/pending"
          className="text-[1.6rem] py-[1rem] w-[20%] text-center font-bold"
          style={({ isActive }) =>
            isActive
              ? {
                  color: '#FF8303',
                  borderBottom: 'solid .5rem #FF8303',
                }
              : undefined
          }
        >
          Đang xử lý
        </NavLink>
        <NavLink
          to="/user/purchase/shipping"
          className="text-[1.6rem] py-[1rem] w-[20%] text-center font-bold"
          style={({ isActive }) =>
            isActive
              ? {
                  color: '#FF8303',
                  borderBottom: 'solid .5rem #FF8303',
                }
              : undefined
          }
        >
          Đang giao
        </NavLink>
        <NavLink
          to="/user/purchase/success"
          className="text-[1.6rem] py-[1rem] w-[20%] text-center font-bold"
          style={({ isActive }) =>
            isActive
              ? {
                  color: '#FF8303',
                  borderBottom: 'solid .5rem #FF8303',
                }
              : undefined
          }
        >
          Đã giao
        </NavLink>
        <NavLink
          to="/user/purchase/rejected"
          className="text-[1.6rem] py-[1rem] w-[20%] text-center font-bold"
          style={({ isActive }) =>
            isActive
              ? {
                  color: '#FF8303',
                  borderBottom: 'solid .5rem #FF8303',
                }
              : undefined
          }
        >
          Đã hủy
        </NavLink>
      </div>
      <Outlet />
    </div>
  )
}

export default UserPurchase
