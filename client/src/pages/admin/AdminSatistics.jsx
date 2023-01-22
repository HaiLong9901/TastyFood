import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'
import { Bar } from 'react-chartjs-2'
import { faker } from '@faker-js/faker'
import { useGetStatisticSalesQuery } from '../../features/apis/apiSlice'
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

// const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July']

// export const data = {
//   labels,
//   datasets: [
//     {
//       label: 'Thang',
//       data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
//       backgroundColor: 'rgba(255, 99, 132, 0.5)',
//     },
//     {
//       label: 'Dataset 2',
//       data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
//       backgroundColor: 'rgba(53, 162, 235, 0.5)',
//     },
//   ],
// }
export const StatisticChart = ({ type }) => {
  const { data: sales, isSuccess: isSuccessSales, isFetching: isFetchingSales } = useGetStatisticSalesQuery()
  let Render
  if (isFetchingSales) {
    Render = <div>Loading...</div>
  } else if (isSuccessSales) {
    const labels = sales.result?.map((sale) => sale.date)
    const data = {
      labels,
      datasets: [
        {
          label: 'Thang',
          data: sales.result?.map((sale) => sale.amount),
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
      ],
    }
    Render = <Bar options={options} data={data} />
  }
  return (
    <>
      <div className="flex justify-end">
        <select name="" id=""></select>
      </div>
      <div className="w-[full] h-[40rem]">{Render}</div>
    </>
  )
}
function AdminSatistics() {
  return (
    <div className="w-full h-full p-[2rem]">
      <div>
        <h3 className="text-[2.5rem] text-primaryColor font-bold">Thống kê</h3>
      </div>
      <div className="w-[60%] p-[1rem] border-solid border-grayColor border-[.1rem] rounded-[.5rem] shadow-md">
        <div className="flex gap-[2rem]">
          <NavLink
            to="/admin/statistics/sales"
            className={({ isActive }) =>
              isActive ? 'text-[1.5rem] text-orangeColor font-bold' : 'text-[1.5rem] text-primaryColor'
            }
          >
            Doanh số
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? 'text-[1.5rem] text-orangeColor font-bold' : 'text-[1.5rem] text-primaryColor'
            }
          >
            Sản phẩm
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? 'text-[1.5rem] text-orangeColor font-bold' : 'text-[1.5rem] text-primaryColor'
            }
          >
            Khách hàng
          </NavLink>
        </div>
        <div>
          {/* <Outlet /> */}
          <StatisticChart />
        </div>
      </div>
    </div>
  )
}

export default AdminSatistics
