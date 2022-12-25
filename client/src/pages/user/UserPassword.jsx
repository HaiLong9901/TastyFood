import React from 'react'
import { Formik, useFormik } from 'formik'
import { useChangePasswordMutation } from '../../features/apis/apiSlice'
import * as Yup from 'yup'

function UserPassword() {
  const [changePassword, { isLoading }] = useChangePasswordMutation()
  const formik = useFormik({
    initialValues: {
      password: '',
      oldPass: '',
      confirm: '',
    },
    validationSchema: Yup.object({
      password: Yup.string().required('Bạn chưa nhập mật khẩu').min(8, 'Mật khẩu phải gồm ít nhất 8 kí tự'),
    }),
    onSubmit: async (values) => {
      const { password, confirm, oldPass } = values
      try {
        //   const userData = await login({ phone, password }).unwrap()
        // //   console.log(userData)
        //   dispatch(setCredentials({ ...userData, phone }))
        //   navigate(userData.user.isAdmin ? '/admin' : '/')
        const changedPassword = await changePassword({ password, confirm, oldPass }).unwrap()
      } catch (error) {
        // setLoginError(error.data.passage)
      }
      console.log(values)
    },
  })
  return (
    <div className="px-[2rem] py-[1rem] min-h-[70vh]">
      <div className="w-full border-b-solid border-b-[.1rem] border-b-primaryColor pb-[1rem]">
        <h2 className="text-[1.6rem] font-bold">Đổi mật khẩu</h2>
        <h4 className="text-[1.6rem]">Để bảo mật tài khoản, vui lòng không chia sẻ mật khẩu cho người khác</h4>
      </div>
      <form
        className="w-full py-[5rem] gap-[3rem] flex flex-col justify-center items-center"
        onSubmit={formik.handleSubmit}
      >
        <div className="flex justify-between w-[60%] items-center">
          <label htmlFor="oldPass" className="text-[1.6rem] text-primaryColor w-[20rem] text-right">
            Mật khẩu cũ
          </label>
          <input
            type="password"
            id="oldPass"
            name="oldPass"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.oldPass}
            className="w-[30rem] outline-none border-solid border-[.1rem] border-grayColor rounded-[.5rem] p-[.5rem] text-[1.6rem]"
          />
        </div>
        <div className="flex justify-between w-[60%] items-center">
          <label htmlFor="password" className="text-[1.6rem] text-primaryColor w-[20rem] text-right">
            Mật khẩu mới
          </label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            className="w-[30rem] outline-none border-solid border-[.1rem] border-grayColor rounded-[.5rem] p-[.5rem] text-[1.6rem]"
          />
        </div>
        <span className="text-red-500 text-[1.3rem] italic">
          {formik.touched.password && formik.errors.password ? formik.errors.password : null}
        </span>
        <div className="flex justify-between w-[60%] items-center">
          <label htmlFor="confirm" className="text-[1.6rem] text-primaryColor w-[20rem] text-right">
            Xác nhận mật khẩu mới
          </label>
          <input
            type="password"
            id="confirm"
            name="confirm"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.confirm}
            className="w-[30rem] outline-none border-solid border-[.1rem] border-grayColor rounded-[.5rem] p-[.5rem] text-[1.6rem]"
          />
        </div>
        <button
          className="text-[1.6rem] px-[2rem] py-[1rem] text-white bg-orangeColor rounded-[.5rem]"
          disabled={formik.isSubmitting}
          type="submit"
        >
          Xác nhận
        </button>
      </form>
    </div>
  )
}

export default UserPassword
