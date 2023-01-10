import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { useGetAllOrdersByAdminQuery } from '../../features/apis/apiSlice'
import { parseISO, format } from 'date-fns'
import { FaCircle } from 'react-icons/fa'

const OrderItem = ({ orderId, orderUser, orderAddress, orderStatus, orderDate }) => {
  const date = format(parseISO(orderDate), 'MM/dd/yyy')
  console.log('date: ', date)
  return (
    <div>
      <div className="flex shadow-sm px-[1rem] py-[2rem] rounded-[.5rem] hover:scale-[1.01] cursor-pointer">
        <div className="w-[10%] text-center text-[1.5rem]">{orderId.slice(0, 10).concat('...')}</div>
        <div className="w-[20%] text-center text-[1.5rem]">{orderUser}</div>
        <div className="w-[30%] text-center text-[1.5rem]">{orderAddress}</div>
        <div className="w-[20%] text-center text-[1.5rem]">{format(parseISO(orderDate), 'MM/dd/yyy')}</div>
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
  const {
    data: orders,
    isSuccess: isSuccessOrders,
    isFetching: isFetchingOrders,
    isError: isErrorOrders,
    error: errorOrders,
  } = useGetAllOrdersByAdminQuery(status)
  let OrderTable
  if (isFetchingOrders) OrderTable = <div>Loading</div>
  else if (isSuccessOrders)
    OrderTable = (
      <div className="flex gap-[2rem] flex-col">
        {orders.result?.map((order) => (
          <OrderItem
            key={order._id}
            orderId={order._id}
            orderUser={order.userId.name}
            orderStatus={order.status}
            orderAddress={order.address.address}
            orderDate={order.updatedAt}
          />
        ))}
      </div>
    )
  return <div>{OrderTable}</div>
}
function AdminOrder() {
  return (
    <div>
      <div className="flex flex-col p-[2rem]">
        <div className="h-[15%]">
          <h3 className="text-[2.5rem] text-primaryColor font-bold">Đơn hàng</h3>
          <span className="text-[1.5rem] text-primaryColor">325 đơn hàng được tìm thấy</span>
          <div></div>
        </div>
        <div className="h-[15%] flex justify-between">
          <div className="flex gap-[1rem]">
            <NavLink
              to="/admin/order/all"
              className={({ isActive }) =>
                isActive
                  ? 'text-[1.5rem] text-primaryColor border-solid font-bold border-orangeColor border-b-[.3rem] py-[1rem]'
                  : 'text-[1.5rem] text-primaryColor py-[1rem]'
              }
            >
              Tất cả đơn hàng
            </NavLink>
            <NavLink
              to="/admin/order/pending"
              className={({ isActive }) =>
                isActive
                  ? 'text-[1.5rem] text-primaryColor border-solid font-bold border-orangeColor border-b-[.3rem] py-[1rem]'
                  : 'text-[1.5rem] text-primaryColor py-[1rem]'
              }
            >
              Đơn hàng đang xử lý
            </NavLink>
            <NavLink
              to="/admin/order/shipping"
              className={({ isActive }) =>
                isActive
                  ? 'text-[1.5rem] text-primaryColor border-solid font-bold border-orangeColor border-b-[.3rem] py-[1rem]'
                  : 'text-[1.5rem] text-primaryColor py-[1rem]'
              }
            >
              Đơn hàng đang vận chuyển
            </NavLink>
            <NavLink
              to="/admin/order/success"
              className={({ isActive }) =>
                isActive
                  ? 'text-[1.5rem] text-primaryColor border-solid font-bold border-orangeColor border-b-[.3rem] py-[1rem]'
                  : 'text-[1.5rem] text-primaryColor py-[1rem]'
              }
            >
              Đơn hàng thành cồng
            </NavLink>
            <NavLink
              to="/admin/order/rejected"
              className={({ isActive }) =>
                isActive
                  ? 'text-[1.5rem] text-primaryColor border-solid font-bold border-orangeColor border-b-[.3rem] py-[1rem]'
                  : 'text-[1.5rem] text-primaryColor py-[1rem]'
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
        <div>
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

        <div></div>
      </div>
    </div>
  )
}

export default AdminOrder
