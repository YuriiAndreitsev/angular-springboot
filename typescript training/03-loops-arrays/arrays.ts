let myArray:number[] = [5, 6.6, 1, 4 ,3,7,9,21.9,4.6];

let total: number = 0;

for (let index = 0; index < myArray.length; index++) {
    console.log(myArray[index]);
    total += myArray[index];
}

let average: number = total / myArray.length;

console.log (average + " - is average of an Array!!!");
