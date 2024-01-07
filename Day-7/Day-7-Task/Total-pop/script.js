let request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();
request.onload = function () {
    let result = JSON.parse(request.response);
      let res = result.reduce((acc, ele) => acc + ele.population, 0 );
      console.log(res);

}