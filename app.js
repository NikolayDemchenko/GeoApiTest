const { NominatimJS } = require("nominatim-js");

async function search(q) {
  return await NominatimJS.search({ q });
}

(async () => {
  //   console.log(
  //     await search("Воробьёвка Воробьёвский район Воронежская область Россия")
  //   );
  const result = await search(
    "Подгорное Калачеевский район Воронежская область Россия"
  );
  console.log(result[0].lat,',',result[0].lon);
})();
