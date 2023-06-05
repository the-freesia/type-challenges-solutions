type awaited<T> = T extends Promise<infer V> ? awaited<V> : T;

declare function PromiseAll<T extends any[]>(values: readonly [...T]) : 
  Promise<{
    [P in keyof T]: awaited<T[P]>;
  }>