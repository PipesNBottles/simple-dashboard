export interface Error422 {
    detail: DetailedErrors[],
}

export interface Error400 {
    detail: string,
}

interface DetailedErrors {
    loc: string[],
    msg: string,
    type: string,
}