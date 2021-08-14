import { Typography } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { commentService, postService, userService } from "domains";
import { useEffect, useState } from "react";
import { PostEditSidebar } from "../../modules/post/components/post-edit-sidebar/post-edit-sidebar.component";
import { PostList } from "../../modules/post/components/post-list.component";

export const PostsPage = () => {
  const [isLoaded, setLoaded] = useState(false);

  useEffect(() => {
    const promises = [
      postService.fetchPosts(),
      userService.fetchUsers(),
      commentService.fetchComments()
    ];
    Promise.all(promises).then(() => setLoaded(true));
  }, []);

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
