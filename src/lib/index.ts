const fn = (): void => {};
const testArr: any[] = ['1', 2, fn()];

const [abc, abc2, abc3] = testArr;

console.log(`abc: `, abc);
console.log(`abc: `, abc2);
console.log(`abc: `, abc3);
