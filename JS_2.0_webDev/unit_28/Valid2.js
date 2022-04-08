class Valid2 extends Valid {
    constructor(email, password) {
        super(email, password);
        this.emailError = '';
        this.passwordError = '';
    }

    validate() {
        super.validate();
        if (!this.isValid) {
            this.passwordError = 'min length 6';
            return false;
        }
        if (this.email == '') {
            this.emailError = 'email empty';
            this.isValid = false;
            return false;
        }
        this.isValid = true;
        return this.isValid;
    }

}
