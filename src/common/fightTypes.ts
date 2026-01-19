export type Fighter = {
    name: string;
    age: number;
    img: string;
    category: "lightweight" | "welterweight" | "middleweight";
    record: {
        wins: number;
        defeats: number;
    };
};

export type Fight = {
    fighter_one: Fighter;
    fighter_two: Fighter;
};

export interface CardData {
    fights: Fight[];
}