import React, { useState } from 'react'
import Wrapper from './common/Wrapper'
import { GiTomato } from 'react-icons/gi'
import { FaFacebook, FaInstagram, FaTiktok, FaShoppingCart, FaTimes, FaBars, FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'
function Header() {
  const [openMenu, setOpenMenu] = useState(false)
  return (
    <div className="w-full relative">
      <div className="w-full bg-primaryColor h-[3rem]">
        <Wrapper>
          <div className="w-full h-full flex justify-end gap-[2rem] items-center">
            <a href="https://www.facebook.com/HaiLong9901">
              <FaFacebook className="text-white text-[1.6rem]" />
            </a>
            <a href="https://www.facebook.com/HaiLong9901">
              <FaInstagram className="text-white text-[1.6rem]" />
            </a>
            <a href="https://www.facebook.com/HaiLong9901">
              <FaTiktok className="text-white text-[1.6rem]" />
            </a>
          </div>
        </Wrapper>
      </div>
      <div className="h-[5rem] bg-orangeColor">
        <Wrapper>
          <div className="flex justify-between">
            <Link to="/" className="flex items-center">
              <span className="text-[2.5rem] text-white font-logoFont">TastyF</span>
              <div className="flex items-baseline">
                <GiTomato className="text-[2.8rem] text-red-600" />
                <GiTomato className="text-[2.8rem] text-red-600" />
              </div>
              <span className="text-[2.5rem] text-white font-logoFont">d</span>
            </Link>
            <ul className="hidden lg:flex list-none gap-[3rem]">
              <li className="leading-[5rem]">
                <Link to="/" className="text-[1.6rem] text-white">
                  Trang chủ
                </Link>
              </li>
              <li className="leading-[5rem]">
                <Link to="/menu" className="text-[1.6rem] text-white">
                  Thực đơn
                </Link>
              </li>
              <li className="leading-[5rem]">
                <Link to="/" className="text-[1.6rem] text-white">
                  Giới thiệu
                </Link>
              </li>
              <li className="leading-[5rem]">
                <Link to="/" className="text-[1.6rem] text-white">
                  Đăng nhập
                </Link>
              </li>
              <li className="leading-[5rem] flex items-center">
                <Link to="/" className="text-[1.6rem] text-white">
                  <FaShoppingCart className="text-[2rem] text-white" />
                </Link>
              </li>
              <li className="leading-[5rem] flex items-center">
                <FaSearch className="text-[2rem] text-white" />
              </li>
            </ul>
            <div className="flex h-[5rem] items-center lg:hidden" onClick={() => setOpenMenu(!openMenu)}>
              {openMenu ? (
                <FaTimes className="text-[2rem] text-white" />
              ) : (
                <FaBars className="text-[2rem] text-white" />
              )}
            </div>
          </div>
        </Wrapper>
      </div>
      <div
        className={
          openMenu
            ? 'h-[100vh] w-[50vw] absolute top-0 left-0 bg-orangeColor py-[2rem] px-[3rem] flex gap-[2rem] flex-col items-center duration-300 ease-in-out z-[1000]'
            : 'h-[100vh] w-[50vw] absolute top-0 left-0 bg-orangeColor py-[2rem] px-[3rem] flex gap-[2rem] flex-col items-center translate-x-[-100%] duration-300 ease-in-out z-[1000]'
        }
      >
        <Link to="/" className="flex items-center">
          <span className="text-[2.5rem] text-white font-logoFont">TastyF</span>
          <div className="flex items-baseline">
            <GiTomato className="text-[2.8rem] text-red-600" />
            <GiTomato className="text-[2.8rem] text-red-600" />
          </div>
          <span className="text-[2.5rem] text-white font-logoFont">d</span>
        </Link>
        <div className="w-full relative">
          <input
            type="text"
            className="w-full pl-[1.5rem] pr-[3rem] py-[1rem] rounded-[5rem] outline-none text-[1.6rem]"
            placeholder="Tìm món ngon nào"
          />
          <FaSearch className="text-[2rem] text-orangeColor absolute top-[50%] translate-y-[-50%] right-0 translate-x-[-50%]" />
        </div>
        <ul className="flex flex-col gap-[2rem] w-full">
          <li className="leading-[5rem] border-b-[.1rem] border-b-white border-b-solid text-center">
            <Link to="/" className="text-[1.6rem] text-white">
              Trang chủ
            </Link>
          </li>
          <li className="leading-[5rem] border-b-[.1rem] border-b-white border-b-solid text-center">
            <Link to="/menu" className="text-[1.6rem] text-white">
              Thực đơn
            </Link>
          </li>
          <li className="leading-[5rem] border-b-[.1rem] border-b-white border-b-solid text-center">
            <Link to="/" className="text-[1.6rem] text-white">
              Giới thiệu
            </Link>
          </li>
          <li className="leading-[5rem] border-b-[.1rem] border-b-white border-b-solid text-center">
            <Link to="/" className="text-[1.6rem] text-white">
              Đăng nhập
            </Link>
          </li>
          <li className="leading-[5rem] flex justify-center items-center">
            <Link to="/" className="text-[1.6rem] text-white">
              <FaShoppingCart className="text-[2rem] text-white" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header
