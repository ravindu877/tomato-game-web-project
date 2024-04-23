import { useState } from "react";
import userService from "../../service/UserService";
import { UserDto } from "../../dto/UserDto";
import { useNavigate } from "react-router-dom";



function SingUpCardBody(params: any) {

    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [comfirmPassword, setComfirmPassword] = useState('');
    const userDto: UserDto = {
        username: '',
        password: '',
        comfirmPassword: ''
    }

    const SignUp = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        userDto.username = username
        userDto.password = password
        userDto.comfirmPassword = comfirmPassword
        userService.saveUser(userDto).then(res => {
            console.log(res.data);
            if (true === res.data) {
                navigate('/sign-in')
            }
        }).catch(e => {
            alert(e);
        })
    }




    return (
        <div className='w-full h-[60%] flex items-center justify-center'>
            <form onSubmit={SignUp} className="w-full h-full flex items-center justify-center" autoComplete="off">
                <div className='w-11/12'>
                    <div className="mb-6 flex items-center justify-center">
                        <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} autoComplete="off" className="input border border-slate-950 focus:outline-slate-950 w-full max-w-xs bg-white text-slate-950" required />
                    </div>
                    <div className="mb-6 flex items-center justify-center">
                        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} autoComplete="off" className="input border border-slate-950 focus:outline-slate-950 w-full max-w-xs bg-white text-slate-950" required />
                    </div>
                    <div className="mb-6 flex items-center justify-center">
                        <input type="password" placeholder="Comfirm Password" onChange={(e) => setComfirmPassword(e.target.value)} className="input border border-slate-950 focus:outline-slate-950 w-full max-w-xs bg-white text-slate-950" required />
                    </div>
                    <div className="flex items-center justify-center">
                        <button type="submit" className="btn btn-wide hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                            Sign Up
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default SingUpCardBody;
