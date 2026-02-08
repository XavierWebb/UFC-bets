import { Button } from "../components/button"
import { BaseModal } from "./baseModal"
import { closeModal } from "../redux/modalsSlice"
import { TextInput } from "../components/textInput"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Text_One } from "../components/texts"
import { loginUser } from "../common/login"
import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../redux/hooks"

const schema = z.object({
  name: z.string(),
  password: z.string(),
})

type FormData = z.infer<typeof schema>

const LoginModal = () => {
  const dispatch = useAppDispatch()

  const user = useAppSelector(state => state.users.currentAccount)
  const loginError = useAppSelector(state => state.users.loginError)
  const modal = useAppSelector(state => state.modals.loginModal)

  const {
    handleSubmit,
    formState: { errors },
    reset,
    register,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const onSubmit = (data: FormData) => {
    dispatch(loginUser(data))
  }

  useEffect(() => {
    if (user) {
      dispatch(closeModal("loginModal"))
      reset()
    }
  }, [user, dispatch, reset])

  if (!modal) return null

  return (
    <BaseModal title="Login">
      <form
        className="items-center flex flex-col text-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextInput placeHolder="name" {...register("name")} />
        {errors.name && <Text_One>{errors.name.message}</Text_One>}

        <TextInput placeHolder="password" {...register("password")} />
        {errors.password && <Text_One>{errors.password.message}</Text_One>}

        {loginError && (
          <Text_One>
            {loginError}
          </Text_One>
        )}

        <div className="my-4">
          <Button
            type="button"
            variant="secondary"
            onClick={() => dispatch(closeModal("loginModal"))}
          >
            Cancel
          </Button>
          <Button type="submit">Continue</Button>
        </div>
      </form>
    </BaseModal>
  )
}

export default LoginModal
