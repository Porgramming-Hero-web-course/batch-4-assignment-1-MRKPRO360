{
  interface Profile {
    name: string;
    age: number;
    email: string;
    [key: string]: string | number;
  }

  // Solution: 1
  //NOTE: If we want to check the second object prop persist in 1st object and update then

  const myProfile = { name: 'Alice', age: 25, email: 'alice@example.com' };

  const updateProfile = (profObj: Profile, newObj: any) => {
    for (const prop in profObj) {
      if (prop in newObj) {
        profObj[prop] = newObj[prop];
      }
    }

    return profObj;
  };

  const result = updateProfile(myProfile, { age: 26 });
  console.log(result);

  // Solution 2
  //NOTE: If we want to merge two objects
  const updateProfile2 = <T>(obj: Profile, updatedObj: T) => ({
    ...obj,
    ...updatedObj,
  });

  const myProfile2 = { name: 'Bob', age: 24, email: 'bob@yahoo.com' };

  console.log(updateProfile2(myProfile2, { age: 26 }));
}
