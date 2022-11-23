import React from 'react'
import { Link } from 'react-router-dom'
import Wrapper from './common/Wrapper'

function Slider({ background, title, desc }) {
  return (
    <div
      className="lg:h-[calc(100vh-8rem)] h-[calc(50vh-8rem)] !bg-no-repeat !bg-center !bg-cover"
      style={{
        background: `linear-gradient(0, rgba(57, 62, 70,0.5), rgba(34, 40, 49,0.8)), url(${background})`,
      }}
    >
      <Wrapper>
        <div className="w-full h-full flex justify-evenly items-center">
          <div className="w-[30%] h-[50%] flex flex-col gap-[1rem]">
            <h3 className="text-[6rem] text-orangeColor font-bold font-dancingScript m-0">{title}</h3>
            <p className="text-[1.6rem] text-white break-words">{desc}</p>
            <div className="text-white bg-orangeColor py-[2rem] px-[.5rem] rounded-[.5rem] w-[50%] text-center text-[1.6rem]">
              Xem
            </div>
          </div>
          <div className="relative w-[50%] aspect-video rounded-[.5rem] overflow-hidden after:content-['']  after:w-full after:h-full after:absolute after:top-0 after:left-0 after:animate-floatLeft">
            <img src={background} alt={title} className="w-full h-full object-cover" />
          </div>
        </div>
      </Wrapper>
    </div>
  )
}

export default Slider
