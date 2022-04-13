class List {
    constructor(arr) {
        this.item = arr;
    }

    render() {
        let ul = document.createElement('ul');

        this.item.forEach(element => {
            let li = document.createElement('li');
            li.textContent = element;
            ul.append(li);
        });

        return ul;
    }
}

const body = document.querySelector('body');
const arr = ['one', 'two', 'three', 'four'];
const cssList = ['text-center', 'bold', 'text-red'];

let myList = new List(arr);
body.prepend(myList.render());






class List2 extends List {
    constructor(arr, cssClass) {
        super(arr);
        this.cssClass = cssClass;
    }

    render() {
        let ul = super.render();
        ul.classList.add(this.cssClass);

        return ul;
    }
}

const myList2 = new List2(arr, cssList[1]);
body.append(myList2.render());



class List3 extends List {
    constructor(arr, cssClass) {
        super(arr);
        this.cssClass = cssClass;
    }

    render() {
        this.cssClass.forEach(element => {
            let ul = super.render();
            ul.classList.add(element);
            body.append(ul);
        });
    }
}

const myList3 = new List3(arr, cssList);
myList3.render();