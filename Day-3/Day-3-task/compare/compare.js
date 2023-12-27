

let obj1 = {name:"Person1",age:5}
let obj2 = {age:5, name:"Person1"}

  function compareJSON() {
  console.log(Object.keys(obj1).length);
  console.log(Object.keys(obj2).length);
  if(Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }
   for(let key in obj1) {
    if(!obj2.hasOwnProperty(key) || obj1[key] !== obj2[key]) {
      return false;
     
    }

  }
  
  return true;
}
const result = compareJSON();
console.log(result);



