import { useContext, useState } from "react";
import { ProductsTabContext } from "../../context/productsTabContext";
import { IoIosCloseCircle } from "react-icons/io";
import { MdEdit } from "react-icons/md";
import UpdateDialog from "../products/UpdateDialog";
const Table = () => {
  const { products, deleteProduct } = useContext(ProductsTabContext);
  const [updateDialogIsOpen, setUpdateDialogIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState();
  return (
    <>
      <section className="p-2">
        <div className=" h-[650px] overflow-y-auto hide-scrollbar rounded-lg">
          <div className="sticky top-0 grid grid-cols-10 bg-gray-200 text-black px-6 py-3 font-bold z-10 gap-4 items-center">
            <div className="col-span-8">Nom</div>
            <div className="col-span-1 text-center">Modifier</div>
            <div className="col-span-1 text-center">Supprimer</div>
          </div>
          {products.map((product) => (
            <div
              key={product._id}
              className="grid grid-cols-10 border-b px-6 py-4 gap-4 items-center"
            >
              <div className="col-span-8">{product.name}</div>
              <div className="col-span-1 flex justify-center">
                <button
                  className="flex justify-center"
                  onClick={() => {
                    setSelectedProduct(product);
                    setUpdateDialogIsOpen(true);
                  }}
                >
                  <MdEdit color="red" size={40} />
                </button>
              </div>
              <div className="col-span-1 flex justify-center">
                <button
                  className="flex justify-center"
                  onClick={() => deleteProduct(product._id)}
                >
                  <IoIosCloseCircle color="red" size={40} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
      <UpdateDialog 
      updateDialogIsOpen={updateDialogIsOpen}
      product={selectedProduct}
      onCloseDialog={() => {
        setUpdateDialogIsOpen(false);
      }}/>
    </>
  );
};

export default Table;
