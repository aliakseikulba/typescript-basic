//parameters and return type
const fn1 = (num: number): string => {
  return String(num);
}

// if callback is an argument type
type Callback = () => string;
function fn2(cb: Callback) {}


//default parameters
function fn3(a:number = 2, b:number = 3): [number, number] {
  return [a, b];
}


//rest parameter
function fn4(...nums: Array<number>): string {
  return nums.join(' ');
}


//interfaces
interface IPrintable {
  label: string
}

function print(obj: IPrintable): void {
  console.log(obj.label);
}

const obj1 = {
  label: 'str',
  numb: 42
}

const obj2 = {
  label: 'qwe',
  note: 'stf'
}

print(obj1);
print(obj2);
// print({label: 'zxc', note: 23}); //! работает только через переменную, иначе не соответствие интерфейсу



