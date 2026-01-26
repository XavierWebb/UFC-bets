import { useNavigate } from "react-router-dom";
import { Button } from "./button";
import { useDispatch } from "react-redux";
import { openModal } from "../redux/modalsSlice";

export const Navbar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    return (
        <div className="flex justify-end mb-10">
            <Button variant="tertiary" onClick={()=>navigate('/')}>Home</Button>
            <Button variant="tertiary" onClick={()=> dispatch(openModal('walletModal'))}>Wallet</Button>
            <Button variant="tertiary" onClick={()=>navigate('/profile')}>Profile</Button>
        </div>
    )
};