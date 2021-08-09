import { FetchBase } from "fetch-base";
import { ip, protocol } from "../../../consts/api.const";
import { PostModel } from "../models/post.model";

export class PostTransport extends FetchBase<PostModel> {
  constructor() {
    super({
      protocol: protocol,
      ip: ip,
      api: "posts"
    });
  }
}

export const postTransport = new PostTransport();
