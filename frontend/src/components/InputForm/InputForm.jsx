import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./InputForm.scss";

const MAX_SIZE = 200000;
const InputForm = ({ setPosts }) => {
    const navigate = useNavigate();

    const [sizeError, setSizeError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        if (!sizeError) {
            fetch("http://localhost:7777/api/addPost", {
                method: "POST",
                body: formData,
            })
                .then((res) => res.json())
                .then((data) => {
                    setPosts(data);
                    console.log(data);
                    navigate("/");
                });
        }
    };
    const checkSize = (event) => {
        console.log(event.target.files[0].size);
        if (event.target.files[0].size > MAX_SIZE) {
            setSizeError(true);
        } else {
            setSizeError(false);
        }
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        name="username"
                        type="text"
                        placeholder="username"
                    ></input>
                    <input
                        name="email"
                        type="email"
                        placeholder="email"
                    ></input>
                </div>
                <input name="title" type="text" placeholder="title"></input>
                <textarea
                    name="message"
                    type="text"
                    placeholder="message"
                    rows="10"
                ></textarea>
                <input
                    name="postImage"
                    type="file"
                    onChange={checkSize}
                ></input>
                {sizeError && (
                    <div id="warning">Dein Bild ist viel zu groß...</div>
                )}

                <button type="submit" disabled={sizeError}>
                    Add Post
                </button>
            </form>
        </div>
    );
};

export default InputForm;
