import { Equal, Expect } from "../helpers/type-utils";

const myFunc = () => {
  return "hello";
};

/**
 * How do we extract MyFuncReturn from myFunc?
 */
type MyFuncReturn = ReturnType<typeof myFunc>;
// Return Type Here tells the return type of a function which will take type of function
// ReturnType<() => string>
// this returns string.

type tests = [Expect<Equal<MyFuncReturn, string>>];
