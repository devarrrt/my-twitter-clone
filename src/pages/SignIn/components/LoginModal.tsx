import React, { useEffect } from 'react'
import { Button, FormControl, FormGroup, TextField } from '@material-ui/core'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux'


import { ModalBlock } from '../../../components'
import { useStylesSignIn } from './../stylesSignIn';
import { FetchSignInAction } from './../../../redux/ducks/user/actionsUser';
import { selectUserStatus } from './../../../redux/ducks/user/selectorsUser';
import { LoadingStatus } from '../../../redux/ducks/user/stateTypes';




interface ILoginModal {
	open: boolean,
	onCloseModal: () => void
}
export interface LoginFormProps {
	email: string;
	password: string;
}
const LoginFormSchema = yup.object().shape({
	email: yup.string().email('Неверная почта').required('Введите почту'),
	password: yup.string().min(6, '​Минимальная длина пароля 6 символов').required(),
});



const LoginModal: React.FC<ILoginModal> = ({ open, onCloseModal }) => {
	const styles = useStylesSignIn()
	const dispatch = useDispatch()
	const loadingStatus = useSelector(selectUserStatus)

	const { register, handleSubmit, formState: { errors } } = useForm<LoginFormProps>({
		resolver: yupResolver(LoginFormSchema),
	})
	// const openNotificationRef = React.useRef<(text: string, type: Color) => void>(() => {})





	const onSubmit = async (data: LoginFormProps) => {
		dispatch(FetchSignInAction(data))
	}


	useEffect(() => {
		if (loadingStatus === LoadingStatus.SUCCESS) {
			console.log('Авторизация успешна')
			onCloseModal()
		} else if (loadingStatus === LoadingStatus.ERROR) {
			console.log('Неверный пароль или логин')
		}
	}, [loadingStatus, onCloseModal])



	return (
		<ModalBlock
			title="Войти в аккаунт"
			visible={open}
			onClose={onCloseModal}>
			<FormControl className={styles.loginFormControl} component="fieldset" fullWidth>
				<FormGroup aria-label="position" row>
					<form onSubmit={handleSubmit(onSubmit)}>
						<TextField
							id="email"
							label="E-Mail"
							InputLabelProps={{
								shrink: true,
							}}
							variant="filled"
							type="email"
							defaultValue=""
							className={styles.loginSideField}
							helperText={errors.email?.message}
							error={!!errors.email}
							fullWidth
							autoFocus
							placeholder="burmakina-1999@mail.ru"
							{...register("email")} />

						<TextField
							id="password"
							label="Пароль"
							className={styles.loginSideField}
							InputLabelProps={{
								shrink: true,
							}}
							variant="filled"
							type="password"
							defaultValue=""
							helperText={errors.password?.message}
							error={!!errors.password}
							fullWidth
							placeholder="motherlode"
							{...register("password")} />

						<Button
							type="submit"
							variant="contained"
							color="primary"
							fullWidth
							disabled= { loadingStatus === LoadingStatus.LOADING }
							>
							Войти
						</Button>
					</form> 

				</FormGroup>
			</FormControl>
		</ModalBlock>
	)
}


export default LoginModal
