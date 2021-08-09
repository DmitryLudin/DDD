import { FetchBase } from "fetch-base";
import { ip, protocol } from "../../../consts/api.const";
import { CommentModel } from "../models/comment.model";

export class CommentTransport extends FetchBase<CommentModel> {
  constructor() {
    super({
      protocol: protocol,
      ip: ip,
      api: "comments"
    });
  }
}

export const commentTransport = new CommentTransport();
