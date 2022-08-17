export interface UserType {
    username: string;
    email: string;
    password: string;
    isAdmin: boolean;
    resetPasswordToken: string;
    resetPasswordExpires: Date;
}

export interface UserSanitizedType {
    username: string;
    email: string;
    password: string;
    isAdmin: boolean;
}

export interface UserLoginSanitizedType {
    email: string;
    password: string;
}

export interface UserReturnType {
    _id: string;
    username: string;
    email: string;
    isAdmin: boolean;
    token: string;
}
