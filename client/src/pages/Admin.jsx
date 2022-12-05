import React from 'react'
import Wrapper from '../components/common/Wrapper'
import { GiTomato } from 'react-icons/gi'
import { Link } from 'react-router-dom'
function Admin() {
  return (
    <div className="flex h-screen">
      {/* <div className="h-[5rem] bg-secondaryColor">
        <Wrapper>
          <div className="flex gap-[2rem] items-center h-[5rem]">
            <Link to="/" className="flex items-center">
              <span className="text-[2.5rem] text-white font-logoFont">TastyF</span>
              <div className="flex items-baseline">
                <GiTomato className="text-[2.8rem] text-red-600" />
                <GiTomato className="text-[2.8rem] text-red-600" />
              </div>
              <span className="text-[2.5rem] text-white font-logoFont">d</span>
            </Link>
            <h3 className="text-[2.4rem] font-bold text-white">ADMIN</h3>
          </div>
        </Wrapper>
      </div>
      <div className="flex w-full h-screen">
        <div className="w-[20%] bg-yellowColor"></div>
      </div> */}
      <div className="w-[15%] bg-secondaryColor">
        <div>
          <div>
            <img src="" alt="" />
          </div>
          <h3>Nguyen Van A</h3>
        </div>
      </div>
    </div>
  )
}

export default Admin
