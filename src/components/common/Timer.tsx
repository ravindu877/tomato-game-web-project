import React from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';


interface CountdownProps {
    duration: any
    onComplete: () => void
    key: number
    isPlaying: boolean
}

const Countdown = (props: CountdownProps) => {



    return (

        <div className="flex items-center justify-center">
            <CountdownCircleTimer
                key={props.key}
                isPlaying={props.isPlaying}
                duration={props.duration}
                size={150}
                colors={['#004777', '#F7B801', '#A30000', '#A30000']}
                colorsTime={[7, 5, 2, 0]}
                onComplete={props.onComplete}
            >
                {({ remainingTime }) => (



                    <div className="h-[100%] w-[100%] flex items-center justify-center">

                        <div className=' flex items-center justify-center'>
                            <h5 className="text-slate-950 font-serif text-lg">{remainingTime} s</h5>
                        </div>

                    </div>
                )}
            </CountdownCircleTimer>
        </div>
    );
};

export default Countdown;
