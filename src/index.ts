const sayHi = (name: string, age: number, gender?: string) : string => {
  return `hello~ ${name}, you are ${age}, and you are a ${gender}.`;  
}

console.log(sayHi("jayeom", 28, "male"));

export {};