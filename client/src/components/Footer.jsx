import React from 'react'
import Wrapper from './common/Wrapper'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <div className="bg-primaryColor">
      <Wrapper>
        <div>
          <div>
            <h4>Menu</h4>
            <ul>
              <li>
                <Link to="/">Trang chủ</Link>
              </li>
              <li>
                <Link to="/">Giới thiệu</Link>
              </li>
              <li>
                <Link to="/">Thực đơn</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>Liên lạc với chúng tôi</h4>
            <ul>
              <li>
                <Link to="/"></Link>
              </li>
            </ul>
          </div>
        </div>
      </Wrapper>
    </div>
  )
}

export default Footer
