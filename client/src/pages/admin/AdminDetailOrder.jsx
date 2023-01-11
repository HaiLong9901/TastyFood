import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetDetailOrderQuery } from '../../features/apis/apiSlice'
import { toISODate } from '../../shared/FormatDate'

function AdminDetailOrder() {
  const { orderId } = useParams()
  const { data: order, isFetching: isFetchingOrder, isSuccess: isSuccessOrder } = useGetDetailOrderQuery(orderId)

  let DetailRender
  if (isFetchingOrder) {
    DetailRender = <div>Loading</div>
  } else if (isSuccessOrder) {
    console.log(order.result)
    DetailRender = (
      <div className="p-[2rem] flex flex-col gap-[1rem]">
        <h2 className="text-[1.6rem] text-primaryColor">
          Mã hóa đơn: <strong className="text-[1.6rem]">{order.result._id}</strong>
        </h2>
        <h3 className="text-[1.6rem] text-primaryColor">Khách hàng: {order.result.userId.name}</h3>
        <h3 className="text-[1.6rem] text-primaryColor">Số điện thoại: {order.result.userId.phone}</h3>
        <h3 className="text-[1.6rem] text-primaryColor">Địa chỉ: {order.result.address.address}</h3>
        <h3 className="text-[1.6rem] text-primaryColor">Ngày đặt: {toISODate(order.result.createdAt)}</h3>
        <h3 className="text-[1.6rem] text-primaryColor">Sản phẩm: </h3>
        <table className="border-solid border-[.1rem] border-gray-200 rounded-[.5rem] table-fixed">
          <tr className="bg-yellowColor">
            <th className="text-[1.5rem] text-center py-[1rem] font-bold">Mã sản phẩm</th>
            <th className="text-[1.5rem] text-center py-[1rem] font-bold">Tên sản phẩm</th>
            <th className="text-[1.5rem] text-center py-[1rem] font-bold">Số lượng</th>
            <th className="text-[1.5rem] text-center py-[1rem] font-bold">Giá gốc</th>
            <th className="text-[1.5rem] text-center py-[1rem] font-bold">Giá bán</th>
          </tr>
          {order.result.products?.map((product, index) => (
            <tr className={!index % 2 ? 'bg-white' : 'bg-gray-200'}>
              <td className="text-[1.5rem] text-center py-[1rem]">{product.productId._id}</td>
              <td className="text-[1.5rem] text-center py-[1rem]">{product.productId.name}</td>
              <td className="text-[1.5rem] text-center py-[1rem]">{product.quantity}</td>
              <td className="text-[1.5rem] text-center py-[1rem]">{product.productId.original_price}</td>
              <td className="text-[1.5rem] text-center py-[1rem]">{product.productId.sale_price}</td>
            </tr>
          ))}
        </table>
        <div></div>
      </div>
    )
  }
  return <div>{DetailRender}</div>
}

export default AdminDetailOrder
