type MyCapitalize<T extends string> = 
  T extends `${infer First}${infer Rest}` 
    ? `${Upper<First>}${Rest}`
    : Upper<T>;

type Upper<T extends string> = 
  T extends "a" ? "A" :
  T extends "b" ? "B" :
  T extends "c" ? "C" :
  T extends "d" ? "D" :
  T extends "e" ? "E" :
  T extends "f" ? "F" :
  T extends "g" ? "G" :
  T extends "h" ? "H" :
  T extends "i" ? "I" :
  T extends "j" ? "J" :
  T extends "k" ? "K" :
  T extends "l" ? "L" :
  T extends "m" ? "M" :
  T extends "n" ? "N" :
  T extends "o" ? "O" :
  T extends "p" ? "P" :
  T extends "q" ? "Q" :
  T extends "r" ? "R" :
  T extends "s" ? "S" :
  T extends "t" ? "T" :
  T extends "u" ? "U" :
  T extends "v" ? "V" :
  T extends "w" ? "W" :
  T extends "x" ? "X" :
  T extends "y" ? "Y" :
  T extends "z" ? "Z" :
  T;


  