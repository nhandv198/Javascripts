//Khai bao nhieu bien tren 1 dong
let a=5, b=10,c=15
total= a+b+c
console.log ("A=",a,"B=",b,"C=",c)
console.log ("total a+b+c =",total)

console.log (" a/b =",a/b)
console.log (" c/a =",c/a)
console.log (" c%a =",c%a)
console.log (" a*b =",a*b)

console.log (" a++ =",++a)
console.log (" b-- =",++b)

console.log (`**********************`);
let FullName = window.prompt("Hãy nhập tên của bạn");
let BirthYear = window.prompt("Hãy nhập năm sinh của bạn yyyy:");
let today = new Date();
let year = today.getFullYear();
let age = year - BirthYear;
console.log (`Chào bạn ${FullName}, bạn năm nay ${age} tuổi`); //Sử dụng template string
console.log (`**********************`);

