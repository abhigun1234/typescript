class Product
{

    id:string='1';
    name:string='addidas';
    price:string='2000';
    description:string='shoes';
    discount:string='20%';
//constructor

  constructor()
  {
    // this.id=id;
    // this.name=_name;
    // this.price=price;
    // this.description=description;
    // this.discount=discount;

  }
//getter setter
public hello()
{
    console.log("hello")
}


}

let product1=new Product()
console.log(product1.id)

//console.log(product1.name)
// product1.name='bnhh'
class Customer extends Product
{
   
    id:string='2'
    name:string='ravi'

   getName()
   {
    console.log("name")
    return this.name
   }
}
let c2=new Customer()
c2.getName()
class NewCustomer extends Customer
{



    
}