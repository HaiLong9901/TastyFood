import React, { useState } from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import { selectAmountOfOrder, selectProductsFromOrder, removeAllProduct } from '../features/order/orderSlice'
import { useSelector, useDispatch } from 'react-redux'
import { ImLocation2 } from 'react-icons/im'
import { FaTicketAlt } from 'react-icons/fa'
import Wrapper from '../components/common/Wrapper'
import {
  useGetUserQuery,
  useCreateOrderMutation,
  useRemoveItemFromCartMutation,
  useGetAllVoucherQuery,
} from '../features/apis/apiSlice'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const CheckoutItem = ({ name, quantity, sale_price, imageURL }) => (
  <div className="flex px-[2rem] py-[2rem] box-border border-gray-200 border-dashed border-b-[.1rem]">
    <div className="w-[50%] flex gap-[1rem] items-center">
      <div className="w-[5rem] h-[5rem] rounded-[.5rem] overflow-hidden">
        <img src={imageURL} alt={name} className="w-full h-full object-cover" />
      </div>
      <h4 className="text-[1.6rem] text-primaryColor">{name}</h4>
    </div>
    <div className="w-[25%] text-[1.6rem] text-primaryColor text-center">{quantity}</div>
    <div className="w-[25%] text-[1.6rem] text-primaryColor text-center">{sale_price}</div>
  </div>
)
function Checkout() {
  const location = useLocation()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [changeLocationBox, setChangeLocationBox] = useState(false)
  const [voucherBox, setVoucherBox] = useState(false)
  const [addressIndex, setAddressIndex] = useState(0)
  const [voucherValue, setVoucherValue] = useState(0)
  const [voucherCode, setVoucherCode] = useState('')
  const productsOrder = useSelector(selectProductsFromOrder)
  const amount = useSelector(selectAmountOfOrder)
  const [createOrder, { isLoading }] = useCreateOrderMutation()
  const [removeItemFromCart, { isLoading: isLoadingRemoveItem }] = useRemoveItemFromCartMutation()
  const {
    data: user,
    isFetching: isFetchingUser,
    isSuccess: isSuccessUser,
    isError: isErrorUSer,
    error: errorUser,
  } = useGetUserQuery()
  const {
    data: vouchers,
    isFetching: isFetchingVouchers,
    isSuccess: isSuccessVoucher,
    isError: isErrorVoucher,
    error: errorVoucher,
  } = useGetAllVoucherQuery()
  let OrderRender
  if (isFetchingUser) OrderRender = <div>Loading</div>
  else if (isSuccessUser) {
    console.log(user)
    const LocationBox = (
      <div className="w-screen h-screen bg-primaryColor/50 absolute top-0 left-0 flex justify-center items-center">
        <div className="bg-white w-[35%] h-[80%] rounded-[.5rem] flex flex-col">
          <div className="w-full border-solid border-grayColor border-b-[.1rem] p-[2rem]">
            <h2 className="text-[1.6rem] text-primaryColor font-bold">Địa chỉ của bạn</h2>
          </div>
          <div className="w-full p-[2rem] grow overflow-y-auto">
            {user.result.address?.map((address, index) => (
              <div className="w-full flex gap-[1rem] py-[1rem] border-gray-200 border-dashed border-b-[.1rem]">
                <input
                  type="radio"
                  id={address._id}
                  name="address"
                  checked={index === addressIndex}
                  onChange={() => {
                    setAddressIndex(index)
                    setChangeLocationBox(false)
                  }}
                />
                <label htmlFor={address._id} className="text-[1.6rem] text-primaryColor">
                  {address.address}
                </label>
              </div>
            ))}
          </div>
          <div className="p-[2rem] flex justify-between">
            <button
              className="text-[1.6rem] text-white py-[1rem] bg-orangeColor px-[2rem] rounded-[.5rem]"
              onClick={() => navigate('/user/account/address')}
            >
              Thêm địa chỉ
            </button>
            <button
              className="text-[1.6rem] text-primaryColor py-[1rem] px-[2rem] rounded-[.5rem] border-solid border-primaryColor border-[.1rem]"
              onClick={() => setChangeLocationBox(false)}
            >
              Quay lại
            </button>
          </div>
        </div>
      </div>
    )
    const VoucherBox = (
      <div className="w-screen h-screen bg-primaryColor/50 absolute top-0 left-0 flex justify-center items-center">
        <div className="bg-white w-[35%] h-[80%] rounded-[.5rem] flex flex-col p-[2rem]">
          <div className="text-[2rem] text-orangeColor text-center font-bold pb-[1rem]">Kho Voucher</div>
          <div className="flex flex-col gap-[2rem] grow overflow-y-auto ">
            {isSuccessVoucher
              ? vouchers.result?.map((voucher) => (
                  <div key={voucher._id} className="flex shadow-sm ">
                    <div className="w-[30%] flex items-center justify-center text-[1.6rem] font-bold py-[2rem] bg-yellowColor border-white border-dotted border-l-[.7rem] box-border">
                      {voucher.code}
                    </div>
                    <div className="flex flex-col w-[40%] justify-center items-center">
                      <strong className="text-[1.3rem]">Giảm tới {voucher.value * 100}%</strong>
                      <span className="text-[1.3rem]">Đơn tối thiểu {voucher.apply_for}</span>
                    </div>
                    <div className="w-[30%] flex justify-center items-center">
                      {voucher.apply_for <= amount ? (
                        <button
                          className="text-[1.3rem] text-white bg-orangeColor py-[.5rem] px-[1rem] rounded-[.5rem]"
                          onClick={() => {
                            setVoucherCode(voucher.code)
                            setVoucherBox(false)
                            setVoucherValue(voucher.value)
                          }}
                        >
                          Sử dụng
                        </button>
                      ) : (
                        <div>Bạn cần mua thêm {voucher.apply_for - amount}</div>
                      )}
                    </div>
                  </div>
                ))
              : undefined}
          </div>
          <div className="flex justify-end py-[1rem]">
            <button
              className="text-[1.6rem] text-primaryColor py-[1rem] px-[2rem] border-solid border-primaryColor border-[.1rem] rounded-[.5rem]"
              onClick={() => setVoucherBox(false)}
            >
              Quay lại
            </button>
          </div>
        </div>
      </div>
    )
    OrderRender = (
      <div className="w-full bg-gray-200 py-[5rem]">
        {changeLocationBox ? LocationBox : null}
        {voucherBox ? VoucherBox : null}
        <Wrapper>
          <div className="bg-white rounded-[.5rem] p-[2rem]">
            <h2 className="text-[2rem] text-orangeColor font-bold flex gap-[1rem] items-center">
              <ImLocation2 className="text-[2rem]" /> Địa chỉ nhận hàng
            </h2>
            <div className="flex gap-[2rem] mt-[1rem]">
              {user.result.address.length ? (
                <>
                  <h4 className="text-[1.6rem] text-primaryColor">{user.result.address[addressIndex].address}</h4>
                  <span
                    className="text-[1.6rem] text-blue-500 italic cursor-pointer"
                    onClick={() => setChangeLocationBox(true)}
                  >
                    Thay đổi
                  </span>
                </>
              ) : (
                <div className="flex items-center gap-[2rem]">
                  <h4 className="text-[1.6rem] text-primaryColor">Bạn chưa có địa chỉ</h4>
                  <button
                    className="text-[1.6rem] text-white bg-orangeColor py-[1rem] px-[2rem] rounded-[.5rem]"
                    onClick={() => navigate('/user/account/address')}
                  >
                    Thêm địa chỉ
                  </button>
                </div>
              )}
            </div>
          </div>
          <div className="bg-white rounded-[.5rem] py-[2rem] mt-[2rem]">
            <div className="px-[2rem] flex">
              <div className="text-[1.6rem] font-bold text-primaryColor w-[50%]">Sản phẩm</div>
              <div className="text-[1.6rem] font-bold text-primaryColor w-[25%] text-center">Số lượng</div>
              <div className="text-[1.6rem] font-bold text-primaryColor w-[25%] text-center">Đơn giá</div>
            </div>
            <div>
              {productsOrder?.map((product) => (
                <CheckoutItem key={product.productId} {...product} />
              ))}
            </div>
          </div>
          <div className="bg-white rounded-[.5rem] mt-[2rem] py-[2rem]">
            <div className="flex justify-between border-solid border-gray-200 border-b-[.1rem] pb-[2rem]  px-[2rem]  box-border">
              <h3 className="text-[2rem] text-orangeColor font-bold flex gap-[2rem] items-center">
                <FaTicketAlt className="text-[2.5rem]" /> Voucher
              </h3>
              <div className="flex w-[40%] gap-[2.5rem] items-center">
                <input
                  type="text"
                  value={voucherCode}
                  className="text-[1.6rem] outline-none p-[.5rem] border-orangeColor border-solid border-[.1rem] rounded-[.5rem] grow"
                />
                <span
                  className="text-[1.6rem] text-blue-600 font-bold cursor-pointer"
                  onClick={() => setVoucherBox(true)}
                >
                  Chọn voucher
                </span>
              </div>
            </div>
            <div className="flex gap-[2rem] p-[2rem] border-solid border-gray-200 border-b-[.1rem]">
              <h3 className="text-[2rem] font-bold">Hình thức thanh toán</h3>
              <button className="text-[1.6rem] text-orangeColor border-solid border-orangeColor border-[.1rem] py-[.5rem] px-[1rem]">
                Thanh toán khi nhận hàng
              </button>
              <button className="text-[1.6rem] text-grayColor border-solid border-grayColor border-[.1rem] py-[.5rem] px-[1rem]">
                Thanh toán bằng thẻ tín dụng
              </button>
            </div>
            <div className="flex justify-end p-[2rem] box-border border-solid border-gray-200 border-b-[.1rem]">
              <div className="w-[30%] flex flex-col gap-[1rem]">
                <div className="flex justify-between">
                  <h4 className="text-[1.6rem] text-primaryColor">Tổng tiền hàng:</h4>
                  <span className="text-[1.6rem] text-primaryColor">{amount}</span>
                </div>
                <div className="flex justify-between">
                  <h4 className="text-[1.6rem] text-primaryColor">Giảm giá:</h4>
                  <span className="text-[1.6rem] text-primaryColor">{'- '.concat(amount * voucherValue)}</span>
                </div>
                <div className="flex justify-between">
                  <h4 className="text-[1.6rem] text-primaryColor">Phí vận chuyển:</h4>
                  <span className="text-[1.6rem] text-primaryColor">{10000}</span>
                </div>
                <div className="flex justify-between">
                  <h4 className="text-[1.6rem] text-primaryColor">Tổng:</h4>
                  <span className="text-[2rem] text-primaryColor font-bold">{amount * (1 - voucherValue) + 10000}</span>
                </div>
              </div>
            </div>
            <div className="flex justify-end p-[2rem]">
              <button
                className="text-white bg-orangeColor py-[1rem] px-[3rem] text-[1.6rem] rounded-[.5rem]"
                onClick={() => {
                  if (!user.result.address.length) {
                    toast.error('Bạn chưa có địa chỉ', {
                      position: 'top-center',
                      autoClose: 500,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      theme: 'colored',
                    })
                    return
                  } else {
                    toast.success('Đặt hàng thành công', {
                      position: 'top-center',
                      autoClose: 500,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      theme: 'colored',
                    })
                    try {
                      createOrder({
                        amount: amount * (1 - voucherValue) + 10000,
                        products: productsOrder,
                        address: user.result.address[addressIndex],
                      })
                      removeItemFromCart({
                        products: productsOrder.map((product) => product.productId),
                      })
                      dispatch(removeAllProduct())
                    } catch (error) {
                      console.log(error)
                    }
                    setTimeout(() => navigate('/'), 1000)
                  }
                }}
              >
                Thanh toán
              </button>
            </div>
          </div>
        </Wrapper>
      </div>
    )
  }
  return productsOrder.length ? (
    <div>
      {OrderRender} <ToastContainer />
    </div>
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  )
}

export default Checkout
