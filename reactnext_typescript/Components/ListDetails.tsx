import * as React from "react";
import { Post } from "../interfaces";
import Link from "next/link";

type ListDetailsProps = {
  item: Post;
};

const ListDetails = ({ item: post }: ListDetailsProps) => (
  <>
    <div className="cardDetail">
      <div className="container">
        <p>ID: {post.id}</p>
        <h4>Description : {post.description}</h4>
      </div>
    </div>
    <div>
      <p>
        <Link href="/post/postlist">
          <a style={{ textDecoration: "underline" }}>Go to list page</a>
        </Link>
      </p>
    </div>
  </>
);
export default ListDetails;
