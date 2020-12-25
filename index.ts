const name = "jayeom",
  age = 28,
  gender = "male";

const sayHi = (name, age, gender?) => {
  console.log(`hello~ ${name}, you are ${age}, and you are a ${gender}.`);
}

sayHi(name, age);

export {};