import { MdDelete } from 'react-icons/md'
import { BsFillPrinterFill } from 'react-icons/bs'
import { FaPlus } from 'react-icons/fa'
import { GiPayMoney } from 'react-icons/gi'

const orders = [
  { id: '1', name: 'Client 1' },
  { id: '2', name: 'Client 2' },
  { id: '3', name: 'Client 3' },
  { id: '4', name: 'Client 4' },
  { id: '6', name: 'Client 6' },
  { id: '7', name: 'Client 7' },
  { id: '8', name: 'Client 8' },
  { id: '8', name: 'Client 8' },
  { id: '9', name: 'Client 9' },
]

const SideOrder = () => {
  return (
    <aside className='col-span-1 h-screen flex justify-between divide-x'>
      <div className='p-2 flex flex-col justify-between w-[325px]'>
        <div className='flex justify-between'>
          <h1 className='h2 flex justify-center items-center'>Client 1</h1>
          <div className='gap-2 flex'>
            <span className='border p-1 rounded'>
              <BsFillPrinterFill size={60} color='#06b6d4' />
            </span>
            <span className='border p-1 rounded'>
              <MdDelete size={60} color='red' />
            </span>
          </div>
        </div>
        <div className='overflow-auto hide-scrollbar h-[20rem]'>
          <ul>
            <li className='flex justify-between mt-4 hover:cursor-pointer'>
              <div className='flex gap-2'>
                <span>x1</span>
                <h3 className='h7'>Denim Jacket Jacket Jacket Jacket</h3>
              </div>
              <div>
                <span>
                  200
                  <sup>
                    <small>DA</small>
                  </sup>
                </span>
              </div>
            </li>
            <li className='flex justify-between mt-4'>
              <div className='flex gap-2'>
                <span>x1</span>
                <h3 className='h7'>Denim Jacket Jacket Jacket Jacket</h3>
              </div>
              <div>
                <span>
                  200
                  <sup>
                    <small>DA</small>
                  </sup>
                </span>
              </div>
            </li>
            <li className='flex justify-between mt-4'>
              <div className='flex gap-2'>
                <span>x1</span>
                <h3 className='h7'>Denim Jacket Jacket Jacket Jacket</h3>
              </div>
              <div>
                <span>
                  200
                  <sup>
                    <small>DA</small>
                  </sup>
                </span>
              </div>
            </li>
          </ul>
        </div>
        <hr />
        <div className='w-full'>
          <div className='flex justify-between'>
            <h3 className='h3'>Subtotal</h3>
            <span>
              200
              <sup>
                <small>DA</small>
              </sup>
            </span>
          </div>
          <div className='flex justify-between'>
            <h3 className='h3'>tax</h3>
            <span>
              0
              <sup>
                <small>DA</small>
              </sup>
            </span>
          </div>
          <div className='flex justify-between'>
            <h3 className='h3'>total</h3>
            <span>
              200
              <sup>
                <small>DA</small>
              </sup>
            </span>
          </div>
        </div>
        <button className='bg-cyan-700 h-20 text-3xl text-bold rounded-b-2xl grotesk flex items-center justify-center gap-2 hover:opacity-75'>
          Checkout <GiPayMoney size={50} />
        </button>
      </div>

      <nav className='overflow-y-auto hide-scrollbar p-1'>
        <ul className=''>
          <li className='flex  justify-center items-center w-24 h-24 border rounded-full border-gray-500'>
            <FaPlus size={50} />
          </li>
          {orders.map((order) => (
            <li
              className='flex mt-2 justify-center items-center w-24 h-24 border rounded-full border-gray-500 bg-cyan-700 '
              key={order.id}
            >
              <h2 className='h6'>{order.name}</h2>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}

export default SideOrder
