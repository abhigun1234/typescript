class Student{

  name:string=''
  address:string=''
  email:string=''

  constructor(_name:string,_address:string)
  {
      this.name=_name;
      this.address=_address
  }
  //https://github.com/abhigun1234/typescript.git
  getName()
  {

    return this.name
  }
  getAddress()
  {

    return this.address
  }
  setName(_name:string)
  {
    this.name=_name
  }
  setAddress( _address:string)
  {
   this.address=_address
  }
}

//taking data from user 
// create object
let st1=new Student("Laxmi","pimple")
// st1.address='hinjewadi'
// st1.email='abc@gmail.com'
// st1.name='abhi'
// st1.setName("abhishek")
// st1.setAddress("pimple saudagar")
let data=st1.getName()
console.log("data",data)
let data1=st1.getAddress()
console.log("data",data1)
