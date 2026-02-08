import { useNavigate } from "react-router-dom";
import { FightCard } from "../common/fightLogic";
import { Button } from "../components/button";
import { Navbar } from "../components/navbar"
import { Text_One, Tittle } from "../components/texts"

interface FighterElement {
    children: React.ReactNode;
}
const FighterElement = ({ children }: FighterElement) => {
    return (
        <p className="
                font-koho 
                text-white
                border 
                border-white
                px-4 
                py-2
                my-2 
                mx-1
                text-xs
                max-w-sm
                text-center 
                
                md:px-2 
                md:my-5
                md:mx-2
                md:py-3
                md:text-base

                lg:py-3
                lg:mx-2
                lg:px-6
                lg:text-base
        ">
            {children}
        </p>
    );
};

export const HomePage = () => {
    const fights = FightCard.fights;
    const navigate = useNavigate();
    const rows = [

        fights.slice(0, 1),
        fights.slice(1, 4),
        fights.slice(4, 8)
    ]
    return (
        <>
            <Navbar />
            <div
                className={`
                flex flex-col h-screen  

                mx-7 
                my-10
                
                md:mx-30
                lg:mx-40 
                lg:my-20 
                gap-12
                transition-all duration-600
            `}>
                <Tittle>Todays event</Tittle>

                <div className=''>
                    <Text_One>Main fight</Text_One>
                    {
                        rows[0].map((e) => {
                            return (
                                <div className="flex flex-col md:flex-row items-center">
                                    <FighterElement>
                                        {e.fighter_one.name}
                                    </FighterElement>
                                    <p className="text-white">vs</p>
                                    <FighterElement>
                                        {e.fighter_two.name}
                                    </FighterElement>
                                </div>
                            )
                        })
                    }
                    <Text_One>Fights:</Text_One>
                    <div className="flex">
                        {
                            rows[1].map((e) => {
                                return (
                                    <div className="flex flex-col md:flex-row items-center">
                                        <FighterElement>
                                            {e.fighter_one.name}
                                        </FighterElement>
                                        <p className="text-white">vs</p>
                                        <FighterElement>
                                            {e.fighter_two.name}
                                        </FighterElement>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="flex">
                        {
                            rows[2].map((e) => {
                                return (
                                    <div className="flex flex-col md:flex-row items-center">
                                        <FighterElement>
                                            {e.fighter_one.name}
                                        </FighterElement>
                                        <p className="text-white">vs</p>
                                        <FighterElement>
                                            {e.fighter_two.name}
                                        </FighterElement>
                                    </div>
                                )
                            })
                        }
                    </div>

                    <Button onClick={()=>{
                        navigate('/bets')
                    }}>Bet</Button>
                </div>

                <Tittle>Previous Events</Tittle>
                <Text_One>There is no previous events registrated.</Text_One>

            </div>
        </>
    )
}