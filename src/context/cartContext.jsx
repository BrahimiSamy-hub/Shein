import { createContext, useState, useCallback } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [carts, setCarts] = useState([
    {
      subtotal: 10000,
      discount: 10,
      total: 9000,
      items: [
        {
          _id: 1,
          name: "Denim Jacket",
          price: 200,
          quantity: 1,
        },
        {
          _id: 2,
          name: "Denim Jacket",
          price: 200,
          quantity: 1,
        },
      ],
    },
    {
      subtotal: 5000,
      discount: 0,
      total: 5000,
      items: [
        {
          _id: 1,
          name: "Denim Jacket2",
          price: 200,
          quantity: 1,
        },
        {
          _id: 2,
          name: "Denim Jacket2",
          price: 200,
          quantity: 1,
        },
      ],
    },
  ]);

  // Add item to a specific cart
  const addItemToCart = useCallback((cartIndex, product) => {
    setCarts((prevCarts) => {
      const existingCart = prevCarts[cartIndex] || [];
      const itemIndex = existingCart.findIndex(
        (item) => item._id === product._id
      );
      if (itemIndex > -1) {
        const newCart = [...existingCart];
        newCart[itemIndex] = {
          ...newCart[itemIndex],
          quantity: newCart[itemIndex].quantity + 1,
        };
        return [
          ...prevCarts.slice(0, cartIndex),
          newCart,
          ...prevCarts.slice(cartIndex + 1),
        ];
      } else {
        const newCart = [...existingCart, { ...product, quantity: 1 }];
        return [
          ...prevCarts.slice(0, cartIndex),
          newCart,
          ...prevCarts.slice(cartIndex + 1),
        ];
      }
    });
  }, []);

  // Remove item from a specific cart
  const removeItemFromCart = useCallback((cartIndex, productId) => {
    setCarts((prevCarts) => {
      const existingCart = prevCarts[cartIndex];
      const itemIndex = existingCart.findIndex(
        (item) => item._id === productId
      );
      if (itemIndex > -1 && existingCart[itemIndex].quantity > 1) {
        const newCart = [...existingCart];
        newCart[itemIndex] = {
          ...newCart[itemIndex],
          quantity: newCart[itemIndex].quantity - 1,
        };
        return [
          ...prevCarts.slice(0, cartIndex),
          newCart,
          ...prevCarts.slice(cartIndex + 1),
        ];
      } else {
        const newCart = existingCart.filter((item) => item._id !== productId);
        return [
          ...prevCarts.slice(0, cartIndex),
          newCart,
          ...prevCarts.slice(cartIndex + 1),
        ];
      }
    });
  }, []);

  // Delete item from a specific cart
  const deleteItemFromCart = useCallback((cartIndex, productId) => {
    setCarts((prevCarts) => {
      const existingCart = prevCarts[cartIndex];
      const newCart = existingCart.filter((item) => item._id !== productId);
      return [
        ...prevCarts.slice(0, cartIndex),
        newCart,
        ...prevCarts.slice(cartIndex + 1),
      ];
    });
  }, []);

  const createNewCart = useCallback(() => {
    setCarts((prevCarts) => {
      return [
        ...prevCarts,
        {
          items: [],
          subtotal: 0,
          discount: 0,
          total: 0,
        },
      ];
    });
  }, []);

  const deleteCart = useCallback((cartIndex) => {
    setCarts((prevCarts) => {
      return [
        ...prevCarts.slice(0, cartIndex),
        ...prevCarts.slice(cartIndex + 1),
      ];
    });
  }, []);

  return (
    <CartContext.Provider
      value={{
        carts,
        addItemToCart,
        removeItemFromCart,
        deleteItemFromCart,
        createNewCart,
        deleteCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
