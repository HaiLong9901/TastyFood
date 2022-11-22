import React from 'react'
import Slider from '../components/Slider'
import img from '../assets/Image/spicy-red-soup-beef-noodle-bowl-wooden-table.jpg'

function Home() {
  return (
    <div>
      <div className="bg-primaryColor lg:h-[calc(100vh-8rem)] h-[calc(50vh-8rem)]">
        <Slider
          background={img}
          title="Phở bò"
          desc="loremscaoalsncalsckasnckanckansckanscakscnakncaknsckasnckanckasncskncskacnknask"
        />
      </div>
    </div>
  )
}

export default Home
