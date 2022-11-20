import React from 'react'
import Wrapper from './common/Wrapper'
import { GiTomato } from 'react-icons/gi'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <div className="w-screen">
      <Wrapper>
        <div className="flex justify-between">
          <div className="flex items-center">
            {/* <h3 className='font-logoFont font-bold text-greenColor text-[1.8rem]'>Logo</h3>
                <GiTomato className='text-redColor text-[2rem]'/> */}
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
      </Wrapper>
    </div>
  )
}

export default Header
