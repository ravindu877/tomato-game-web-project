
interface difficultyLevelProps {
    setScore: (score: number) => void
    setDifficulty: (setDifficulty: number) => void
}


function difficultyLevel(props: difficultyLevelProps) {
    
    const getLevelWiseScore = (dificulty: number) => {
        if (dificulty === 1) {
            props.setScore(2);
        } else if (dificulty === 2) {
            props.setScore(4);
        } else if (dificulty === 3) {
            props.setScore(8);
        }
        console.log("difficulty : ",dificulty);
    }

    const setDifficultyLevel = (level: number) => {
        props.setDifficulty(level);
        getLevelWiseScore(level);
    }


    return(
        <div className='h-[50%] flex items-center justify-between'>
            <div className='w-full h-full'>
                <div className='h-[30%] w-full flex items-center justify-center'>
                    <h1 className="text-slate-950 font-serif text-2xl">Difficulty Level</h1>
                </div>
                <div className='h-[20%] w-full flex items-center justify-center'>
                    <button className="btn btn-sm w-[60%] bg-slate-950 text-slate-50" onClick={() => setDifficultyLevel(1)}>Easy</button>
                </div>
                <div className='h-[20%] w-full flex items-center justify-center'>
                    <button className="btn btn-sm w-[60%] bg-slate-950 text-slate-50" onClick={() => setDifficultyLevel(2)}>Medium</button>
                </div>
                <div className='h-[20%] w-full flex items-center justify-center'>
                    <button className="btn btn-sm w-[60%] bg-slate-950 text-slate-50" onClick={() => setDifficultyLevel(3)}>Hard</button>
                </div>
            </div>
        </div>
    );

}

export default difficultyLevel;