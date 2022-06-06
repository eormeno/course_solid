import { PostService } from './05-dependency-b';
import { AxiosAPIService, JsonDatabaseService, LocalDataBaseService, WebAPIService } from './05-dependency-c';

// Main
(async () => {

    //const postProvider = new JsonDatabaseService()
    //const postProvider = new LocalDataBaseService()
    //const postProvider = new WebAPIService()
    const postProvider = new AxiosAPIService()

    const postService = new PostService(postProvider);

    const posts = await postService.getPosts();

    console.log({ posts })

})();