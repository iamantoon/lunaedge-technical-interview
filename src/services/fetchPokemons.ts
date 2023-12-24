import axios from 'axios';

export async function fetchPokemons(pokemon?: string) {
    let url = 'https://pokeapi.co/api/v2/pokemon';
  
    if (pokemon) {
      url += `/${pokemon}`;
    }

    const response = await axios.get(url);
  
    if (pokemon){
        return response.data;
    } else {
        return response.data.results;
    }
}