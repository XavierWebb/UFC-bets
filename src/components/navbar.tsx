import { useNavigate } from "react-router-dom";
import { Button } from "./button";

export const Navbar = () => {
    const navigate = useNavigate();
    return (
        <div className="flex justify-end mb-10">
            <Button variant="tertiary" onClick={()=>navigate('/')}>Home</Button>
            <Button variant="tertiary">Wallet</Button>
            <Button variant="tertiary" onClick={()=>navigate('/profile')}>Profile</Button>
        </div>
    )
};