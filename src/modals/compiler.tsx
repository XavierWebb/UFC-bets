import SignupModal from './signupModal';
import LoginModal from './loginModal';
import { Wallet } from './wallet';

export const ModalCompiler = () => {
    return (
        <>
            <Wallet/>
            <SignupModal/>
            <LoginModal/>
        </>
    )
};