// tip：as
type MyOmit<T, K extends keyof T> = {
  [P in keyof T as P extends K ? never : P]: P extends K ? never : T[P];
}

type PPick<T, K extends keyof T> = {
  [P in K]: T[P]
}

type EExclude<T, U> = T extends U ? never : T;