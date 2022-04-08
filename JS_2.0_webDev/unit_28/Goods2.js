class Goods2 extends Goods {
    constructor(name, amount, image, count, sale) {
        super(name, amount, image, count);
        this.sale = sale;
    }
    draw() {
        const div = super.draw()
        if (this.sale === true) {
            let s = document.createElement('p');
            s.textContent = 'sale';
            div.append('sale');
        }
        return div;
    }
}






