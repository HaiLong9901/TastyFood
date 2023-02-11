function AdminHumanResources() {
  return (
    <div className="flex gap-[2rem]">
      <div className="w-[70%] max-h-screen p-[2rem] overflow-y-auto flex flex-col gap-[2rem]">
        <div className="flex justify-between">
          <h3 className="text-[2.5rem] font-bold text-primaryColor">Quản lý tài khoản quản lý</h3>
          <button className="text-[1.6rem] text-white bg-orangeColor px-[2rem] py-[1rem] rounded-[5rem]">
            Thêm tài khoản quản lý
          </button>
        </div>
        <div className="w-full"></div>
      </div>
      <div className="grow p-[2rem] border-solid border-orangeColor border-l-[.1rem] h-screen flex flex-col gap-[2rem] items-center">
        <div className="w-[30%] aspect-square">
          <image />
        </div>
        <div className="w-full flex flex-col gap-[1rem]">
          <label htmlFor="name" className="text-[1.6rem] text-primaryColor">
            Họ tên
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="text-[1.6rem] text-primaryColor w-full py-[.5rem] px-[1rem] outline-none border-solid border-grayColor border-[.1rem] rounded-[.5rem]"
          />
        </div>
        <div className="w-full flex flex-col gap-[1rem]">
          <label htmlFor="phone" className="text-[1.6rem] text-primaryColor">
            Số điện thoại
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            className="text-[1.6rem] text-primaryColor w-full py-[.5rem] px-[1rem] outline-none border-solid border-grayColor border-[.1rem] rounded-[.5rem]"
          />
        </div>
        <div className="w-full flex flex-col gap-[1rem]">
          <label htmlFor="password" className="text-[1.6rem] text-primaryColor">
            Mật khẩu
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="text-[1.6rem] text-primaryColor w-full py-[.5rem] px-[1rem] outline-none border-solid border-grayColor border-[.1rem] rounded-[.5rem]"
          />
        </div>
        <div className="w-full flex flex-col gap-[1rem]">
          <label htmlFor="confirm" className="text-[1.6rem] text-primaryColor">
            Họ tên
          </label>
          <input
            type="password"
            id="confirm"
            name="confirm"
            className="text-[1.6rem] text-primaryColor w-full py-[.5rem] px-[1rem] outline-none border-solid border-grayColor border-[.1rem] rounded-[.5rem]"
          />
        </div>
        <div className="w-full flex justify-center">
          <button className="text-[1.6rem] text-white py-[1rem] px-[4rem] rounded-[5rem] bg-orangeColor">
            Cập nhật
          </button>
        </div>
      </div>
    </div>
  )
}
export default AdminHumanResources
