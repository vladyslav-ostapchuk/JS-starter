console.log('--------------------')

class Test4 extends Test2 {
    set testProp(a) {
        this._testProp = a * 10;
    }



    set testValue(test) {
        this._test = test
    }
    get testValue() {
        return this._test
    }


    validateValue() {
        if (this.testValue > 100) {
            console.log(this.testValue)
        } else {
            console.log(false)
        }
    }
}

const test4 = new Test4()

test4.testProp = 2
console.log(test4._testProp)

test4.testValue = 200
test4.validateValue();