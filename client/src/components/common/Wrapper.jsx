import React from 'react'

function Wrapper({ children }) {
  return <div className="xl:max-w-[120rem] lg:max-w-[80rem] max-w-[60rem] mx-auto px-[2rem] pb-[4rem]">{children}</div>
}

export default Wrapper
