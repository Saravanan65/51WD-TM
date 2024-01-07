const arr = [1,3,4,5,6,67,6];
const sum = arr.reduce((acc,crtVal)=>{
    return acc + crtVal;
});
console.log("Sum of the Array is: ",sum);