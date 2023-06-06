type Replace<S extends string, From extends string, To extends string> = 
  From extends '' 
    ? S 
    : S extends `${From}${infer R}`
      ? `${To}${R}`
      : S extends `${infer L}${From}${infer R}`
        ? `${L}${To}${R}`
        : S extends `${infer L}${From}`
          ? `${L}${To}`
          : S;