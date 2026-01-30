import { useForm } from "react-hook-form";
import { BaseModal } from "./baseModal";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../components/button";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../redux/modalsSlice";
import type { RootState } from "../redux/store";
import { TextInput } from "../components/textInput";
import { Text_One } from "../components/texts";
import { setBet } from "../redux/betsSlice";

const schema = z.object({
    amount: z
        .number()
        .min(10, "The minimum bet is 10 USD"),
});

type FormData = z.infer<typeof schema>;

export const BetModal = () => {
    const dispatch = useDispatch();
    const modal = useSelector((state: RootState) => state.modals.betModal);
    const user = useSelector((state: RootState) => state.users.currentAccount)
    const {
        handleSubmit,
        formState: { errors },
        reset,
        register,
    } = useForm<FormData>({
        resolver: zodResolver(schema),
        defaultValues: {
            amount: 0,
        },
    });

    const onSubmit = (data: FormData) => {

        if (data.amount > user.balance) {
            alert("You don't have enough balance to bet that amount");
            return;
        } else {
            dispatch(setBet(data.amount));
            reset();
            dispatch(closeModal("betModal"));
        }
    };

    if (!modal) return null;

    return (
        <BaseModal title="Bet">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col justify-center items-center"
            >
                <TextInput
                    placeholder="Amount"
                    type="number"
                    {...register("amount", { valueAsNumber: true })}
                />

                {errors.amount && <Text_One>{errors.amount.message}</Text_One>}

                <div className="flex">
                    <Button
                        variant="tertiary"
                        type='button'
                        onClick={() => {
                            reset();
                            dispatch(closeModal("betModal"));
                        }}
                    >
                        Cancel
                    </Button>
                    <Button type="submit">Bet</Button>
                </div>
            </form>
        </BaseModal>
    );
};
