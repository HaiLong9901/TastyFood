import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { useCreateGenreMutation, useGetAllProductsQuery } from '../../features/apis/apiSlice'

const AddGenre = ({ open, setOpen }) => {
  const [createGenre, { isLoading }] = useCreateGenreMutation()
  const [genreError, setGenreError] = useState('')
  const [genreName, setGenreName] = useState('')
  // const handleAddGenre = (name) => {
  //   if (!name.length) {
  //     setGenreError('Bạn chưa nhập tên phân loại')
  //   }
  //   try {
  //     createGenre({ name })
  //     setOpen(false)
  //   } catch (error) {
  //     setGenreError(error)
  //   }
  // }
  return (
    <div
      className={
        open
          ? 'w-screen h-screen fixed top-0 left-0 bg-primaryColor/50 flex justify-center items-center duration-200 ease-in-out'
          : 'w-screen h-screen fixed top-[50%] left-[50%] bg-primaryColor/50 flex justify-center items-center scale-0 duration-200 ease-in-out'
      }
    >
      <div className="w-[30%] h-[50%] bg-white rounded-[.5rem] p-[1rem] flex flex-col justify-between">
        <h3 className="text-[2.5rem] text-primary font-bold text-center">Thêm phân loại</h3>
        <div className="flex flex-col gap-[1rem]">
          <label htmlFor="genre" className="text-[1.6rem]">
            Tên phân loại
          </label>
          <input
            type="text"
            id="genre"
            value={genreName}
            onChange={(e) => setGenreName(e.target.value)}
            className="w-full outline-none text-[1.6rem] focus:border-orangeColor border-solid border-b-[.1rem] focus:border-b-[.3rem] border-orangeColor/30 p-[1rem]"
            placeholder="Nhập tên phân loại"
          />
          <span className="text-[1.5rem] text-red-500 italic">{genreError}</span>
        </div>

        <div className="flex justify-end gap-[1rem]">
          <button
            className="text-[1.6rem] text-white py-[1rem] px-[2rem] bg-orangeColor rounded-[.5rem]"
            onClick={() => {
              if (!genreName.length) {
                setGenreError('Bạn chưa nhập tên phân loại')
              }
              try {
                createGenre({ name: genreName })
                setOpen(false)
              } catch (error) {
                setGenreError(error.passage)
              }
            }}
          >
            Lưu
          </button>
          <button
            className="text-[1.6rem] py-[1rem] px-[2rem] rounded-[.5rem] border-solid border-primaryColor border-[.1rem]"
            onClick={() => setOpen(false)}
          >
            Quay lại
          </button>
        </div>
      </div>
    </div>
  )
}

function AdminProducts() {
  const [openAddGenre, setOpenAddGenre] = useState(false)
  const {
    data: products,
    isFetching: isFetchingProducts,
    isSuccess: isSuccessProducts,
    isError: isErrorProducts,
    error: errorProducts,
  } = useGetAllProductsQuery()
  let ProductsTableRender
  if (isFetchingProducts) ProductsTableRender = <div>Loading...</div>
  else if (isSuccessProducts)
    ProductsTableRender = (
      <table className="w-full table-auto">
        <tr className="bg-yellowColor">
          <th className="text-[1.5rem] text-primaryColor font-bold">Mã sản phẩm</th>
          <th className="text-[1.5rem] text-primaryColor font-bold">Tên sản phẩm</th>
          <th className="text-[1.5rem] text-primaryColor font-bold">Giá gốc</th>
          <th className="text-[1.5rem] text-primaryColor font-bold">Giá bán</th>
          <th className="text-[1.5rem] text-primaryColor font-bold">Phân loại</th>
          <th className="text-[1.5rem] text-primaryColor font-bold">Ảnh</th>
          <th className="text-[1.5rem] text-primaryColor font-bold">Mô tả</th>
          <th className="text-[1.5rem] text-primaryColor font-bold"></th>
          <th className="text-[1.5rem] text-primaryColor font-bold"></th>
        </tr>
        {products.results?.map((product, index) => (
          <tr className={index % 2 ? 'bg-gray-100' : null}>
            <td className="text-[1.5rem] p-[1rem]">{product._id.slice(0, 10)}...</td>
            <td className="text-[1.5rem] p-[1rem]">{product.name}</td>
            <td className="text-[1.5rem] p-[1rem]">{product.original_price}</td>
            <td className="text-[1.5rem] p-[1rem]">{product.sale_price}</td>
            <td className="text-[1.5rem] p-[1rem]">Bánh</td>
            <td className="text-[1.5rem] p-[1rem]">{product.imageURL.slice(0, 10)}...</td>
            <td className="text-[1.5rem] p-[1rem]">{product.desc.slice(0, 50)}...</td>
            <td className="text-[1.5rem] p-[1rem]">
              <button className="text-blue-500">Sửa</button>
            </td>
            <td className="text-[1.5rem] p-[1rem]">
              <button className="text-red-500">Xóa</button>
            </td>
          </tr>
        ))}
      </table>
    )
  return (
    <div className="p-[2rem] flex justify-between">
      <div className="w-[75%]">
        <div className="w-full flex justify-between mb-[2rem]">
          <h3 className="text-[2.5rem] text-primaryColor font-bold">Danh sách sản phẩm</h3>
          <div className="w-[30%] relative">
            <input
              type="text"
              className="w-full outline-none border-none py-[.5rem] px-[1rem] bg-gray-100 text-[1.6rem]"
              placeholder="Tìm kiếm sản phẩm"
            />
            <FaSearch className="absolute right-[1rem] top-[50%] text-orangeColor text-[1.6rem] translate-y-[-50%] cursor-pointer" />
          </div>
        </div>
        {ProductsTableRender}
      </div>
      <div className="w-[calc(25%-_2rem)] flex flex-col gap-[2rem]">
        <div></div>
        <button
          className="w-full bg-orangeColor py-[1rem] text-[1.6rem] text-white rounded-[.5rem]"
          onClick={() => setOpenAddGenre(true)}
        >
          Thêm phân loại
        </button>
        <button className="w-full bg-orangeColor py-[1rem] text-[1.6rem] text-white rounded-[.5rem]">
          Thêm sản phẩm
        </button>
      </div>
      <AddGenre open={openAddGenre} setOpen={setOpenAddGenre} />
    </div>
  )
}

export default AdminProducts
