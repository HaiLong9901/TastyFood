import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { useGetAllOrdersByAdminQuery } from '../../features/apis/apiSlice'
import { parseISO, format } from 'date-fns'
import { FaCircle, FaChevronRight, FaChevronLeft } from 'react-icons/fa'
import { useState } from 'react'

const OrderItem = ({ orderId, orderUser, orderAddress, orderStatus, orderDate }) => {
  const date = format(parseISO(orderDate), 'MM/dd/yyy')
  console.log('date: ', date)
  return (
    <div>
      <div className="flex shadow-sm px-[1rem] py-[2rem] rounded-[.5rem] hover:scale-[1.01] cursor-pointer">
        <div className="w-[10%] text-center text-[1.5rem]">{orderId.slice(0, 10).concat('...')}</div>
        <div className="w-[20%] text-center text-[1.5rem]">{orderUser}</div>
        <div className="w-[30%] text-center text-[1.5rem]">{orderAddress}</div>
        <div className="w-[20%] text-center text-[1.5rem]">{format(parseISO(orderDate), 'dd/MM/yyyy')}</div>
        <div
          className={`w-[10%] text-[1.5rem] flex items-center gap-[1rem] justify-center ${
            orderStatus === 'pending'
              ? 'text-green-500'
              : orderStatus === 'shipping'
              ? 'text-blue-500'
              : orderStatus === 'success'
              ? 'text-orangeColor'
              : 'text-gray-500 opacity-70'
          } `}
        >
          <FaCircle />
          {orderStatus}
        </div>
        <Link to={`/admin/order/${orderId}`} className="w-[10%] text-center text-[1.5rem] text-blue-600 font-bold">
          Chi tiết
        </Link>
      </div>
    </div>
  )
}
export const AllOrder = ({ status }) => {
  const [currentPage, setCurrentPage] = useState(1)
  let maxPage
  const {
    data: orders,
    isSuccess: isSuccessOrders,
    isFetching: isFetchingOrders,
    isError: isErrorOrders,
    error: errorOrders,
  } = useGetAllOrdersByAdminQuery(status)
  let OrderTable
  if (isFetchingOrders)
    OrderTable = <div className="grow flex justify-center items-center text-[2rem] text-orangeColor">Loading</div>
  else if (isSuccessOrders) {
    if (!orders.result.length) {
      OrderTable = (
        <div className="grow flex justify-center items-center text-[2rem] text-orangeColor">Không có đơn hàng nào</div>
      )
    } else {
      maxPage = Math.ceil(orders.result.length / 5)
      OrderTable = (
        <div className="flex flex-col justify-between grow">
          <div className="flex gap-[2rem] flex-col">
            {orders.result?.map((order, index) => {
              if (index >= currentPage * 5 || index < (currentPage - 1) * 5) return
              return (
                <OrderItem
                  key={order._id}
                  orderId={order._id}
                  orderUser={order.userId.name}
                  orderStatus={order.status}
                  orderAddress={order.address.address}
                  orderDate={order.updatedAt}
                />
              )
            })}
          </div>
          <div className="flex justify-between items-center mt-[1rem]">
            <div className="text-[1.5rem] text-primaryColor">
              Trang {currentPage} trong {maxPage} trang
            </div>
            <div className="flex gap-[2rem] items-center">
              <div
                className="text-[1.8rem] text-primaryColor cursor-pointer"
                onClick={() => {
                  if (currentPage <= 1) return
                  setCurrentPage((prev) => currentPage - 1)
                }}
              >
                <FaChevronLeft />
              </div>
              {Array.apply(undefined, Array(5)).map((value, index) => {
                const pageValue =
                  currentPage % 5 === 0
                    ? Math.trunc((currentPage - 1) / 5) * 5 + index + 1
                    : Math.trunc(currentPage / 5) * 5 + index + 1
                if (pageValue > maxPage) return
                return (
                  <div
                    className={`text-[1.6rem] ${
                      currentPage === pageValue ? 'text-orangeColor' : 'text-primaryColor'
                    } cursor-pointer`}
                    onClick={() => setCurrentPage(pageValue)}
                  >
                    {pageValue}
                  </div>
                )
              })}
              <div
                className="text-[1.8rem] text-primaryColor cursor-pointer"
                onClick={() => {
                  if (currentPage >= maxPage) return
                  setCurrentPage((prev) => prev + 1)
                }}
              >
                <FaChevronRight />
              </div>
            </div>
          </div>
        </div>
      )
    }
  }
  return <>{OrderTable}</>
}
function AdminOrder() {
  return (
    <div>
      <div className="flex flex-col p-[2rem] h-screen">
        <div className="h-[10%]">
          <h3 className="text-[2.5rem] text-primaryColor font-bold">Đơn hàng</h3>
          <span className="text-[1.5rem] text-primaryColor">325 đơn hàng được tìm thấy</span>
          <div></div>
        </div>
        <div className="h-[10%] flex justify-between items-center">
          <div className="block">
            <NavLink
              to="/admin/order/all"
              className={({ isActive }) =>
                isActive
                  ? 'text-[1.5rem] text-primaryColor border-solid font-bold border-orangeColor border-b-[.3rem] py-[1rem] mr-[2rem]'
                  : 'text-[1.5rem] text-primaryColor py-[1rem] mr-[2rem]'
              }
            >
              Tất cả đơn hàng
            </NavLink>
            <NavLink
              to="/admin/order/pending"
              className={({ isActive }) =>
                isActive
                  ? 'text-[1.5rem] text-primaryColor border-solid font-bold border-orangeColor border-b-[.3rem] py-[1rem] mr-[2rem]'
                  : 'text-[1.5rem] text-primaryColor py-[1rem] mr-[2rem]'
              }
            >
              Đơn hàng đang xử lý
            </NavLink>
            <NavLink
              to="/admin/order/shipping"
              className={({ isActive }) =>
                isActive
                  ? 'text-[1.5rem] text-primaryColor border-solid font-bold border-orangeColor border-b-[.3rem] py-[1rem] mr-[2rem]'
                  : 'text-[1.5rem] text-primaryColor py-[1rem] mr-[2rem]'
              }
            >
              Đơn hàng đang vận chuyển
            </NavLink>
            <NavLink
              to="/admin/order/success"
              className={({ isActive }) =>
                isActive
                  ? 'text-[1.5rem] text-primaryColor border-solid font-bold border-orangeColor border-b-[.3rem] py-[1rem] mr-[2rem]'
                  : 'text-[1.5rem] text-primaryColor py-[1rem] mr-[2rem]'
              }
            >
              Đơn hàng thành cồng
            </NavLink>
            <NavLink
              to="/admin/order/rejected"
              className={({ isActive }) =>
                isActive
                  ? 'text-[1.5rem] text-primaryColor border-solid font-bold border-orangeColor border-b-[.3rem] py-[1rem] mr-[2rem]'
                  : 'text-[1.5rem] text-primaryColor py-[1rem] mr-[2rem]'
              }
            >
              Đơn hàng đã hủy
            </NavLink>
          </div>
          <div className="flex gap-[1rem] justify-between items-center">
            <label className="text-[1.5rem] text-primaryColor italic" htmlFor="From">
              Từ
            </label>
            <input
              className="text-[1.5rem] outline-none border-none bg-gray-200 p-[.5rem] rounded-[.5rem]"
              type="date"
              id="From"
            />
            <label className="text-[1.5rem] text-primaryColor italic" htmlFor="To">
              Đến
            </label>
            <input
              className="text-[1.5rem] outline-none border-none bg-gray-200 p-[.5rem] rounded-[.5rem]"
              type="date"
              id="To"
            />
          </div>
        </div>
        <div className="h-[80%] flex flex-col gap-[1rem] py-[1rem]">
          <div className="flex bg-yellowColor px-[1rem] py-[2rem] rounded-[.5rem]">
            <div className="w-[10%] text-center text-[1.5rem] font-bold">Mã đơn</div>
            <div className="w-[20%] text-center text-[1.5rem] font-bold">Khách hàng</div>
            <div className="w-[30%] text-center text-[1.5rem] font-bold">Địa chỉ</div>
            <div className="w-[20%] text-center text-[1.5rem] font-bold">Ngày</div>
            <div className="w-[10%] text-center text-[1.5rem] font-bold">Trạng thái</div>
            <div className="w-[10%] text-center text-[1.5rem] font-bold">Chức năng</div>
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default AdminOrder
