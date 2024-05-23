import { useState, useContext, useEffect } from "react";

import { Button, Label, Modal, TextInput, Select } from "flowbite-react";
import { IoMdAdd } from "react-icons/io";

import { ProductsTabContext } from "../../context/productsTabContext";
import { CategoryContext } from "../../context/categoryContext";

const AddDialog = ({ updateDialogIsOpen, onCloseDialog, product }) => {
    // context state
    const { updateProduct } = useContext(ProductsTabContext);
    const { categories } = useContext(CategoryContext);

    useEffect(() => {
        setPrice(product?.sellPrice ?? '')
        setCategory(product?.category ?? '')
    }, [product, updateDialogIsOpen]);


    // add product state
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");


    const handleUpdateProduct = (event) => {
        event.preventDefault();
        updateProduct({
            _id: product._id,
            sellPrice: price,
            category,
        });
        onCloseDialog();
    };

    return (
        <>
            <Modal show={updateDialogIsOpen} size="5xl" onClose={() => { onCloseDialog(); }} popup>
                <Modal.Header />
                <Modal.Body>
                    <div className="space-y-6">
                        <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                            Modifier un produit
                        </h3>
                        <div>
                            <div className="mb-2 block">
                                <Label value="Prix" />
                            </div>
                            <TextInput
                                type="text"
                                autoComplete="off"
                                placeholder="prix"
                                value={price}
                                onChange={(event) => setPrice(Number(event.target.value))}
                                required
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="category" value="Catégorie" />
                            </div>
                            <Select
                                id="category"
                                required
                                value={category}
                                onChange={(event) => setCategory(event.target.value)}
                            >
                                <option value="">Select a category</option>
                                {categories.map((category) => (
                                    <option key={category._id} value={category._id}>
                                        {category.name}
                                    </option>
                                ))}
                            </Select>
                        </div>
                        <div className="w-full flex justify-end">
                            <Button onClick={handleUpdateProduct} className="w-48">
                                Modifier
                            </Button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default AddDialog;
