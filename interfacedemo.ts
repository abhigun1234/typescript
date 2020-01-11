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

let emp1 = new Employee();
emp1.hello()
emp1.bye()