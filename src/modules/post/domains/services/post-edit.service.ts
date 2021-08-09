import {
  PostService,
  postService
} from "../../../../domains/post/services/post.service";
import {
  TPostEditFormKeys,
  TPostEditFormState
} from "../../types/post-edit.type";
import { PostEditStore, postEditStore } from "../stores/post-edit.store";

class PostEditService {
  store: PostEditStore;
  private postService: PostService;

  constructor(store: PostEditStore, postService: PostService) {
    this.store = store;
    this.postService = postService;
  }

  selectPost(postId: number) {
    const post = this.postService.store.getPost(postId);
    this.store.updateStore("selectedPost", post);
    this.store.updateStore("form", {
      title: post.title,
      body: post.body
    });
  }

  toggleDisplayOfPostEditing() {
    this.store.updateStore(
      "isDisplayed",
      !this.store.getStoreValue("isDisplayed")
    );
  }

  handleChangeForm<T extends TPostEditFormKeys>(
    formFieldKey: T,
    formFieldValue: TPostEditFormState[T]
  ) {
    this.store.updateForm(formFieldKey, formFieldValue);
  }

  handleSaveForm() {
    const postInfo = this.store.getStoreValue("selectedPost");
    const newPostInfo = this.store.getStoreValue("form");

    if (newPostInfo && postInfo)
      this.postService.updatePost({ ...postInfo, ...newPostInfo });
  }
}

export const postEditService = new PostEditService(postEditStore, postService);
