const Dadata = require("dadata-suggestions");
const API_KEY = "fbdf4e5e496dfa570a75031f667b1774a93cd302";
const dadata = new Dadata(API_KEY);
dadata
  .address({ query: "Невский", count: 5 })
  .then((data) => {
    data.suggestions.forEach((element) => {
      console.log(element.value);
    });
  })
  .catch(console.error);
