//import axios from 'axios';

//Design Pattern Adapter
//Open and Close Principle
//Open to extend, close to modification

export class HttpClient {

  // async get(url: string) {
  //   const { data, status } = await axios.get(url);

  //   return { data, status }

  // }

  async get(url: string) {

    const response = await fetch(url);
    const data = await response.json();

    return { data, status: response.status }
  }

}