import SignInCardBody from "./SignInCardBody";
import SignICardFooter from "./SignInCardFooter";
import SignInCardHeader from "./SignInCardHeader";


function SignInCard(params:any) {
    return (
        <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="card w-[30%] h-[80%] flex items-center justify-center border-red-500 p-2 bg-[#ffffff]" style={{ boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }}>


                <SignInCardHeader />

                <SignInCardBody />

                <div className="divider divide-slate-950 m-0">or</div>

                <SignICardFooter />

            </div>
        </div>
    );
}

export default SignInCard;