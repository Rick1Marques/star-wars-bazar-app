// // copy json from api list

// const apiUrls = [
//   "https://swapi.dev/api/starships/?page=1&format=json",
//   "https://swapi.dev/api/starships/?page=2&format=json",
//   "https://swapi.dev/api/starships/?page=3&format=json",
//   "https://swapi.dev/api/starships/?page=4&format=json",
// ];

// const fetcher = (url) =>
//   fetch(url).then((r) => {
//     return r.json();
//   });

// function getStarships() {
//   return Promise.all(apiUrls.map(fetcher));
// }
// export default async function handler(request, response) {
//   const starships = await getStarships(apiUrls);
//   const reduced = starships.reduce(
//     (memo, item) => [...memo, ...item.results],
//     []
//   );

//   response.json(reduced);
// }
