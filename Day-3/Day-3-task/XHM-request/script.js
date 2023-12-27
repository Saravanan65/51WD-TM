let xhr = new XMLHttpRequest();
let method = "GET";
let url = "https://restcountries.com/v3.1/all";

xhr.open(method, url);
xhr.send();

xhr.onload = function () {

  if (xhr.status === 200) {

    let details = JSON.parse(xhr.responseText);
     console.log(details)
    for (let i = 0; i < details.length; i++) {

      console.log("");
      console.log("Flag", "==>", details[i].flags.png)
      console.log("Name", "==>", details[i].name.common)
      console.log("Region", "==>", details[i].region)
      console.log("Sub region", "==>", details[i].subregion)
      console.log("Total population", "==>", details[i].population)
    }
  } else {

    console.log("Request failed", xhr.status);
  }
}
