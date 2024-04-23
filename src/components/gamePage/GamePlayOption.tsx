
interface GamePlayOptionUi {
    isGameStart : boolean
    setIsGameStart : (value:boolean) => void
    isGamePause : boolean
    setIsGamePause: (value: boolean) => void
}

function GamePlayOption(props: GamePlayOptionUi) {
    return(
        <div className=' h-[10%] rounded-br-lg'>
            <div className='flex justify-center items-centerh-[100%]'>
                <button disabled={props.isGamePause} className="btn btn-sm btn-outline pl-2 pr-2 bg-slate-950 text-slate-50">Pause</button>
                <button className="btn btn-sm btn-outline ml-4 mr-4 bg-slate-950 text-slate-50">Resume</button>
                <button disabled={props.isGameStart} className="btn btn-sm btn-outline mr-4 bg-slate-950 text-slate-50">Start Game</button>
                <button className="btn btn-sm btn-outline bg-slate-950 text-slate-50">Next</button>
            </div>
        </div>
    );
}

export default GamePlayOption;