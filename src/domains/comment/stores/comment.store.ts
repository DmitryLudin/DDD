import { BaseStore } from "../../base/base.store";
import { CommentModel } from "../models/comment.model";

type TCommentStoreState = {
  comments: Array<CommentModel>;
  error?: Error;
};

const initialCommentStoreState: TCommentStoreState = {
  comments: []
};

export class CommentStore extends BaseStore<TCommentStoreState> {
  getCommentsByPostId(postId: number) {
    return this._state.comments.filter((comment) => comment.postId === postId);
  }
}

export const commentStore = new CommentStore(initialCommentStoreState);
