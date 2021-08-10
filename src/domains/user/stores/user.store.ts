import { BaseStore } from "../../base/base.store";
import { UserModel } from "../models/user.model";

type TUserStoreState = {
  users: Array<UserModel>;
  error?: Error;
};

const initialUserStoreState: TUserStoreState = {
  users: []
};

export class UserStore extends BaseStore<TUserStoreState> {
  getUserById(userId: number) {
    return this.state.users.find((user) => user.id === userId);
  }
}

export const userStore = new UserStore(initialUserStoreState);
