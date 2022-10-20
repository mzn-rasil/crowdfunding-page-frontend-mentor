import { Fragment } from "react";
import { createPortal } from "react-dom";
import { IconCloseModal } from "../../assets/svg/IconCloseModal";

const Modal = ({ onClose, children, className }) => {
    return (
        <Fragment>
            {/* Overlay Background */}
            {
                createPortal(
                    <div
                        className="absolute z-40 top-0 bottom-0 w-full h-full bg-slate-400 bg-opacity-60"
                        onClick={onClose}
                    ></div>,
                    document.getElementById("modal-overlay")
                )
            }

            {/* Modal Content Wrapper */}
            {
                createPortal(
                    <div
                        className={`absolute z-50 left-1/2 -translate-x-1/2 container max-w-2xl h-auto p-8 bg-white rounded-md drop-shadow-lg ${className}`}
                    >
                        <div className="absolute right-4 hover:cursor-pointer" onClick={onClose}>
                            <IconCloseModal
                            />
                        </div>

                        {children}
                    </div>,
                    document.getElementById("modal-wrapper")
                )
            }
        </Fragment>
    )
}

export default Modal;