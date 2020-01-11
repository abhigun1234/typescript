class Person
{// attributes
    name:string;
    email:string;
constructor(_name:string,_email:string)
{
   this.name=_name;
   this.email=_email;

}




//  }
hello()
{
    console.log("hello",this.name)
    console.log("hello",this.email)
}


}
let p =new Person("abhishek","email@abc")

p.hello()
