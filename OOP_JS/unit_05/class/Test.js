class Test {
    set testProp(a) {
        this._testProp = a;
    }
    get testProp() {
        return this._testProp;
    }
}

let con = new Test()
console.log(con.testProp = 'Vlad')
console.log(con)