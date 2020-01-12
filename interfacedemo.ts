interface IEmployee {
   
    hello:()=>void;
    bye:()=>void;
}

class Employee implements IEmployee { 
    

    constructor() { 
                
    }

    hello(){ 
        console.log("hello")
    }

    bye(){ 
        console.log("bye")
    }
}
class cust implements IEmployee
{

    hello(){ 
        console.log("customer hello")
    }

    bye(){ 
        console.log("customer bye")
    }
}

let emp1 = new Employee();
emp1.hello()
emp1.bye()
let cust1 =new cust()
cust1.bye()