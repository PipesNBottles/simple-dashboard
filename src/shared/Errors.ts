export interface Error422 {
    detail: Array<DetailedErrors>
}

export interface Error400 {
    detail: string
}

interface DetailedErrors {
    loc: Array<string>,
    msg: string,
    type: string
}