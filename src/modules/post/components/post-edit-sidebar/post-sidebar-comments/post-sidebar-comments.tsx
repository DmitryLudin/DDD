import { Grid, List, makeStyles, Typography } from "@material-ui/core";
import { observer } from "mobx-react-lite";
import React from "react";
import { Comment } from "../../../../../components/comment/comment.component";
import { getPostComments } from "../../../../../domains/comment/selectors/comment.selector";
import { useServiceSelector } from "../../../../../hooks/index";
import { getSelectedPostValue } from "../../../domains/selectors/post-edit.selector";
import { getInitialsOfName } from "../../../utils/get-initials-of-name";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper
  }
}));

export const PostSidebarComments = observer(() => {
  const classes = useStyles();
  const postId = useServiceSelector(getSelectedPostValue("id"));

  if (!postId) return null;

  const comments = useServiceSelector(getPostComments(postId));

  return (
    <Grid spacing={2} alignItems="center" direction="column" container>
      <Grid item>
        <Typography variant="h5" component="h5">
          Comments
        </Typography>
      </Grid>
      <Grid item>
        <List className={classes.root}>
          {comments.map((comment) => (
            <Comment {...comment} />
          ))}
        </List>
      </Grid>
    </Grid>
  );
});
