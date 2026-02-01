import { useSelector } from "react-redux";
import { Navbar } from "../components/navbar";
import { Text_One } from "../components/texts";
import type { RootState } from "../redux/store";
import { useObserver } from "../common/observer";

export const ProfilePage = () => {
    const {ref, visible} = useObserver();
    const wins = useSelector((state: RootState) => state.users.currentAccount.wins)
    const defeats = useSelector((state: RootState) => state.users.currentAccount.defeats);
    const earned = useSelector((state: RootState) => state.users.currentAccount.earned)
    const name = useSelector((state: RootState) => state.users.currentAccount.name);
    const registredAt = useSelector((state: RootState) => state.users.currentAccount.registredAt)

    const formattedDate = new Date(registredAt).toLocaleDateString("es-AR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
    });
    return (
        <>
            <Navbar />
            <div 
            ref={ref}
            className={`
                flex flex-col h-screen  

                mx-7 
                my-10
                
                md:mx-30
                lg:mx-40 
                lg:my-20 
                gap-12
                transition-all duration-600
                ${visible ? 'opacity-100' : 'opacity-0'}
            `}>
                <div className="flex">
                    <img className="border-white border-2 
                    w-11/12
                    lg:w-50 
                    lg:h-50 
                    md:w-30
                    rounded-[100%]" />
                    <div className="flex flex-col h-full  mx-5 justify-center">
                        <Text_One>{name}</Text_One>
                        <Text_One>Registred: {formattedDate}</Text_One>
                    </div>
                </div>
                <div className="bg-white w-full h-0.5" />
                <div>
                    <Text_One>Wins: {wins}</Text_One>
                    <Text_One>Defeats: {defeats}</Text_One>
                    <Text_One>Earned: {earned}</Text_One>
                </div>
            </div>
        </>
    )
};