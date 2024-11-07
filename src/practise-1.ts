{
  interface SumArr {
    (arr: number[]): number;
  }

  const sumArray: SumArr = (arr) => {
    return arr.reduce((acc: number, cur: number): number => acc + cur, 0);
  };

  const val = sumArray([1, 2, 3, 4]);
  console.log(val);
}
