import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { observer } from "mobx-react-lite";
import React from "react";
import { getPostFieldByName } from "../../../../domains/post/selectors/post.selector";
import { useServiceSelector } from "../../../../hooks/index";

type TPostContentProps = {
  postId: number;
};

export const PostContent = observer(({ postId }: TPostContentProps) => {
  const postBody = useServiceSelector(getPostFieldByName(postId, "body"));

  return (
    <CardContent>
      <Typography variant="body2" color="textSecondary" component="p">
        {postBody}
      </Typography>
    </CardContent>
  );
});
