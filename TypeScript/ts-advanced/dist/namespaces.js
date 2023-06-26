"use strict";
var Form;
(function (Form) {
    class MyForm {
        constructor(email) {
            this.email = email;
            this.type = 'inline';
            this.state = 'active';
        }
        getInfo() {
            return {
                type: this.type,
                state: this.state
            };
        }
    }
    Form.myform = new MyForm('v@mail.com');
})(Form || (Form = {}));
console.log(Form.myform);
//# sourceMappingURL=namespaces.js.map