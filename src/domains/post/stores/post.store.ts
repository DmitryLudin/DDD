import { TStatus } from "../../../types/base-status.type";
import { BaseStore } from "../../base/base.store";
import { PostModel } from "../models/post.model";

type TPostStoreState = {
  postIds: Array<number>;
  posts: {
    [key: number]: PostModel;
  };
  status: TStatus;
  error?: Error;
};

const initialPostStoreState: TPostStoreState = {
  postIds: [],
  posts: {},
  status: {
    isLoaded: false,
    isFetching: false,
    isFailure: false
  }
};

export class PostStore extends BaseStore<TPostStoreState> {
  getPost(postId: number) {
    return this._state.posts[postId];
  }

  updatePost(postId: number, value: PostModel) {
    this._state.posts[postId] = value;
  }
}

export const postStore = new PostStore(initialPostStoreState);
