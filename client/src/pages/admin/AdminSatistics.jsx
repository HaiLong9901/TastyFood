import React from 'react'
import { NavLink } from 'react-router-dom'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'
import { Bar } from 'react-chartjs-2'
import { faker } from '@faker-js/faker'
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
}

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July']

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
}
export const StatisticChart = () => {
  return <Bar options={options} data={data} />
}
function AdminSatistics() {
  return (
    <div className="w-full h-full p-[2rem]">
      <div>
        <h3 className="text-[2.5rem] text-primaryColor font-bold">Thống kê</h3>
      </div>
      <div className="w-[70%] p-[2rem] border-solid border-grayColor border-[.1rem] rounded-[.5rem]">
        <div className="flex justify-between">
          <div>
            <NavLink>Doanh số</NavLink>
            <NavLink>Sản phẩm</NavLink>
            <NavLink>Khách hàng</NavLink>
          </div>
          <div>
            <select name="" id=""></select>
          </div>
        </div>
        <div className="w-[full] h-[45rem]">
          <StatisticChart />
        </div>
      </div>
    </div>
  )
}

export default AdminSatistics
