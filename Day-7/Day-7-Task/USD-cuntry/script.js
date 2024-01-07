let request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();
request.onload = function () {
    let result = JSON.parse(request.response);
    let res = result.forEach(element => {
        if(!!element.currencies && !!element.currencies.USD && element.currencies.USD) {
            console.log(element.name.common);
        }
        
    });
    
}