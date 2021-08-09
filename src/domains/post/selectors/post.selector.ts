import { TServices } from "../../../providers/root-services/root-services.type";
import { PostModel } from "../models/post.model";

export const getPostService = (services: TServices) => services.postService;

export const getPostStore = (services: TServices) =>
  getPostService(services).store;

export const getPosts = (services: TServices) =>
  getPostStore(services).getStoreValue("posts");

export const getPostById = (postId: number) => (services: TServices) =>
  getPostStore(services).getPost(postId);

export const getPostIds = (services: TServices) =>
  getPostStore(services).getStoreValue("postIds");

export const getPostFieldByName = <T extends keyof PostModel>(
  postId: number,
  fieldName: T
) => (services: TServices): PostModel[T] =>
  getPostById(postId)(services)[fieldName];
