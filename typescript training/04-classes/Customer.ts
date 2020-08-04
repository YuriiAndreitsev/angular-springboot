class Customer {

   private firstName: string;
   private lastName:string;

   constructor(first: string, last: string){
       this.firstName = first;
       this.lastName = last;
   }

//    constructor(){
// }
} 

let myCustomer = new Customer("Rob", "Schneider");
// myCustomer.firstName = "Robby";
// myCustomer.lastName = "Schneider";

console.log(myCustomer);