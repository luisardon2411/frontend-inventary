
export interface User {
    username?: string;
    password?: string;
    firstName?: string;
    secondName?: string;
    firstLastName?: string;
    secondLastName?: string;
    email?: string;
    phone?: string;
    CUI?: string;
}

export interface UserApi {
    username?: string;
    password?: string;
    firstName?: string;
    secondName?: string;
    secondLastName?: string;
    email?: string;
    phone?: string;
    CUI?: string;
}

export const EmptyUserState: User = {
    username: '',
    firstName: '',
    secondName: '',
    firstLastName: '',
    secondLastName: '',
    phone: '',
    CUI: '',
    email: '',
}