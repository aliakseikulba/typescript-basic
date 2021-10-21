//===== type
type MyObj = {
  a: number
  b: string
  c: boolean
}

const obj: MyObj = {a: 2, b: 'qwe', c: true};



//===== interface
interface IMyObj2 {
  readonly a: number  //нельзя переназначить
  b?: string  //опционально
  c: boolean
  method: () => number
}

const obj2: IMyObj2 = {
  a: 2,
  c: true,
  method() {return 2}
}

obj2.c = false;




//===== объединение типов
type Person = {
  firstName: string
  lastName: string
}

type Skills = {
  JS: boolean
  TS: boolean
}

type FrontendDev = Person & Skills;

const somePerson: FrontendDev = {
  firstName: 'Mike',
  lastName: 'Kimchi',
  JS: true,
  TS: true
}



//===== объединение интерфейсов
interface IPerson {
  name: string
}

interface IPerson {
  age: number
}

const man: IPerson = {
  name: 'John',
  age: 27
}

interface IAccount {
  login: string
  password: number
  status: boolean
}

interface IDeveloper extends IPerson, IAccount {
  skills: string[]
  workHours: number
}

const dev: IDeveloper = {
  skills: ['JS', 'TS', 'React'],
  workHours: 8,
  name: 'Petr',
  age: 31,
  login: 'some login',
  password: 42,
  status: true
}