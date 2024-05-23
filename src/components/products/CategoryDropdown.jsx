import React, { useState, useContext } from 'react';
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { CategoryContext } from "../../context/categoryContext";
import { ProductsTabContext } from "../../context/productsTabContext";
const CategoryDropdown = () => {
    const { categories } = useContext(CategoryContext);
    const { setCategoryFilter, categoryFilter } = useContext(ProductsTabContext);
    const [isOpen, setIsOpen] = useState(false);
    return <div className="relative flex flex-col items-center w-[250px] ml-2">
        <button onClick={() => setIsOpen((prev) => !prev)} className='bg-[#4f4f4f] p-2 w-full flex items-center justify-between
    text-l tracking-wider border border-1 border-gray-500 rounded transition-all
    duration-300 '>
            {categoryFilter?.name ?? 'Catégories'}
            {!isOpen ? (<IoMdArrowDropdown />) : (<IoMdArrowDropup />)}
        </button>
        {
            isOpen && (
                <div className='bg-[#4f4f4f] absolute top-[45px] flex flex-col items-start p-1 w-full z-20
                border border-1 border-gray-500 shadow-md rounded
                '>
                    {
                        categories.map((category) => (<div
                            key={category._id}
                            onClick={() => {
                                setCategoryFilter(category);
                                setIsOpen(false);
                            }} className='flex w-full items-center justify-between px-2
                             hover:bg-gray-500 cursor-pointer border-l-transparent'>
                            <h3>{category.name}</h3>
                        </div>
                        ))
                    }
                </div>
            )
        }
    </div>
        ;
};

export default CategoryDropdown;