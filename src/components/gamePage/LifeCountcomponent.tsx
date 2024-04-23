import LifeIcon from '../../assets/flash.png';

interface LifeCountComponentProps {
    lifeCount:number
}

function LifeCountComponent(props:LifeCountComponentProps) {
    return(
        
                    <div>
            {
                props.lifeCount === 3 ? (
                    <div className='flex justify-center items-center h-[100%]'>
                        <div className='w-16 h-[50%]'><img src={LifeIcon} alt="Image description" className='w-fit' /></div>
                        <div className='w-16 h-[50%] mr-4 ml-4 rounded-full'><img src={LifeIcon} alt="Image description" className='w-fit' /></div>
                        <div className='w-16 h-[50%]'><img src={LifeIcon} alt="Image description" className='w-fit' /></div>
                    </div>

                ) : props.lifeCount === 2 ? (
                    <div className='flex justify-center items-center h-[100%]'>
                        <div className='w-16 h-[50%]'><img src={LifeIcon} alt="Image description" className='w-fit' /></div>
                        <div className='w-16 h-[50%] mr-4 ml-4 rounded-full'><img src={LifeIcon} alt="Image description" className='w-fit' /></div>
                    </div>
                ) : props.lifeCount === 1 ? (
                    <div className='flex justify-center items-center h-[100%]'>
                        <div className='w-16 h-[50%]'><img src={LifeIcon} alt="Image description" className='w-fit' /></div>
                    </div>
                        ) : <div className='flex justify-center items-center h-[25%]'>
                                <div className="text-slate-950 font-serif text-lg">Game Over! Try again.</div>
                        </div>
            }
                    </div>
        
    );
}

export default LifeCountComponent;