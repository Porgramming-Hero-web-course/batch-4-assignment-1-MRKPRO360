const getProperty = <X, Y extends keyof X>(obj: X, key: Y) => obj[key];

type Person = {
  name: string;
  age: number;
};
const person = { name: 'Alice', age: 30 };

const property = getProperty(person, 'name');
console.log(property);
