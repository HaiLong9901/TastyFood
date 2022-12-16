import React from 'react'
import { USER_DEFAULT_AVATAR } from '../../shared/Constants'
import { useSelector } from 'react-redux'
import { selectCurrentUser } from '../../features/auth/authSlice'
import { useGetUserQuery } from '../../features/apis/apiSlice'
import UploadWidget from '../../components/common/UploadWidget'

function UserProfile() {
  const { id } = useSelector(selectCurrentUser)
  console.log('id: ', id)

  const { data: user, isSuccess: isSuccessUser, isFetching: isFetchingUser } = useGetUserQuery(id)
  if (isSuccessUser) console.log(user)
  return (
    <div className="px-[2rem] py-[1rem] min-h-[70vh]">
      <div className="w-full border-b-solid border-b-[.1rem] border-b-primaryColor pb-[1rem]">
        <h2 className="text-[1.6rem] font-bold">Hồ sơ của tôi</h2>
        <h4 className="text-[1.6rem]">Quản lý thông tin hồ sơ để bảo mật tài khoản</h4>
      </div>
      <div className="h-[40vh]">
        <div className="h-full w-full flex items-center">
          <div
            // action=""
            // method="PUT"
            // id="userInfo"
            className="flex flex-col gap-[2rem] py-[2rem] pr-[2rem] w-[60%] border-r-solid border-r-primaryColor border-r-[.1rem]"
          >
            <div className="flex justify-between">
              <label htmlFor="name" className="text-[1.6rem] text-primaryColor">
                Tên người dùng
              </label>
              <input
                type="text"
                id="name"
                // placeholder={name}
                className="w-[30rem] outline-none border-solid border-[.1rem] border-primaryColor rounded-[.5rem] p-[.5rem] text-[1.6rem]"
              />
            </div>
            <div className="flex justify-between">
              <label htmlFor="phone" className="text-[1.6rem] text-primaryColor">
                Số điện thoại
              </label>
              <input
                type="text"
                id="phone"
                className="w-[30rem] outline-none border-solid border-[.1rem] border-primaryColor rounded-[.5rem] p-[.5rem] text-[1.6rem]"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center w-[40%] gap-[2rem]">
            <div className="w-[15rem] h-[15rem] rouneded-[50%] overflow-hidden">
              <img src={USER_DEFAULT_AVATAR} alt="avt" className="w-full h-full object-cover" />
            </div>
            <div>
              {/* <label
                htmlFor="imageURL"
                className="text-[1.6rem] cursor-pointer py-[1rem] px-[2rem] border-[.1rem] border-solid border-primaryColor rounded-[1rem]"
              >
                Tải ảnh lên
              </label>
              <input type="file" id="imageURL" className="hidden" /> */}
              <UploadWidget />
            </div>
          </div>
        </div>
        <button
          // type="submit"
          // form="userInfo"
          className="text-[1.6rem] text-white bg-orangeColor rounded-[1rem] py-[1rem] px-[2rem] min-w-[10rem]"
        >
          Lưu
        </button>
      </div>
    </div>
  )
}

export default UserProfile
