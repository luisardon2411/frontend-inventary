/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { Login } from '../../pages/public/'
import { useFormik } from 'formik'
import * as Yup from 'yup';
import { loginAsync } from '../../store/slices/Auth/auth.slice';
import { AppDispatch } from '../../store/store';
import { useNavigate } from 'react-router-dom';
import { valuesFormik } from './models/login.interface';

// create a validation schema
const validationSchema = Yup.object().shape({
  username: Yup.string()
    .test('username', 'Ingrese un usuario válido', function (value) {
      if (value) {
        const regex = /^[a-zA-Z]+\.[a-zA-Z]+$/;
        return regex.test(value);
      }
      return false;
    })
    .required('El usuario es requerido'),
  password: Yup.string().required('La contraseña es requerida'),
})

const LoginContainer = () => {
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    document.title = 'Iniciar Sesion'
  }, [])

  const onSubmit = async (values: valuesFormik) => {
    const credentials = { username: values.username, password: values.password };
    try {
      dispatch(loginAsync(credentials))
    } catch (error: any) {
      console.log(error.response.data.message);
    }
  }
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit
  });
  return (
    <Login formik={formik} />
  )
}

export default LoginContainer