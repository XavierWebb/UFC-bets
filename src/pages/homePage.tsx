import type React from "react";
import { Navbar } from "../components/navbar";
import { Text_Two } from "../components/texts";
import { Button } from "../components/button";
import { FightCard } from "../common/fightLogic";
import { useNavigate } from "react-router-dom";
import { useObserver } from "../common/observer";

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
    const { ref, visible } = useObserver();

    const rows = [
        fights.slice(0, 1),
        fights.slice(1, 4),
        fights.slice(4, 8)
    ]


    return (
        <>
            <Navbar />
            <div
                ref={ref}
                className={`
                    flex items-center justify-center flex-col
                    transition-all duration-700
                    ${visible ? 'opacity-100' : 'opacity-0'}
                `}

            >
                <Text_Two>UFC #434</Text_Two>
                <p className="font-koho font-bold text-white text-md">Main event</p>
                <div className="flex flex-col items-center w-full">
                    {
                        rows[0].map((e) => {
                            return (
                                <div className="flex flex-col md:flex-row items-center">
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
                                    <div className="flex flex-col md:flex-row items-center">
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
                                    <div className="flex flex-col md:flex-row items-center">
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
                <Button onClick={() => navigate('/bets')}>BETS</Button>
            </div>
        </>
    )
};