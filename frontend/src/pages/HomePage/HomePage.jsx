import { useEffect, useState } from "react";
import "./HomePage.scss";

import Header from "../../components/Header/Header";
import SinglePost from "../../components/SinglePost/SinglePost";

const HomePage = () => {
    const [posts, setPosts] = useState();

    useEffect(() => {
        fetch("http://localhost:7777/api/getPosts")
            .then((res) => res.json())
            .then((data) => setPosts(data));
    }, []);

    if (!posts) return;

    console.log(posts);

    return (
        <section id="home">
            <Header />
            <div id="allPosts">
                {posts.map((post) => (
                    <div className="singlePost">
                        <SinglePost post={post} />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default HomePage;
