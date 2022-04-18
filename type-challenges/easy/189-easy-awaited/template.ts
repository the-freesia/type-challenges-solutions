type MyAwaited<T extends Promise<any>> = T extends Promise<infer A>
  ? A extends Promise<any>
    ? MyAwaited<A>
    : A
  : never
