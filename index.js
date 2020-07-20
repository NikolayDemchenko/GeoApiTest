const axios = require('axios')
const translit = require('./rutranslit.json')

const routes=["13.388860,52.517037","13.397634,52.529407","13.428555,52.523219"]
const getRoutes=(routes)=> routes.join(';')

// axios.get(`http://router.project-osrm.org/route/v1/driving/${getRoutes(routes)}?overview=false`)
//   .then(response => console.log("response! :", response.data.routes[0]))



function transliterate(word){
  return word.split('').map( (char) =>{ 
    return char==="ь"?'':translit[char] || char; 
  }).join("");
}
const adress="Подгорное+Калачеевский+район+Воронежская+область+Россия"

const translitAdress=transliterate(adress)

console.log(adress,' :>> ', translitAdress);

axios.get(`https://nominatim.openstreetmap.org/search?q=${adress}&format=geojson`)
  .then(response => console.log("response! :", response.data.features[0].geometry.coordinates))


 