"use strict";
//rest
// function addNumbers(...nums:number[]) {
//    var i; var sum:number = 0; 
//    for(i = 0;i<nums.length;i++) 
//    { sum = sum + nums[i]; 
//   } console.log("sum of the numbers",sum) } 
//   addNumbers(1,2,3) 
//   addNumbers(10,10,10,10,10)
//   //optional
//   function disp_details(id:number,name:string,mail_id?:string) 
//   { console.log("ID:", id); console.log("Name",name); 
//   if(mail_id!=undefined) console.log("Email Id",mail_id); 
// } 
// disp_details(123,"John"); 
// disp_details(111,"mary","mary@xyz.com");
function calculate_discount(price, rate) {
    if (rate === void 0) { rate = 0.50; }
    var discount = price * rate;
    console.log("Discount Amount: ", discount);
}
calculate_discount(1000);
calculate_discount(1000, 0.30);
//# sourceMappingURL=fun.js.map