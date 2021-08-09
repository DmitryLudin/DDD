import { PostModel } from "../../../../domains/post/models/post.model";
import { TServices } from "../../../../providers/root-services/root-services.type";
import { TPostEditFormKeys } from "../../types/post-edit.type";

export const getPostEditService = (services: TServices) =>
  services.postEditService;

export const getPostEditStore = (services: TServices) =>
  getPostEditService(services).store;

export const getSelectedPost = (services: TServices) =>
  getPostEditStore(services).getStoreValue("selectedPost");

export const getSelectedPostValue = <T extends keyof PostModel>(key: T) => (
  services: TServices
) => {
  const post = getSelectedPost(services);

  if (post) return post[key];
};

export const getIsDisplayedPostEditing = (services: TServices) =>
  getPostEditStore(services).getStoreValue("isDisplayed");

export const getFormFieldValueByFieldName = <T extends TPostEditFormKeys>(
  fieldName: T
) => (services: TServices) =>
  getPostEditStore(services).getStoreValue("form")[fieldName];
