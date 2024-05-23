import { createContext, useState, useEffect, useCallback, useRef } from "react";
import axios from "../api/axios";

export const ProductsTabContext = createContext();

export const ProductsTabProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  // filters State
  const [categoryFilter, setCategoryFilter] = useState("");
  const [barcode, setBarcode] = useState('');
  const abortControllerRef = useRef(null);

  // Fetch products from the server
  const fetchProducts = useCallback(async () => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort(); // Abort the previous request
    }
    const controller = new AbortController(); // Create a new controller
    abortControllerRef.current = controller;
    setLoading(true);
    try {
      const params = new URLSearchParams();
      if (categoryFilter) {
        params.append("category", categoryFilter._id);
        const response = await axios.get(`/products?${params}`, {
          signal: controller.signal, // Pass the signal to Axios
        });
        setProducts(response.data);
      }
    } catch (error) {
      console.error("Error fetching products", error);
    } finally {
      setLoading(false);
    }
  }, [categoryFilter, barcode]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  // Add a product
  const addProduct = async (product) => {
    try {
      console.log(product);
      const response = await axios.post("/products", product);
      setProducts([response.data, ...products]);
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  // Update a product
  const updateProduct = async (product) => {
    try {
      const response = await axios.put(`/products/${product._id}`, product);
      setProducts(
        products.map((arr) => (arr._id === product._id ? response.data : arr))
      );
      fetchProducts();
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  // Delete a product
  const deleteProduct = async (id) => {
    try {
      await axios.put(`/products/${id}`, { isDrafted: true });
      setProducts(products.filter((arr) => arr._id !== id));
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <ProductsTabContext.Provider
      value={{
        products,
        addProduct,
        updateProduct,
        deleteProduct,
        loading,
        fetchProducts,
        categoryFilter,
        setCategoryFilter,
        barcode,
        setBarcode,
      }}
    >
      {children}
    </ProductsTabContext.Provider>
  );
};
