import React from 'react'
import shirt from '../../assets/shirt.png'
import { FaTshirt } from 'react-icons/fa'
import { GiDress } from 'react-icons/gi'
import { GiMonclerJacket } from 'react-icons/gi'
import { MdBarcodeReader } from 'react-icons/md'
const products = [
  {
    id: '1',
    name: 'Product 1',
    price: '2000',
    barcode: '1234567890123',
    image: shirt,
  },
  {
    id: '2',
    name: 'Product 2',
    price: '2000',
    barcode: '1234567890124',
    image: shirt,
  },
  {
    id: '3',
    name: 'Product 3',
    price: '2000',
    barcode: '1234567890125',
    image: shirt,
  },
  {
    id: '4',
    name: 'Product 4',
    price: '2000',
    barcode: '1234567890126',
    image: shirt,
  },
  {
    id: '5',
    name: 'Product 5',
    price: '2000',
    barcode: '1234567890127',
    image: shirt,
  },
  {
    id: '6',
    name: 'Product 6',
    price: '2000',
    barcode: '1234567890128',
    image: shirt,
  },
  {
    id: '7',
    name: 'Product 7',
    price: '2000',
    barcode: '1234567890129',
    image: shirt,
  },
  {
    id: '8',
    name: 'Product 8',
    price: '2000',
    barcode: '1234567890130',
    image: shirt,
  },
  {
    id: '9',
    name: 'Product 9',
    price: '2000',
    barcode: '1234567890131',
    image: shirt,
  },
  {
    id: '10',
    name: 'Product 10',
    price: '2000',
    barcode: '1234567890132',
    image: shirt,
  },
]

const category = [
  { id: '1', icon: 'FaTshirt', name: 'T-Shirts' },
  { id: '2', icon: 'GiMonclerJacket', name: 'Jackets' },
  { id: '3', icon: 'GiDress', name: 'Dresses' },
  { id: '4', icon: 'FaTshirt', name: 'Casual Shirts' },
  { id: '5', icon: 'FaTshirt', name: 'Dresses' },
  { id: '6', icon: 'FaTshirt', name: 'Dresses' },
  { id: '7', icon: 'GiDress', name: 'Dresses' },
  { id: '8', icon: 'FaTshirt', name: 'Dresses' },
  { id: '9', icon: 'FaTshirt', name: 'Dresses' },
  { id: '10', icon: 'GiDress', name: 'Dresses' },
  { id: '11', icon: 'FaTshirt', name: 'Dresses' },
  { id: '12', icon: 'FaTshirt', name: 'Dresses' },
  { id: '13', icon: 'FaTshirt', name: 'Dresses' },
  { id: '14', icon: 'FaTshirt', name: 'Dresses' },
  { id: '15', icon: 'FaTshirt', name: 'Dresses' },
]

const iconMapping = {
  FaTshirt: FaTshirt,
  GiDress: GiDress,
  GiMonclerJacket: GiMonclerJacket,
}

const Main = () => {
  return (
    <section className='h-screen col-span-2 p-2'>
      <div>
        <ul className='flex py-6 gap-6 flex-row whitespace-nowrap overflow-x-auto hide-scrollbar'>
          {category.map((cat) => (
            <div key={cat.id} className='hover:cursor-pointer'>
              <li className='p-2 flex items-center justify-center border rounded-full bg-cyan-700 border-cyan-700'>
                {React.createElement(
                  iconMapping[cat.icon],
                  { size: 40 },
                  { color: '#red' }
                )}
              </li>
              <span className='text-center text-cyan-700 text-2xl'>
                {cat.name}
              </span>
            </div>
          ))}
        </ul>
        <div className='flex justify-between'>
          <h2 className='h3'>Shirts</h2>
          <h2 className='h6 mt-2 underline underline-offset-4'>
            {products.length} shirts found
          </h2>
        </div>

        <div className='grid grid-cols-4 mt-2 gap-4 h-[460px] overflow-y-auto hide-scrollbar  '>
          {products.map((product) => (
            <div
              key={product.id}
              className='flex flex-col items-center rounded border hover:cursor-pointer'
            >
              <img
                src={product.image}
                alt='shirt'
                className='col-span-1 object-contain w-full h-36 p-2'
              />
              <div>
                <h3 className='text-center'>{product.name}</h3>
                <div className='flex flex-col '>
                  <small className='text-center'>
                    {product.price}
                    <sup>
                      <small>DA</small>
                    </sup>
                  </small>
                  <small className='text-center'>{product.barcode}</small>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='items-center justify-end flex mt-[1.70rem]'>
          <div className='relative'>
            <div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
              <MdBarcodeReader size={25} />
            </div>
          </div>
          <input
            type='search'
            id='default-search'
            className='block w-full p-4 ps-10 text-xl text-gray-900 h-20 rounded bg-[#4f4f4f]   '
            placeholder='Enter BarCode'
            required
          />
        </div>
      </div>
    </section>
  )
}

export default Main
