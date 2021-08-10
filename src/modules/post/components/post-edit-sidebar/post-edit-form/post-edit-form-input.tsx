import { observer } from "mobx-react-lite";
import TextField from "@material-ui/core/TextField";
import {
  getFormFieldValueByFieldName,
  getPostEditService
} from "../../../domains/selectors/post-edit.selector";
import { useServiceSelector } from "../../../../../hooks/index";
import React, { ChangeEvent, useCallback } from "react";
import { TPostEditFormKeys } from "../../../types/post-edit.type";

type TPostEditFormInputProps = {
  fieldName: TPostEditFormKeys;
};

export const PostEditFormInput = observer(
  ({ fieldName }: TPostEditFormInputProps) => {
    const postEditService = useServiceSelector(getPostEditService);
    const postFieldValue = useServiceSelector(
      getFormFieldValueByFieldName(fieldName)
    );

    const handleChangePost = useCallback(
      (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        postEditService.handleChangeForm(fieldName, e.currentTarget.value);
      },
      [postEditService, fieldName]
    );

    return (
      <TextField
        label="Post title"
        multiline
        rows={4}
        onChange={handleChangePost}
        defaultValue={postFieldValue}
        variant="outlined"
      />
    );
  }
);
