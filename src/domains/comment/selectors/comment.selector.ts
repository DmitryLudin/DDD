import { TServices } from "../../../providers/root-services/root-services.type";

export const getCommentService = (services: TServices) =>
  services.commentService;

export const getCommentStore = (services: TServices) =>
  getCommentService(services).store;

export const getComments = (services: TServices) =>
  getCommentStore(services).getStoreValue("comments");

export const getPostComments = (postId: number) => (services: TServices) =>
  getCommentStore(services).getCommentsByPostId(postId);

export const getNumberOfCommentsOnPost = (postId: number) => (
  services: TServices
) => getPostComments(postId)(services).length;
