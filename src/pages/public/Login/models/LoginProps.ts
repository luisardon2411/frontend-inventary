import { FormikProps } from 'formik';

interface loginFormikProps {
    username: string;
    password: string;
}

export interface LoginProps {
    children?: React.ReactNode | JSX.Element[],
    formik?: FormikProps<loginFormikProps> | undefined
}
