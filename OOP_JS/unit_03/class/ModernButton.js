

class ModernButton extends Button {
    constructor(width, height, background, value, borderRadius) {
        super(width, height, background, value)
        this.borderRadius = borderRadius
    }

    render() {
        let b2 = super.render()
        b2.style.borderRadius = this.borderRadius + '%'

        return b2
    }
}

let btn2 = new ModernButton(50, 50, '#fff', 'click me', 50)

document.querySelector('body').after(btn2.render())