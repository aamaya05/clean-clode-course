import { PostService } from './05-dependency-b';
import { FetchClientAdapter, JsonDatabaseService, LocalDataBaseService, WebApiPostService } from './05-dependency-c';


// Main
(async () => {

    const httpClient = new FetchClientAdapter();
    //const provider = new LocalDataBaseService();
    //const provider = new JsonDatabaseService();
    const provider = new WebApiPostService( httpClient );


    const postService = new PostService( provider );

    const posts = await postService.getPosts();

    console.log({ posts })


})();