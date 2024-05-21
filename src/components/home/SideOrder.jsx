import { FaPlus } from "react-icons/fa";
import { GiPayMoney } from "react-icons/gi";
import { IoIosCloseCircle } from "react-icons/io";
import { FaDeleteLeft } from "react-icons/fa6";

import { useContext } from "react";

import { CartContext } from "../../context/cartContext";
import { OrderContext } from "../../context/orderContext";
const SideOrder = () => {
  const {
    carts,
    createNewCart,
    deleteCart,
    selectedCart,
    setSelectedCart,
    removeItemFromCart,
  } = useContext(CartContext);
  const { createOrder, loading } = useContext(OrderContext);

  return (
    <aside className="col-span-1 h-screen flex justify-between divide-x">
      <div className="p-2 flex flex-col justify-between w-[325px]">
        <div className="flex justify-between">
          <div className="gap-2 flex">
            <span
              onClick={() => {
                if (selectedCart.client === 0) {
                  return;
                }
                deleteCart(selectedCart.client);
                setSelectedCart({ ...carts[0], client: 0 });
              }}
              className=" p-1hover:cursor-pointer"
            >
              <IoIosCloseCircle size={70} color="red" />
            </span>
          </div>
          <h1 className="h2 flex justify-center items-center">
            Client {selectedCart.client + 1}
          </h1>
        </div>
        <div className="overflow-auto hide-scrollbar h-[20rem] font-bold text-left">
          <ul>
            {selectedCart.items.map((item) => (
              <li
                key={item._id}
                className="flex justify-between mt-4 hover:cursor-pointer items-center"
              >
                <div>
                  <FaDeleteLeft
                    onClick={() =>
                      removeItemFromCart(selectedCart.client, item._id)
                    }
                    className="transform rotate-180"
                    size={32}
                    color="red"
                  />
                </div>
                <div className="flex gap-2">
                  <span>{item.quantity}</span>
                  <h3 className="h7">{item.name}</h3>
                </div>
                <div>
                  <span>
                    {item.sellPrice * item.quantity}
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
              {selectedCart.items.reduce(
                (acc, item) => acc + item.sellPrice * item.quantity,
                0
              )}
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
              {selectedCart.items.reduce(
                (acc, item) => acc + item.sellPrice * item.quantity,
                0
              ) *
                (1 - selectedCart.discount / 100)}
              <sup>
                <small>DA</small>
              </sup>
            </span>
          </div>
        </div>
        <button
          onClick={() => {
            createOrder(selectedCart);
            setSelectedCart({ ...carts[0], client: 0 });
          }}
          disabled={selectedCart.items.length === 0 || loading}
          className="bg-cyan-700 h-20 text-3xl text-bold rounded-b-2xl grotesk flex items-center justify-center gap-2 hover:opacity-75"
        >
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
              <div className="flex flex-col gap-1 items-center text-center font-bold p-1">
                <h2 className="h6">Client {index + 1}</h2>
                <span>
                  {cart.items.reduce(
                    (acc, item) => acc + item.sellPrice * item.quantity,
                    0
                  )}
                  <sup className="ml-1">
                    <small>DA</small>
                  </sup>
                </span>
              </div>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default SideOrder;
