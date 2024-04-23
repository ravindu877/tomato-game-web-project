import React from 'react';
import BgImage from '../assets/6871547_29402.jpg';
import BgDarkImage from '../../assets/273_generated.jpg';
import { useNavigate } from 'react-router-dom';
import SignInCard from './SignInCard';

function SignInPage() {

    const navigate = useNavigate();

    return (
        <div className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat bg-white" 
        style={{ backgroundImage: `url(${BgDarkImage})` }}
        >
            
            <SignInCard />

        </div>
    );
}

export default SignInPage;