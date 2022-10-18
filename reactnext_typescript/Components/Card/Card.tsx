import React from "react";
import styles from "./card.module.css";
import { Post } from "../../interfaces";
import Link from "next/link";

type Props = {
  items: Post[];
};

const Card = ({ items }: Props) => {
  return (
    <div>
      {items.map((d) => {
        return (
          <div className={styles.card} key={d.id}>
            <img
              src="https://www.w3schools.com/howto/img_avatar.png"
              alt="Avatar"
              style={{ width: "100%", height: "100%" }}
            />
            <div className={styles.container}>
              <p> ID: {d.id}</p>
              <Link href="/post/[id]" as={`/post/${d.id}`}>
                <a style={{ textDecoration: "underline" }}>{d.name}</a>
              </Link>
              <p>Description: {d.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
