import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserDto } from "../../dto/UserDto";
import userService from "../../service/UserService";


function SignInCardBody(params:any) {


    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const userDto: UserDto = {
        username: '',
        password: '',
        comfirmPassword: ''
    }


    const SignIn = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        userDto.username = username
        userDto.password = password
        userService.loginUser(userDto).then(res => {
            console.log(res.data);
            if (null !== res.data) {
                localStorage.setItem("token",res.data);
                localStorage.setItem("user", username);
                navigate('/game-page')
            }
        }).catch(e => {
            alert(e);
        })
    }


    return (
        <div className='w-full h-[60%] flex items-center justify-center'>
            <form onSubmit={SignIn} className="w-full h-full flex items-center justify-center">
                <div className='w-11/12'>
                    <div className="mb-6 flex items-center justify-center">
                        <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} required autoComplete="off" className="input border border-slate-950 focus:outline-slate-950 w-full max-w-xs bg-white text-slate-950" />
                    </div>
                    <div className="mb-6 flex items-center justify-center">
                        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required autoComplete="off" className="input border border-slate-950 focus:outline-slate-950 w-full max-w-xs bg-white text-slate-950" />
                    </div>
                    <div className="flex items-center justify-center">
                        <button className="btn btn-wide hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" >
                            Sign In
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default SignInCardBody;