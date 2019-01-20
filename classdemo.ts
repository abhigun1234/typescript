class emp
{//data member of a class 
 sal:number
 name:string


  constructor(_sal:number,_name:string)
  {

   this.sal=_sal

   this.name=_name
  }

  getSalary()
  {
   return this.sal
  }
  setSalary(sal:number)
  {
   this.sal=sal
  }



}

// object of the class
let e1 = new emp(4000,"raj")
e1.setSalary(5000)
var salary=e1.getSalary()
console.log(e1.sal)
console.log(e1.name)
console.log(salary)

