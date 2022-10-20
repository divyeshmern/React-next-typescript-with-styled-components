import { IPost } from "../../models/IPost";
import {
  FETCH_POST_FAILURE,
  FETCH_POST_REQUEST,
  FETCH_POST_SUCCESS,
} from "../actionType/postTypes";

export interface PostState {
  pending: boolean;
  posts: IPost[];
  error: string | null;
}

export interface FetchPostSuccessPayload {
  posts: IPost[];
}

export interface FetchPostFailurePayload {
  error: string;
}

export interface FetchPostRequest {
  type: typeof FETCH_POST_REQUEST;
}

export type FetchPostSuccess = {
  type: typeof FETCH_POST_SUCCESS;
  payload: FetchPostSuccessPayload;
};

export type FetchPostFailure = {
  type: typeof FETCH_POST_FAILURE;
  payload: FetchPostFailurePayload;
};

export type PostsActions =
  | FetchPostRequest
  | FetchPostSuccess
  | FetchPostFailure;
