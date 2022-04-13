class Button {
    constructor(width, height, background, value) {
        this.width = width;
        this.height = height;
        this.background = background
        this.value = value
    }

    render() {
        const b = document.createElement('button')
        b.style.width = this.width + 'px'
        b.style.height = this.height + 'px'
        b.style.background = this.background
        b.innerHTML = this.value
        return b
    }
}

let btn = new Button(60, 20, 'blue', 'knopka')

document.querySelector('body').append(btn.render())