import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  ListItem,
  Divider,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography
} from "@material-ui/core";
import { CommentModel } from "../../domains/comment/models/comment.model";

const useStyles = makeStyles(() => ({
  fonts: {
    fontWeight: "bold"
  },
  inline: {
    display: "inline"
  }
}));

export const Comment = React.memo((props: CommentModel) => {
  const classes = useStyles();
  return (
    <>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="avatar" />
        </ListItemAvatar>
        <ListItemText
          primary={
            <Typography className={classes.fonts}>{props.name}</Typography>
          }
          secondary={
            <>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                {props.email}
              </Typography>
              {` - ${props.body}`}
            </>
          }
        />
      </ListItem>
      <Divider />
    </>
  );
});
