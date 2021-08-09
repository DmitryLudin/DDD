import { Divider, Drawer, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { observer } from "mobx-react-lite";
import React from "react";
import { useServiceSelector } from "../../../../hooks/index";
import {
  getIsDisplayedPostEditing,
  getPostEditService
} from "../../domains/selectors/post-edit.selector";
import { PostEditForm } from "./post-edit-form/post-edit-form.component";
import { PostSidebarComments } from "./post-sidebar-comments/post-sidebar-comments";

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: 540,
    flexShrink: 0
  },
  divider: {
    width: "100%"
  }
}));

export const PostEditSidebar = observer(() => {
  const classes = useStyles();
  const postEditService = useServiceSelector(getPostEditService);
  const isDisplayed = useServiceSelector(getIsDisplayedPostEditing);

  const handleClose = () => {
    postEditService.toggleDisplayOfPostEditing();
  };

  return (
    <Drawer
      className={classes.drawer}
      classes={{
        paper: classes.drawer
      }}
      onClose={handleClose}
      open={isDisplayed}
      anchor="right"
    >
      <Grid
        direction="column"
        justifyContent="center"
        alignItems="center"
        container
        spacing={4}
      >
        <Grid item>
          <PostEditForm />
        </Grid>
        <Grid className={classes.divider} item>
          <Divider className={classes.divider} />
        </Grid>
        <Grid item>
          <PostSidebarComments />
        </Grid>
      </Grid>
    </Drawer>
  );
});
