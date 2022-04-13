class List3 extends List {
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




const arr3 = ['nine', 'ten', 'eleven', 'twenty']
const style = ['text-center', 'bold', 'text-red'];


const list3 = new List3(arr3, style[1])
list3.render()







