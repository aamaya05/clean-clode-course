import posts from '../data/local-database.json';
import { Post } from './05-dependency-b';
import { HttpClient } from './03-open-close-c';

abstract class PostProvider {

  abstract getPosts(): Promise<Post[]>
}

export class LocalDataBaseService implements PostProvider {

  async getPosts() {
      return [
          {
              'userId': 1,
              'id': 1,
              'title': 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
              'body': 'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto'
          },
          {
              'userId': 1,
              'id': 2,
              'title': 'qui est esse',
              'body': 'est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla'
          }]
  }

}

export class JsonDatabaseService implements PostProvider {

  async getPosts() {
    return posts
  }
}

export class WebApiPostService implements PostProvider {

  constructor( private httpClient: HttpAdapter) {}

  async getPosts(): Promise<Post[]> {
    const data = await this.httpClient.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
    
    return data
  }

}


// We can do a HttpClient interface that works as adapter and then have the fetchClient that implements the HttpClientInterface

interface HttpAdapter {
  get<T>( url: string): Promise<T>;
}

export class FetchClientAdapter implements HttpAdapter {

  
  async get<T>(url: string): Promise<T> {

    const response = await fetch(url)
    const data: T = await response.json()

    return data
  }

}