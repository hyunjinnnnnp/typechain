const name = "Nico",
  age = 24,
  gender = "male";

const sayHi = (name, age, gender) => {
  console.log(`Hello ${name}, you are ${age}, you are a ${gender}`);
};
sayHi(name, age, gender);

//이 파일이 모듈이 된다는 걸 알 수 있도록 export해준다
export {};
