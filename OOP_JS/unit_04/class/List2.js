
class List2 extends List {
    constructor(item, cssClass) {
        super(item)
        this.cssClass = cssClass

    }

    render() {
        let ul = super.render()
        ul.classList.add(this.cssClass)
        return ul
    }
}

const arr2 = ['five', 'six', 'seven', 'eight']
const cssList = ['text-center', 'bold', 'text-red'];
let list2 = new List2(arr2, cssList[2])
list2.render()










