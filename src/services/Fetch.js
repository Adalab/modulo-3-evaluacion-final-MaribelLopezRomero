const getDataFromApi = () =>
  fetch('https://rickandmortyapi.com/api/character/').then((response) =>
    response.json()
  );

export default getDataFromApi;

// const getDataFromApi = () => {
//     return fetch('https://rickandmortyapi.com/api/character/')
//       .then(response => response.json())
//       .then(data => {
//         return data.results;
//       });
//   };

//   export default {
//     getDataFromApi: getDataFromApi
//   };