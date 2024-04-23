import Modal from "../common/Modal";

interface nextGameProps {
    handleClose: () => void
    handleOpen: () => void
    open: boolean
    answer: any
    correctAnswer: any
    header: string
    nextGame: () => void
    difficulty:any
}


export default function NextGameModal(props: nextGameProps) {

    const nextGame = () => {
        props.nextGame();
        props.handleClose();
    }

    return (

        <Modal isOpen={props.open} onClose={props.handleClose}>
            <>
                <div className="h-[15rem] w-[27rem] bg-slate-50 flex items-center rounded-xl">
                    <div className='w-[100%] h-[100%] rounded-xl'>
                        <div className='w-full h-full'>
                            <div className="h-[30%] flex items-center justify-center rounded-xl">
                                <h1 className="font-serif text-3xl text-slate-950 mt-2">{props.header}</h1>
                            </div>
                            <div className="h-[18%] flex items-center justify-center rounded-xl">
                                <h1 className="font-serif text-xl text-slate-950 mr-3">Correct Answer ~ {props.correctAnswer}</h1>
                            </div>
                            <div className="h-[18%] flex items-center justify-center rounded-xl">
                                <h1 className="font-serif text-xl text-slate-950">Answer ~ {props.answer}</h1>
                            </div>
                            <div className="h-[34%] flex items-center justify-center rounded-xl">
                                <button onClick={() => nextGame()} className="btn btn-wide w-24 btn-outline mr-4 bg-slate-950 text-slate-50">Next</button>
                            </div>
                        </div>


                    </div>
                </div>
            </>
        </Modal>
    );
}
