import { commentStore, CommentStore } from "../stores/comment.store";
import { CommentModel } from "../models/comment.model";
import {
  commentTransport,
  CommentTransport
} from "../transports/comment.transport";

class CommentService {
  store: CommentStore;
  transport: CommentTransport;

  constructor(store: CommentStore, transport: CommentTransport) {
    this.store = store;
    this.transport = transport;
  }

  async fetchComments() {
    try {
      const comments: CommentModel[] = await this.transport.get();
      this.store.updateStore("comments", comments);
    } catch (error) {
      this.store.updateStore("error", error);
    }
  }
}

export const commentService = new CommentService(
  commentStore,
  commentTransport
);
