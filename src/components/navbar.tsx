import { useNavigate } from "react-router-dom";
import { Button } from "./button";
import { useDispatch } from "react-redux";
import { openModal } from "../redux/modalsSlice";

export const Navbar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    return (
        <div className="
            flex items-center
            gap-2
            mb-10

            md: flex-row
            md: justify-end
            md:gap-0
        ">
            <Button variant="tertiary" onClick={()=>navigate('/')}>Home</Button>
            <Button variant="tertiary" onClick={()=> dispatch(openModal('walletModal'))}>Wallet</Button>
            <Button variant="tertiary" onClick={()=>navigate('/profile')}>Profile</Button>
        </div>
    )
};