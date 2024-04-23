import BgDarkImage from '../../assets/273_generated.jpg';
import SignUpCard from './SignUpCard';


function SignUpPage() {

    return (
        <div className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat bg-white" 
        style={{ backgroundImage: `url(${BgDarkImage})` }}
        >
            <SignUpCard />
        </div>
    );
}

export default SignUpPage;