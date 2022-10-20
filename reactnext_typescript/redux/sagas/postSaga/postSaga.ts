import axios, { AxiosResponse } from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { IPost } from "../../../models/IPost";
import {
  fetchPostDataFailure,
  fetchPostDataSuccess,
} from "../../actions/postAction/postAction";
import {
  FETCH_POST_FAILURE,
  FETCH_POST_REQUEST,
  FETCH_POST_SUCCESS,
} from "../../actionType/postTypes";

const getPosts = () =>
  axios.get<IPost[]>("https://jsonplaceholder.typicode.com/todos");

function* fetchPostsSaga() {
  try {
    // const response = yield call(getPosts);
    const { status, data }: AxiosResponse<IPost[]> = yield call(
      axios.get,
      "https://jsonplaceholder.typicode.com/todos"
    );
    yield put(fetchPostDataSuccess({ posts: data }));
  } catch (err) {
    yield put(
      fetchPostDataFailure({
        error: err.message,
      })
    );
  }
}

function* postsSaga(): Generator {
  yield all([takeLatest(FETCH_POST_REQUEST, fetchPostsSaga)]);
}

export default postsSaga;
