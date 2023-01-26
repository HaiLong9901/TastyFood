import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'
import { Bar } from 'react-chartjs-2'
import { useGetStatisticSalesQuery, useGetStatisticOrdersQuery } from '../../features/apis/apiSlice'
import { toISODate } from '../../shared/FormatDate'
import { useState } from 'react'
import { FaShoppingBag, FaFileInvoice, FaUserAlt } from 'react-icons/fa'
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

// export const options = {
//   responsive: true,
//   plugins: {
//     legend: {
//       position: 'top',
//     },
//     title: {
//       display: true,
//       text: 'Chart.js Bar Chart',
//     },
//   },
// }

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
export const ProductsStatisticChart = () => {
  return <div>HEllo</div>
}
export const SalesStatisticChart = () => {
  const [type, setType] = useState('day')
  const { data: sales, isSuccess: isSuccessSales, isFetching: isFetchingSales } = useGetStatisticSalesQuery(type)
  let Render
  if (isFetchingSales) {
    Render = (
      <div className="w-full h-full flex justify-center items-center text-[2rem] font-bold text-orangeColor">
        Loading...
      </div>
    )
  } else if (isSuccessSales) {
    const options = {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: `Thống kê doanh số ${type === 'day' ? 'ngày' : 'tháng năm 2023'}`,
        },
      },
    }
    const labels =
      type === 'day'
        ? sales.result?.map((sale) => toISODate(sale.date).substring(0, 5))
        : sales.result?.map((sale) => sale.date)
    const data = {
      labels,
      datasets: [
        {
          label: 'Doanh số',
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
        <select
          name="type"
          id="type"
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="text-[1.5rem] text-primaryColor outline-none"
        >
          <option value="day" className="text-[1.5rem] text-primaryColor ">
            Ngày
          </option>
          <option value="month" className="text-[1.5rem] text-primaryColor ">
            Tháng
          </option>
        </select>
      </div>
      <div className="w-[full] h-[40rem]">{Render}</div>
    </>
  )
}
export const OrdersStatisticChart = () => {
  const [type, setType] = useState('day')
  const { data: sales, isSuccess: isSuccessSales, isFetching: isFetchingSales } = useGetStatisticOrdersQuery(type)
  let Render
  if (isFetchingSales) {
    Render = (
      <div className="w-full h-full flex justify-center items-center text-[2rem] font-bold text-orangeColor">
        Loading...
      </div>
    )
  } else if (isSuccessSales) {
    const options = {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: `Thống kê đơn hàng theo ${type === 'day' ? 'ngày' : 'tháng năm 2023'}`,
        },
      },
    }
    const labels =
      type === 'day'
        ? sales.result?.map((sale) => toISODate(sale.date).substring(0, 5))
        : sales.result?.map((sale) => sale.date)
    const data = {
      labels,
      datasets: [
        {
          label: 'Đơn thành công',
          data: sales.result?.map((sale) => sale.success),
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
          label: 'Đơn không thành công',
          data: sales.result?.map((sale) => sale.rejected),
          backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
      ],
    }
    Render = <Bar options={options} data={data} />
  }
  return (
    <>
      <div className="flex justify-end">
        <select
          name="type"
          id="type"
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="text-[1.5rem] text-primaryColor outline-none"
        >
          <option value="day" className="text-[1.5rem] text-primaryColor ">
            Ngày
          </option>
          <option value="month" className="text-[1.5rem] text-primaryColor ">
            Tháng
          </option>
        </select>
      </div>
      <div className="w-[full] h-[40rem]">{Render}</div>
    </>
  )
}
function AdminSatistics() {
  return (
    <div className="w-full h-full p-[2rem] flex flex-col gap-[2rem]">
      <h3 className="text-[2.5rem] text-primaryColor font-bold">Thống kê</h3>
      <div className="grow">
        <div className="flex flex-col gap-[2rem] w-[65%] h-full">
          <div className="w-full  p-[1rem] border-solid border-gray-200 border-[.1rem] rounded-[.5rem] shadow-md">
            <div className="flex gap-[2rem]">
              <NavLink
                to="/admin/statistics"
                className={({ isActive }) =>
                  isActive ? 'text-[1.5rem] text-orangeColor font-bold' : 'text-[1.5rem] text-primaryColor'
                }
                end
              >
                Doanh số
              </NavLink>
              <NavLink
                to="/admin/statistics/orders"
                className={({ isActive }) =>
                  isActive ? 'text-[1.5rem] text-orangeColor font-bold' : 'text-[1.5rem] text-primaryColor'
                }
              >
                Đơn hàng
              </NavLink>
              <NavLink
                to="/admin/statistics/products"
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
              <Outlet />
              {/* <SalesStatisticChart /> */}
            </div>
          </div>
          <div className="w-full grow flex justify-between">
            <div className="w-[calc((100%-_4rem)/3)] h-full rounded-[.5rem] border-solid border-gray-200 border-[.1rem] shadow-sm p-[1rem] flex flex-col justify-between">
              <div className="flex justify-between items-center">
                <FaShoppingBag className="text-[2.8rem] text-blue-500" />
                <h3 className="text-[2.8rem] font-bold text-green-500">+35%</h3>
              </div>
              <div className="text-[2.4rem] font-bold text-center">128.000</div>
              <div className="text-[1.6rem] text-grayColor text-center">Doanh số ngày</div>
            </div>
            <div className="w-[calc((100%-_4rem)/3)] h-full rounded-[.5rem] border-solid border-gray-200 border-[.1rem] shadow-sm p-[1rem] flex flex-col justify-between">
              <div className="flex justify-between items-center">
                <FaFileInvoice className="text-[2.8rem] text-orangeColor" />
                <h3 className="text-[2.8rem] font-bold text-red-500">-5%</h3>
              </div>
              <div className="text-[2.4rem] font-bold text-center">12</div>
              <div className="text-[1.6rem] text-grayColor text-center">Số đơn hàng trong ngày</div>
            </div>
            <div className="w-[calc((100%-_4rem)/3)] h-full rounded-[.5rem] border-solid border-gray-200 border-[.1rem] shadow-sm p-[1rem] flex flex-col justify-between">
              <div className="flex justify-between items-center">
                <FaUserAlt className="text-[2.8rem] text-yellow-500" />
                <h3 className="text-[2.8rem] font-bold text-green-500">+3%</h3>
              </div>
              <div className="text-[2.4rem] font-bold text-center">10</div>
              <div className="text-[1.6rem] text-grayColor text-center">Khách hàng mới</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminSatistics
