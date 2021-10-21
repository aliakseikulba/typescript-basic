//=====списки
const arr = ['a', 'b', 'c']; //ts сам определяет тип
const arrStr: string[] = []; // тип для пустого массива или переменной
const arrNum: Array<number> = []; // другой вариант типизации массива
const arrNested: string[][] = [['abc'], ['abc'], ['abc']]; //массив массивов со строками

const arrDiff: (string | number)[] = [2, 'a', 5, 't']; //массив разных значений

type DiffType = (string | number);
const arrDiff2: DiffType[] = []; //другой вариант записи через создание алиаса DiffType



//=====кортежи (tuple)
const tuple: [string, boolean, number] = ['abc', true, 42]; //порядок и количество эл-тов определены типом



//csv (comma-separated values)
type MyCSV = [string, string, string, number];
const arrCSV: MyCSV[] = [
  ['acs', 'asd', 'asd', 23],
  ['acs', 'asd', 'asd', 23],
  ['acs', 'asd', 'asd', 23],
]
