type ReplaceAll<S extends string, From extends string, To extends string> = 
From extends '' 
? S 
: S extends `${From}${infer R}`
  ? `${To}${ReplaceAll<R, From, To>}`
  : S extends `${infer L}${From}${infer R}`
    ? `${ReplaceAll<L, From, To>}${To}${ReplaceAll<R, From, To>}`
    : S extends `${infer L}${From}`
      ? `${ReplaceAll<L, From, To>}${To}`
      : S;
