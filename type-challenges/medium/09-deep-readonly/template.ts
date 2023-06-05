// tip: (...args: any) => any extends object 为 true

type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends object 
    ? T[P] extends (...args: any) => any 
      ? T[P]
      : DeepReadonly<T[P]>
    : T[P]
};