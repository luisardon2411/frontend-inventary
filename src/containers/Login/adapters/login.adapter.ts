interface login {
    username: string;
    password: string;
}
interface loginApi {
    username: string;
    password: string;
}


// adapter to login
export function loginAdapter( apiLogin: loginApi ): login{
    return {
        username: apiLogin.username,
        password: apiLogin.password,
    }
}