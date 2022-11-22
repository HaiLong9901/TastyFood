import React from 'react'
import { Link } from 'react-router-dom'
import Wrapper from './common/Wrapper'

function Slider({ background, title, desc }) {
  return (
    <div
      className="w-full h-full !bg-no-repeat !bg-center !bg-cover"
      style={{
        background: `linear-gradient(0, rgba(57, 62, 70,0.5), rgba(34, 40, 49,0.8)), url(${background})`,
      }}
    >
      <Wrapper>
        <div className="w-full h-full flex justify-evenly items-center">
          <div className="w-[30%] h-[50%]">
            <h3 className="text-[6rem] text-orangeColor font-bold font-dancingScript m-0">{title}</h3>
            <p className="text-[1.6rem] text-white break-words">{desc}</p>
            <Link to="/">Xem</Link>
          </div>
          <div className="w-[50%] aspect-video">
            <img src={background} alt={title} className="w-full h-full object-cover" />
          </div>
        </div>
      </Wrapper>
    </div>
  )
}

export default Slider
