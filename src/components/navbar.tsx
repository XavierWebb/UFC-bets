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
            <div className="
                mr-auto 
                ml-12
            ">
                <img src="/UFC.png" 
                onClick={() => navigate('/')}
                className="
                    h-20
                    w-23
                    cursor-pointer
                    md:h-auto
                    md:w-auto
                "/>
            </div>
            <div>
                <Button variant="secondary" onClick={() => dispatch(openModal('walletModal'))}>Wallet</Button>
                <Button variant="secondary" onClick={() => navigate('/profile')}>Profile</Button>
            </div>
        </div>
    )
};