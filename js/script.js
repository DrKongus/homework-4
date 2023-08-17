// ---1---
// Перепишіть функцію, використовуючи '?' або '||'

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm("Батьки дозволили?");
//   }
// }
// checkAge(20);

// Відповідь //
// function checkAge(age) {
//   const ageVerification = age > 18 ? true : confirm("Батьки дозволили?");
// }
// checkAge(15);

// ---2---
// Напишіть функцію min(a, b), яка повертає менше з двох чисел a та b.

// Відповідь //
// function min(a, b) {
//   console.log(Math.min(a, b));
// }
// min(4, 44);

// ---3---
// Перепишіть з використанням стрілкових функцій
// Замініть Функціональні Вирази на стрілкові функції у коді нижче:

// function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
// }
// ask(
//   "Ви згодні?",
//   function () {
//     alert("Ви погодились.");
//   },
//   function () {
//     alert("Ви скасували виконання.");
//   }
// );

// Відповідь //
// const ask = (question, yes, no) => (confirm(question) ? yes() : no());
// ask(
//   "Ви згодні?",
//   () => alert("Ви погодились."),
//   () => alert("Ви скасували виконання.")
// );
