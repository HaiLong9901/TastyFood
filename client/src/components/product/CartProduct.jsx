import React, { useState } from 'react'

function CartProduct({ imageURL, name, quantity, sale_price, original_price }) {
  const [productQuantity, setProductQuantity] = useState(quantity)
  const handleIncreaseQuantity = () => {
    setProductQuantity((prev) => prev + 1)
  }
  const handleDecreaseQuantity = () => {
    console.log('sub')
    if (quantity === 1) return
    setProductQuantity((prev) => prev - 1)
  }
  return (
    <div className="w-full border-[.1rem] border-solid border-gray-300 rounded-[.5rem] h-[15rem] bg-white flex justify-center items-center p-[2rem]">
      <div className="w-[50%] flex items-center gap-[2rem]">
        <input type="checkbox" className="text-[1.6rem]"></input>
        <div className="w-[10rem] h-[10rem] rounded-[.5rem] overflow-hidden">
          <img src={imageURL} alt={name} className="w-full h-full object-cover" />
        </div>
        <h3 className="text-[1.6rem]">{name}</h3>
      </div>
      <div className="w-[10%] flex justify-between">
        <span className="text-[1.6rem] italic text-primaryColor line-through">{original_price}</span>
        <span className="text-[1.6rem] italic text-primaryColor">{sale_price}</span>
      </div>
      <div className="w-[20%] flex justify-center">
        <div className="flex">
          <div
            className="text-[1.6rem] text-primaryColor w-[3rem] h-[3rem] text-center border-solid border-primaryColor border-[.1rem] cursor-pointer"
            onClick={() => {
              if (productQuantity === 1) return
              setProductQuantity((prev) => prev - 1)
            }}
          >
            -
          </div>
          <div className="text-[1.6rem] text-primaryColor w-[5rem] h-[3rem] text-center border-y-solid border-y-primaryColor border-[.1rem]">
            {productQuantity}
          </div>
          <div
            className="text-[1.6rem] text-primaryColor w-[3rem] h-[3rem] text-center border-solid border-primaryColor border-[.1rem] cursor-pointer"
            onClick={() => {
              setProductQuantity((prev) => prev + 1)
            }}
          >
            +
          </div>
        </div>
      </div>
      <div className="w-[10%] text-[1.6rem] text-primaryColor italic text-center">{sale_price}</div>
      <div className="w-[10%] text-[1.6rem] text-orangeColor cursor-pointer text-center">Xóa</div>
    </div>
  )
}

export default CartProduct
