import {
  FETCH_POST_FAILURE,
  FETCH_POST_REQUEST,
  FETCH_POST_SUCCESS,
} from "../../actionType/postTypes";
import {
  FetchPostRequest,
  FetchPostSuccess,
  FetchPostFailure,
  FetchPostSuccessPayload,
  FetchPostFailurePayload,
} from "../../type/postType";

export const fetchPostDataRequest = (): FetchPostRequest => ({
  type: FETCH_POST_REQUEST,
});

export const fetchPostDataSuccess = (
  payload: FetchPostSuccessPayload
): FetchPostSuccess => ({
  type: FETCH_POST_SUCCESS,
  payload,
});

export const fetchPostDataFailure = (
  payload: FetchPostFailurePayload
): FetchPostFailure => ({
  type: FETCH_POST_FAILURE,
  payload,
});
