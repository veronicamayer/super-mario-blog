import React from "react";
import { Link } from "react-router-dom";
import "./SinglePost.scss";

const SinglePost = ({ post }) => {
    return (
        <Link to={`/details/${post.title}`} key={post.title}>
            <img src={`http://localhost:7777/${post.image}`}></img>
            <div>
                <p>
                    by: {post.username} ({post.email})
                </p>
                <h1>{post.title}</h1>
                <p>{post.message}</p>
            </div>
        </Link>
    );
};

export default SinglePost;
