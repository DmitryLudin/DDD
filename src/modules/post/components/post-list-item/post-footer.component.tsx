import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import CommentIcon from "@material-ui/icons/Comment";
import { observer } from "mobx-react-lite";
import React from "react";
import { getNumberOfCommentsOnPost } from "../../../../domains/comment/selectors/comment.selector";
import { useServiceSelector } from "../../../../hooks/index";

type TPostFooterProps = {
  postId: number;
};

export const PostFooter = observer(({ postId }: TPostFooterProps) => {
  const commentsLength = useServiceSelector(getNumberOfCommentsOnPost(postId));

  return (
    <CardActions disableSpacing>
      <Button color="secondary" startIcon={<CommentIcon />}>
        {commentsLength}
      </Button>
    </CardActions>
  );
});
