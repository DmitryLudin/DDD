import { createContext, ReactNode } from "react";
import { userService, postService, commentService } from "../../domains/index";
import { postEditService } from "../../modules/post/domains/services/post-edit.service";
import { TServices } from "./root-services.type";

export const rootServices = {
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
