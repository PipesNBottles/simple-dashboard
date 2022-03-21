export interface Error422 {
    detail: DetailedErrors[],
}

export interface Error400 {
    detail: string,
}

export interface DetailedErrors {
    loc: string[],
    msg: string,
    type: string,
}
