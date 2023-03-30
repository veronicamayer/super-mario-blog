import express from "express";
import { appendFile, readFile, writeFile } from "./helper.js";
import cors from "cors";
import multer from "multer";

const PORT = 7777;
const app = express();
const upload = multer({
    dest: "./images",
    limits: { fileSize: 2000000 },
});

function theBouncer(req, file, cb) {
    console.log(file);
}

app.use(cors({ origin: "http://localhost:5176" }));

app.use("/images", express.static("./images"));

app.get("/api/getPosts", (req, res) => {
    readFile()
        .then((data) => res.json(data))
        .catch((err) => console.log(err));
});

app.post("/api/addPost", upload.single("postImage"), (req, res) => {
    const data = req.body;
    data.image = req.file.path;
    console.log(req.files);
    appendFile(data)
        .then((newData) => res.json(newData))
        .catch((err) => console.log(err));
});

app.listen(PORT, () => console.log("Server läuft auf PORT" + PORT));
