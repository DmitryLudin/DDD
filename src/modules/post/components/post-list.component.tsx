import { Grid } from "@material-ui/core";
import { observer } from "mobx-react-lite";
import React from "react";
import { getPostIds } from "../../../domains/post/selectors/post.selector";
import { useServiceSelector } from "../../../hooks/index";
import { PostListItem } from "./post-list-item/post-list-item.component";

export const PostList = observer(() => {
  const postIds = useServiceSelector(getPostIds);

  return (
    <Grid
      direction="row"
      justifyContent="center"
      alignItems="stretch"
      container
      spacing={4}
    >
      {postIds.map((postId: number) => (
        <Grid item key={postId}>
          <PostListItem postId={postId} />
        </Grid>
      ))}
    </Grid>
  );
});
