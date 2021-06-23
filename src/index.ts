const sayHi = (name: string, age: number, gender: string): string => {
  // : 함수가 어떤 값을 반환할 것인지 명시해준다
  return `Hello ${name}, you are ${age}, you are a ${gender}`;
};
console.log(sayHi("Nico", 555, "male"));

//이 파일이 모듈이 된다는 걸 알 수 있도록 export해준다
export {};
