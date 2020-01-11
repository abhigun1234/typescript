class Trevler
{
    // attribute
    age:string;
    name:string;
    //constructor
    constructor(__name:string,__age:string)
    {
     this.age=__age
     this.name=__name
    }
    //getter
    getName()
    {
    
    return this.name

    }

    setName(_name:string)
    {

    this.name=_name
    }



}

//obj of the class

let t1=new Trevler("ravi",'35')
console.log("trevler name",t1.name)
console.log('treveler age',t1.age)
t1.setName("abhishek")
var name1=t1.getName()
console.log("treveler name is",name1)