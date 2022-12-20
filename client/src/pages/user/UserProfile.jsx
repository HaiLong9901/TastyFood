import React, { useEffect, useRef } from 'react'
import { USER_DEFAULT_AVATAR } from '../../shared/Constants'
import { useSelector, useDispatch } from 'react-redux'
import { selectCurrentUser } from '../../features/auth/authSlice'
import { useGetUserQuery } from '../../features/apis/apiSlice'
import { useUpdateInfoMutation } from '../../features/apis/userApiSlice'
import { setCredentials } from '../../features/auth/authSlice'
import UploadWidget from '../../components/common/UploadWidget'
import { useState } from 'react'

function UserProfile() {
  const dispatch = useDispatch()
  const [updateInfo, { isLoading }] = useUpdateInfoMutation()
  const [name, setName] = useState('')
  const { id, imageURL } = useSelector(selectCurrentUser)
  const [imageURLCloudinary, setImageURLCloudinary] = useState(imageURL)
  const { data: user, isSuccess: isSuccessUser, isFetching: isFetchingUser } = useGetUserQuery(id)
  const cloudinaryRef = useRef()
  const widgetRef = useRef()
  useEffect(() => {
    cloudinaryRef.current = window.cloudinary
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: 'do7sbasez',
        uploadPreset: 'xnafd3oe',
      },
      (error, result) => {
        if (result.event === 'success') {
          console.log(result)
          setImageURLCloudinary(result.info.url)
        }
      },
    )
  }, [imageURL])

  let Profile
  if (isFetchingUser)
    Profile = (
      <div className="px-[2rem] py-[1rem] min-h-[70vh] flex justify-center items-center">
        <h2 className="text-[4rem] font-bold text-orangeColor">...Loading</h2>
      </div>
    )
  else if (isSuccessUser)
    Profile = (
      <div className="px-[2rem] py-[1rem] min-h-[70vh]">
        <div className="w-full border-b-solid border-b-[.1rem] border-b-primaryColor pb-[1rem]">
          <h2 className="text-[1.6rem] font-bold">Hồ sơ của tôi</h2>
          <h4 className="text-[1.6rem]">Quản lý thông tin hồ sơ để bảo mật tài khoản</h4>
        </div>
        <div className="h-[40vh]">
          <div className="h-full w-full flex items-center">
            <div className="flex flex-col gap-[2rem] py-[2rem] pr-[2rem] w-[60%] border-r-solid border-r-primaryColor border-r-[.1rem]">
              <div className="flex justify-between">
                <label htmlFor="name" className="text-[1.6rem] text-primaryColor">
                  Tên người dùng
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder={user.result.name}
                  className="w-[30rem] outline-none border-solid border-[.1rem] border-primaryColor rounded-[.5rem] p-[.5rem] text-[1.6rem]"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="flex justify-between">
                <label htmlFor="phone" className="text-[1.6rem] text-primaryColor">
                  Số điện thoại
                </label>
                <input
                  type="text"
                  id="phone"
                  value={user.result.phone}
                  disabled
                  className="w-[30rem] outline-none border-solid border-[.1rem] border-primaryColor rounded-[.5rem] p-[.5rem] text-[1.6rem]"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center items-center w-[40%] gap-[2rem]">
              <div className="w-[15rem] h-[15rem] rounded-[50%] overflow-hidden">
                <img src={imageURLCloudinary || USER_DEFAULT_AVATAR} alt="avt" className="w-full h-full object-cover" />
              </div>
              <div>
                {/* <label
            htmlFor="imageURL"
            className="text-[1.6rem] cursor-pointer py-[1rem] px-[2rem] border-[.1rem] border-solid border-primaryColor rounded-[1rem]"
          >
            Tải ảnh lên
          </label>
          <input type="file" id="imageURL" className="hidden" /> */}
                {/* <UploadWidget /> */}
                <button
                  className="text-[1.6rem] cursor-pointer py-[1rem] px-[2rem] border-[.1rem] border-solid border-primaryColor rounded-[1rem]"
                  onClick={() => widgetRef.current.open()}
                >
                  Tải ảnh lên
                </button>
              </div>
            </div>
          </div>
          <button
            // type="submit"
            // form="userInfo"
            onClick={async () => {
              try {
                const user = await updateInfo({ id, imageURL: imageURLCloudinary, name })
                if (user)
                  dispatch({
                    user: {
                      imageURL: imageURLCloudinary,
                    },
                  })
              } catch (error) {
                console.log(error)
              }
            }}
            className="text-[1.6rem] text-white bg-orangeColor rounded-[1rem] py-[1rem] px-[2rem] min-w-[10rem]"
          >
            Lưu
          </button>
        </div>
      </div>
    )
  return <>{Profile}</>
}

export default UserProfile
