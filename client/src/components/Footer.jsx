import React from 'react'
import Wrapper from './common/Wrapper'
import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa'
function Footer() {
  return (
    <div className="bg-primaryColor py-[5rem]">
      <Wrapper>
        <div className="w-full flex justify-between">
          <div>
            <h4 className="text-[1.8rem] text-white">Menu</h4>
            <ul className="">
              <li>
                <Link to="/" className="text-white text-[1.6rem] opacity-60">
                  Trang chủ
                </Link>
              </li>
              <li>
                <Link to="/" className="text-white text-[1.6rem] opacity-60">
                  Giới thiệu
                </Link>
              </li>
              <li>
                <Link to="/" className="text-white text-[1.6rem] opacity-60">
                  Thực đơn
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>Liên lạc với chúng tôi</h4>
            <ul>
              <li>
                <Link to="/https://www.facebook.com/HaiLong9901">
                  <FaFacebook />
                </Link>
              </li>
              <li>
                <Link to="/https://www.facebook.com/HaiLong9901">
                  <FaInstagram />
                </Link>
              </li>
              <li>
                <Link to="/https://www.facebook.com/HaiLong9901">
                  <FaTiktok />
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
