
// Task 1 ============================================
/* Создайте функцию t1 которая записывает  в LS  ключ 5 со значением 11. Проверьте что происходит при повторном вызове функции. Запускается ф-я по кнопкуе b-1. */

function t1() {
    localStorage.setItem('5', 11)
}

// ваше событие здесь!!!
document.querySelector('.b-1').onclick = t1
// Task 2 ============================================
/* Создайте функцию t2 которая записывает  в LS  массив a2 = [7,6,5]. Ключ a2. Проверьте что происходит при повторном вызове функции. Запускается ф-я по кнопкуе b-2. */

function t2() {
    a2 = [7, 6, 5]
    localStorage.setItem('a2', JSON.stringify(a2))
}

// ваше событие здесь!!!
document.querySelector('.b-2').onclick = t2


// Task 3 ============================================
/*  При нажатии кнопки t3 выведите из LS сохранненный массив a2. Выведите в out-3 в формате ключ пробел значение перенос строки.  */

function t3() {
    let o = document.querySelector('.out-3')
    let a3 = JSON.parse(localStorage.getItem('a2'));

    let out = '';
    for (let i = 0; i < a3.length; i++) {
        out += i + ' ' + a3[i] + '<br>';
    }
    o.innerHTML = out
}
document.querySelector('.b-3').onclick = t3;

// Task 4 ============================================
/*  Создайте функцию t4 которая записывает  в LS  массив a4 = {hello: world, hi:mahai}. Ключ a4. Проверьте что происходит при повторном вызове функции. Запускается ф-я по кнопкуе b-4.*/
let a4 = {
    hello: 'world',
    hi: 'mahai'
}
function t4() {
    localStorage.setItem('a4', JSON.stringify(a4));
}

document.querySelector('.b-4').addEventListener('click', t4);

// Task 5 ============================================
/*   При нажатии кнопки b-5 выведите из LS сохранненный массив a4. Выведите в out-5 в формате ключ пробел значение перенос строки. */

function t5() {
    let out = '';
    let a = [];
    a4 = localStorage.getItem('a4');
    a4 = JSON.parse(a4);
    console.log(a4);

    for (let key in a4) {
        out += key + ' ' + a4[key] + '<br>';
    }
    console.log(a4);
    document.querySelector('.out-5').innerHTML = out;
}
document.querySelector('.b-5').onclick = t5;

// ваше событие здесь!!!

// Task 6 ============================================
/*  Создайте функцию t6 которая очищает весь LS. Запуск по кнопке b-6*/

function t6() {
    localStorage.clear();
}

// ваше событие здесь!!!
document.querySelector('.b-6').onclick = t6;


// Task 7 ============================================
/*  Создайте input i-7 куда пользователь может вводить числа и строки. Создайте массив a7. Когда пользователь нажимает кнопку b-7 число должно добавляться в массив. Массив должен сохраняться в LS с ключем a7.*/

let a7 = [];
function t7() {
    let input = document.querySelector('.i-7').value;

    a7.push(input);
    document.querySelector('.i-7').value = '';
    localStorage.setItem('a7', JSON.stringify(a7));
}

document.querySelector('.b-7').onclick = t7;
// Task 8 ============================================
/*   Создайте функцию t8 при запуске которой из a7 удаляется последний элемент. После чего массив сохраняется в LS с ключем a7. Использовать массив из предыдущего задания. */

function t8() {
    localStorage.getItem('a7', JSON.stringify(a7));
    a7.pop();
    localStorage.setItem('a7', JSON.stringify(a7));
}

// ваше событие здесь!!!
document.querySelector('.b-8').onclick = t8;


