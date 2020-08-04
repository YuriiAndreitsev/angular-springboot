var myArray = [5, 6.6, 1, 4, 3, 7, 9, 21.9, 4.6];
var total = 0;
for (var index = 0; index < myArray.length; index++) {
    console.log(myArray[index]);
    total += myArray[index];
}
var average = total / myArray.length;
console.log(average + " - is average of an Array!!!");
