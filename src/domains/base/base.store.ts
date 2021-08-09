import { makeObservable, observable, action } from "mobx";

export abstract class BaseStore<T> {
  @observable
  protected _state: T;

  constructor(initialState: T) {
    this._state = initialState;

    makeObservable(this);
  }

  @action
  updateStore<K extends keyof T>(key: K, value: T[K]) {
    this._state[key] = value;
  }

  getStoreValue<K extends keyof T>(key: K): T[K] {
    return this._state[key];
  }
}
