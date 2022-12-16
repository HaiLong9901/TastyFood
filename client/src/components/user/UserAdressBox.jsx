import React from 'react'
import UploadWidget from '../common/UploadWidget'
import Wrapper from '../common/Wrapper'

function UserAdressBox({ name, phone, address }) {
  return (
    <div className="py-[2rem] border-b-solid border-b-[.1rem] border-b-grayColor w-full flex justify-between">
      <div>
        <div className="flex">
          <h2 className="text-[1.6rem] font-bold pr-[1rem] border-r-[.1rem] border-r-primaryColor border-r-solid">
            {name}
          </h2>
          <span className="text-[1.6rem] text-grayColor pl-[1rem]">{phone}</span>
        </div>

        <p className="text-[1.6rem] py-[1rem] text-grayColor">{address}</p>
      </div>
      <div className="flex gap-[2rem]">
        <span className="text-[1.6rem] text-orangeColor cursor-pointer">Chỉnh sửa</span>
        <span className="text-[1.6rem] text-orangeColor cursor-pointer">Xóa</span>
      </div>
    </div>
  )
}

export default UserAdressBox
