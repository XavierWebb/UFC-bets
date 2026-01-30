import { useDispatch, useSelector } from "react-redux";
import { BaseModal } from "./baseModal";
import type { RootState } from "../redux/store";
import { Button } from "../components/button";
import type React from "react";
import { useState } from "react";
import { closeModal } from "../redux/modalsSlice";
import { TextInput } from "../components/textInput";
import { Text_One } from "../components/texts";
import { updateBalance } from "../redux/userSlice";
import { z } from 'zod'
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

interface MoneyInWallet {
    children: React.ReactNode;
}

const MoneyInWallet = ({ children }: MoneyInWallet) => {
    return (
        <div className="bg-gray-800 my-5 p-5 w-full text-center rounded-2xl font-extrabold text-3xl">
            {children}
        </div>
    )
}

const schema = z.object({
    accountName: z.string().min(4, 'The account needs to have more then 4 letters'),
    amount: z.number().min(10, 'The minimun of money you need for deposit/withdraw is 10 USD'),
})

type FormData = z.infer<typeof schema>


export const Wallet = () => {
    const modal = useSelector((state: RootState) => state.modals.walletModal);
    const money = useSelector((state: RootState) => state.users.currentAccount.balance);
    const dispatch = useDispatch();
    const [step, setStep] = useState(0);

    const {
        handleSubmit,
        formState: { errors },
        reset,
        register,
    } = useForm<FormData>({
        resolver: zodResolver(schema),
        defaultValues: {
            accountName: '',
            amount: 0,
        }
    });

    const onSubmit = (data: FormData) => {
        if (step == 1) {
            dispatch(updateBalance(data.amount))
        } else {
            if (money < data.amount) {
                alert("You don't have enough balance to withdraw that amount");
                return;
            }
            if (money < 10) {
                alert("You need at least 10 USD in your account to withdraw");
                return;
            }

            dispatch(updateBalance(-data.amount));
        };

        setStep(0)
        dispatch(closeModal('walletModal'))
        reset()
    }

    if (modal) {
        if (step == 0) {
            return (
                <BaseModal title="Balance">
                    <MoneyInWallet>
                        {money} USD
                    </MoneyInWallet>

                    <div className="flex text-center">
                        <Button variant="tertiary" onClick={() => dispatch(closeModal('walletModal'))}>Cancel</Button>
                        <Button variant="tertiary" onClick={() => setStep(2)}>Withdraw</Button>
                        <Button onClick={() => setStep(1)}>Deposit</Button>
                    </div>
                </BaseModal>
            )
        } else if (step == 1) {
            return (
                <BaseModal title="Deposit">
                    <form className="flex flex-col items-center text-center" onSubmit={handleSubmit(onSubmit)}>
                        <Text_One>Our bank Adress:</Text_One>
                        <p className="font-extrabold text-2xl mb-5">fakeBankAccountAdress</p>

                        <TextInput
                            placeholder="Bank account name"
                            {...register('accountName')}
                        />
                        {errors.accountName && <Text_One>{errors.accountName.message}</Text_One>}

                        <TextInput
                            placeholder="Amount deposited"
                            type="number"
                            {...register('amount', { valueAsNumber: true })}
                        />

                        {errors.amount && <Text_One>{errors.amount.message}</Text_One>}

                        <div className="flex">
                            <Button variant="tertiary" onClick={() => setStep(0)}>Return</Button>
                            <Button type='submit'>Check transfers</Button>
                        </div>
                    </form>
                </BaseModal>
            )
        } else if (step == 2) {
            return (
                <BaseModal title="Withdraw">
                    <form className='flex flex-col items-center text-center' onSubmit={handleSubmit(onSubmit)}>
                        <TextInput
                            placeholder="Your Bank Account"
                            {...register('accountName')}
                        />
                        {errors.accountName && <Text_One>{errors.accountName.message}</Text_One>}

                        <TextInput
                            placeholder="Amount"
                            {...register('amount', { valueAsNumber: true })}
                        />
                        {errors.amount && <Text_One>{errors.amount.message}</Text_One>}

                        <div>
                            <Button onClick={() => setStep(0)}>Return</Button>
                            <Button variant="tertiary" type='submit' >Withdraw</Button>
                        </div>
                    </form>
                </BaseModal>
            )
        }
    } else {
        return null;
    };
};