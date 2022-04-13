class List {
    constructor(item) {
        this.item = item
    }

    render() {
        let ul = document.createElement('ul')
        for (let i = 0; i < this.item.length; i++) {
            let li = document.createElement('li')
            li.innerHTML = this.item[i]
            ul.appendChild(li)
        }
        document.body.appendChild(ul);
        return ul
    }
}

const arr = ['one', 'two', 'three', 'four']
const listItem = new List(arr);

listItem.render()