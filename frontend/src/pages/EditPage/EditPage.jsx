import InputForm from "../../components/InputForm/InputForm";
import "./EditPage.scss";
import { useEffect, useState } from "react";

import Header from "../../components/Header/Header";

const EditPage = () => {
    const [posts, setPosts] = useState();

    useEffect(() => {
        fetch("http://localhost:7777/api/getPosts")
            .then((res) => res.json())
            .then((data) => setPosts(data));
    }, []);

    return (
        <section>
            <Header />
            <article id="editSection">
                <h1>Add a new post:</h1>
                <InputForm setPosts={setPosts} />
            </article>
        </section>
    );
};

export default EditPage;
