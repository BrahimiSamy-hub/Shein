import Sidebar from "../components/Sidebar";
import Table from "../components/products/Table";
import AddDialog from "../components/products/AddDialog";
import CategoryDropdown from "../components/products/CategoryDropdown";
import { MdBarcodeReader } from "react-icons/md";
import { useContext } from "react";
import { ProductsTabContext } from "../context/productsTabContext";
const Arrivals = () => {
  const { barcode, setBarcode } = useContext(ProductsTabContext);
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="flex flex-col w-full gap-4">
          <div className="flex gap-2 mt-6 ml-2"></div>
          <div className="flex justify-between">
            <AddDialog />
          </div>
          <div className="flex">

            <CategoryDropdown />
            <div className="items-center justify-end flex ml-2">
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <MdBarcodeReader size={25} />
                </div>
              </div>

              <input
                type="text"
                autoComplete="off"
                id="default-search"
                className="block w-full ps-10 text-xl text-white h-10 rounded bg-[#4f4f4f]"
                placeholder="Enter BarCode"
                value={barcode}
                onChange={(e) => setBarcode(e.target.value)}
              />
            </div>
          </div>
          <Table />
        </div>
      </div>
    </>
  );
};

export default Arrivals;
