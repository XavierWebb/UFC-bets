import { Button } from "../components/button";



export const LandingPage = () => {
    return (
        <>
            <img src="./octagon.png" className="fixed -z-10 h-screen w-[70%]     
            top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />
            <div className="h-screen w-scren flex justify-center flex-col items-center">
                <p className="text-strong-red text-3xl font-koho font-bold italic">- Bets -</p>
                <img className="w-100 h-60" src="./UFC.png" />
                <div>
                    <Button>Sign up</Button>
                    <Button variant="secondary">Login</Button>
                </div>
            </div>
        </>
    )
};