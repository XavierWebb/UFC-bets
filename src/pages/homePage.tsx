import type React from "react";
import { Navbar } from "../components/navbar";
import { Text_Two } from "../components/texts";
import { Button } from "../components/button";
import { FightCard } from "../common/fightLogic";
import { useNavigate } from "react-router-dom";

interface FighterElement {
    children: React.ReactNode;
}

const FighterElement = ({ children }: FighterElement) => {
    return (
        <p className="font-koho text-white max-w-7xl border-white border py-3 px-6 my-5 mx-2">
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
            <div className="flex items-center justify-center flex-col">
                <Text_Two>UFC #434</Text_Two>
                <p className="font-koho font-bold text-white text-xl">Main event</p>
                <div className="flex flex-col  items-center">
                    {
                        rows[0].map((e) => {
                            return (
                                <div className="flex">
                                    <FighterElement>
                                        {e.fighter_one.name}
                                    </FighterElement>
                                    <FighterElement>
                                        {e.fighter_two.name}
                                    </FighterElement>
                                </div>
                            )
                        })
                    }
                    <div className="flex justify-center">
                        {
                            rows[1].map((e) => {
                                return (
                                    <div className="flex">
                                        <FighterElement>
                                            {e.fighter_one.name}
                                        </FighterElement>
                                        <FighterElement>
                                            {e.fighter_two.name}
                                        </FighterElement>
                                    </div>
                                )
                            })
                        }
                    </div>

                    <div className="flex justify-center">
                        {
                            rows[2].map((e) => {
                                return (
                                    <div className="flex">
                                        <FighterElement>
                                            {e.fighter_one.name}
                                        </FighterElement>
                                        <FighterElement>
                                            {e.fighter_two.name}
                                        </FighterElement>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
                <Button onClick={()=>navigate('/bets')}>BETS</Button>
            </div>
        </>
    )
};