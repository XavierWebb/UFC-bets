import { useSelector } from "react-redux";
import { Navbar } from "../components/navbar";
import { Text_One } from "../components/texts";
import type { RootState } from "../redux/store";

export const ProfilePage = () => {

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
            <div className="flex flex-col h-screen  mx-40 my-20 gap-12">
                <div className="flex">
                    <img className="border-white border-2 w-50 h-50 rounded-[100%]" />
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