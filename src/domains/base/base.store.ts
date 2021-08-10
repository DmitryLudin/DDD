import { makeObservable, observable, action } from "mobx";

export abstract class BaseStore<T> {
  @observable protected state: T;

  constructor(initialState: T) {
    this.state = initialState;

    makeObservable(this);
  }

  @action
  updateStore<K extends keyof T>(key: K, value: T[K]) {
    this.state[key] = value;
  }

  getStoreValue<K extends keyof T>(key: K): T[K] {
    return this.state[key];
  }
}
