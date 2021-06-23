//interface는 JS에서 작동 안함
//JS에 인터페이스 부분을 넣고싶다면 클래스로 작성할 것

class Human {
  public name: string;
  public age: number;
  public gender: string;
  constructor(name: string, age: number, gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  } //클래스로부터 객체를 만들 때마다 호출됨
}

const lynn = new Human("Lynn", 15, "female");

const sayHi = (person: Human): string => {
  // : 함수가 어떤 값을 반환할 것인지 명시해준다
  return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}`;
};
console.log(sayHi(lynn));

//이 파일이 모듈이 된다는 걸 알 수 있도록 export해준다
export {};
