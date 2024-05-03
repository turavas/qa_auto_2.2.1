function increaseBalance(x, y) {
  x = x + y;
  return x;
}

function decreaseBalance(x, y) {
x = x - y; 
return x;
} 
//добавлен аргумент у, т.к потом мы используем в функцмм переменную у, которая нигде не объявлена 

function divideBalanceByAccounts(x, y) {
  x = x / y;
  return x;
} /*console.log("x"); после return не воспринимается компилятором. 
Позже мы выводим результат в консоль при вызове функции с предачей значений аргументов */

function getRestAfterDivision(x, y) {
  x = x % y;
  return x;
}

console.log(increaseBalance(3000, 700));
console.log(decreaseBalance(3000, 700));
console.log(divideBalanceByAccounts(3000, 2)); 
// убрала 4000, т.к. в этой функции предаем только два аргумента

console.log(getRestAfterDivision(7000, 3));
