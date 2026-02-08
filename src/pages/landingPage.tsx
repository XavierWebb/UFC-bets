import { useDispatch } from "react-redux";
import { Button } from "../components/button";
import { openModal } from "../redux/modalsSlice";
import { Tittle } from "../components/texts";
import LandingBackground from "../components/backgrounds";

export const LandingPage = () => {

    const dispatch = useDispatch();

    return (
        <>  
            <LandingBackground/>
            <div className='flex flex-col justify-center items-center h-screen'>
                <div className='
                
                md:w-2/7 
                text-center'>
                    <Tittle>Looking for the best website for bet on UFC Fights?</Tittle>
                </div>
                <div>
                    <Button onClick={() => {
                        dispatch(openModal('signUpModal'))
                    }}>Start now</Button>

                    <Button variant="secondary" onClick={() => {
                        dispatch(openModal('loginModal'))
                    }}>Login</Button>
                </div>
            </div>
        </>
    )
};