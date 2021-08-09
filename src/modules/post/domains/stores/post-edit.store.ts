import { BaseStore } from "../../../../domains/base/base.store";
import { PostModel } from "../.././../../domains/post/models/post.model";
import {
  TPostEditFormKeys,
  TPostEditFormState
} from "../../types/post-edit.type";

type TPostEditStoreState = {
  isDisplayed: boolean;
  selectedPost: PostModel | null;
  form: TPostEditFormState;
};

const initialPostEditStoreState: TPostEditStoreState = {
  isDisplayed: false,
  selectedPost: null,
  form: {
    title: "",
    body: ""
  }
};

export class PostEditStore extends BaseStore<TPostEditStoreState> {
  updateForm<T extends TPostEditFormKeys>(
    formFieldKey: T,
    formFieldValue: TPostEditFormState[T]
  ) {
    this._state.form[formFieldKey] = formFieldValue;
  }
}

export const postEditStore = new PostEditStore(initialPostEditStoreState);
