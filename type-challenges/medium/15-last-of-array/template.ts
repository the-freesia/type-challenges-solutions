type Last<T extends any[]> = T extends [... infer Prev, infer R] ? R : never