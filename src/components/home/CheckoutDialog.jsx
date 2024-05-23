import { useState, useContext, useEffect } from "react";

import { Button, Label, Modal, TextInput, Select } from "flowbite-react";

const CheckoutDialog = ({ checkoutDialogIsOpen, onCloseDialog, product }) => {
    const checks = [1, 2, 3, 4];
    const [checksNumer, setChecksNumber] = useState(2);

    return (
        <>
            <Modal show={checkoutDialogIsOpen} size="xl" onClose={() => { onCloseDialog(); }} popup>
                <Modal.Header />
                <Modal.Body>
                    <div className="space-y-6">
                        <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                            Nombre d'impressions
                        </h3>
                        <div className="flex">
                            {
                                checks.map(check =>
                                    <label className="flex items-center space-x-3 cursor-pointer">
                                        <input
                                            type="radio"
                                            value={check}
                                            name='checks'
                                            checked={checksNumer === check}
                                            onChange={() => { setChecksNumber(check); }}
                                            className="sr-only"
                                        />
                                        <div
                                            className={`flex items-center justify-center w-12 h-12 border-2
                                             border-gray-300 rounded-md 
                                            ${checksNumer === check ? 'bg-blue-600 text-white' : 'bg-white text-gray-700'}
                                            transition-all duration-300
                                            `}
                                        >
                                            {check}
                                        </div>
                                    </label>
                                )
                            }


                        </div>
                        <div className="w-full flex justify-end">
                            <Button className="w-48">
                                Valider
                            </Button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default CheckoutDialog;
