import { FetchBase } from "fetch-base";
import { ip, protocol } from "../../../consts/api.const";
import { UserModel } from "../models/user.model";

export class UserTransport extends FetchBase<UserModel> {
  constructor() {
    super({
      protocol: protocol,
      ip: ip,
      api: "users"
    });
  }
}

export const userTransport = new UserTransport();
