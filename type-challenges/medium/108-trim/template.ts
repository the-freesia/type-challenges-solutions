// type Trim<S extends string> = S extends ` ${infer R}` 
// ? Trim<R>
// : S extends `\n${infer R}`
//   ? Trim<R>
//   : S extends `\t${infer R}`
//     ? Trim<R>
//     : S extends `${infer R} ` 
//       ? Trim<R>
//       : S extends `${infer R}\n`
//         ? Trim<R>
//         : S extends `${infer R}\t`
//           ? Trim<R>
//           : S;

type Space = " " | "\t" | "\n"
type Trim<T extends string> = 
  T extends `${Space}${infer R}`
    ? Trim<R>
    : T extends `${infer L}${Space}`
      ? Trim<L>
      : T;