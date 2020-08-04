export class CustomerConstructor {

   constructor(private _firstName: string,  private _lastName: string){
   }

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

