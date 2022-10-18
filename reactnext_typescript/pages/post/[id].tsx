import { GetStaticProps, GetStaticPaths } from "next";
import ListDetails from "../../Components/ListDetails";
import { Post } from "../../interfaces";
import { postDataList } from "../../utils/post-data";

type Props = {
  item?: Post;
  errors?: string;
};

const PostDetails = ({ item, errors }: Props) => {
  return <ListDetails item={item} />;
};

export default PostDetails;

export const getStaticPaths: GetStaticPaths = async () => {
  // path we want to pre-render based on users
  const paths = postDataList.map((d) => ({
    params: { id: d.id.toString() },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const id = params?.id;
    const item = postDataList.find((data) => data.id === Number(id));
    return {
      props: { item },
    };
  } catch (err: any) {
    return { props: { errors: err.message } };
  }
};
