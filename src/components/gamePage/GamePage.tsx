import BgDarkImage from '../../assets/273_generated.jpg';
import { useEffect, useState } from 'react';
import gameService from '../../service/GameService';
import { GameDto } from '../../dto/GameDto';
import GameCard from './GameCard';
import GameLeftCard from './GaneLeftCard';
import GameRightCard from "./GameRightCard";
import { UserWiseGameStatusDto } from '../../dto/UserWiseGameStatusDto';
import GameOverModal from '../Modal/GameOverModal';
import NewGameModal from '../Modal/NewGameModal';
import { ClipLoader } from 'react-spinners';

function GamePage() {
    const [score, setScore] = useState(0);
    const [difficulty, setDifficulty] = useState<number>(0);
    const [gameDto, setGame] = useState<GameDto>();
    const [userWiseGameStatusDto, setUserWiseGameStatusDto] = useState<UserWiseGameStatusDto>();
    const [isGameStart, setIsGameStart] = useState<boolean>(false);
    const [isGamePause, setIsGamePause] = useState<boolean>(true);
    const [open, setOpen] = useState(false);
    const [gameOverOpen, setGameOverOpen] = useState(false);
    const [resetTimer, setResetTimer] = useState(false);
    const [initialValue, setInitialValue] = useState(0);
    const [value, setValue] = useState(0);
    const [value1, setValue1] = useState(0);
    const [key, setKey] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [topPlayers, setTopPlayers] = useState<UserWiseGameStatusDto[]>();
    const [loading, setLoading] = useState();



    useEffect(() => {
        getUserGameStatus();
        getTopPlayers();
        getNewGame();
        console.log("isGameStart : ", isGameStart)
        console.log("isGamePause : ", isGamePause)
    }, []);




    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
        setIsPlaying(false);
    };

    const hadleGameOverModalOpen = () => {
        setGameOverOpen(true);
        setIsPlaying(false)
        console.log("log 2");
    }

    const hadleGameOverModalClose = () => {
        setGameOverOpen(false);
    }



    const getNewGame = () => {
        gameService.getGame().then(res => {
            console.log("game ===> : ", res.data);
            setGame(res.data);
            setKey(prevKey => prevKey + 1);
            setIsPlaying(true);
            console.log("log 1");

        });
    }

    const getTopPlayers = () => {
        gameService.getTopPlayers().then(res => {
            setTopPlayers(res.data);
        });
    }



    const getUserGameStatus = () => {
        gameService.getUserWiseGameData(localStorage.getItem("user")).then(res => {
            if (200 === res.status) {
                setUserWiseGameStatusDto(res.data);
                console.log("game atatus ==> : ", res.data);
                console.log("currentDifficultyLevel", res.data.currentDifficultyLevel);
                if (res.data.currentDifficultyLevel === 0) {
                    handleOpen();
                    setIsPlaying(false)
                }
                if (res.data.remainingLifeCount === 0) {
                    setGameOverOpen(true);
                }
                setDifficulty(res.data.currentDifficultyLevel);

            }
        });
    }


    useEffect(() => {
        // Prevent back navigation
        window.history.pushState(null, "", window.location.href);
        window.onpopstate = function (event) {
            window.history.pushState(null, "", window.location.href);
        };
    }, []);




    return (
        <main className="flex min-h-screen h-[100] flex-col items-center justify-center bg-white bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${BgDarkImage})` }}
        >

            <div className="flex justify-between items-center m-0 p-0 bg-cover bg-center" >
                

                <GameLeftCard userWiseGameStatusDto={userWiseGameStatusDto} />

                <NewGameModal setDifficulty={setDifficulty} setScore={setScore}
                    open={open} handleClose={handleClose} handleOpen={handleOpen}
                    setNewGame={getNewGame} updateGameStatus={setUserWiseGameStatusDto} difficultyLevel={difficulty} gameId={userWiseGameStatusDto?.id}
                />

                <GameOverModal setDifficulty={setDifficulty} setScore={setScore} currentAttemptCount={userWiseGameStatusDto?.currentAttemptCount} currentScore={userWiseGameStatusDto?.currentScore}
                    open={gameOverOpen} handleClose={hadleGameOverModalClose} handleOpen={hadleGameOverModalOpen}
                    setNewGame={getNewGame} updateGameStatus={setUserWiseGameStatusDto} difficultyLevel={difficulty} gameId={userWiseGameStatusDto?.id}
                    setKey={setKey} setIsPlaying={setIsPlaying}
                />

                <GameCard score={score} setScore={setScore}
                    gameDto={gameDto} getNewGame={getNewGame}
                    userWiseGameStatusDto={userWiseGameStatusDto} setUserWiseGameStatusDto={setUserWiseGameStatusDto}
                    isGameStart={isGamePause} setIsGameStart={setIsGameStart}
                    isGamePause={isGamePause} setIsGamePause={setIsGamePause}
                    difficulty={difficulty} setDifficulty={setDifficulty}
                    open={gameOverOpen} handleClose={hadleGameOverModalClose} handleOpen={hadleGameOverModalOpen}
                    setIsPlaying={setIsPlaying}
                    value={value} value1={value1} initialValue1={initialValue} setValue={setValue} setValue1={setValue1} setInitialValue={setInitialValue}
                />

                <GameRightCard score={score} setScore={setScore} currentScore={userWiseGameStatusDto?.currentScore} resetTimer={resetTimer} setUserWiseGameStatusDto={setUserWiseGameStatusDto}
                    difficulty={difficulty} setDifficulty={setDifficulty} gameId={userWiseGameStatusDto?.id} handleOpen={hadleGameOverModalOpen}
                    key={key} setKey={setKey} isPlaying={isPlaying} setIsPlaying={setIsPlaying} newgame={getNewGame}
                    value={value} value1={value1} initialValue={initialValue} setValue={setValue} setValue1={setValue1} setInitialValue={setInitialValue}
                />

            </div>

        </main>
    );
}

export default GamePage;
