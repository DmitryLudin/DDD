import { userStore, UserStore } from "../stores/user.store";
import { UserModel } from "../models/user.model";
import { userTransport, UserTransport } from "../transports/user.transport";

export class UserService {
  store: UserStore;
  transport: UserTransport;

  constructor(store: UserStore, transport: UserTransport) {
    this.store = store;
    this.transport = transport;
  }

  async fetchUsers() {
    try {
      const users: UserModel[] = await this.transport.get();
      this.store.updateStore("users", users);
    } catch (error) {
      this.store.updateStore("error", error);
    }
  }
}

export const userService = new UserService(userStore, userTransport);
