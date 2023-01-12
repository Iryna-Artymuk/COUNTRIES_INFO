
 
 function fetchCountries(countryName){
    return fetch(`https://restcountries.com/v2/name/${countryName}?fields=name,capital,population,flags,languages`).then(resp =>{
      if(!resp.status){
        throw new Error( 'Country not found')
       
      }
      return resp.json()


      
    })
 }

 export { fetchCountries}