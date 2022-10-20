import React, { useEffect } from "react";
import { NextPage } from "next";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostDataRequest } from "../redux/actions/postAction/postAction";
import { RootState } from "../redux/reducer/rootReducer";
import Table from "react-bootstrap/Table";

type Props = {};

const Todos = (props: Props) => {
  const dispatch = useDispatch();
  const { pending, posts, error } = useSelector(
    (state: RootState) => state.posts
  );

  useEffect(() => {
    dispatch(fetchPostDataRequest());
     // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  return (
    <div>
      <h1>Todos List with redux-saga</h1>
      <br />
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>ID</th>
            <th>UserId</th>
            <th>Title</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((d, index) => {
            return (
              <tr key={d.id}>
                <td>{d.id}</td>
                <td>{d.userId}</td>
                <td>{d.title}</td>
                <td>{d.completed == true ? 'Yes' :'No'}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};
export default Todos;
