import { useState } from 'react';
import { PRODUCTS } from '../../assets/data/Products';
import Card from '../ui/Card';
import Modal from '../ui/Modal';

const PledgeModal = ({ onClose, onThanksModalOpen }) => {
    const [selectedOption, setSelectedOption] = useState("");

    const changeOptionHandler = (e) => {
        setSelectedOption(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        onClose();
        onThanksModalOpen();
    }

    return (
        <Modal
            onClose={onClose}
            className="top-24"
        >
            {/* Modal Content */}
            <h3 className="mt-6 font-bold text-xl md:text-2xl">Back this project</h3>

            <p className="mt-4 font-light text-neutral-dark-gray text-sm">Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>

            <form className="mt-8" onSubmit={submitHandler}>
                <Card className={`drop-shadow-none border border-slate-200 divide-y-2 ${selectedOption === "Pledge with no reward" ? "outline outline-primary-moderate-cyan" : ""}`}>
                    <div className="flex items-start gap-4 pb-4">
                        <input
                            type="radio"
                            name="pledge"
                            id="pledge1"
                            checked={selectedOption === "Pledge with no reward"}
                            value="Pledge with no reward"
                            onChange={changeOptionHandler}
                            className="mt-1 hover:cursor-pointer focus:bg-primary-moderate-cyan checked:bg-primary-moderate-cyan focus:ring-0"
                        />
                        <label htmlFor="pledge1" className="font-bold hover:cursor-pointer">
                            <span>Pledge with no reward</span>
                            <p className="text-neutral-dark-gray mt-6 text-sm font-light">
                                Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.
                            </p>
                        </label>
                    </div>

                    {
                        selectedOption === "Pledge with no reward" &&
                        <div className="grid grid-cols-2 grid-rows-2 items-center gap-4 justify-end pt-4 md:flex">
                            <label htmlFor="pledgeAmount" className="font-light text-neutral-dark-gray col-span-2 justify-self-center md:mr-auto">Enter your pledge</label>
                            <div className="border border-slate-300 rounded-full px-4 py-0">
                                <span className="text-neutral-dark-gray font-bold mr-2">$</span>
                                <input
                                    type="number"
                                    min="0"
                                    name="pledgeAmount"
                                    id="pledgeAmount"
                                    className="border-none focus:ring-0 w-10 px-0 py-2"
                                />
                            </div>
                            <button type="submit" className="bg-primary-moderate-cyan px-4 py-2 text-white rounded-full">Continue</button>
                        </div>
                    }
                </Card>

                {
                    PRODUCTS.map(product => (
                        <Card
                            key={product.id}
                            className={`drop-shadow-none border border-slate-200 ${selectedOption === product.name ? "outline outline-primary-moderate-cyan" : ""} divide-y-2 ${product.itemsLeft === 0 ? "opacity-40" : ""}`}
                        >
                            <div className="flex items-start gap-4 pb-4">
                                <input
                                    type="radio"
                                    name="pledge"
                                    id={product.id + 1}
                                    checked={selectedOption === product.name}
                                    value={product.name}
                                    onChange={changeOptionHandler}
                                    className="mt-1 hover:cursor-pointer focus:bg-primary-moderate-cyan checked:bg-primary-moderate-cyan focus:ring-0"
                                    disabled={product.itemsLeft === 0 ? true : false}
                                />
                                <label htmlFor={product.id + 1} className="font-bold hover:cursor-pointer">
                                    <div className="flex flex-col gap-4 md:flex-row">
                                        <span>{product.name}</span>
                                        <span className="font-bold text-primary-moderate-cyan">Pledge ${product.pledge} or more</span>
                                        <span className="ml-auto hidden md:flex">
                                            {product.itemsLeft}
                                            <span className="font-light text-neutral-dark-gray">left</span>
                                        </span>
                                    </div>
                                    <p className="text-neutral-dark-gray mt-6 text-sm font-light">
                                        {product.description}
                                    </p>
                                    <span className="mt-4 flex gap-2 md:hidden">
                                        {product.itemsLeft}
                                        <span className="font-light text-neutral-dark-gray">left</span>
                                    </span>
                                </label>
                            </div>

                            {
                                selectedOption === product.name &&
                                <div className="grid grid-cols-2 grid-rows-2 items-center gap-4 justify-end pt-4 md:flex">
                                    <label htmlFor="pledgeAmount" className="font-light text-neutral-dark-gray col-span-2 justify-self-center md:mr-auto">Enter your pledge</label>
                                    <div className="border border-slate-300 rounded-full px-4 py-0">
                                        <span className="text-neutral-dark-gray font-bold mr-2">$</span>
                                        <input
                                            type="number"
                                            min="0"
                                            name="pledgeAmount"
                                            id="pledgeAmount"
                                            className="border-none focus:ring-0 w-10 px-0 py-2"
                                        />
                                    </div>
                                    <button type="submit" className="bg-primary-moderate-cyan px-4 py-2 text-white rounded-full">Continue</button>
                                </div>
                            }
                        </Card>
                    ))
                }
            </form>
        </Modal>
    )
}

export default PledgeModal;