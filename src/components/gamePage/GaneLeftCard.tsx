import { UserWiseGameStatusDto } from "../../dto/UserWiseGameStatusDto";

interface GameLeftCard {
    userWiseGameStatusDto: any
}


function GameLeftCard(props: GameLeftCard) {

    const columns = [
        {
            title: 'Player',
            dataIndex: 'username',
            key: 'id',
        },
        {
            title: 'Score',
            dataIndex: 'highestScore',
            key: 'id',
        }
    ];


    return (
        <div className="flex items-center w-72 h-[30rem] rounded-xl bg-white" style={{ boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }}>

            <div className='w-[100%] h-[100%]'>

                <div className='h-[40%] flex items-center justify-between  '>
                    <div className='w-full h-full'>
                        <div className='h-[60%] w-full flex items-center justify-center'>
                            <div className="avatar">
                                <div className="w-24 mask mask-hexagon">
                                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div>
                        </div>
                        <div className='h-[22%] w-full flex items-center justify-center'>
                            <h1 className="text-slate-950 font-serif text-2xl">{props.userWiseGameStatusDto?.username}</h1>
                        </div>
                        <div className='h-[10%] w-full flex items-center justify-center'>
                            <h5 className="text-slate-950 font-serif text-lg">Level : {props.userWiseGameStatusDto?.level}</h5>
                        </div>
                        <div className='h-[10%] w-full flex items-center justify-center'>
                            <h5 className="text-slate-950 font-serif text-lg">highest score : {props.userWiseGameStatusDto?.highestScore}</h5>
                        </div>
                    </div>
                </div>

                <div className='h-[60%] flex items-center justify-between'>
                    <div className='w-full h-full'>
                        <div className='h-[10%] w-full flex items-center justify-center mt-4'>
                            <h1 className="text-slate-950 font-serif text-xl mt-4">Leader board</h1>
                        </div>
                        <div className='h-[90%] w-full flex items-center justify-center'>
                            <div className="overflow-auto h-[100%] w-[100%]">
                                <table className="table w-full">
                                    {/* head */}
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th className='text-slate-950'>Player</th>
                                            <th className='text-slate-950'>Score</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* row 1 */}
                                        <tr>
                                            <th>1</th>
                                            <td>Player 1</td>
                                            <td>80</td>
                                        </tr>
                                        {/* row 2 */}
                                        <tr>
                                            <th>2</th>
                                            <td>Player 2</td>
                                            <td>75</td>
                                        </tr>
                                        {/* row 3 */}
                                        <tr>
                                            <th>3</th>
                                            <td>Player 3</td>
                                            <td>60</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

        </div>
    );
}

export default GameLeftCard;