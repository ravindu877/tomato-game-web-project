import Modal from "../common/Modal";


interface ModalProps {
    handleClose: () => void
    handleOpen: () => void
    open: boolean
}


export default function ModalUi(props: ModalProps) {

    

    return (
        <Modal isOpen={props.open} onClose={props.handleClose}>
            <>
                <h1 className="font-serif text-xl">Select defficulty level</h1>
                <h3 className="font-serif text-sm">Easy - You have 60 Seconds to answer</h3>
                <h3 className="font-serif text-sm">Medium - You have 30 Seconds to answer</h3>
                <h3 className="font-serif text-sm">Hard - You have 20 Seconds to answer</h3>
            </>
        </Modal>
    );
}
