import { PostModel } from "../models/post.model";
import { postStore, PostStore } from "../stores/post.store";
import { PostTransport, postTransport } from "../transport/post.transport";

export class PostService {
  store: PostStore;
  transport: PostTransport;

  constructor(store: PostStore, transport: PostTransport) {
    this.store = store;
    this.transport = transport;
  }

  async fetchPosts() {
    try {
      const posts: PostModel[] = await this.transport.get();
      this.store.updateStore(
        "postIds",
        posts.map((post) => post.id)
      );
      this.store.updateStore(
        "posts",
        posts.reduce((prev, current) => {
          return {
            ...prev,
            [current.id]: current
          };
        }, {})
      );
    } catch (error) {
      this.store.updateStore("error", error);
    }
  }

  async updatePost(newPostInfo: PostModel) {
    try {
      this.store.updatePost(newPostInfo.id, newPostInfo);
      await this.transport.put(newPostInfo);
    } catch (error) {}
  }
}

export const postService = new PostService(postStore, postTransport);
