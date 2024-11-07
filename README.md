# The significance of union and intersection types in Typescript.

**Union Type**

- In TypeScript union type allows a variable to have one of several types. It is represented using the | operator(pipe character).

- type Computer = 'laptop' | 'desktop';
  const myComputer:Computer = 'laptop';

- This example myComputer variable can have the value 'laptop' or 'desktop'

**Intersection Type**

- To combine two or multiple types into one single type we will use intersection which is represented using the & (and) operator.

- _Example_

  type DevInfo = {
  name: string;
  age: number;
  hasNextDevCertificate: boolean;
  }

  type DevStack = {
  skills: string[],
  }

  type Developer = DevInfo & DevStack;

  const rezaulDev:Developer = {
  name: 'Md. Rezaul Karim',
  age: 24,
  hasNextDevCertificate: false,
  skills: ['html','css','javScript', 'React','MongoDB']
  }

- In this example the type Developer will include both the DevInfo and DevStack type.

# How to handle asynchronous operations using async/await over callback/promise TypeScript.

- To handle asynchronous operations we can use asyn/await which we can also use to get the Promise value.

- An async function returns a Promise.

- await keyword is used to get the promise value either rejected or resolved.
