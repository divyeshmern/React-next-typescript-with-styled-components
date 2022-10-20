import {
  FETCH_POST_FAILURE,
  FETCH_POST_REQUEST,
  FETCH_POST_SUCCESS,
} from "../../actionType/postTypes";
import { PostsActions, PostState } from "../../type/postType";
import { HYDRATE } from "next-redux-wrapper";

const intialState: PostState = {
  pending: false,
  posts: [],
  error: null,
};

export default (
  state = intialState,
  action: PostsActions | { type: typeof HYDRATE; payload: PostState }
) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };
    case FETCH_POST_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case FETCH_POST_SUCCESS:
      return {
        ...state,
        pending: false,
        posts: action.payload.posts,
        error: null,
      };
    case FETCH_POST_FAILURE:
      return {
        ...state,
        pending: false,
        posts: [],
        error: action.payload.error,
      };
    default:
      return {
        ...state,
      };
  }
};
