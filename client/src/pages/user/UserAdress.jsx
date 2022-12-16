import React from 'react'
import UserAdressBox from '../../components/user/UserAdressBox'

function UserAdress() {
  return (
    <div className="px-[2rem] py-[1rem] min-h-[70vh]">
      <div className="w-full border-b-solid border-b-[.1rem] border-b-primaryColor pb-[1rem] flex justify-between items-center">
        <h2 className="text-[2rem] font-bold pr-[2rem] border-r-[.1rem] border-r-primaryColor border-r-solid">
          Địa chỉ của tôi
        </h2>
        <button className="text-[1.6rem] font-bold text-white py-[1rem] px-[3rem] bg-orangeColor rounded-[1rem]">
          Thêm địa chỉ
        </button>
      </div>
      <div className="py-[2rem] flex flex-col gap-[2rem]">
        <h2 className="text-[1.6rem] text-primaryColor">Địa chỉ</h2>
        <UserAdressBox name="Do Hai Long" phone="0123456789" address="15151casdcdscjhabd" />
      </div>
    </div>
  )
}

export default UserAdress
