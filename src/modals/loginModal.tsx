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
import { loginUser } from "../redux/userSlice";

const schema = z.object({
    name : z.string(),
    password: z.string(),
})

type FormData = z.infer<typeof schema>

const LoginModal = () => {
    const dispatch = useDispatch();
    const modal = useSelector((state: RootState) => state.modals.loginModal);
    const {
        handleSubmit,
        formState: { errors },
        reset,
        register
    } = useForm<FormData>({
        resolver: zodResolver(schema),
    });

    const onSubmit = (data: FormData) => {
        dispatch(closeModal('loginModal'))
        dispatch(loginUser(data))
        reset()
    };

    if (modal) {
        return (
            <BaseModal title="Login">
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

                    <div className="my-4">
                        <Button type='button' variant="secondary" onClick={() => {
                            dispatch(closeModal('loginModal'));
                        }}>Cancel</Button>
                        <Button type='submit'>Continue</Button>
                    </div>
                </form>
            </BaseModal>
        )
    } else return null;
};

export default LoginModal;