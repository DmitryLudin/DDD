import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { observer } from "mobx-react-lite";
import React from "react";
import { useServiceSelector } from "../../../../../hooks/index";
import {
  getPostEditService,
  getSelectedPostValue
} from "../../../domains/selectors/post-edit.selector";
import { PostEditFormInput } from "./post-edit-form-input";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 400
    }
  }
}));

export const PostEditForm = observer(() => {
  const classes = useStyles();
  const postEditService = useServiceSelector(getPostEditService);
  const postId = useServiceSelector(getSelectedPostValue("id"));

  const handleSavePost = () => postEditService.handleSaveForm();

  return (
    <Grid spacing={2} alignItems="center" direction="column" container>
      <Grid item>
        <Typography variant="h5" component="h5">
          Edit post #{postId}
        </Typography>
      </Grid>
      <Grid className={classes.root} item>
        <PostEditFormInput fieldName="title" />
      </Grid>
      <Grid className={classes.root} item>
        <PostEditFormInput fieldName="body" />
      </Grid>
      <Grid item>
        <Button onClick={handleSavePost} variant="contained" color="primary">
          Save
        </Button>
      </Grid>
    </Grid>
  );
});
