// type First<T extends Array<any>> = T[0] extends undefined ? never : T[0]
// 无法通过测试用例 4

// type First<T extends Array<any>> = T extends [] ? never : T[0]
// Accepted

// type First<T extends any[]> = T['length'] extends 0 ? never : T[0]
// Accepted

// type First<T extends any[]> = T[0] extends T[number] ? T[0] : never
// Accepted

type First<T extends Array<any>> = T extends [infer F, ...infer R] ? F : never
// Accepted
