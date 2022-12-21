import React from 'react'
import { useMemo } from 'react'
import { useState } from 'react'
import UserAdressBox from '../../components/user/UserAdressBox'

function UserAdress() {
  const [addAddressForm, setAddAddressForm] = useState(false)
  const handleOpenAddAddressForm = () => {
    console.log(addAddressForm)
    setAddAddressForm(!addAddressForm)
  }
  return (
    <div className="px-[2rem] py-[1rem] min-h-[70vh]">
      <div className="w-full border-b-solid border-b-[.1rem] border-b-primaryColor pb-[1rem] flex justify-between items-center">
        <h2 className="text-[2rem] font-bold">Địa chỉ của tôi</h2>
        <button
          className="text-[1.6rem] font-bold text-white py-[1rem] px-[3rem] bg-orangeColor rounded-[1rem]"
          onClick={handleOpenAddAddressForm}
        >
          Thêm địa chỉ
        </button>
      </div>
      <div className="py-[2rem] flex flex-col gap-[2rem]">
        <h2 className="text-[1.6rem] text-primaryColor">Địa chỉ</h2>
        <UserAdressBox name="Do Hai Long" phone="0123456789" address="15151casdcdscjhabd" />
      </div>

      <div
        className={
          addAddressForm
            ? 'bg-primaryColor/70 w-screen h-screen border-box absolute top-0 left-0 flex justify-center items-center translate-y-[-100%] duration-300 ease-in-out'
            : 'bg-primaryColor/70 w-screen h-screen border-box absolute top-0 left-0 flex justify-center items-center translate-y-[0] duration-300 ease-in-out'
        }
      >
        <div className="w-[50%] h-[60%] bg-white flex flex-wrap gap-[2%] p-[2%]">
          <div className="w-[47%] h-[10rem]">
            <label htmlFor="city" className="text-[1.6rem] text-primaryColor font-bold">
              Thành phố
            </label>
            <input
              type="text"
              value="Hà Nội"
              disabled
              id="city"
              className="w-full p-[1rem] outline-none border-grayColor border-solid border-[.1rem] text-[1.6rem] rounded-[.5rem]"
            />
          </div>
          <div className="w-[47%]">
            <label htmlFor="phone" className="text-[1.6rem] text-primaryColor font-bold">
              Số điện thoại
            </label>
            <input
              type="text"
              value="0123456789"
              disabled
              id="phone"
              className="w-full p-[1rem] outline-none border-grayColor border-solid border-[.1rem] text-[1.6rem] rounded-[.5rem]"
            />
          </div>
          <div className="w-[47%]">
            <label htmlFor="district" className="text-[1.6rem] text-primaryColor font-bold">
              Quận/huyện
            </label>
            <select
              name="district"
              id="district"
              value="Quận/huyện"
              disabled
              className="w-full p-[1rem] outline-none border-grayColor border-solid border-[.1rem] text-[1.6rem] rounded-[.5rem]"
            >
              {/* <option value=""></option> */}
            </select>
          </div>
          <div className="w-[47%]">
            <label htmlFor="ward" className="text-[1.6rem] text-primaryColor font-bold">
              Xã/phường
            </label>
            <select
              name="ward"
              id="ward"
              value="Xã/phường"
              // disabled
              className="w-full p-[1rem] outline-none border-grayColor border-solid border-[.1rem] text-[1.6rem] rounded-[.5rem]"
            >
              <option value="Mot">Mot</option>
              <option value="Hai">Hai</option>
              <option value="Hai">Hai</option>
              <option value="Hai">Hai</option>
              <option value="Hai">Hai</option>
              <option value="Hai">Hai</option>
              <option value="Hai">Hai</option>
              <option value="Hai">Hai</option>
            </select>
          </div>
          <div className="w-[96%]">
            <label htmlFor="location" className="text-[1.6rem] text-primaryColor font-bold">
              Địa chỉ cụ thể
            </label>
            <input
              type="text"
              id="location"
              className="w-full p-[1rem] outline-none border-grayColor border-solid border-[.1rem] text-[1.6rem] rounded-[.5rem]"
            />
          </div>
          <div className="w-[96%] flex justify-end gap-[1rem]">
            <button
              className="text-[1.6rem] text-white px-[2rem] py-[.25rem] rounded-[.5rem] bg-grayColor"
              onClick={handleOpenAddAddressForm}
            >
              Quay lại
            </button>
            <button className="text-[1.6rem] text-white px-[2rem] py-[.25rem] rounded-[.5rem] bg-orangeColor">
              Thêm
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserAdress
