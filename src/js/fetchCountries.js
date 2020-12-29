const BASE_URL = 'https://restcountries.eu/rest/v2/name';

export default function fetchCountries(searchQuery){
if (searchQuery) {
  return fetch(
    `${BASE_URL}/${searchQuery}`,
  )
    .then(response => {
      if (response.ok) return response.json()
      throw new Error(`Error feching data`);
    })
  
    .catch(error => {
      console.error(`Error:`, error);
    });
  }
  }


// export default function fetchCountries(searchQuery) {
//   return fetch(`${BASE_URL}/${searchQuery}`).then(response => {
//     if (response.status === 404) return;
//     return response.json();
//   });
// }