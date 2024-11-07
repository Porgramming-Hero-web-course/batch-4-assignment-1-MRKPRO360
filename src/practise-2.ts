{
  interface RemoveDuplicateArr {
    (arr: number[]): number[];
  }

  const removeDuplicates: RemoveDuplicateArr = (arr) => [...new Set(arr)];

  const uniqueArrVal = removeDuplicates([1, 2, 2, 3, 4, 4, 5]);

  console.log(uniqueArrVal);
}
