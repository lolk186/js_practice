// Задача 2 
// let name = 'Иван';
// let admin = name;
// alert(admin)

// Задача 3 hello ilya
// let name = "Ilya";
// alert( `hello ${1}` ); // ?
// alert( `hello ${"name"}` ); // ?
// alert( `hello ${name}` ); // ?

// Задача 4
//alert('Введите ваше имя');
//result = prompt();
//alert(result);

// Задача 5 (2221)
// let a = 1, b = 1;
// let c = ++a; // ?
// let d = b++; // ?
// alert(a);
// alert(b);
// alert(c);
// alert(d);

// Задача 6 (45)
// let a = 2;
// let x = 1 + (a *= 2);
// alert(a);
// alert(x);

// Задача 7 (3)
// let a = prompt("Первое число?", 1);
// let b = prompt("Второе число?", 2);
// a  = Number (a)
// b = Number (b)
// alert(Number(a + b)); // 12


// Задача 8
// 7 > 5 true
// "стол" > "стул" true
// "4" > "52" false
// undefined == null
// undefined === null
// null == "\n0\n"
// null === +"\n0\n"

//Задача 9 (Да)
// if ("0") {
//     alert( 'Привет' );
//   }

//Задача 10
// result = prompt('Какое официальное название JavaScript')
// if (result == 'ECMAScript'){
//     alert('Верно')
// }
// else{
//     alert('Не знаете ? ECMAScript')
// }

// Задача 11
// alert("Введите число:");
// a = prompt()
// a = Number(a);
// if (a>0){
//     alert("1")
// } 
// else if(a<0){
//     alert('-1')
// }
// else if(a==0){
//     alert('0')
// }
// else{
//     alert("в")
// }

// зАДАЧА 12
// let result
// a = Number(prompt());
// b = Number(prompt());
// result = (a + b < 4) ? alert("Мало") : alert("Много")

// Задача 13
// login = prompt();
// let message = (login == 'Сотрудник') ? alert('Привет'):
//     (login == 'Директор') ? alert('Здравствуйте'):
// alert("Досвидания");


// Задача 14 (4)
// alert( null || 4 || undefined );


// Задача 15 (12)
// alert( alert(1) || 2 || alert(3) );

// Задача 16 (null)
// alert( 1 && null && 2 );

// Задача 17 (1 undefined)
// alert( alert(1) && alert(2) );

// Задача 18 (3)
// alert( null || 2 && 3 || 4 );

// Задача 19 (30)
// let value = NaN;

// value &&= 10;
// value ||= 20;
// value &&= 30;
// value ||= 40;

// alert(value);


// Задача 20
// let age = Number(prompt());
// if(14 <= age && age <= 90){
//     alert("Средний возраст жизни")
// }
// else{
//     alert("Не входит в средний возраст жизни")
// }

// Задача 21
// let age = Number(prompt());
// if(age>=17 && age<= 99){
//     alert("Не входит")
// }
// else{
//     alert("Входит")
// }

//Задание 22
// if (-1 || 0) alert( 'first' );
// if (-1 && 0) alert( 'second' );
// if (null || -1 && 1) alert( 'third' );

//Задание 23
// let login = (prompt("Введите логин"));

// if (login == ""){
//     alert("Отменено")
// }
// else if(login == "Админ"){
//     let pass = (prompt("Введите пароль"));
//     if (pass == "Я Главный"){
//         alert("Вы вошли")
//     }
//     else if( pass == null)
//         alert("Ошибка 403")
//     else {
//         alert("Неправильный пароль")
//     }
// }
// else{
//     alert("Ты не админ")
// }
// 
//Задание 1

// function plus(a,b){
//     x = a + b
//     return x
// }
// function minus(a,b){
//     z = a - b
//     return z
// }
// function multi(a,b){
//     c = a * b
//     return c
// }
// function del(a,b){
//     v = a / b
//     return v
// }
// alert(plus(2,3));
// alert(del(2,3));
// alert(multi(2,3));
// alert(minus(2,3));
//
//Задание 2
//
// a = prompt("Введите предложение")
// alert(a.length)

//Задание 3 
// a = prompt("Введите число")
// if (a > 0){
//     alert("Число положительно")
// }
// else if(a < 0){
//     alert("Число отрицательно")
// }
// else{
//     alert("Число = 0")
// }
//Задание 4
// a=prompt("сколько чисел")
// var z = 0
// i=0
// for(var i=0; i!=a;i++){
//     b = prompt("Введите число")
//     var z = +z + +b;
//     var b = 0
// }
// var ans = z/a
// alert(ans)
//Задание 5
// name = prompt("Введите имя")
// age = prompt("Введите возраст")
// alert(name)
// alert(age)
//
//Задание 6
// a= prompt()
// if (a%2==0){
//     alert("четно")
// }
// else{
//     alert("нечетно")
// }
//
//Задание 7 
// a= prompt()
// if (a<0){
//     alert("отрицательно")
// }
// else{
//     alert("положитнельно")
// }
//Задание 8
// a=prompt()
// b=prompt()
// if(a%b==0){
//     alert("юез остатка")
// } 
// else{
//     alert("с остатком")
// }



















