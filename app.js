const { NominatimJS } = require("nominatim-js");

async function search(q) {
  return await NominatimJS.search({ q });
}

(async () => {
  //   console.log(
  //     await search("Воробьёвка Воробьёвский район Воронежская область Россия")
  //   );
  const result = await search(
    "Россия"
  );
  console.log(result[0]);
})();
// 235730789