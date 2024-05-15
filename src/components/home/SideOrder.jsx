import { BsFillPrinterFill } from "react-icons/bs";
import { FaPlus } from "react-icons/fa";
import { GiPayMoney } from "react-icons/gi";
import { IoIosCloseCircle } from "react-icons/io";
import { useState, useContext } from "react";

import { CartContext } from "../../context/cartContext";

const SideOrder = () => {
  const { carts, createNewCart, deleteCart } = useContext(CartContext);
  const [selectedCart, setSelectedCart] = useState({ ...carts[0], client: 0 });
  return (
    <aside className="col-span-1 h-screen flex justify-between divide-x">
      <div className="p-2 flex flex-col justify-between w-[325px]">
        <div className="flex justify-between">
          <h1 className="h2 flex justify-center items-center">
            Client {selectedCart.client + 1}
          </h1>
          <div className="gap-2 flex">
            <span className="border p-1 rounded hover:cursor-pointer">
              <BsFillPrinterFill size={60} color="#06b6d4" />
            </span>
            <span
              onClick={() => {
                if (selectedCart.client === 0) {
                  return;
                }
                deleteCart(selectedCart.client);
                setSelectedCart({ ...carts[0], client: 0 });
              }}
              className="border p-1 rounded hover:cursor-pointer"
            >
              <IoIosCloseCircle size={60} color="red" />
            </span>
          </div>
        </div>
        <div className="overflow-auto hide-scrollbar h-[20rem]">
          <ul>
            {selectedCart.items.map((item) => (
              <li
                key={item._id}
                className="flex justify-between mt-4 hover:cursor-pointer"
              >
                <div className="flex gap-2">
                  <span>{item.quantity}</span>
                  <h3 className="h7">{item.name}</h3>
                </div>
                <div>
                  <span>
                    {item.price}
                    <sup>
                      <small>DA</small>
                    </sup>
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <hr />
        <div className="w-full">
          <div className="flex justify-between">
            <h3 className="h3">Subtotal</h3>
            <span>
              {selectedCart.subtotal}
              <sup>
                <small>DA</small>
              </sup>
            </span>
          </div>
          <div className="flex justify-between">
            <h3 className="h3">Réduction</h3>
            <span>
              {selectedCart.discount}
              <span>%</span>
            </span>
          </div>
          <div className="flex justify-between">
            <h3 className="h3">total</h3>
            <span>
              {selectedCart.total}
              <sup>
                <small>DA</small>
              </sup>
            </span>
          </div>
        </div>
        <button className="bg-cyan-700 h-20 text-3xl text-bold rounded-b-2xl grotesk flex items-center justify-center gap-2 hover:opacity-75">
          Checkout <GiPayMoney size={50} />
        </button>
      </div>

      <nav className="overflow-y-auto hide-scrollbar p-1">
        <ul className="">
          <li
            onClick={createNewCart}
            className="flex  justify-center items-center w-24 h-24 border rounded-full border-gray-500 hover:cursor-pointer"
          >
            <FaPlus size={50} />
          </li>
          {carts.map((cart, index) => (
            <li
              onClick={() => setSelectedCart({ ...cart, client: index })}
              className={`flex mt-2 justify-center items-center w-24 h-24 border rounded-full border-gray-500 hover:cursor-pointer ${
                index === selectedCart.client ? "bg-cyan-700" : ""
              }`}
              key={index}
            >
              <h2 className="h6">Client {index + 1}</h2>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default SideOrder;
