function out2(className, data) {
    document.querySelector(className).innerHTML = data;
};

function param(data) {
    let result = Object.keys(data).map(function (key) {
        return key + '=' + data[key]
    }).join('&');
    return result;
};
let url = "http://getpost.itgid.info/index2.php?"
let auth = "7859d9d42a8834141d529577207c9596"

let task1 = { auth, action: 1 };
let task2 = { auth, action: 2, name: 'Kim' };
let task3 = { auth, action: 3, num1: 5, num2: 7 };
let task4 = { auth, action: 4, num1: 5, num2: 20 };
let task5 = { auth, action: 5 };
let task6 = { auth, action: 6, num1: 5, num2: 20 };
let task7 = { auth, action: 7 };
let task8 = { auth, action: 8, year: 2000 };

function btnClick(className, click, fun) {
    document.querySelector(className).addEventListener(click, fun);
}

// Task 1 ============================================
/* 
 <p>Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 1. </p>
<p>Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 2. </p>
<p>Два запроса объедините с помощью promiseAll. Результат выведите в out-1 результат. Запускаться функция
    должна по нажатию b-1.</p>
*/


function t1() {
    const a = new Promise((resolve, reject) => {
        fetch(url + param(task1))
            .then((response) => {
                resolve(response.text());
            });
    });


    const b = new Promise((resolve, reject) => {
        fetch(url + param(task2))
            .then((response) => {
                resolve(response.text());
            });
    });

    Promise.all([a, b]).then(data3 => {
        let out = '';
        for (let key in data3) {
            out += data3[key] + '<br>';
        }
        out2('.out-1', out)
    })

}

document.querySelector('.b-1').addEventListener('click', t1);




// Task 2 ============================================
/* 
 <p> Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 3. Добавьте
параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет сумму чисел.</p>
<p>Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 4.
Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет случайное число в
заданном
диапазоне.</p>
<p>Два запроса объедините с помощью promiseAll.
Выведите в out-2 результат. Запускаться функция должна по нажатию b-2. </p>

*/



function t2() {
    const a = new Promise((resolve, reject) => {
        fetch(url + param(task3))
            .then((response) => {
                resolve(response.text());
            });
    });


    const b = new Promise((resolve, reject) => {
        fetch(url + param(task4))
            .then((response) => {
                resolve(response.text());
            });
    });

    Promise.all([a, b]).then(data3 => {
        let out = '';
        for (let key in data3) {
            out += data3[key] + '<br>';
        }
        out2('.out-2', out)
    })

}

document.querySelector('.b-2').addEventListener('click', t2);


// Task 3 ============================================
/*  
<p> Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 5.
Если все сделано верно, сервер вернет текущее время и дату. Не забывайте указывать параметр auth (ключ в
чате). </p>
<p> Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 6.
Добавьте
параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет большее число.</p>
<p>Два
запроса объедините с помощью promiseAll.
Выведите в out-3 результат. Запускаться функция должна по нажатию b-3. </p>
                 */

function t3() {
    const a = new Promise((resolve, reject) => {
        fetch(url + param(task5))
            .then((response) => {
                resolve(response.text());
            });
    });


    const b = new Promise((resolve, reject) => {
        fetch(url + param(task6))
            .then((response) => {
                resolve(response.text());
            });
    });



    Promise.all([a, b]).then(data3 => {
        let out = '';
        for (let key in data3) {
            out += data3[key] + '<br>';
        }
        out2('.out-3', out)
    })
}

btnClick('.b-3', 'click', t3)


// Task 4 ============================================
/*  
 <p> Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 7.
Если все
сделано верно, сервер случайную ссылку на изображение. Не забывайте указывать параметр auth (ключ в
чате). </p>
<p>Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 8. В
качестве параметра по очереди укажите year равный году вашего рождения. Если все правильно сервер вернет
ваш возраст.</p>
<p>Выведите в out-4 результат. Запускаться функция должна по нажатию b-4.</p>

*/

function t4() {
    const a = new Promise((resolve, reject) => {
        fetch(url + param(task7))
            .then((response) => {
                resolve(response.text());
            });
    });


    const b = new Promise((resolve, reject) => {
        fetch(url + param(task8))
            .then((response) => {
                resolve(response.text());
            });
    });

    Promise.all([a, b]).then(data3 => {
        let out = '';
        for (let key in data3) {
            out += data3[key] + '<br>';
        }
        out2('.out-4', out)
    })
}

btnClick('.b-4', 'click', t4)

// Task 5 ============================================
/*  
 <p>Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 1.</p>
<p>Отправьте
POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 2. </p>
<p>Два
запроса объедините с помощью promiseAll. Результат выведите в out-5 результат. Запускаться функция
должна по нажатию b-5.</p>
*/



function t5() {
    const a = new Promise((resolve, reject) => {
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: param(task1),
        })
            .then((response) => {
                resolve(response.text());
            });
    });


    const b = new Promise((resolve, reject) => {
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: param(task2),
        })
            .then((response) => {
                resolve(response.text());
            });
    });



    Promise.all([a, b]).then(data3 => {
        let out = '';
        for (let key in data3) {
            out += data3[key] + '<br>';
        }
        out2('.out-5', out)
    })

}

btnClick('.b-5', 'click', t5)

// Task 6 ============================================
/* 
 <p> Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 3.
    Добавьте
    параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет сумму чисел. </p>
<p>Отправьте POST
    запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 4.
    Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет случайное число в
    заданном
    диапазоне.</p>
<p> Два запроса объедините с помощью promiseAll.
    Выведите в
    out-6 результат. Запускаться функция должна по нажатию b-6. </p>
*/

function t6() {
    const a = new Promise((resolve, reject) => {
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: param(task3),
        })
            .then((response) => {
                resolve(response.text());
            });
    });


    const b = new Promise((resolve, reject) => {
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: param(task4),
        })
            .then((response) => {
                resolve(response.text());
            });
    });

    Promise.all([a, b]).then(data3 => {
        let out = '';
        for (let key in data3) {
            out += data3[key] + '<br>';
        }
        out2('.out-6', out)
    })

}

btnClick('.b-6', 'click', t6)


// Task 7 ============================================
/*  
 <p> Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 5.
Если все сделано верно, сервер вернет текущее время и дату. Не забывайте указывать параметр auth (ключ в
чате).</p>
<p>Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 6.
Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет большее число.</p>
<p>Два запроса объедините с помощью promiseAll.
Выведите в out-7 результат. Запускаться функция должна по нажатию b-7. </p>

*/

function t7() {
    const a = new Promise((resolve, reject) => {
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: param(task5),
        })
            .then((response) => {
                resolve(response.text());
            });
    });


    const b = new Promise((resolve, reject) => {
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: param(task6),
        })
            .then((response) => {
                resolve(response.text());
            });
    });

    Promise.all([a, b]).then(data3 => {
        let out = '';
        for (let key in data3) {
            out += data3[key] + '<br>';
        }
        out2('.out-7', out)
    })

}

btnClick('.b-7', 'click', t7)

// Task 8 ============================================
/* 
<p> Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 7.
Если все сделано верно, сервер случайную ссылку на изображение. Не забывайте указывать параметр auth
(ключ в
чате).</p>
<p>Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 8. В
качестве параметра по очереди укажите year равный году вашего рождения. Если все правильно сервер вернет
ваш возраст.</p>
<p>Два запроса объедините с помощью promiseAll. Выведите в out-8 результат. Запускаться функция должна по
нажатию b-8.</p>
*/


function t8() {
    const a = new Promise((resolve, reject) => {
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: param(task7),
        })
            .then((response) => {
                resolve(response.text());
            });
    });


    const b = new Promise((resolve, reject) => {
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: param(task8),
        })
            .then((response) => {
                resolve(response.text());
            });
    });

    Promise.all([a, b]).then(data3 => {
        let out = '';
        for (let key in data3) {
            out += data3[key] + '<br>';
        }
        out2('.out-8', out)
    })

}

btnClick('.b-8', 'click', t8)


