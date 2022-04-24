function n(num1, num2){
    if (num1 > num2) {
        console.log( "число 1 больше");
    }
    else if (num1 < num2){
        console.log("чило 2 больше");
    }
    else {
        console.log("числа однинаковые")

    }
}
n(3,3)


function twoMass(array1, array2){
    if (array1.length > array2.length){
        console.log("array 1 больше чем array 2")
    }
    else if (array1.length < array2.length) {
        console.log("array 2 больше чем array 1")
    }
    else {
        console.log("они равны")
    }
}

twoMass([1,2,3,4,5],[1,2,3,4,5,6,7,8,])


function countChar (text) {
    return text.length

}

console.log(countChar('jk'))