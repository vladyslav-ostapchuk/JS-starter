console.log('--------------------')

class Test2 {
    set testProp(a) {
        if (a == '') {
            return false;
        }
        this._testProp = a;
        return a;
    }

    setTestProp(a) {
        if (a == '') {
            return false;
        }
        this._testProp = a;
        return a;
    }

    get testProp() {
        return this._testProp;
    }
}

const test2 = new Test2();

console.log(test2.setTestProp('bbb'));
console.log(test2);