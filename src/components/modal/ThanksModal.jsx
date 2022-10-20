import { IconCheck } from "../../assets/svg/IconCheck";
import Modal from "../ui/Modal"

const ThanksModal = ({ onClose }) => {
    return (
        <Modal
            onClose={onClose}
            className="top-48"
        >
            <div className="flex justify-center items-center mt-8">
                <IconCheck />
            </div>

            <h3 className="text-center font-bold text-2xl mt-8">Thanks for your support</h3>

            <p className="mt-4 text-center text-neutral-dark-gray px-8 leading-loose">Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get
                an email once our campaign is completed.</p>

            <div className="flex justify-center mt-8">
                <button
                    className="bg-primary-moderate-cyan px-8 py-2 rounded-full text-white font-bold hover:bg-primary-dark-cyan"
                    onClick={onClose}
                >
                    Got it!
                </button>
            </div>
        </Modal>
    )
}

export default ThanksModal;