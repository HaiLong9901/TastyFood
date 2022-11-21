import React from 'react'

function Wrapper({ children }) {
  return <div className="xl:max-w-[120rem] md:max-w-[75rem] max-w-[55rem] mx-auto px-[2rem] h-full">{children}</div>
}

export default Wrapper
