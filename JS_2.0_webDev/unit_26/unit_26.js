function out(className, data) {
    document.querySelector(className).innerHTML = data;
};
function param(data) {
    let result = Object.keys(data).map(function (key) {
        return key + '=' + data[key]
    }).join('&');
    return result;
};

// Task 1 ============================================
/* Отправьте GET запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 1. Выведите в out-1 результат. Запускаться функция должна по нажатию b-1. */
// const url = 'http://getpost.itgid.info/index2.php?auth=7859d9d42a8834141d529577207c9596';
let task1 = { auth: "7859d9d42a8834141d529577207c9596", action: 1 };
let url = "http://getpost.itgid.info/index2.php?"
function t1() {
    // 1. Создаём метод с параметром url адреса, куда отправляем запрос.
    fetch(url + param(task1))
        // 2. Возвращаем обработчик результата ответа(Promise).
        // Возвращаемм Promise ч-з метод then.
        .then(response => {
            // 3. Возвращаем ответ запроса в виде текста.
            return response.text();
        })
        // 4. Получаем обработанный response(встроенный объект)
        .then(response => {
            // 5. Выводим объект response с результатом запроса на страницу.
            out('.out-1', response);
        })
}

document.querySelector('.b-1').addEventListener('click', t1);
// Task 2 ============================================
/* Отправьте GET запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 2. Добавьте параметр name с вашим именем на латинице. Если все сделано верно, сервер пришлет строку hello ваше имя. Выведите в out-2 результат. Запускаться функция должна по нажатию b-2. */

let task2 = { auth: "7859d9d42a8834141d529577207c9596", action: 2, name: 'VLAD' };
function t2() {
    fetch(url + param(task2))
        .then(response => {
            return response.text();
        })
        .then(response => {
            out('.out-2', response);
        })
}

document.querySelector('.b-2').addEventListener('click', t2);

// Task 3 ============================================
/*  Отправьте GET запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 3. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет сумму чисел.  Выведите в out-3 результат. Запускаться функция должна по нажатию b-3. */
let task3 = { auth: "7859d9d42a8834141d529577207c9596", action: 3, num1: 5, num2: 7 };
function t3() {
    fetch(url + param(task3))
        .then(response => {
            return response.text();
        })
        .then(response => {
            out('.out-3', response);
        })
}

document.querySelector('.b-3').addEventListener('click', t3);


// Task 4 ============================================
/*  Отправьте GET запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 4. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет случайное число в заданном диапазоне. Не забывайте указывать параметр auth (ключ в чате).  Выведите в out-4 результат. Запускаться функция должна по нажатию b-4. */
let task4 = { auth: "7859d9d42a8834141d529577207c9596", action: 4, num1: 5, num2: 20 };
function t4() {
    fetch(url + param(task4))
        .then(response => {
            return response.text();
        })
        .then(response => {
            out('.out-4', response);
        })
}

document.querySelector('.b-4').addEventListener('click', t4);

// Task 5 ============================================
/*  Отправьте GET запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 5. Если все сделано верно, сервер вернет текущее время и дату. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-5 результат. Запускаться функция должна по нажатию b-5. */

let task5 = { auth: "7859d9d42a8834141d529577207c9596", action: 5 };
function t5() {
    fetch(url + param(task5))
        .then(response => {
            return response.text();
        })
        .then(response => {
            out('.out-5', response);
        })
}

document.querySelector('.b-5').addEventListener('click', t5);

// Task 6 ============================================
/*  Отправьте GET запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 6. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет большее число. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-6 результат. Запускаться функция должна по нажатию b-6. */

let task6 = { auth: "7859d9d42a8834141d529577207c9596", action: 6, num1: 5, num2: 20 };
function t6() {
    fetch(url + param(task6))
        .then(response => {
            return response.text();
        })
        .then(response => {
            out('.out-6', response);
        })
}

document.querySelector('.b-6').addEventListener('click', t6);


// Task 7 ============================================
/*  Отправьте GET запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 7. Если все сделано верно, сервер случайную ссылку на изображение. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-7 результат. Запускаться функция должна по нажатию b-7. */

let task7 = { auth: "7859d9d42a8834141d529577207c9596", action: 7 };
function t7() {
    fetch(url + param(task7))
        .then(response => {
            return response.text();
        })
        .then(response => {
            out('.out-7', response);
        })
}

document.querySelector('.b-7').addEventListener('click', t7);

// Task 8 ============================================
/* Отправьте GET запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 8. В качестве параметра по очереди укажите year равный году вашего рождения. Если все правильно сервер вернет ваш возраст. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-8 результат. Запускаться функция должна по нажатию b-8.*/

let task8 = { auth: "7859d9d42a8834141d529577207c9596", action: 8, year: 1900 };
function t8() {
    fetch(url + param(task8))
        .then(response => {
            return response.text();
        })
        .then(response => {
            out('.out-8', response);
        })
}

document.querySelector('.b-8').addEventListener('click', t8);


// Task 9 ============================================
/* Отправьте GET запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 9. В качестве параметра по очереди укажите m = 1, d=1, y=1. Если все сделано верно, сервер возвратит дату или месяц или год. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-9 результат. Запускаться функция должна по нажатию b-9. */

let task9 = { auth: "7859d9d42a8834141d529577207c9596", action: 9, m: 1, d: 1, y: 1 };
function t9() {
    fetch(url + param(task9))
        .then(response => {
            return response.text();
        })
        .then(response => {
            out('.out-9', response);
        })
}

document.querySelector('.b-9').addEventListener('click', t9);


// Task 10 ============================================
/*  Отправьте POST запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 1. Если все сделано верно, сервер пришлет строку hello. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-10 результат. Запускаться функция должна по нажатию b-10.
 
*/
let task10 = { auth: "7859d9d42a8834141d529577207c9596", action: 1 };
function t10() {
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: param(task10),
    })
        .then(data => data.text())
        .then(data => {
            document.querySelector('.out-10').innerHTML = data;
        })
}

// ваше событие здесь!!!
document.querySelector('.b-10').addEventListener('click', t10);
// Task 11 ============================================
/*  Отправьте POST запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 2. Добавьте параметр name с вашим именем на латинице. Если все сделано верно, сервер пришлет строку hello ваше имя. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-11 результат. Запускаться функция должна по нажатию b-11. */

let task11 = { auth: "7859d9d42a8834141d529577207c9596", action: 2, name: 'Artur' };
function t11() {
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: param(task11),
    })
        .then(data => data.text())
        .then(data => {
            document.querySelector('.out-11').innerHTML = data;
        })
}

// ваше событие здесь!!!
document.querySelector('.b-11').addEventListener('click', t11);

// ваше событие здесь!!!

// Task 12 ============================================
/*  Отправьте POST запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 3. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет сумму чисел. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-12 результат. Запускаться функция должна по нажатию b-12.*/

let task12 = { auth: "7859d9d42a8834141d529577207c9596", action: 3, num1: 10, num2: 10 }
function t12() {
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: param(task12),
    })
        .then(data => data.text())
        .then(data => {
            document.querySelector('.out-12').innerHTML = data;
        })
}

// ваше событие здесь!!!
document.querySelector('.b-12').addEventListener('click', t12);

// ваше событие здесь!!!

// Task 13 ============================================
/*  Отправьте POST запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 4. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет случайное число в заданном диапазоне. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-13 результат. Запускаться функция должна по нажатию b-13.*/

let task13 = { auth: "7859d9d42a8834141d529577207c9596", action: 4, num1: 10, num2: 33 }
function t13() {
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: param(task13),
    })
        .then(data => data.text())
        .then(data => {
            document.querySelector('.out-13').innerHTML = data;
        })
}

// ваше событие здесь!!!
document.querySelector('.b-13').addEventListener('click', t13);

// ваше событие здесь!!!

// Task 14 ============================================
/*  Отправьте POST запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 5. Если все сделано верно, сервер вернет текущее время и дату. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-14 результат. Запускаться функция должна по нажатию b-14.*/

let task14 = { auth: "7859d9d42a8834141d529577207c9596", action: 5 }
function t14() {
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: param(task14),
    })
        .then(data => data.text())
        .then(data => {
            document.querySelector('.out-14').innerHTML = data;
        })
}

// ваше событие здесь!!!
document.querySelector('.b-14').addEventListener('click', t14);

// ваше событие здесь!!!

// Task 15============================================
/*  Отправьте POST запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 6. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет большее число. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-15 результат. Запускаться функция должна по нажатию b-15. */

let task15 = { auth: "7859d9d42a8834141d529577207c9596", action: 6, num1: 10, num2: 33 }
function t15() {
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: param(task15),
    })
        .then(data => data.text())
        .then(data => {
            document.querySelector('.out-15').innerHTML = data;
        })
}

// ваше событие здесь!!!
document.querySelector('.b-15').addEventListener('click', t15);

// ваше событие здесь!!!

// Task 16 ============================================
/*  Отправьте POST запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 7. Если все сделано верно, сервер случайную ссылку на изображение. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-16 результат. Запускаться функция должна по нажатию b-16. */

let task16 = { auth: "7859d9d42a8834141d529577207c9596", action: 7 }
function t16() {
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: param(task16),
    })
        .then(data => data.text())
        .then(data => {
            document.querySelector('.out-16').innerHTML = data;
        })
}

// ваше событие здесь!!!
document.querySelector('.b-16').addEventListener('click', t16);

// Task 17 ============================================
/*  Отправьте POST запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 8. В качестве параметра по очереди укажите year равный году вашего рождения. Если все правильно сервер вернет ваш возраст. Не забывайте указывать параметр auth (ключ в чате).Выведите в out-17 результат. Запускаться функция должна по нажатию b-17. */

let task17 = { auth: "7859d9d42a8834141d529577207c9596", action: 8, year: 2000 }
function t17() {
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: param(task17),
    })
        .then(data => data.text())
        .then(data => {
            document.querySelector('.out-17').innerHTML = data;
        })
}

// ваше событие здесь!!!
document.querySelector('.b-17').addEventListener('click', t17);

// Task 18 ============================================
/*  Отправьте POST запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 9. В качестве параметра по очереди укажите m = 1, d=1, y=1. Если все сделано верно, сервер возвратит дату или месяц или год. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-18 результат. Запускаться функция должна по нажатию b-18. */

let task18 = { auth: "7859d9d42a8834141d529577207c9596", action: 9, m: 1, d: 1, y: 1 }
function t18() {
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: param(task18),
    })
        .then(data => data.text())
        .then(data => {
            document.querySelector('.out-18').innerHTML = data;
        })
}

// ваше событие здесь!!!
document.querySelector('.b-18').addEventListener('click', t18);

