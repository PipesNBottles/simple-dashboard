import { Levels } from "./Enums";

export interface LoginInputs {
    email: string,
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