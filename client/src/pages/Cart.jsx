import React from 'react'
import CartProduct from '../components/product/CartProduct'
import Wrapper from '../components/common/Wrapper'
import { useGetCartQuery } from '../features/apis/apiSlice'
import { useSelector } from 'react-redux'
import { selectAmountOfOrder } from '../features/order/orderSlice'

function Cart() {
  const amount = useSelector(selectAmountOfOrder)
  const {
    data: cart,
    isSuccess: isSuccessCart,
    isFetching: isFetchingCart,
    isError: isErrorCart,
    error: errorCart,
  } = useGetCartQuery()
  let cartRender
  if (isFetchingCart)
    cartRender = (
      <div className="w-full h-[50rem] bg-white rounded-[.5rem] text-orangeColor text-[3rem] flex justify-center items-center">
        Loading
      </div>
    )
  else if (isSuccessCart)
    cartRender = (
      <div className="bg-white p-[2rem] mt-[2rem] rounded-[.5rem] flex flex-col gap-[2rem]">
        {cart.cart.products?.map((product) => (
          <CartProduct
            imageURL={product.productId.imageURL}
            sale_price={product.productId.sale_price}
            original_price={product.productId.original_price}
            quantity={product.quantity}
            productId={product.productId._id}
            name={product.productId.name}
          />
        ))}
      </div>
    )
  return (
    <div className="bg-gray-100 py-[5rem]">
      <Wrapper>
        <div className="w-full bg-white py-[2rem] px-[4rem] rounded-[.5rem] flex justify-between">
          <div className="text-[1.6rem] w-[50%]">Sản phẩm</div>
          <div className="text-[1.6rem] w-[10%] text-center">Đơn giá</div>
          <div className="text-[1.6rem] w-[20%] text-center">Số lượng</div>
          <div className="text-[1.6rem] w-[10%] text-center">Số tiền</div>
          <div className="text-[1.6rem] w-[10%] text-center">Thao tác</div>
        </div>
        {cartRender}
        <div className="w-full bg-white py-[2rem] px-[4rem] rounded-[.5rem] flex justify-between mt-[2rem] bottom-0">
          <h3 className="text-[2.5rem] text-primaryColor font-bold">Tổng tiền: {amount}</h3>
          <button className="text-[1.6rem] text-white py-[1rem] px-[3rem] rounded-[.5rem] bg-orangeColor">
            Mua hàng
          </button>
        </div>
      </Wrapper>
    </div>
  )
}

export default Cart
