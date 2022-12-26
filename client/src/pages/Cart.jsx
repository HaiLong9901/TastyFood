import React from 'react'
import CartProduct from '../components/product/CartProduct'
import Wrapper from '../components/common/Wrapper'

function Cart() {
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
        <div className="bg-white p-[2rem] mt-[2rem] rounded-[.5rem] flex flex-col gap-[2rem]">
          <CartProduct
            imageURL="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?cs=srgb&dl=pexels-ash-376464.jpg&fm=jpg"
            name="Banh tao"
            sale_price="10000"
            original_price="20000"
            quantity={1}
          />
          <CartProduct
            imageURL="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?cs=srgb&dl=pexels-ash-376464.jpg&fm=jpg"
            name="Banh tao"
            sale_price="10000"
            original_price="20000"
            quantity={1}
          />
          <CartProduct
            imageURL="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?cs=srgb&dl=pexels-ash-376464.jpg&fm=jpg"
            name="Banh tao"
            sale_price="10000"
            original_price="20000"
            quantity={1}
          />
          <CartProduct
            imageURL="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?cs=srgb&dl=pexels-ash-376464.jpg&fm=jpg"
            name="Banh tao"
            sale_price="10000"
            original_price="20000"
            quantity={1}
          />
        </div>
        <div className="w-full bg-white py-[2rem] px-[4rem] rounded-[.5rem] flex justify-between mt-[2rem] bottom-0">
          <h3 className="text-[2.5rem] text-primaryColor font-bold">Tổng tiền: 50.000</h3>
          <button className="text-[1.6rem] text-white py-[1rem] px-[3rem] rounded-[.5rem] bg-orangeColor">
            Mua hàng
          </button>
        </div>
      </Wrapper>
    </div>
  )
}

export default Cart
