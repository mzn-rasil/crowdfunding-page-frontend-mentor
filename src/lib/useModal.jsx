import { useState } from "react";

export const useModal = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModalHandler = () => {
        setIsModalOpen(true);
    }

    const closeModalHandler = () => {
        setIsModalOpen(false);
    }

    return [
        isModalOpen,
        openModalHandler,
        closeModalHandler,
    ];
};

