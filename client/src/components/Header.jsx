import React, { useState } from 'react'
import Wrapper from './common/Wrapper'
import { GiTomato } from 'react-icons/gi'
import { FaFacebook, FaInstagram, FaTiktok, FaShoppingCart, FaTimes, FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'
function Header() {
  const [openMenu, setOpenMenu] = useState(false)
  return (
    <div className="w-screen">
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
      {/* <Wrapper>
        
        <div className="flex justify-between">
          <div className="flex items-center">
            <h3 className='font-logoFont font-bold text-greenColor text-[1.8rem]'>Logo</h3>
                <GiTomato className='text-redColor text-[2rem]'/>
            <h2 className="font-logoFont font-bold text-greenColor text-[3.5rem]">TastyF</h2>
            <GiTomato className="text-redColor text-[3rem]" />
            <GiTomato className="text-redColor text-[3rem]" />
            <h2 className="font-logoFont font-bold text-greenColor text-[3.5rem]">d</h2>
          </div>
          <ul className="flex gap-[2rem]">
            <li>
              <Link to="/">Trang chủ</Link>
            </li>
            <li>
              <Link to="/">Thực đơn</Link>
            </li>
            <li>
              <Link to="/">Giới thiệu</Link>
            </li>
            <li>
              <Link to="/">Trang chủ</Link>
            </li>
          </ul>
        </div>
      </Wrapper> */}
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
                <Link to="/" className="text-[1.6rem] text-white">
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
    </div>
  )
}

export default Header
