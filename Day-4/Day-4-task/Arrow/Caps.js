let strgArrs = ["vanakkam nanba", "hello friend"];
let titelCap = strgArrs.map((strgArr) => {
    return strgArr
        .toLowerCase()
        .split("")
        .map((word) => {
            return word.charAt[0].toLowerCase() + word.slice(1);
        })
        .join(" ")
});
console.log(titelCap);