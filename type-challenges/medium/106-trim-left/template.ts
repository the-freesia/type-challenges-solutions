type TrimLeft<S extends string> = 
  S extends ` ${infer R}` 
    ? TrimLeft<R>
    : S extends `\n${infer R}`
      ? TrimLeft<R>
      : S extends `\t${infer R}`
        ? TrimLeft<R>
        : S;
