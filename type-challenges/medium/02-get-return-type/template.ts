type MyReturnType<T> = T extends (...args: any) => infer Ret ? Ret : never