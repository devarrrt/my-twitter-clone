import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { FormControl, FormGroup, Button, TextField } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux' 

import { useStylesSignIn } from './../stylesSignIn';
import ModalBlock from './../../../components/ModalBlock';
import { FetchSignUpAction } from './../../../redux/ducks/user/actionsUser';
import { selectUserStatus } from '../../../redux/ducks/user/selectorsUser';
import { LoadingStatus } from '../../../redux/ducks/user/stateTypes';




 

interface IRegisterModal {
	open: boolean;
	onCloseModal: () => void;
}
export interface RegisterFormProps {
	fullname: string;
	username: string;
	email: string;
	password: string;
	password2: string;
}



const RegisterFormSchema = yup.object().shape({
	email: yup.string().email('Неверная почта').required('Введите почту'),
	fullname: yup.string().required('Введите своё имя'),
	username: yup.string().required('Введите логин'),
	password: yup.string().min(6, '​Минимальная длина пароля 6 символов').required(),
	password2: yup.string().oneOf([yup.ref('password')], 'Пароли не соответствуют'),
});


const RegisterModal: React.FC<IRegisterModal> = ({ open, onCloseModal }) => {
	const styles = useStylesSignIn()
	const dispatch = useDispatch()
	const loadingStatus = useSelector( selectUserStatus )

	console.log( loadingStatus )

	const { register, handleSubmit, formState: { errors } } = useForm<RegisterFormProps>({
		resolver: yupResolver(RegisterFormSchema),
	})

	const onSubmit = (data: any) => {
		console.log(data)
		dispatch( FetchSignUpAction(data))
	}

useEffect(()=> {
	if ( loadingStatus === LoadingStatus.SUCCESS ) {
		console.log( 'Регистрация прошла успешно' )
		onCloseModal()
	} else if ( loadingStatus === LoadingStatus.ERROR ) {
		console.log( 'Ошибочка' )
	}
}, [ loadingStatus, onCloseModal ])



	return (
		<ModalBlock
			title="Регистрация"
			visible={open}
			onClose={onCloseModal}>
				<FormControl className={styles.loginFormControl} component="fieldset" fullWidth>
				<FormGroup aria-label="position" row>

					<form onSubmit={handleSubmit(onSubmit)}>
				
												<TextField
							id="email"
							label="E-Mail"
							className={styles.registerField}
							InputLabelProps={{
								shrink: true
							}}
							variant="filled"
							type="email"
							defaultValue=""
							helperText={errors.email?.message}
							error={!!errors.email}
							fullWidth
							autoFocus
							{...register("email")}
						/>
								<TextField
							id="fullname"
							label="Ваше имя"
							className={styles.registerField}
							InputLabelProps={{
								shrink: true,
							}}
							variant="filled"
							type="text"
							defaultValue=""
							helperText={errors.fullname?.message}
							error={!!errors.fullname}
							fullWidth
							{...register("fullname")}
						/>
								<TextField
							id="username"
							label="Логин"
							className={styles.registerField}
							InputLabelProps={{
								shrink: true,
							}}
							variant="filled"
							type="text"
							defaultValue=""
							helperText={errors.username?.message}
							error={!!errors.username}
							fullWidth
							{...register("username")}
						/>
						<TextField
							id="password"
							label="Пароль"
							className={styles.registerField}
							InputLabelProps={{
								shrink: true,
							}}
							variant="filled"
							type="password"
							defaultValue=""
							helperText={errors.password?.message}
							error={!!errors.password}
							fullWidth
							{...register("password")}
						/>
						<TextField
							id="password2"
							label="Пароль"
							className={styles.registerField}
							InputLabelProps={{
								shrink: true,
							}}
							variant="filled"
							type="password"
							defaultValue=""
							helperText={errors.password2?.message}
							error={!!errors.password2}
							fullWidth
							{...register("password2")}
						/>

						<Button
							type="submit"
							variant="contained"
							color="primary"
							fullWidth
							disabled={ loadingStatus === LoadingStatus.LOADING }
							>
							Регистрация
            </Button>
					</form>

				</FormGroup>
			</FormControl>
			</ModalBlock>
	)
}

export default RegisterModal
