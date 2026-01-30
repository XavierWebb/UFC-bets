import { useDispatch, useSelector } from "react-redux";
import { Button } from "../components/button";
import { BaseModal } from "./baseModal"
import type { RootState } from "../redux/store";
import { closeModal } from "../redux/modalsSlice";
import { TextInput } from "../components/textInput";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import {z} from 'zod'
import { Text_One } from "../components/texts";
import { createUser } from "../redux/userSlice";

const schema = z.object({
    name : z.string(),
    password: z.string(),
    email: z.string(),
    balance: z.number(),
    registredAt: z.date(),
})

type FormData = z.infer<typeof schema>

const SignupModal = () => {
    const dispatch = useDispatch();
    const modal = useSelector((state: RootState) => state.modals.signUpModal);
    const {
        handleSubmit,
        formState: { errors },
        reset,
        register
    } = useForm<FormData>({
        resolver: zodResolver(schema),
        defaultValues: {
            balance: 0,
            registredAt: new Date()
        }
    });

    const onSubmit = (data: FormData) => {
        dispatch(closeModal('signUpModal'))
        dispatch(createUser({
            ...data,
            wins: 0,
            defeats: 0,
            earned: 0,
        }))
        reset()
    };

    if (modal) {
        return (
            <BaseModal title="Sign Up">
                <form className='items-center flex flex-col text-center' onSubmit={handleSubmit(onSubmit)}>
                    <TextInput
                        placeHolder="name"
                        {...register('name')}
                    />
                    {errors.name && <Text_One>{errors.name.message}</Text_One>}

                    <TextInput
                        placeHolder="password"
                        {...register('password')}
                    />
                    {errors.password && <Text_One>{errors.password.message}</Text_One>}

                    <TextInput
                        placeHolder="email"
                        {...register('email')}
                    />
                    {errors.email && <Text_One>{errors.email.message}</Text_One>}

                    <div className="my-4">
                        <Button type='button' variant="secondary" onClick={() => {
                            dispatch(closeModal('signUpModal'));
                        }}>Cancel</Button>
                        <Button type='submit'>Continue</Button>
                    </div>
                </form>
            </BaseModal>
        )
    } else return null;
};

export default SignupModal;