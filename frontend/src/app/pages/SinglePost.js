import React from "react";
import { useParams } from "react-router-dom";

const SinglePost = () => {
  let { id } = useParams();
  return <div>SinglePost with id {id} </div>;
};

export default SinglePost;
