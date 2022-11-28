import React from 'react'
import Wrapper from './common/Wrapper'
import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa'
function Footer() {
  return (
    <div className="bg-primaryColor py-[5rem]">
      <Wrapper>
        <div className="w-full flex justify-start">
          <div className="w-[25%]">
            <h4 className="text-[1.8rem] text-white">Menu</h4>
            <ul className="">
              <li className="py-[1rem]">
                <Link to="/" className="text-white text-[1.6rem] opacity-60">
                  Trang chủ
                </Link>
              </li>
              <li className="py-[1rem]">
                <Link to="/" className="text-white text-[1.6rem] opacity-60">
                  Giới thiệu
                </Link>
              </li>
              <li className="py-[1rem]">
                <Link to="/" className="text-white text-[1.6rem] opacity-60">
                  Thực đơn
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-[25%]">
            <h4 className="text-[1.8rem] text-white">Liên lạc với chúng tôi</h4>
            <ul>
              <li className="py-[1rem]">
                <Link to="/https://www.facebook.com/HaiLong9901">
                  <FaFacebook className="text-white text-[2rem] opacity-60" />
                </Link>
              </li>
              <li className="py-[1rem]">
                <Link to="/https://www.facebook.com/HaiLong9901">
                  <FaInstagram className="text-white text-[2rem] opacity-60" />
                </Link>
              </li>
              <li className="py-[1rem]">
                <Link to="/https://www.facebook.com/HaiLong9901">
                  <FaTiktok className="text-white text-[2rem] opacity-60" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Wrapper>
    </div>
  )
}

export default Footer
