import { axios } from '../../src/core/axios'
import { RegisterFormProps } from '../pages/SignIn/components/RegisterModal';
import { LoginFormProps } from './../pages/SignIn/components/LoginModal';


interface ResponseApi {
  status: string;
  data: any;
}


export const AuthApi = {

async signIn( postData: LoginFormProps ): Promise<ResponseApi> {
	const { data } = await axios.post<ResponseApi>('/auth/login',  {
		username: postData.email,
		password: postData.password,
	})
	return data
},
 
async signUp(postData: RegisterFormProps): Promise<ResponseApi> {
	const { data } = await axios.post<ResponseApi>('/auth/register', {
		email: postData.email,
		username: postData.username,
		fullname: postData.fullname,
		password: postData.password,
		password2: postData.password2,
	});
	return data;
},

async getMe( ): Promise<ResponseApi>{
	const { data } = await axios.get( '/users/me' )
	return data
},

async getUserInfo( userId: string ): Promise<ResponseApi> {
	const { data } = await axios.get('/users/' + userId)
	return data
}
}



//1.20 остановились на регистрации