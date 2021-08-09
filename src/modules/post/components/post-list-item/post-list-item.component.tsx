import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import React, { memo } from "react";
import { PostHeader } from "./post-header.component";
import { PostContent } from "./post-content.component";
import { PostFooter } from "./post-footer.component";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345
  }
}));

export const PostListItem = memo(({ postId }: { postId: number }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <PostHeader postId={postId} />
      <PostContent postId={postId} />
      <PostFooter postId={postId} />
    </Card>
  );
});
