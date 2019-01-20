"use strict";
//this is called as a formal argument
function getName1(name) {
    if (name == "abhishek") {
        greet = "hello abhishek";
    }
    else {
        greet = " hi there";
    }
    console.log(greet);
    var greet;
    alert(greet);
}
//actual argument
getName1("abhishek");
//# sourceMappingURL=hoisting.js.map