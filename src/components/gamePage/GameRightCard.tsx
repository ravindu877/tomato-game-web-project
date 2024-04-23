import { useEffect, useRef, useState } from "react";
import coutDown from '../../assets/sand-clock.png'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import Countdown from "../common/Timer";
import gameService from "../../service/GameService";

interface GameRightCardI {
    handleOpen: () => void;
    setUserWiseGameStatusDto(data: any): unknown;
    score: number
    setScore: (score: number) => void
    currentScore: any
    difficulty: number
    setDifficulty: (setDifficulty: number) => void
    resetTimer: boolean
    initialValue: number
    setInitialValue: (value: any) => void
    value: number
    setValue: (value: any) => void
    value1: number
    setValue1: (value: any) => void
    key: number
    setKey: (value: number) => void
    isPlaying: boolean
    setIsPlaying: (value: boolean) => void
    gameId: any
    newgame: () => void
}

function GameRightCard(props: GameRightCardI) {

    const [isCompleted, setIsCompleted] = useState(false);

    const handleCountdownComplete = () => {
        gameService.updateGameStatus(props.gameId, 0, props.difficulty).then(res => {
            if (200 === res.status) {
                props.setUserWiseGameStatusDto(res.data);
                props.setDifficulty(res.data.currentDifficultyLevel);
                if (0 === res.data.remainingLifeCount) {
                    props.handleOpen()
                } else {
                    props.newgame();
                }
            }
        });
        setIsCompleted(true);
    };

    let init = 0;


    useEffect(() => {
            if (1 === props.difficulty) {
                props.setValue(60);
            } else if (2 === props.difficulty) {
                props.setValue(30);
            } else if (3 === props.difficulty) {
                props.setValue(20);
            }
        console.log("Set Key : ", props.value);
    }, [props.key]);


    return (
        <div className="flex  items-center w-72 h-[30rem] rounded-xl bg-white" style={{ boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }}>

            <div className='w-[100%] h-[100%]'>

                <div className='h-[40%] flex items-center justify-between rounded-xl'>
                    <div className='w-full h-full'>
                        <div className='h-full w-full flex items-center justify-center'>
                            <h1 className="text-slate-950 font-serif text-3xl">Score : {props.currentScore}</h1>
                        </div>
                    </div>
                </div>

                <div className='h-[60%] flex items-center justify-between'>
                    <div className='w-[100%] h-[100%]'>
                        <div className='w-full h-[20%] flex items-center justify-center'>
                            <div className='w-[100%] flex items-center justify-center'>
                                <h5 className="text-slate-950 font-serif text-lg">Time Remaining</h5>
                            </div>
                        </div>
                        <div className='w-full h-[80%] flex items-center justify-center'>
                            {!isCompleted ? (
                                <Countdown duration={props.value} onComplete={handleCountdownComplete} key={props.key} isPlaying={props.isPlaying} />
                            ) : (
                                    <div className="text-slate-950 font-serif text-lg">Time is up!</div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default GameRightCard;