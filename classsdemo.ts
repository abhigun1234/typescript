class pen
{    color:string
    name:string;
    constructor(color:string)
    {   this.color=color
        alert("constructor")
    }
    write()
    {
     alert("writting")
    }
    setPenName(_name:string)
    {

    this.name=_name
    }
    getName()
    {
        return this.name }
}
let p1=new pen('red')
p1.write()
p1.setPenName('camel')
var name1=p1.getName()
alert(name1)



