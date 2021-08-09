import { Typography } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import React, { useEffect, useState } from "react";
import { getCommentService } from "../../domains/comment/selectors/comment.selector";
import { getPostService } from "../../domains/post/selectors/post.selector";
import { getUserService } from "../../domains/user/selectors/user.selector";
import { useServiceSelector } from "../../hooks/index";
import { PostEditSidebar } from "../../modules/post/components/post-edit-sidebar/post-edit-sidebar.component";
import { PostList } from "../../modules/post/components/post-list.component";

export const PostsPage = () => {
  const [isLoaded, setLoaded] = useState(false);
  const postService = useServiceSelector(getPostService);
  const userService = useServiceSelector(getUserService);
  const commentService = useServiceSelector(getCommentService);

  useEffect(() => {
    const promises = [
      postService.fetchPosts(),
      userService.fetchUsers(),
      commentService.fetchComments()
    ];
    Promise.all(promises).then(() => setLoaded(true));
  }, [postService, userService, commentService]);

  return (
    <Container>
      <PostEditSidebar />
      <Grid direction="column" alignItems="center" container spacing={4}>
        <Grid item>
          <Typography variant="h3" component="h3">
            Posts
          </Typography>
        </Grid>
        <Grid item>
          {!isLoaded && <CircularProgress color="secondary" />}
          {isLoaded && <PostList />}
        </Grid>
      </Grid>
    </Container>
  );
};
