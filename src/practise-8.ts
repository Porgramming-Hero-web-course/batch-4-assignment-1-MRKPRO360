{
  const validateKeys = <T extends object>(obj: T, keys: (keyof T)[]) =>
    keys.every((el) => el in obj);

  interface Person {
    name: string;
    age: number;
    email: string;
  }
  const person = { name: 'Alice', age: 25, email: 'alice@example.com' };

  console.log(validateKeys<Person>(person, ['name', 'age']));
}
