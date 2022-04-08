// Task 1
// Создайте класс Goods. Класс должен содержать свойства name, amount. Создайте на его основе объект goods. Выведите в консоль созданный объект. Помните, все классы - в отдельных файлах. Имена классов с большой буквы.


let goods = new Goods('phone', 200);
console.log(goods);


//Task 2.
//  Добавьте в класс Goods свойства image и count - картинка и количество на складе.




//Task 3.
//  Добавьте в класс Goods метод draw, который будет выводить div с изображением, названием товара, ценой - в указанный элемент (дозапись).


// Task 4.
// Создайте на основе класса Goods объект goods2, заполните свойства, примените метод draw для вывода товара на страницу в блок out-4.

let goods2 = new Goods('cucumber', 50, 'https://cdn1.iconfinder.com/data/icons/vegetable-colored/48/Plants_Vegetables_Artboard_9-256.png', 300);
let g1Obj = goods2.draw();
// вставляем
document.querySelector('.out-4').append(g1Obj);


//Task 5.
// Создайте класс Goods2, который наследуется от Goods. Добавьте ему свойство sale равное true или false. Перезапишите метод draw так, чтобы он выводил информацию о распродажах.



// Task 6.
// Создайте на основе класса Goods2 объект goods3. Заполните все поля. Выведите товар на страницу с помощью метода draw. Вывод осуществить в out-6.

let goods3 = new Goods2('Товар№2', '20', 'img/2.png', 'true', true);
let g3 = goods3.draw();
// вставляем
document.querySelector('.out-6').append(g3);



// Task 7.
// Создайте класс Valid, который содержит свойства email, password, isValid. И метод validate. Метод validate должен проверять длину пароля и писать false в isValid если длина меньше 6 и true если больше. Изначально свойство isValid равно false.

//Task 8.
// Создайте объект на основе класса Valid и задайте ему имя и пароль длиной 5 символов. Запустите метод validate() и выведите в консоль свойство isValid.
let val = new Valid('osa@gmail.com', '12345');
let va8 = val.validate();
console.log(va8);

//Task 9.
// Создайте объект на основе класса Valid и задайте ему имя и пароль длиной 7 символов. Запустите метод validate() и выведите в консоль свойство isValid.
let valPass = new Valid('osa', 123456)
let vuvod = valPass.validate();
console.log(vuvod)
//Task 10.
// Унаследуйтесь от класса Valid и создайте класс Valid2. Расширьте его свойствами emaiError, passwordError. По умолчанию, они равны пустой строке. Перезапишите метод validate(), помимо проверки пароля, он должен содержать еще проверку свойства email на пустоту. Если поле email пустое - то isValid - false. Также, в случае ошибки валидации в поле emailError пишется сообщение ‘email empty’, в поле passwordError - ‘min length 6’.


//Task 11.
// Создайте на основе класса Valid2 объект valid2 и задайте пустой емейл и длину пароля больше 7. Запустите метод validate(). Выведите объект в консоль.
let valid2 = new Valid2('', '2gf4rfweq')
let vObj = valid2.validate();
console.log(vObj);

//Task 12.
// Создайте на основе класса Valid2 объект valid3 и задайте не пустой емейл и длину пароля больше 7. Запустите метод validate(). Выведите объект в консоль.
let valid3 = new Valid2('ivanov@gmail.com', '2dsgf4rfweq')
let v2Obj = valid3.validate();
console.log(v2Obj);