let request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();
request.onload = function () {
    let result = JSON.parse(request.response);
    let res = result.forEach(ele => {
        console.log(" ");
        console.log(ele.name.common);
        console.log(ele.capital[0]);
        console.log(ele.flags.png);
        
    })
}