import { useNavigate } from "react-router-dom";
import { UserWiseGameStatusDto } from "../../dto/UserWiseGameStatusDto";
import gameService from "../../service/GameService";
import Modal from "../common/Modal";
import DifficultyLevel from "../gamePage/DifficultyLevel";

interface GameOverModalProps {
    handleClose: () => void
    handleOpen: () => void
    open: boolean
    gameId: any
    difficultyLevel: any
    setNewGame: () => void
    updateGameStatus: (data: UserWiseGameStatusDto) => void
    setScore: (score: number) => void
    setDifficulty: (setDifficulty: number) => void
    setKey: (value:any) => void
    setIsPlaying: (value:boolean) => void
    currentScore: any
    currentAttemptCount: any
}


export default function GameOverModal(props: GameOverModalProps) {

    const navigate = useNavigate();

    const startNewGame = () => {
        gameService.startNewGame(props.gameId, props.difficultyLevel).then(res => {
            if (200 === res.status) {
                props.updateGameStatus(res.data);
                props.handleClose();
                props.setKey((prevKey: number) => prevKey + 1);
                props.setIsPlaying(true);
            }
        });
    }


    const exitGame = () => {
        props.handleClose();
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        navigate('/sign-in')
    }


    return (

        <Modal isOpen={props.open} onClose={props.handleClose}>
            <>
                <div className="h-[30rem] w-[27rem] bg-slate-50 flex items-center rounded-xl">
                    <div className='w-[100%] h-[100%] rounded-xl'>
                        <div className='w-full h-full'>
                            <div className="h-[15%] flex items-center justify-center rounded-xl">
                                <h1 className="font-serif text-3xl text-red-500 mt-2">Game Over</h1>
                            </div>
                            <div className="h-[10%] flex items-center justify-center rounded-xl">
                                <h1 className="font-serif text-xl text-slate-950 mr-3">Score ~ {props.currentScore}</h1>
                                <h1 className="font-serif text-xl text-slate-950">Attempt count ~ {props.currentAttemptCount}</h1>
                            </div>
                            <div className="divider divide-slate-950 m-0">Start a New Game</div>
                            <DifficultyLevel setDifficulty={props.setDifficulty} setScore={props.setScore} />
                            <div className="h-[20%] flex items-center justify-center rounded-xl">
                                <button onClick={() => exitGame()} className="btn btn-wide w-24 btn-outline mr-4 bg-slate-950 text-slate-50">Exit</button>
                                <button onClick={() => startNewGame()} className="btn btn-wide btn-outline ml-4 bg-slate-950 text-slate-50">Start Game</button>
                            </div>
                        </div>


                    </div>
                </div>
            </>
        </Modal>
    );
}
