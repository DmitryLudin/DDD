import Avatar from "@material-ui/core/Avatar";
import CardHeader from "@material-ui/core/CardHeader";
import { red } from "@material-ui/core/colors";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import EditIcon from "@material-ui/icons/Edit";
import { observer } from "mobx-react-lite";
import React, { useCallback } from "react";
import { getPostFieldByName } from "../../../../domains/post/selectors/post.selector";
import { UserModel } from "../../../../domains/user/models/user.model";
import { getUserById } from "../../../../domains/user/selectors/user.selector";
import { useServiceSelector } from "../../../../hooks/index";
import { getPostEditService } from "../../domains/selectors/post-edit.selector";
import { getInitialsOfName } from "../../utils/get-initials-of-name";

const useStyles = makeStyles((theme) => ({
  avatar: {
    backgroundColor: red[500]
  }
}));

type TPostHeaderProps = {
  postId: number;
};

export const PostHeader = observer(({ postId }: TPostHeaderProps) => {
  const classes = useStyles();
  const postTitle = useServiceSelector(getPostFieldByName(postId, "title"));
  const userId = useServiceSelector(getPostFieldByName(postId, "userId"));
  const user = useServiceSelector(getUserById(userId)) as UserModel;
  const postEditService = useServiceSelector(getPostEditService);

  const toggleDrawer = useCallback(() => {
    postEditService.selectPost(postId);
    postEditService.toggleDisplayOfPostEditing();
  }, [postEditService, postId]);

  return (
    <CardHeader
      avatar={
        <Avatar aria-label="recipe" className={classes.avatar}>
          {user && getInitialsOfName(user.name)}
        </Avatar>
      }
      action={
        <IconButton onClick={toggleDrawer} aria-label="settings">
          <EditIcon />
        </IconButton>
      }
      title={postTitle}
      subheader={user.email}
    />
  );
});
