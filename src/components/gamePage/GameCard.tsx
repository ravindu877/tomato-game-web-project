import gameService from '../../service/GameService';
import LifeCountComponent from './LifeCountcomponent';
import { UserWiseGameStatusDto } from '../../dto/UserWiseGameStatusDto';
import GamePlayOption from './GamePlayOption';
import { useState } from 'react';
import NextGameModal from '../Modal/NextGameModal';

interface GameCard {
    score: number
    setScore: (score: number) => void
    gameDto: any
    getNewGame: () => void
    userWiseGameStatusDto: any
    setUserWiseGameStatusDto: (data: UserWiseGameStatusDto) => void
    isGameStart: boolean
    setIsGameStart: (value: boolean) => void
    isGamePause: boolean
    setIsGamePause: (value: boolean) => void
    difficulty: number
    setDifficulty: (setDifficulty: number) => void
    handleClose: () => void
    handleOpen: () => void
    open: boolean
    initialValue1: number
    setInitialValue: (value: any) => void
    value: number
    setValue: (value: any) => void
    value1: number
    setValue1: (value: any) => void
    setIsPlaying: (value:boolean) => void
}

function GameCard(props: GameCard) {

    const [nextGameOpen, setNextGameOpen] = useState(false);
    const [header, setHeader] = useState<string>("");
    const [answer, setAnswer] = useState<number>();
    const [correctAnswer, setCorrectAnswer] = useState<number>();
   

    const handleClose = () => {
        setNextGameOpen(false);
    };

    const handleOpen = () => {
            setNextGameOpen(true);
    };

    const submitSolution = async ( solution: number) => {
        var currentocore: number = props.score;

        props.setIsPlaying(false)

        setCorrectAnswer(props.gameDto?.solution);
        setAnswer(solution);

        if (props.gameDto?.solution !== solution) {
            currentocore = 0;
        }
        

        gameService.updateGameStatus(props.userWiseGameStatusDto?.id, currentocore, props.difficulty).then(res => {
            if (200 === res.status) {
                props.setUserWiseGameStatusDto(res.data);
                props.setDifficulty(res.data.currentDifficultyLevel);
                if (0 === res.data.remainingLifeCount) {
                    props.handleOpen()
                } else {
                    if (props.gameDto?.solution == solution) {
                        setHeader("Correct Answer");
                        handleOpen();
                    } else {
                        setHeader("Wrong Answer");
                        handleOpen();

                    }
                }
            }
        });
    }





    return (
        <div className="flex flex-row-reverse justify-center items-center w-[40rem] h-[40rem] ml-10 mr-10 rounded-xl bg-white" style={{ boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }}>


            <div className='w-[100%] h-[100%] p-1'>

                <div className=' h-[17%] p-5'> 
                    <LifeCountComponent lifeCount={props.userWiseGameStatusDto?.remainingLifeCount} />
                </div>

                <div className="divider divide-slate-950 m-0">
                    {props.gameDto?.solution} 
                     Life Counts
                      {/* : {props.userWiseGameStatusDto?.remainingLifeCount} */}
                    </div>


                <div className=' h-[50%]'>
                    <img src={props.gameDto?.question} alt="Image description" className='h-[100%]' />
                </div>

                <NextGameModal handleClose={handleClose} handleOpen={handleOpen} open={nextGameOpen} correctAnswer={correctAnswer} answer={answer} header={header} nextGame={props.getNewGame} difficulty={props.difficulty}/>

                <div className=' h-[25%] p-5'>
                    <div className='grid grid-cols-5 gap-2 justify-center items-center w-[100%] h-[100%]'>
                        <button onClick={() => submitSolution(1)} className="btn btn-sm btn-outline bg-slate-950 text-slate-50">1</button>
                        <button onClick={() => submitSolution(2)} className="btn btn-sm btn-outline bg-slate-950 text-slate-50">2</button>
                        <button onClick={() => submitSolution(3)} className="btn btn-sm btn-outline bg-slate-950 text-slate-50">3</button>
                        <button onClick={() => submitSolution(4)} className="btn btn-sm btn-outline bg-slate-950 text-slate-50">4</button>
                        <button onClick={() => submitSolution(5)} className="btn btn-sm btn-outline bg-slate-950 text-slate-50">5</button>
                        <button onClick={() => submitSolution(6)} className="btn btn-sm btn-outline bg-slate-950 text-slate-50">6</button>
                        <button onClick={() => submitSolution(7)} className="btn btn-sm btn-outline bg-slate-950 text-slate-50">7</button>
                        <button onClick={() => submitSolution(8)} className="btn btn-sm btn-outline bg-slate-950 text-slate-50">8</button>
                        <button onClick={() => submitSolution(9)} className="btn btn-sm btn-outline bg-slate-950 text-slate-50">9</button>
                        <button onClick={() => submitSolution(0)} className="btn btn-sm btn-outline bg-slate-950 text-slate-50">0</button>
                    </div>
                </div>


            </div>


        </div>
    );
}

export default GameCard;