class AnotherCustomer {
    private _firstName: string;
    private _lastName: string;
    
    get firstName(): string{
        return this._firstName;
    }

    set firstName(first:string){
        this._firstName = first;
    }

    get lastName(): string{
        return this._lastName;
    }

    set lastName(last:string){
        this._lastName = last;
    }
}

let anotherCustomer = new AnotherCustomer();

anotherCustomer.firstName = "John";
anotherCustomer.lastName = "Connor";

console.log(` ${anotherCustomer.firstName} ${anotherCustomer.lastName}`);
console.log("Customer is "+ anotherCustomer.firstName+ " "+ anotherCustomer.lastName);