import React, { createContext, ReactNode } from "react";
import { CommentService } from "../../domains/comment/services/comment.service";
import { userService, postService, commentService } from "../../domains/index";
import { PostService } from "../../domains/post/services/post.service";
import { UserService } from "../../domains/user/services/user.service";
import { PostEditService, postEditService } from "../../modules/post/domains/services/post-edit.service";
import { TServices } from "./root-services.type";

export const rootServices: {
  postService: PostService,
  userSerivce: UserService,
  commentService: CommentService,
  postEditService: PostEditService
} = {
  postService: postService,
  userSerivce: userService,
  commentService: commentService,
  postEditService: postEditService
};

export const ServiceContext = createContext<TServices>(rootServices);
ServiceContext.displayName = "ServiceContext";

export function RootServiceProvider({ children }: { children: ReactNode }) {
  return (
    <ServiceContext.Provider value={rootServices}>
      {children}
    </ServiceContext.Provider>
  );
}
