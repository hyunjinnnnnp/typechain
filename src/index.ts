interface Human {
  name: string;
  age: number;
  gender: string;
}
//interface는 JS에서 작동 안함

const person = {
  name: "nico",
  age: 22,
  gender: "male",
};
const sayHi = (person: Human): string => {
  // : 함수가 어떤 값을 반환할 것인지 명시해준다
  return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}`;
};
console.log(sayHi(person));

//이 파일이 모듈이 된다는 걸 알 수 있도록 export해준다
export {};
