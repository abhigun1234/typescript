class Emp
{

    id:string;

    constructor(_id:string)
    {  this.id=_id
   
    }

    getId()
    {

        return this.id;
    }
}
 let empid:any=''
 empid=prompt("enter id")

let e2=new Emp(empid)
console.log(e2.getId())