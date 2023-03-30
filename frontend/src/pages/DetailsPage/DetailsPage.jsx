import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import "./DetailsPage.scss";

import Header from "../../components/Header/Header";
import SinglePost from "../../components/SinglePost/SinglePost";

const DetailsPage = () => {
    const params = useParams();

    const [post, setPost] = useState();

    useEffect(() => {
        fetch("http://localhost:7777/api/getPosts")
            .then((res) => res.json())
            .then((data) => {
                const filteredPost = data.find(
                    (post) => post.title === params.title
                );
                setPost(filteredPost);
            });
    }, [params.title]);

    console.log(post);

    if (!post) return;

    return (
        <section id="detailPage">
            <Header />
            <article id="detailPageItem">
                <SinglePost post={post} />
                <Link to={"/"} id="backHome">
                    🏠 back home
                </Link>
            </article>
        </section>
    );
};

export default DetailsPage;
