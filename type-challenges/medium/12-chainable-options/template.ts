// tip {a: string} & {a: number} 需要遍历合并才会出现 never

type Chainable<T = {}> = {
  option: <K extends string, V>(key: K, value: V) => 
  Chainable<
    { 
      // 因为需要替换，因此如果再次出现就要过滤掉这个属性
      [P in keyof T as P extends K ? never : P]: T[P];
    } & {
      [P in K]: V;
    }
  >;
  get(): T;
}