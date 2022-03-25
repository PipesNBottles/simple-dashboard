import { Levels } from './Enums';

export interface LoginInputs {
    username: string,
    password: string,
}

export interface SignupInputs {
    id: string,
    first_name: string,
    last_name: string,
    level: Levels,
    email: string,
    password: string,
}

export interface Shift {
    id: number,
    user_id: string,
    start_time: string,
    end_time: string,
}

export interface User extends Omit<SignupInputs, 'password'> {
    shifts: Shift[],
}
