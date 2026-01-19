import type React from "react";
import { Text_One, Tittle } from "../components/texts";
import { Button } from "../components/button";

interface FigtherSelection {
    children: React.ReactNode,
    onClick: () => void,
}

const FighterSelection = ({ children }: FigtherSelection) => {
    return (
        <p className='text-white text-center font-koho text-2xl m-2 italic cursor-pointer bg-dark-red w-md rounded-xl p-4'>
            {children}
        </p>
    )
}

export const BetsPage = () => {

    return (
        <>
            <div className="fixed inset-0 flex -z-10 gap-7.25 px-32 pt-14">
                <div className="w-[50vw] flex justify-center items-end">
                    <img
                        src="/illia_topuria.png"
                        className=" object-contain"
                        alt="Ilia Topuria"
                    />
                </div>

                <div className="w-[50vw] flex justify-center items-end">
                    <img
                        src="/islam_makachaev.png"
                        className="scale-x-[-1] object-contain"
                        alt="Islam Makachaev"
                    />
                </div>
            </div>
            <div className="h-screen flex-col flex items-center my-14 mx-32">
                <Tittle>1 of 12 fights</Tittle>

                <div className=" h-11/12 flex flex-col justify-center items-center">
                    <Text_One>Who will win?</Text_One>
                    <FighterSelection onClick={() => {

                    }}>Islam Makachaev</FighterSelection>
                    <FighterSelection onClick={() => {

                    }}>Illia Topuria</FighterSelection>
                    <Button>Results</Button>
                </div>
            </div>
        </>
    )
};