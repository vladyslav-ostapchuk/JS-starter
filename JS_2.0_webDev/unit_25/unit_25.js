function displayOut(className, data) {
    document.querySelector(className).innerHTML = data;
};

function strParam(data) {
    let result = Object.keys(data).map(function (key) {
        return key + '=' + data[key]
    }).join('&');
    return result;
};





// Task 1 ============================================
/* Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 1.
 Выведите в out-1 результат. Запускаться функция должна по нажатию b-1. */

const task1_Parameters = { auth: "7859d9d42a8834141d529577207c9596", action: 1 };

function t1() {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            displayOut('.out-1', this.responseText);
        }
    };

    xhttp.open("GET", "http://getpost.itgid.info/index2.php?" + strParam(task1_Parameters), true);
    xhttp.send();
}

document.querySelector('.b-1').addEventListener('click', t1);

// Task 2 ============================================
/* Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 2.
 Добавьте параметр name с вашим именем на латинице. Если все сделано верно, сервер пришлет строку hello ваше имя.
  Выведите в out-2 результат. Запускаться функция должна по нажатию b-2. */

const task2_Parameters = { auth: "7859d9d42a8834141d529577207c9596", action: 2, name: "Mircea" };

function t2() {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            displayOut('.out-2', this.responseText);
        }
    };

    xhttp.open("GET", "http://getpost.itgid.info/index2.php?" + strParam(task2_Parameters), true);
    xhttp.send();
}

document.querySelector('.b-2').addEventListener('click', t2);








// Task 3 ============================================
/*  Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 3. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет сумму чисел.  Выведите в out-3 результат. Запускаться функция должна по нажатию b-3. */

function t3() {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.querySelector('.out-3').innerHTML = this.responseText;
        }
    }
    xhttp.open("GET", "http://getpost.itgid.info/index2.php?auth=7859d9d42a8834141d529577207c9596&action=3&num1=1&num2=11");
    xhttp.send();
}

// ваше событие здесь!!!
document.querySelector('.b-3').addEventListener('click', t3);

// Task 4 ============================================
/*  Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 4. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет случайное число в заданном диапазоне. Не забывайте указывать параметр auth (ключ в чате).  Выведите в out-4 результат. Запускаться функция должна по нажатию b-4. */

function t4() {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.querySelector('.out-4').innerHTML = this.responseText;
        }
    }
    xhttp.open("GET", "http://getpost.itgid.info/index2.php?auth=7859d9d42a8834141d529577207c9596&action=4&num1=1&num2=11");
    xhttp.send();
}

// ваше событие здесь!!!
document.querySelector('.b-4').addEventListener('click', t4);
// Task 5 ============================================
/*  Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 5. Если все сделано верно, сервер вернет текущее время и дату. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-5 результат. Запускаться функция должна по нажатию b-5. */

function t5() {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.querySelector('.out-5').innerHTML = this.responseText;
        }
    }
    xhttp.open("GET", "http://getpost.itgid.info/index2.php?auth=7859d9d42a8834141d529577207c9596&action=5");
    xhttp.send();

}

// ваше событие здесь!!!
document.querySelector('.b-5').addEventListener('click', t5);
// Task 6 ============================================
/*  Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 6. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет большее число. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-6 результат. Запускаться функция должна по нажатию b-6. */

function t6() {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.querySelector('.out-6').innerHTML = this.responseText;
        }
    }
    xhttp.open("GET", "http://getpost.itgid.info/index2.php?auth=7859d9d42a8834141d529577207c9596&action=6&num1=1&num2=11");
    xhttp.send();
}

// ваше событие здесь!!!
document.querySelector('.b-6').addEventListener('click', t6);

// Task 7 ============================================
/*  Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 7. Если все сделано верно, сервер случайную ссылку на изображение. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-7 результат. Запускаться функция должна по нажатию b-7. */

function t7() {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.querySelector('.out-7').innerHTML = this.responseText;
        }
    }
    xhttp.open("GET", "http://getpost.itgid.info/index2.php?auth=7859d9d42a8834141d529577207c9596&action=7");
    xhttp.send();
}

// ваше событие здесь!!!
document.querySelector('.b-7').addEventListener('click', t7);
// Task 8 ============================================
/* Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 8. В качестве параметра по очереди укажите year равный году вашего рождения. Если все правильно сервер вернет ваш возраст. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-8 результат. Запускаться функция должна по нажатию b-8.*/

function t8() {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.querySelector('.out-8').innerHTML = this.responseText;
        }
    }
    xhttp.open("GET", "http://getpost.itgid.info/index2.php?auth=7859d9d42a8834141d529577207c9596&action=8&year=1997");
    xhttp.send();
}

// ваше событие здесь!!!
document.querySelector('.b-8').addEventListener('click', t8);

// Task 9 ============================================
/* Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 9. В качестве параметра по очереди укажите m = 1, d=1, y=1. Если все сделано верно, сервер возвратит дату или месяц или год. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-9 результат. Запускаться функция должна по нажатию b-9. */

function t9() {
    let http = new XMLHttpRequest();
    http.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.querySelector('.out-9').innerHTML = this.responseText;
        }
    }
    http.open("GET", "http://getpost.itgid.info/index2.php?auth=7859d9d42a8834141d529577207c9596&action=9&m=1&d=1&y=1");
    http.send();
}
// ваше событие здесь!!!
document.querySelector('.b-9').addEventListener('click', t9);












// Task 10 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 1. Если все сделано верно, сервер пришлет строку hello. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-10 результат. Запускаться функция должна по нажатию b-10.
*/

const url = 'http://getpost.itgid.info/index2.php?auth=7859d9d42a8834141d529577207c9596';
const http = new XMLHttpRequest();

function t10() {
    const out = document.querySelector('.out-10');
    http.onreadystatechange = function () {
        if (this.status === 200 && this.readyState === 4) {
            out.innerHTML = this.responseText;
        }
    }

    http.open('POST', url + '&action=1');
    http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    http.send()


}

document.querySelector('.b-10').addEventListener('click', t10);
// Task 11 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 2. Добавьте параметр name с вашим именем на латинице. Если все сделано верно, сервер пришлет строку hello ваше имя. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-11 результат. Запускаться функция должна по нажатию b-11. */

function t11() {
    const out = document.querySelector('.out-11');
    http.onreadystatechange = function () {
        if (this.status === 200 && this.readyState === 4) {
            out.innerHTML = this.responseText;
        }
    }

    http.open('POST', url + '&action=2&name=Anton');
    http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    http.send()
}

// ваше событие здесь!!!
document.querySelector('.b-11').addEventListener('click', t11);
// Task 12 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 3. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет сумму чисел. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-12 результат. Запускаться функция должна по нажатию b-12.*/

function t12() {
    const out = document.querySelector('.out-12');
    http.onreadystatechange = function () {
        if (this.status === 200 && this.readyState === 4) {
            out.innerHTML = this.responseText;
        }
    }

    http.open('POST', url + '&action=3&num1=55&num2=45');
    http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    http.send()
}

// ваше событие здесь!!!
document.querySelector('.b-12').addEventListener('click', t12);
// Task 13 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 4. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет случайное число в заданном диапазоне. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-13 результат. Запускаться функция должна по нажатию b-13.*/

function t13() {
    const out = document.querySelector('.out-13');
    http.onreadystatechange = function () {
        if (this.status === 200 && this.readyState === 4) {
            out.innerHTML = this.responseText;
        }
    }

    http.open('POST', url + '&action=4&num1=55&num2=45');
    http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    http.send()
}

// ваше событие здесь!!!
document.querySelector('.b-13').addEventListener('click', t13);
// Task 14 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 5. Если все сделано верно, сервер вернет текущее время и дату. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-14 результат. Запускаться функция должна по нажатию b-14.*/

function t14() {
    const out = document.querySelector('.out-14');
    http.onreadystatechange = function () {
        if (this.status === 200 && this.readyState === 4) {
            out.innerHTML = this.responseText;
        }
    }

    http.open('POST', url + '&action=5');
    http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    http.send()
}

// ваше событие здесь!!!
document.querySelector('.b-14').addEventListener('click', t14);
// Task 15============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 6. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет большее число. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-15 результат. Запускаться функция должна по нажатию b-15. */

function t15() {
    const out = document.querySelector('.out-15');
    http.onreadystatechange = function () {
        if (this.status === 200 && this.readyState === 4) {
            out.innerHTML = this.responseText;
        }
    }

    http.open('POST', url + '&action=6&num1=55&num2=45');
    http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    http.send()
}

// ваше событие здесь!!!
document.querySelector('.b-15').addEventListener('click', t15);
// Task 16 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 7. Если все сделано верно, сервер случайную ссылку на изображение. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-16 результат. Запускаться функция должна по нажатию b-16. */

function t16() {
    const out = document.querySelector('.out-16');
    http.onreadystatechange = function () {
        if (this.status === 200 && this.readyState === 4) {
            out.innerHTML = this.responseText;
        }
    }

    http.open('POST', url + '&action=7');
    http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    http.send()
}

// ваше событие здесь!!!
document.querySelector('.b-16').addEventListener('click', t16);
// Task 17 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 8. В качестве параметра по очереди укажите year равный году вашего рождения. Если все правильно сервер вернет ваш возраст. Не забывайте указывать параметр auth (ключ в чате).Выведите в out-17 результат. Запускаться функция должна по нажатию b-17. */

function t17() {
    const out = document.querySelector('.out-17');
    http.onreadystatechange = function () {
        if (this.status === 200 && this.readyState === 4) {
            out.innerHTML = this.responseText;
        }
    }

    http.open('POST', url + '&action=8&year=1997');
    http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    http.send()
}

// ваше событие здесь!!!
document.querySelector('.b-17').addEventListener('click', t17);









// Task 18 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 9. В качестве параметра по очереди укажите m = 1, d=1, y=1. Если все сделано верно, сервер возвратит дату или месяц или год. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-18 результат. Запускаться функция должна по нажатию b-18. */


const task18 = { auth: "7859d9d42a8834141d529577207c9596", action: 9, m: 1, d: 1, y: 1 };
const url2 = "http://getpost.itgid.info/index2.php?";
const http2 = new XMLHttpRequest();

function t18() {
    http2.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            displayOut('.out-18', this.responseText);
        }
    };

    http2.open('POST', url2 + strParam(task18), true);
    http2.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    http2.send()
}

// ваше событие здесь!!!
document.querySelector('.b-18').addEventListener('click', t18);


