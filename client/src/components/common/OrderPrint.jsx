import React, { forwardRef } from 'react'
import { toISODate } from '../../shared/FormatDate'
function OrderPrint({ order }, ref) {
  return (
    <div ref={ref}>
      <div className="p-[5rem] flex flex-col gap-[1rem]">
        <h2 className="text-[1.6rem] text-primaryColor">
          Mã hóa đơn: <strong className="text-[1.6rem]">{order.result._id}</strong>
        </h2>
        <h3 className="text-[1.6rem] text-primaryColor">Khách hàng: {order.result.userId.name}</h3>
        <h3 className="text-[1.6rem] text-primaryColor">Số điện thoại: {order.result.userId.phone}</h3>
        <h3 className="text-[1.6rem] text-primaryColor">Địa chỉ: {order.result.address.address}</h3>
        <h3 className="text-[1.6rem] text-primaryColor">Ngày đặt: {toISODate(order.result.createdAt)}</h3>
        <h3 className="text-[1.6rem] text-primaryColor">Sản phẩm: </h3>
        <table className="border-solid border-[.1rem] border-gray-200 rounded-[.5rem] table-fixed border-collapse">
          <tr>
            <th className="text-[1.5rem] text-center py-[1rem] font-bold border-solid border-[.1rem] border-primaryColor">
              Mã sản phẩm
            </th>
            <th className="text-[1.5rem] text-center py-[1rem] font-bold border-solid border-[.1rem] border-primaryColor">
              Tên sản phẩm
            </th>
            <th className="text-[1.5rem] text-center py-[1rem] font-bold border-solid border-[.1rem] border-primaryColor">
              Số lượng
            </th>
            <th className="text-[1.5rem] text-center py-[1rem] font-bold border-solid border-[.1rem] border-primaryColor">
              Giá gốc
            </th>
            <th className="text-[1.5rem] text-center py-[1rem] font-bold border-solid border-[.1rem] border-primaryColor">
              Giá bán
            </th>
          </tr>
          {order.result.products?.map((product, index) => (
            <tr>
              <td className="text-[1.5rem] text-center py-[1rem] border-solid border-primaryColor border-[.1rem]">
                {product.productId._id}
              </td>
              <td className="text-[1.5rem] text-center py-[1rem] border-solid border-primaryColor border-[.1rem]">
                {product.productId.name}
              </td>
              <td className="text-[1.5rem] text-center py-[1rem] border-solid border-primaryColor border-[.1rem]">
                {product.quantity}
              </td>
              <td className="text-[1.5rem] text-center py-[1rem] border-solid border-primaryColor border-[.1rem]">
                {product.productId.original_price}
              </td>
              <td className="text-[1.5rem] text-center py-[1rem] border-solid border-primaryColor border-[.1rem]">
                {product.productId.sale_price}
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  )
}

export default forwardRef(OrderPrint)
